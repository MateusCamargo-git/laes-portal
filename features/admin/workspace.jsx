import React, { useState } from "react";
import { supabase } from "@laes/runtime";

const statuses = {
  em_breve: "Em breve",
  inscricoes_abertas: "Inscrições abertas",
  inscricoes_encerradas: "Inscrições encerradas",
  em_andamento: "Em andamento",
  encerrado: "Encerrado",
  cancelado: "Cancelado",
};

const tournamentFields = [
  ["category", "Categoria"], ["organizer", "Organizador"], ["platform", "Plataforma"],
  ["fee", "Taxa de inscrição"], ["prize", "Premiação"], ["external_url", "Página oficial", "url"],
  ["rules_url", "Link do regulamento", "url"], ["logo_url", "Endereço do logo"],
  ["starts_at", "Início", "datetime-local"], ["registration_deadline", "Inscrições até", "datetime-local"],
  ["rules", "Regulamento"],
];

function Field({ label, children }) {
  return <label className="lt-field"><span>{label}</span>{React.cloneElement(children, { "aria-label": label })}</label>;
}

function Feedback({ error, notice }) {
  return <>{error && <p className="lt-notice lt-error" role="alert">{error}</p>}
    {notice && <p className="lt-notice" role="status">{notice}</p>}</>;
}

function getData(result) {
  if (result.error) throw result.error;
  return result.data;
}

export async function loadModalityAccess(userId) {
  return getData(await supabase.from("modality_admins")
    .select("modality_id").eq("user_id", userId));
}

export function PeopleAccess({ load, modalities }) {
  const [query, setQuery] = useState("");
  const [person, setPerson] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const access = load(async () => getData(await supabase.from("modality_admins").select("id,user_id,modality_id,profiles(nick),modalities(name)").order("id")));
  const term = query.replace(/[%_*\\]/g, "");
  const people = load(async () => term.length < 2 ? [] : getData(await supabase.from("profiles")
    .select("id,nick").ilike("nick", `%${term}%`).order("nick").limit(20)), [term]);

  async function change(event, grant) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setNotice("");
    setError("");
    try {
      if (grant) {
        const form = new FormData(event.currentTarget);
        getData(await supabase.from("modality_admins")
          .insert({ user_id: person, modality_id: form.get("modality") }).select("id").single());
        setNotice("Acesso concedido.");
      } else {
        getData(await supabase.from("modality_admins").delete().eq("id", event.currentTarget.value).select("id").single());
        setNotice("Acesso revogado.");
      }
      await access.reload();
    } catch (failure) {
      setError(failure.code === "23505" ? "Essa pessoa já tem acesso à modalidade." : "Não foi possível atualizar o acesso. Confira a conta e tente novamente.");
    } finally {
      setBusy(false);
    }
  }

  return <section className="lt-admin-workspace">
    <div className="lt-panel">
      <h2>Pessoas e acessos</h2>
      <p className="lt-muted">Conceda a uma conta cadastrada acesso à gestão de uma modalidade. A pessoa continua usando seu próprio login.</p>
      <Feedback error={error || access.error || people.error} notice={notice} />
      <form className="lt-form" onSubmit={event => change(event, true)}>
        <div className="lt-admin-fields">
          <Field label="Buscar por nickname"><input type="search" maxLength={40} onChange={event => {setPerson(""); setQuery(event.target.value.trim());}} /></Field>
          <Field label="Conta"><select required value={person} onChange={event => setPerson(event.target.value)} disabled={people.loading}>
            <option value="">{people.loading ? "Buscando…" : "Selecione a conta"}</option>
            {people.data?.map(profile => <option key={profile.id} value={profile.id}>{profile.nick} · {profile.id.slice(0, 8)}</option>)}
          </select></Field>
          <Field label="Modalidade"><select name="modality" required><option value="">Selecione a modalidade</option>
            {modalities.map(modality => <option key={modality.id} value={modality.id}>{modality.name}</option>)}
          </select></Field>
        </div>
        {query.length >= 2 && people.data?.length === 0 && !people.loading && !people.error && <p>Não encontramos contas com esse nickname.</p>}
        <div className="lt-actions">
          <button className="lt-button" disabled={busy || !person || people.loading}>Conceder acesso</button>
          <a className="lt-link" href="mailto:?subject=Convite%20para%20a%20LAES&body=Crie%20sua%20conta%20em%20https%3A%2F%2Fligaalfenense.com.br%2Fcadastro%20e%20me%20envie%20seu%20nickname.%20Depois%20da%20libera%C3%A7%C3%A3o%2C%20acesse%20https%3A%2F%2Fligaalfenense.com.br%2Fadmin.">Convidar por e-mail</a>
        </div>
      </form>
    </div>
    <div className="lt-panel">
      <h3>Gestores por modalidade</h3>
      {access.loading && <p role="status">Carregando acessos…</p>}
      {!access.loading && access.data?.length === 0 && <p>Nenhum acesso concedido por modalidade.</p>}
      {access.data?.map(item => <div className="lt-request lt-admin-row" key={item.id}>
        <div><strong>{item.profiles?.nick || "Conta cadastrada"}</strong><p>{item.modalities?.name || "Modalidade"} · {item.user_id.slice(0, 8)}</p></div>
        <button type="button" value={item.id} className="lt-button lt-secondary" disabled={busy} onClick={event => {
          if (window.confirm(`Revogar o acesso de ${item.profiles?.nick || "esta conta"} a ${item.modalities?.name || "esta modalidade"}?`)) void change(event, false);
        }}>Revogar acesso</button>
      </div>)}
    </div>
  </section>;
}

const brasilia = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", hourCycle: "h23",
});

function dateField(value) {
  return value ? brasilia.format(new Date(value)).replace(" ", "T") : "";
}

function tournamentPayload(form, record, published) {
  const payload = {
    name: form.get("name").trim(),
    modality_id: form.get("modality_id"),
    is_laes: form.get("organization") === "laes",
    status: form.get("status"),
    until_full: form.has("until_full"),
    published,
  };
  for (const [key, , type] of tournamentFields) {
    const value = form.get(key).trim();
    if (type === "datetime-local") {
      payload[key] = record?.[key] && dateField(record[key]) === value ? record[key] : value ? `${value}:00-03:00` : null;
    } else {
      payload[key] = value || null;
    }
  }
  return payload;
}

function TournamentForm({ record, modalities, onSaved, onCancel }) {
  const [preview, setPreview] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function save(payload) {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const request = record?.id
        ? supabase.from("tournaments").update(payload).eq("id", record.id).eq("modality_id", record.modality_id)
        : supabase.from("tournaments").insert(payload);
      getData(await request.select("id").single());
      await onSaved(payload.published ? "Campeonato publicado." : "Rascunho salvo.");
    } catch {
      setError("Não foi possível salvar. Confira seus dados e se você ainda tem acesso à modalidade.");
    } finally {
      setBusy(false);
    }
  }

  function submit(event) {
    event.preventDefault();
    const action = event.nativeEvent.submitter?.value || "preview";
    const payload = tournamentPayload(new FormData(event.currentTarget), record, action === "save" && !!record?.published);
    if (!payload.name) {
      setError("Informe o nome do campeonato.");
      return;
    }
    const webLinks = [payload.external_url, payload.rules_url];
    if (webLinks.some(url => url && !/^https?:\/\//i.test(url)) ||
        (payload.logo_url && !/^(https?:\/\/|\/(?![\/\\]))/i.test(payload.logo_url))) {
      setError("Use endereços HTTP ou HTTPS. Para o logo, você também pode usar um caminho local.");
      return;
    }
    if (action === "preview") {
      setPreview(payload);
      setError("");
      return;
    }
    if (action === "draft" && record?.published && !window.confirm("Retirar este campeonato da agenda pública?")) return;
    void save(payload);
  }

  return <div className="lt-panel">
    <h3>{record ? "Editar campeonato" : "Novo campeonato"}</h3>
    <Feedback error={error} />
    <form className="lt-form" onSubmit={submit} hidden={!!preview}>
      <fieldset disabled={busy} className="lt-admin-fields">
        <Field label="Nome do campeonato"><input name="name" required maxLength={120} defaultValue={record?.name} /></Field>
        <Field label="Modalidade"><select name="modality_id" required defaultValue={record?.modality_id || ""}>
          <option value="">Selecione a modalidade</option>
          {modalities.map(modality => <option key={modality.id} value={modality.id}>{modality.name}</option>)}
        </select></Field>
        <Field label="Organização"><select name="organization" defaultValue={record?.is_laes ? "laes" : "external"}>
          <option value="external">Evento externo</option><option value="laes">Organizado pela LAES</option>
        </select></Field>
        <Field label="Situação"><select name="status" defaultValue={record?.status || "em_breve"}>
          {Object.entries(statuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select></Field>
        {tournamentFields.map(([key, label, type]) => <Field key={key} label={type === "datetime-local" ? `${label} (horário de Brasília)` : label}>
          {key === "rules" ? <textarea name={key} rows={4} defaultValue={record?.[key]} /> :
            <input name={key} type={type || "text"} defaultValue={type === "datetime-local" ? dateField(record?.[key]) : record?.[key]} />}
        </Field>)}
        <label className="lt-check"><input name="until_full" type="checkbox" defaultChecked={record?.until_full} />Até as vagas esgotarem</label>
      </fieldset>
      <div className="lt-actions">
        <button className="lt-button" value="preview" disabled={busy}>Prévia</button>
        {record?.published && <button className="lt-button lt-secondary" value="draft" disabled={busy}>Retirar da agenda</button>}
        <button className="lt-button lt-secondary" value="save" disabled={busy}>{record?.published ? "Salvar alterações" : "Salvar rascunho"}</button>
        <button type="button" className="lt-button lt-secondary" disabled={busy} onClick={onCancel}>Cancelar</button>
      </div>
    </form>
    {preview && <section className="lt-request lt-admin-preview" aria-label="Prévia do campeonato">
      <p className="lt-eyebrow">Prévia do campeonato</p>
      <h4>{preview.name}</h4>
      <p>{modalities.find(modality => modality.id === preview.modality_id)?.name} · {preview.is_laes ? "Organizado pela LAES" : "Evento externo"} · {statuses[preview.status]}</p>
      {preview.starts_at && <p>Início em {brasilia.format(new Date(preview.starts_at))} (Brasília)</p>}
      {preview.registration_deadline && <p>Inscrições até {brasilia.format(new Date(preview.registration_deadline))} (Brasília)</p>}
      {preview.logo_url && <img src={preview.logo_url} alt="" width="96" height="96" />}
      {[["organizer", "Organizador"], ["platform", "Plataforma"], ["category", "Categoria"], ["fee", "Taxa"], ["prize", "Premiação"]].map(([key, label]) =>
        preview[key] && <p key={key}><strong>{label}</strong> · {preview[key]}</p>)}
      {preview.until_full && <p>Inscrições até as vagas esgotarem.</p>}
      {preview.rules && <p>{preview.rules}</p>}
      {preview.rules_url && <a className="lt-link" href={preview.rules_url} target="_blank" rel="noreferrer">Regulamento</a>}
      {preview.external_url && <a className="lt-link" href={preview.external_url} target="_blank" rel="noreferrer">Página oficial</a>}
      <div className="lt-actions">
        <button className="lt-button" disabled={busy} onClick={() => save({ ...preview, published: true })}>{busy ? "Salvando…" : record?.published ? "Publicar alterações" : "Publicar na agenda"}</button>
        <button className="lt-button lt-secondary" disabled={busy} onClick={() => setPreview(null)}>Voltar para edição</button>
      </div>
    </section>}
  </div>;
}

export function TournamentWorkspace({ load, modalities }) {
  const [filter, setFilter] = useState("");
  const [visibility, setVisibility] = useState("");
  const [editing, setEditing] = useState(null);
  const [notice, setNotice] = useState("");
  const [page, setPage] = useState(0);
  const ids = modalities.map(modality => modality.id);
  const events = load(async () => {
    if (!ids.length) return [];
    let query = supabase.from("tournaments").select("*").in("modality_id", filter ? [filter] : ids);
    if (visibility) query = query.eq("published", visibility === "published");
    return getData(await query.order("starts_at", { ascending: false, nullsFirst: false }).order("id").range(page * 20, page * 20 + 20));
  }, [ids.join(","), filter, visibility, page]);

  return <section className="lt-admin-workspace">
    <div className="lt-panel">
      <div className="lt-admin-row"><div><h2>Campeonatos</h2><p className="lt-muted">Gerencie seus eventos e a agenda pública da Liga.</p></div>
        <button className="lt-button" type="button" disabled={!!editing || !ids.length} onClick={() => {setNotice(""); setEditing({});}}>Novo campeonato</button>
      </div>
      <Feedback error={events.error} notice={notice} />
      <div className="lt-admin-fields">
        <Field label="Filtrar por modalidade"><select value={filter} onChange={event => {setFilter(event.target.value); setPage(0);}}>
          <option value="">Todas as modalidades do seu acesso</option>
          {modalities.map(modality => <option value={modality.id} key={modality.id}>{modality.name}</option>)}
        </select></Field>
        <Field label="Visibilidade"><select value={visibility} onChange={event => {setVisibility(event.target.value); setPage(0);}}>
          <option value="">Todas</option><option value="draft">Rascunhos</option><option value="published">Publicados</option>
        </select></Field>
      </div>
    </div>
    {editing && <TournamentForm key={editing.id || "new"} record={editing.id ? editing : null} modalities={modalities}
      onCancel={() => setEditing(null)} onSaved={async message => {setEditing(null); setNotice(message); await events.reload();}} />}
    <div className="lt-panel">
      {events.loading && <p role="status">Carregando campeonatos…</p>}
      {!events.loading && events.data?.length === 0 && <p>Nenhum campeonato encontrado.</p>}
      {events.data?.slice(0, 20).map(record => <div className="lt-request lt-admin-row" key={record.id}>
        <div><h3>{record.name}</h3><p>{record.published ? "Publicado" : "Rascunho"} · {statuses[record.status]} · {record.is_laes ? "LAES" : "Evento externo"}</p></div>
        <div className="lt-actions">
          {record.published && <a className="lt-link" href={`/campeonatos/${record.id}`}>Ver página</a>}
          <button className="lt-button lt-secondary" type="button" disabled={!!editing} onClick={() => {setNotice(""); setEditing(record);}}>Editar</button>
        </div>
      </div>)}
      <div className="lt-actions">
        <button className="lt-button lt-secondary" type="button" disabled={!page || events.loading} onClick={() => setPage(page - 1)}>Anterior</button>
        <span>Página {page + 1}</span>
        <button className="lt-button lt-secondary" type="button" disabled={events.loading || (events.data?.length || 0) < 21} onClick={() => setPage(page + 1)}>Próxima</button>
      </div>
    </div>
  </section>;
}
