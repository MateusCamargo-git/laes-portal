import {LeagueLoading} from "../loading/loading.jsx";
import { CommunityCards } from "../profiles/community.jsx";
export { CommunityDirectory, CommunityCards, PublicAthleteProfile } from "../profiles/community.jsx";
import { BadgeCollection, BadgeAdmin } from "../badges/badges.jsx";
export { BadgeCollection } from "../badges/badges.jsx";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { supabase, useAuth, PageHero, Section, MediaImage } from "@laes/runtime";

import { PeopleAccess, TournamentWorkspace, loadModalityAccess } from "../admin/workspace.jsx";
import { AthleteRegistration } from "./athlete-registration.jsx";

const SLOT = { titular: "Titular", reserva: "Reserva" };
const STATUS = { pending: "Aguardando análise", approved: "Aprovado", rejected: "Não aprovado", cancelled: "Cancelado" };
const empty = [];
function friendly(error) {
  if (error?.code === "23505") return "Já existe um pedido ou convite pendente para essa participação.";
  if (error?.code === "42501") return "Seu perfil não possui permissão para essa ação.";
  if (error?.code === "P0001") return error.message;
  return "Não foi possível concluir agora. Confira os dados e tente novamente.";
}
async function rpc(action, payload = {}) {
  const { data, error } = await supabase.rpc("team_portal", { action, payload });
  if (error) throw error;
  return data;
}
async function publicData() {
  const results = await Promise.all([
    supabase.from("team_roster_status").select("*").order("sort").order("name"),
    supabase.from("modalities").select("id,name,slug").eq("active", true).order("sort"),
    supabase.from("team_roster_formats").select("*"),
    supabase.from("modality_roles").select("modality_id,name,sort").order("sort"),
    supabase.rpc("get_team_card_members"),
  ]);
  for (const result of results) if (result.error) throw result.error;
  const members = (results[4].data || []).reduce((groups, member) => { (groups[member.team_id] ||= []).push(member); return groups; }, {});
  return { teams: results[0].data.map(team => ({ ...team, members: members[team.id] || [] })), modalities: results[1].data, formats: results[2].data, roles: results[3].data };
}
function useLoader(fn, deps = []) {
  const latest = useRef(fn), ticket = useRef(0);
  latest.current = fn;
  const [state, setState] = useState({ data: null, loading: true, error: "" });
  const reload = useCallback(async () => {
    const id = ++ticket.current;
    setState(previous => ({ ...previous, loading: true, error: "" }));
    try {
      const data = await latest.current();
      if (id === ticket.current) setState({ data, loading: false, error: "" });
      return data;
    } catch (error) {
      if (id === ticket.current) setState(previous => ({ ...previous, loading: false, error: friendly(error) }));
      return null;
    }
  }, []);
  useEffect(() => { reload(); return () => { ticket.current++; }; }, [reload, ...deps]);
  return { ...state, reload };
}
function Notice({ children, error = false }) { return children ? <p role={error ? "alert" : "status"} className={`lt-notice ${error ? "lt-error" : ""}`}>{children}</p> : null; }
function Waiting() { return <LeagueLoading/>; }
function Button({ children, secondary = false, ...props }) { return <button {...props} className={`lt-button ${secondary ? "lt-secondary" : ""} ${props.className || ""}`}>{children}</button>; }
function Field({ label, children }) { return <label className="lt-field"><span>{label}</span>{React.cloneElement(children,{"aria-label":label})}</label>; }
function Pill({ children, red = false }) { return <span className={`lt-pill ${red ? "lt-red" : ""}`}>{children}</span>; }
function Capacity({ team }) {
  return <div className="lt-capacity"><div><strong>{team.starter_vacancies}</strong><span>vagas de titular</span><small>{team.starters_filled} de {team.starter_slots} preenchidas</small></div><div><strong>{team.reserve_vacancies}</strong><span>vagas de reserva</span><small>{team.reserves_filled} de {team.reserve_slots} preenchidas</small></div></div>;
}
function MemberAvatar({ member }) {
  const [failed, setFailed] = useState(false);
  const name = member.display_name || "Atleta";
  const initials = name.trim().split(/\s+/).slice(0, 2).map(part => Array.from(part)[0] || "").join("").toLocaleUpperCase("pt-BR");
  return <span className="lt-member-avatar" title={name} aria-label={name}>
    <span aria-hidden="true">{initials}</span>
    {member.avatar_url && !failed && <MediaImage src={member.avatar_url} alt="" className="lt-member-photo" loading="lazy" onError={() => setFailed(true)} />}
  </span>;
}
function TeamMembers({ members = [] }) {
  if (!members.length) return <div className="lt-card-members" aria-hidden="true" />;
  return <div className="lt-card-members" role="group" aria-label="Integrantes da equipe">
    {members.slice(0, 5).map(member => <MemberAvatar key={member.id} member={member} />)}
    {members.length > 5 && <span className="lt-member-avatar lt-member-more" title={`${members.length - 5} outros integrantes`} aria-label={`${members.length - 5} outros integrantes`}>+{members.length - 5}</span>}
  </div>;
}
function TeamCard({ team }) {
  return <article className="lt-team-card">
    <a className="lt-team-cover" href={`/equipes/${team.slug}`}><MediaImage src={team.logo_url} alt={`Escudo ${team.name}`} className="lt-team-image" /><span><Pill>{team.modality_name}</Pill>{team.roster_format !== "padrao" && <Pill>{team.format_label}</Pill>}</span></a>
    <div className="lt-card-body"><div className="lt-row"><h2>{team.name}</h2><Pill red>{team.starter_vacancies + team.reserve_vacancies > 0 ? "Recrutando" : "Elenco completo"}</Pill></div>
      <p className="lt-muted">{team.category || "Equipe LAES"} · {team.captain_nick ? `Capitão: ${team.captain_nick}` : "Capitão a definir"}</p><TeamMembers members={team.members} /><Capacity team={team} />
      <a className="lt-link" href={`/equipes/${team.slug}`}>Conhecer a equipe e participar <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg></a>
    </div>
  </article>;
}
function TeamFilters({ data, modality, setModality, format, setFormat }) {
  const isFC = data.modalities.find(m => m.id === modality)?.slug === "ea-sports-fc";
  return <div className="lt-filters"><Field label="Modalidade"><select value={modality} onChange={e => { setModality(e.target.value); setFormat(""); }}><option value="">Todas as modalidades</option>{data.modalities.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}</select></Field>{isFC && <Field label="Formato EA FC"><select value={format} onChange={e => setFormat(e.target.value)}><option value="">Individual e Pro Clubs</option>{data.formats.filter(f => f.modality_id === modality).map(f => <option key={f.format} value={f.format}>{f.label}</option>)}</select></Field>}</div>;
}
export function Teams({ vacanciesOnly = false }) {
  const q = useLoader(publicData), [modality, setModality] = useState(""), [format, setFormat] = useState("");
  const data = q.data;
  const teams = data?.teams.filter(t => (!modality || t.modality_id === modality) && (!format || t.roster_format === format) && (!vacanciesOnly || t.starter_vacancies + t.reserve_vacancies > 0)) || [];
  return <div className="lt-portal"><PageHero eyebrow="Nossa cidade. Nossa liga." title={vacanciesOnly ? "Seu próximo time está aqui." : "Equipes em formação."}>Encontre sua modalidade, escolha sua posição e faça parte do próximo capítulo da LAES.</PageHero><Section>
    {q.loading ? <Waiting /> : q.error ? <Notice error>{q.error}</Notice> : <>
      <div className="lt-summary"><div><strong>{data.teams.length}</strong><span>equipes da liga</span></div><div><strong>{data.teams.reduce((n,t) => n+t.starter_vacancies,0)}</strong><span>vagas de titular</span></div><div><strong>{data.teams.reduce((n,t) => n+t.reserve_vacancies,0)}</strong><span>vagas de reserva</span></div></div>
      <TeamFilters data={data} {...{ modality, setModality, format, setFormat }} />
      <div className="lt-team-grid">{teams.map(team => <TeamCard key={team.id} team={team} />)}</div>
      {!teams.length && <Notice>Nenhuma equipe com esse filtro por enquanto. Novas equipes são criadas pela administração.</Notice>}
      <div className="lt-explainer"><strong>Do pedido ao primeiro treino</strong><p>O capitão solicita a equipe e recebe aprovação da administração. Os atletas pedem uma vaga ou aceitam um convite pelo portal. Titulares e reservas contam separadamente.</p><p>EA FC: Individual com 1 titular e 1 reserva; Pro Clubs com 11 titulares e 5 reservas.</p></div>
    </>}
  </Section></div>;
}
export function Vacancies() {
  useEffect(() => { window.location.replace("/equipes" + window.location.search + window.location.hash); }, []);
  return <Waiting />;
}

function RequestForm({ team, roles, onDone }) {
  const auth = useAuth();
  const [kind, setKind] = useState("player"), [slot, setSlot] = useState(team.starter_vacancies ? "titular" : "reserva"), [busy, setBusy] = useState(false), [notice, setNotice] = useState(""), [error, setError] = useState(false);
  async function submit(event) {
    event.preventDefault(); setBusy(true); setNotice(""); setError(false);
    const form = new FormData(event.currentTarget);
    if (!auth.user) {
      sessionStorage.setItem("laes-team-intent", JSON.stringify({ team_id: team.id, team_name: team.name, kind, member_type: slot, created_at: Date.now() }));
      location.assign("/entrar"); return;
    }
    try { await rpc("request_join", { team_id: team.id, kind, member_type: slot, role_name: form.get("position"), message: form.get("message") }); setNotice(kind === "captain" ? "Pedido de capitania enviado. A administração vai analisar sua solicitação." : "Pedido enviado. O capitão da equipe vai analisar sua participação."); onDone?.(); }
    catch (e) { setError(true); setNotice(friendly(e)); }
    finally { setBusy(false); }
  }
  if (auth.loading) return <div className="lt-panel"><Waiting /></div>;
  if (!auth.user) return <div className="lt-panel"><h2>Quer fazer parte desta equipe?</h2><p className="lt-muted">Entre na sua conta para solicitar uma vaga ou a capitania desta equipe.</p><div className="lt-actions"><a className="lt-button" href="/entrar">Entrar na minha conta</a><a className="lt-link" href="/cadastro">Criar minha conta</a></div></div>;
  if (!auth.profile?.athlete_registered_at) return <div className="lt-panel"><h2>Complete seu Cadastro de atleta</h2><p className="lt-muted">Antes de solicitar uma vaga, conte seus jogos e posições para a equipe conhecer você.</p><a className="lt-button" href="/painel">Completar cadastro de atleta</a></div>;
  return <form className="lt-form lt-panel" onSubmit={submit}><h2>Qual será o seu próximo passo?</h2><Field label="Quero participar como"><select value={kind} onChange={e => setKind(e.target.value)}><option value="player">Atleta da equipe</option>{!team.captain_nick && <option value="captain">Capitão — aprovação da administração</option>}</select></Field>
    <Field label="Tipo de vaga"><select value={slot} onChange={e => setSlot(e.target.value)}><option value="titular" disabled={!team.starter_vacancies}>Titular · {team.starter_vacancies} vagas</option><option value="reserva" disabled={!team.reserve_vacancies}>Reserva · {team.reserve_vacancies} vagas</option></select></Field>
    <Field label="Posição ou rota preferida"><select name="position"><option value="">Quero combinar com a equipe</option>{roles.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}</select></Field>
    <Field label="Conte um pouco sobre você"><textarea name="message" maxLength={1000} rows={3} placeholder="Seus horários, experiência e o que você procura em uma equipe." /></Field>
    <p className="lt-muted">As posições e o contato autorizado na sua ficha ajudam o responsável a combinar os treinos. Ao entrar na equipe, seu nickname, posição e tipo de vaga aparecem no elenco público. Seu WhatsApp continua privado.</p><Notice error={error}>{notice}</Notice>
    <Button disabled={busy || team.starter_vacancies + team.reserve_vacancies === 0}>{busy ? "Enviando…" : auth.user ? kind === "captain" ? "Solicitar capitania" : "Solicitar vaga" : "Entrar para enviar meu pedido"}</Button>
  </form>;
}
export function TeamDetail({ slug }) {
  const q = useLoader(publicData, [slug]), members = useLoader(async () => {
    const team = await supabase.from("teams").select("id").eq("slug",slug).maybeSingle();
    if (team.error) throw team.error; if (!team.data) return [];
    const r = await supabase.from("team_members").select("id,display_name,member_type,role_name,is_captain").eq("team_id",team.data.id).order("is_captain",{ascending:false});
    if (r.error) throw r.error; return r.data;
  }, [slug]);
  if (!q.data) return <div className="lt-portal"><Section>{q.error ? <Notice error>{q.error}</Notice> : <Waiting />}</Section></div>;
  const team = q.data.teams.find(t => t.slug === slug);
  if (!team) return <div className="lt-portal"><Section><Notice>Equipe não encontrada.</Notice><a href="/equipes">Voltar às equipes</a></Section></div>;
  return <div className="lt-portal"><PageHero eyebrow={team.modality_name} title={team.name}>{team.description || "Uma equipe da nossa cidade, pronta para construir sua história."}</PageHero><Section>
    <div className="lt-detail-grid"><div><div className="lt-panel"><div className="lt-row"><Pill>{team.category || "Equipe LAES"}</Pill><Pill>{team.format_label}</Pill></div><Capacity team={team} /><p>{team.captain_nick ? `Capitão: ${team.captain_nick}` : "Esta equipe está procurando seu capitão. A aprovação é feita pela administração da Liga."}</p></div>
      <div className="lt-panel"><h2>Nosso elenco</h2>{!members.data?.length ? <p className="lt-muted">Elenco em formação. Os atletas aparecerão aqui depois da aprovação do pedido ou da aceitação do convite.</p> : <ul className="lt-list">{members.data.map(m => <li key={m.id}><strong>{m.display_name}</strong><span>{SLOT[m.member_type] || m.member_type}{m.role_name ? ` · ${m.role_name}` : ""}</span>{m.is_captain && <Pill red>Capitão</Pill>}</li>)}</ul>}</div>
    </div><RequestForm team={team} roles={q.data.roles.filter(r => r.modality_id === team.modality_id)} /></div>
  </Section></div>;
}

function WhatsApp({ value }) { return value ? <a className="lt-whatsapp" href={`https://wa.me/${value.replace(/\D/g,"")}`} target="_blank" rel="noreferrer">Conversar no WhatsApp ↗</a> : <span className="lt-muted">Contato não compartilhado</span>; }
function Positions({ games = [] }) { return <div className="lt-pills">{games.map((g,i) => <Pill key={g.modality_id || i}>{g.name}{g.roles?.length ? ` · ${g.roles.join(", ")}` : ""}</Pill>)}</div>; }
function ContactEditor({ contact, games, data, onSaved, initialNick }) {
  const auth=useAuth(),[nick,setNick]=useState(initialNick || auth.user?.user_metadata?.display_name || "");
  const [phone, setPhone] = useState(contact?.whatsapp || ""), [shared, setShared] = useState(!!contact?.shared), [busy, setBusy] = useState(false), [notice, setNotice] = useState(""), [error, setError] = useState(false);
  const [selected, setSelected] = useState(() => new Set(games.map(g => g.modality_id))), [positions, setPositions] = useState(() => Object.fromEntries(games.map(g => [g.modality_id,g.roles || []])));
  async function save(event) { event.preventDefault(); setBusy(true); setNotice(""); setError(false); try { await rpc("save_contact", { nick, whatsapp: phone, shared }); setNotice("Ficha e contato salvos. Você pode alterar ou retirar a autorização quando quiser."); onSaved(); } catch(e) {setError(true);setNotice(friendly(e));} finally {setBusy(false);} }
  async function saveRoles() {setBusy(true);setError(false);try {await rpc("save_positions", {games:[...selected].map(id => ({modality_id:id,roles:positions[id] || []}))});setNotice("Modalidades e posições salvas.");onSaved();}catch(e){setError(true);setNotice(friendly(e));}finally{setBusy(false);}}
  return <div className="lt-detail-grid"><form className="lt-panel lt-form" onSubmit={save}><p className="lt-eyebrow">Seu contato, sua escolha</p><h2>Combine o próximo treino.</h2><Field label="Nickname na comunidade"><input autoComplete="nickname" value={nick} required minLength={2} maxLength={40} onChange={e=>setNick(e.target.value)} /></Field><Field label="WhatsApp com DDD"><input type="tel" autoComplete="tel" value={phone} maxLength={30} placeholder="(35) 99999-9999" onChange={e => setPhone(e.target.value)} /></Field><label className="lt-check"><input type="checkbox" checked={shared} onChange={e => setShared(e.target.checked)} /><span>Autorizo compartilhar meu WhatsApp com a administração e os capitães das equipes às quais eu me candidatar ou ingressar.</span></label><p className="lt-muted">O número não aparece nos perfis públicos nem na lista da comunidade. Sem autorização, ele não é exibido aos responsáveis.</p><Notice error={error}>{notice}</Notice><Button disabled={busy}>{busy ? "Salvando…" : "Salvar ficha e contato"}</Button></form>
    <div className="lt-panel lt-form"><p className="lt-eyebrow">Seu lugar no jogo</p><h2>Modalidades, rotas e posições</h2><p className="lt-muted">Os responsáveis pelas suas candidaturas e equipes podem consultar essas escolhas.</p>{data.modalities.map(m => <fieldset className="lt-game" key={m.id}><legend><label className="lt-check"><input type="checkbox" checked={selected.has(m.id)} onChange={e => setSelected(old => {const next=new Set(old);e.target.checked?next.add(m.id):next.delete(m.id);return next;})} />{m.name}</label></legend>{selected.has(m.id) && <div className="lt-pills">{data.roles.filter(r => r.modality_id===m.id).map(r => <label className="lt-position" key={r.name}><input type="checkbox" checked={(positions[m.id] || []).includes(r.name)} onChange={e => setPositions(old => ({...old,[m.id]:e.target.checked?[...(old[m.id] || []),r.name]:(old[m.id] || []).filter(v => v!==r.name)}))} />{r.name}</label>)}</div>}</fieldset>)}<Button type="button" disabled={busy} onClick={saveRoles}>Salvar modalidades e posições</Button></div>
  </div>;
}

function Requests({ requests, run, busy }) {
  return <div className="lt-request-list">{!requests.length && <p className="lt-muted">Nenhum pedido aguardando análise.</p>}{requests.map(r => <article key={r.id} className="lt-request"><div className="lt-row"><h3>{r.nick}</h3><Pill red>{r.kind === "captain" ? "Pedido de capitania" : SLOT[r.member_type]}</Pill></div><p>{r.team_name}{r.role_name ? ` · ${r.role_name}` : ""}</p><Positions games={r.games} />{r.message && <p className="lt-message">{r.message}</p>}<WhatsApp value={r.whatsapp} /><div className="lt-actions"><Button disabled={busy} onClick={() => run("decide_request",{id:r.id,accept:true},"Pedido aprovado. O atleta já está no elenco.")}>Aprovar {r.kind === "captain" ? "capitão" : "pedido"}</Button><Button secondary disabled={busy} onClick={() => run("decide_request",{id:r.id,accept:false},"Pedido não aprovado.")}>Não aprovar</Button></div></article>)}</div>;
}
const shieldFormats = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp" };
const shieldLimit = 5 * 1024 * 1024;

function TeamPublicProfile({ team, userId, onSaved, startEditing = false }) {
  const [editing, setEditing] = useState(startEditing);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const uploaded = useRef(null);
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (!file) {
      setImageUrl("");
      return;
    }
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  function chooseFile(event) {
    const picked = event.currentTarget.files[0];
    setError("");
    if (picked && (!shieldFormats[picked.type] || !picked.size || picked.size > shieldLimit)) {
      event.currentTarget.value = "";
      setFile(null);
      setError("Escolha um arquivo PNG, JPG ou WEBP de até 5 MB.");
      return;
    }
    uploaded.current = null;
    setFile(picked || null);
  }

  async function save(event) {
    event.preventDefault();
    if (saving) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    const category = String(form.get("category")).trim() || null;
    const description = String(form.get("description")).trim() || null;
    let logo = String(form.get("logo")).trim() || null;
    const extension = shieldFormats[file?.type];
    setMessage("");
    setError("");
    if (name.length < 2) {
      setError("Informe um nome com pelo menos dois caracteres.");
      return;
    }
    if (file?.size && (!extension || file.size > shieldLimit)) {
      setError("Envie um escudo PNG, JPG ou WEBP de até 5 MB.");
      return;
    }
    if (logo && logo !== team.logo_url && !file?.size && !/^https:\/\//i.test(logo) && !/^\/images\/[a-z0-9_./-]+$/i.test(logo)) {
      setError("Use um endereço HTTPS ou um caminho de imagem do portal.");
      return;
    }

    setSaving(true);
    try {
      if (file?.size) {
        const previous = uploaded.current;
        if (previous?.file.name === file.name && previous.file.lastModified === file.lastModified &&
            previous.file.size === file.size && previous.file.type === file.type) {
          logo = previous.logo;
        } else {
          const path = `content/${userId}/${crypto.randomUUID()}.${extension}`;
          const { error: uploadError } = await supabase.storage.from("media")
            .upload(path, file, { contentType: file.type, upsert: false });
          if (uploadError) throw new Error("Não foi possível enviar o escudo. Tente novamente.");
          logo = `storage://media/${path}`;
          uploaded.current = { file, logo };
        }
      }

      const fields = { name, category, description, logo_url: logo };
      const changes = Object.entries(fields).filter(([key, value]) => (team[key] ?? null) !== value);
      if (changes.length) {
        let update = supabase.from("teams").update(Object.fromEntries(changes)).eq("id", team.id).eq("active", true);
        for (const [key] of changes) {
          update = team[key] == null ? update.is(key, null) : update.eq(key, team[key]);
        }
        const { data, error: updateError } = await update.select("id").maybeSingle();
        if (updateError || !data) throw new Error("Não foi possível salvar. Atualize a página para conferir os dados e tente novamente.");
        await onSaved();
      }
      uploaded.current = null;
      setFile(null);
      setEditing(false);
      setMessage(changes.length ? "Página da equipe atualizada." : "Nenhuma alteração para salvar.");
    } catch (failure) {
      setError(failure.message || "Não foi possível atualizar a equipe.");
    } finally {
      setSaving(false);
    }
  }

  return <section className="lt-panel lt-team-profile">
    <div className="lt-admin-row">
      <div className="lt-team-profile-title">
        <MediaImage src={team.logo_url} alt={`Escudo de ${team.name}`} />
        <div><h3>Página da equipe</h3><p>{team.name} · {team.modality_name}</p></div>
      </div>
      <a className="lt-link" href={`/equipes/${team.slug}`}>Ver página pública</a>
    </div>
    <Notice>{message}</Notice>
    <Notice error>{error}</Notice>
    {editing ? <form className="lt-form" onSubmit={save}>
      <fieldset className="lt-team-form-group" disabled={saving}>
        <legend>Informações que aparecem no site</legend>
        <div className="lt-admin-fields">
          <Field label="Nome da equipe"><input name="name" defaultValue={team.name} required minLength={2} maxLength={80} aria-describedby="laes-team-name-help" /></Field>
          <Field label="Categoria"><input name="category" defaultValue={team.category ?? ""} maxLength={60} placeholder="Ex.: Feminino, Misto ou Livre" /></Field>
        </div>
        <p className="lt-muted" id="laes-team-name-help">Use o nome que os jogadores reconhecem. O endereço da página continua o mesmo.</p>
        <Field label="Apresentação pública"><textarea name="description" defaultValue={team.description ?? ""} maxLength={2000} rows={4} aria-describedby="laes-team-bio-help" placeholder="Ex.: Equipe de VALORANT de Alfenas. Jogamos em grupo e treinamos à noite." /></Field>
        <p className="lt-muted" id="laes-team-bio-help">Conte o que a equipe joga, quando treina e que tipo de jogador procura.</p>
      </fieldset>
      <fieldset className="lt-team-form-group" disabled={saving}>
        <legend>Escudo da equipe</legend>
        <div className="lt-team-upload">
          <div className="lt-team-upload-preview">
            {imageUrl ? <img src={imageUrl} alt="Prévia do novo escudo" onError={() => setError("Não foi possível visualizar o arquivo. Escolha outra imagem.")} /> : <MediaImage src={team.logo_url} alt="Escudo atual" />}
          </div>
          <div className="lt-team-upload-controls">
            <Field label="Escolher imagem do PC ou celular"><input ref={fileInput} name="file" type="file" accept="image/png,image/jpeg,image/webp" onChange={chooseFile} aria-describedby="laes-team-shield-help" /></Field>
            <p className="lt-muted" id="laes-team-shield-help">PNG, JPG ou WEBP de até 5 MB. Prefira uma imagem quadrada e com o escudo centralizado.</p>
            {file && <Button type="button" secondary onClick={() => {fileInput.current.value = ""; setFile(null); setError("");}}>Remover arquivo escolhido</Button>}
          </div>
        </div>
        <details>
          <summary>Usar um link de imagem</summary>
          <Field label="Endereço do escudo"><input name="logo" defaultValue={team.logo_url ?? ""} maxLength={2048} placeholder="https://…" readOnly={!!file} /></Field>
        </details>
      </fieldset>
      <div className="lt-actions">
        <Button type="submit" disabled={saving}>{saving ? "Salvando…" : "Salvar página da equipe"}</Button>
        <Button type="button" secondary disabled={saving} onClick={() => {uploaded.current = null; setFile(null); setError(""); setEditing(false);}}>Cancelar</Button>
      </div>
    </form> : <Button type="button" secondary onClick={() => {setMessage(""); setEditing(true);}}>Editar página da equipe</Button>}
  </section>;
}

function TeamManager({ teams, requests, run, busy, revision, profileEditor, initialTeamId }) {
  const [teamId, setTeamId] = useState(initialTeamId || teams[0]?.id || ""), [slot,setSlot] = useState("titular"), [position,setPosition] = useState(""), [link,setLink] = useState("");
  useEffect(() => {if (!teams.some(t => t.id===teamId)) setTeamId(teams[0]?.id || "");},[teams,teamId]);
  const roster = useLoader(() => teamId ? rpc("roster",{team_id:teamId}) : [], [teamId,revision]);
  const team = teams.find(t => t.id===teamId);
  if (!team) return <Notice>Você ainda não tem uma equipe para gerenciar. Solicite uma capitania e aguarde a aprovação da administração.</Notice>;
  async function generate() {const result=await run("create_link",{team_id:teamId,member_type:slot,role_name:position},"Convite criado. Compartilhe o link com a pessoa escolhida.");if(result?.token)setLink(`${location.origin}/painel?convite=${result.token}`);}
  return <div className="lt-form"><Field label="Equipe que vou gerenciar"><select value={teamId} onChange={e => {setTeamId(e.target.value);setLink("");}}>{teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}</select></Field><Capacity team={team} />
    {profileEditor && <TeamPublicProfile key={team.id} team={team} startEditing={team.id === initialTeamId} {...profileEditor} />}
    <div className="lt-panel"><h3>Convide alguém por link</h3><div className="lt-filters"><Field label="Tipo de vaga"><select value={slot} onChange={e=>setSlot(e.target.value)}><option value="titular">Titular</option><option value="reserva">Reserva</option></select></Field><Field label="Posição combinada (opcional)"><input value={position} maxLength={80} onChange={e=>setPosition(e.target.value)} /></Field></div><Button disabled={busy} onClick={generate}>Gerar convite por link</Button><p className="lt-muted">Uso único, válido por sete dias. A pessoa entra com sua própria conta e confirma a participação. A vaga é preenchida quando o convite é aceito.</p>{link && <div className="lt-form"><input aria-label="Link de convite" readOnly value={link} onFocus={e=>e.target.select()} /><Button secondary onClick={async()=>{try{await navigator.clipboard.writeText(link);}catch{}}}>Copiar link</Button></div>}</div>
    <div className="lt-panel"><h3>Pedidos para esta equipe</h3><Requests requests={requests.filter(r=>r.team_id===teamId)} {...{run,busy}} /></div>
    <div className="lt-panel"><h3>Elenco e contato para treinos</h3><Notice error>{roster.error}</Notice>{roster.loading ? <Waiting /> : !roster.data?.length ? <p className="lt-muted">As primeiras vagas estão esperando pelos seus convites.</p> : roster.data.map(m => <article key={m.id} className="lt-request"><div className="lt-row"><h4>{m.nick}</h4><Pill>{SLOT[m.member_type] || m.member_type}{m.is_captain ? " · Capitão" : ""}</Pill></div><Positions games={m.games} /><WhatsApp value={m.whatsapp} />{!m.is_captain && <div className="lt-actions"><Button secondary disabled={busy} onClick={()=>run("change_slot",{id:m.id,member_type:m.member_type==='titular'?'reserva':'titular'},"Tipo de vaga atualizado.")}>Mover para {m.member_type==='titular'?'reserva':'titular'}</Button><Button secondary disabled={busy} onClick={()=>{if(confirm(`Remover ${m.nick} de ${team.name}?`))run("remove_member",{id:m.id},"Integrante removido da equipe.");}}>Remover integrante</Button></div>}</article>)}</div>
  </div>;
}

function Community({ data, managed, run, busy, revision }) {
  const [search,setSearch]=useState(""),[modality,setModality]=useState(""),[online,setOnline]=useState(false),[page,setPage]=useState(0),[filter,setFilter]=useState(""),[target,setTarget]=useState(null),[team,setTeam]=useState(managed[0]?.id || ""),[slot,setSlot]=useState("titular");
  useEffect(()=>{const timer=setTimeout(()=>{setFilter(search);setPage(0);},300);return()=>clearTimeout(timer);},[search]);
  useEffect(()=>{
    if(!target)return;const previous=document.activeElement;
    const focusTimer=setTimeout(()=>document.getElementById('lt-invite-dialog')?.querySelector('select,button')?.focus(),0);
    const onKey=event=>{const dialog=document.getElementById('lt-invite-dialog');if(!dialog)return;if(event.key==='Escape'&&!busy){setTarget(null);return;}if(event.key!=='Tab')return;const items=[...dialog.querySelectorAll('button:not([disabled]),select:not([disabled]),input:not([disabled])')];const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}};
    document.addEventListener('keydown',onKey);return()=>{clearTimeout(focusTimer);document.removeEventListener('keydown',onKey);if(previous?.isConnected)previous.focus();};
  },[target,busy]);
  const q=useLoader(()=>rpc("directory",{search:filter,modality_id:modality,online_only:online,offset:page*30}),[filter,modality,online,page,revision]);
  return <><div className="lt-panel"><p className="lt-eyebrow">Alfenas joga junto</p><h2>Comunidade LAES</h2><p className="lt-muted">Encontre os jogadores da liga e suas posições. O WhatsApp fica reservado aos responsáveis pelas candidaturas e equipes, com autorização do atleta.</p><div className="lt-filters"><Field label="Buscar nickname"><input value={search} placeholder="Quem joga com você?" maxLength={80} onChange={e=>setSearch(e.target.value)} /></Field><Field label="Modalidade"><select value={modality} onChange={e=>{setModality(e.target.value);setPage(0);}}><option value="">Todas as modalidades</option>{data.modalities.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</select></Field></div><label className="lt-check"><input type="checkbox" checked={online} onChange={e=>{setOnline(e.target.checked);setPage(0);}} />Mostrar somente on-line</label></div>
    <Notice error>{q.error}</Notice>{q.loading ? <Waiting /> : <div className="lt-player-grid"><CommunityCards players={q.data||[]} teamId={managed[0]?.id||''} busy={busy} onInvite={p=>{setTarget(p);setTeam(managed[0].id)}}/></div>}
    {!q.loading && q.data?.length===0 && <Notice>Nenhum jogador encontrado com esses filtros.</Notice>}<div className="lt-actions"><Button secondary disabled={page===0} onClick={()=>setPage(p=>p-1)}>Anterior</Button><span>Página {page+1}</span><Button secondary disabled={!q.data || q.data.length<30} onClick={()=>setPage(p=>p+1)}>Próxima</Button></div>
    {target && <div className="lt-dialog-backdrop"><section id="lt-invite-dialog" className="lt-dialog" role="dialog" aria-modal="true" aria-labelledby="invite-player-title"><h2 id="invite-player-title">Convidar {target.nick}</h2><Field label="Equipe"><select value={team} onChange={e=>setTeam(e.target.value)}>{managed.map(t=><option key={t.id} value={t.id}>{t.name}</option>)}</select></Field><Field label="Vaga"><select value={slot} onChange={e=>setSlot(e.target.value)}><option value="titular">Titular</option><option value="reserva">Reserva</option></select></Field><p>A pessoa recebe o convite no próprio painel e escolhe se deseja participar.</p><div className="lt-actions"><Button disabled={busy} onClick={async()=>{const result=await run("invite_player",{team_id:team,user_id:target.id,member_type:slot},"Convite enviado para o painel do atleta.");if(result)setTarget(null);}}>Enviar convite</Button><Button secondary disabled={busy} onClick={()=>setTarget(null)}>Voltar</Button></div></section></div>}
  </>;
}

function CreateTeam({ data, run, busy, onCreated }) {
  const [modality,setModality]=useState(data.modalities[0]?.id || ""),[format,setFormat]=useState("padrao"),[name,setName]=useState("");
  const formats=data.formats.filter(f=>f.modality_id===modality), selected=data.modalities.find(m=>m.id===modality);
  useEffect(()=>setFormat(selected?.slug==='ea-sports-fc'?'pro_clubs':'padrao'),[modality]);
  const preset=formats.find(f=>f.format===format),slug=name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  async function submit(event){event.preventDefault();const formElement=event.currentTarget;const form=new FormData(formElement);const result=await run("create_team",{name,slug,modality_id:modality,format,category:form.get("category"),description:form.get("description")},"Equipe criada com todas as vagas abertas.");if(result?.team_id)onCreated(result.team_id);}
  return <form className="lt-form lt-panel" onSubmit={submit}><p className="lt-eyebrow">Administração da Liga</p><h2>Crie a próxima equipe.</h2><p>Preencha os dados básicos. Em seguida, você poderá escolher o escudo do seu computador ou celular.</p><Field label="Nome da equipe"><input value={name} onChange={e=>setName(e.target.value)} required minLength={2} maxLength={80} placeholder="Ex.: LAES Phoenix" /></Field><Field label="Modalidade"><select value={modality} onChange={e=>setModality(e.target.value)}>{data.modalities.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</select></Field><Field label="Formato do elenco"><select aria-describedby="laes-roster-format-help" value={format} onChange={e=>setFormat(e.target.value)}>{formats.map(f=><option key={f.format} value={f.format}>{f.label}</option>)}</select></Field><p className="lt-muted" id="laes-roster-format-help">O formato define quantas vagas ficam disponíveis para titulares e reservas.</p>{preset && <Pill>{preset.starter_slots} titulares + {preset.reserve_slots} reservas</Pill>}<Field label="Categoria"><input name="category" maxLength={60} placeholder="Misto, feminino, livre…" /></Field><Field label="Apresentação da equipe"><textarea name="description" rows={3} maxLength={2000} placeholder="Ex.: Equipe de VALORANT de Alfenas. Treinamos à noite e buscamos jogadores para competir." /></Field><p className="lt-muted">Endereço: /equipes/{slug || "nome-da-equipe"}. A capitania será definida após seu aceite de um pedido.</p><Button disabled={busy || !preset}>{busy?'Criando…':'Criar equipe e configurar escudo'}</Button></form>;
}

function TeamWorkspace({ adminPage = false, Legacy }) {
  const auth=useAuth(),[tab,setTab]=useState(adminPage?'admin':'teams'),[busy,setBusy]=useState(false),[notice,setNotice]=useState(""),[isError,setError]=useState(false),[revision,setRevision]=useState(0),[token,setToken]=useState(""),[intent,setIntent]=useState(null);
  const [newTeamId,setNewTeamId]=useState("");
  const data=useLoader(publicData),state=useLoader(async()=>auth.user?{...(await rpc("state")),owner_id:auth.user.id}:null,[auth.user?.id]),requests=useLoader(()=>auth.user?rpc("review_requests"):[],[auth.user?.id]);
  const access=useLoader(async()=>adminPage&&auth.user?{userId:auth.user.id,rows:await loadModalityAccess(auth.user.id)}:null,[adminPage,auth.user?.id]);
  useEffect(()=>{if(!auth.user)return;const timer=setInterval(()=>{state.reload();requests.reload();if(adminPage)access.reload();},15000);return()=>clearInterval(timer);},[auth.user?.id,adminPage]);
  useEffect(()=>{
    if(!auth.user)return;
    const presence=()=>{void supabase.rpc('community_action',{action:document.visibilityState==='hidden'?'offline':'heartbeat',payload:{}}).then(()=>{},()=>{});};
    presence();const timer=setInterval(presence,30000);document.addEventListener('visibilitychange',presence);
    return()=>{clearInterval(timer);document.removeEventListener('visibilitychange',presence);void supabase.rpc('community_action',{action:'offline',payload:{}}).then(()=>{},()=>{});};
  },[auth.user?.id]);
  useEffect(()=>{
    const params=new URLSearchParams(location.search),incoming=params.get('convite');
    if(incoming&&/^[a-f0-9]{64}$/.test(incoming)){sessionStorage.setItem('laes-team-link',incoming);params.delete('convite');history.replaceState(history.state,'',location.pathname+(params.toString()?'?'+params:''));}
    setToken(sessionStorage.getItem('laes-team-link')||'');
    try{const pending=JSON.parse(sessionStorage.getItem('laes-team-intent')||'null');if(pending&&Date.now()-pending.created_at<86400000)setIntent(pending);}catch{}
  },[]);
  useEffect(()=>{
    if(!auth.user||!state.data)return;
    if(state.data.is_admin&&!auth.isAdmin)void auth.refresh();
  },[auth.user?.id,state.data?.is_admin]);
  const linkInfo=useLoader(()=>auth.user&&token?rpc('inspect_link',{token}):null,[auth.user?.id,token,revision]);
  async function run(action,payload,message){setBusy(true);setNotice("");setError(false);try{const result=await rpc(action,payload);await Promise.all([state.reload(),requests.reload(),data.reload()]);setRevision(r=>r+1);setNotice(message||'Informações atualizadas.');if(action==='accept_link'){sessionStorage.removeItem('laes-team-link');setToken('');}return result;}catch(e){setError(true);setNotice(friendly(e));return null;}finally{setBusy(false);}}
  if(auth.loading)return <div className="lt-portal"><Section><Waiting /></Section></div>;
  if(!auth.user)return <div className="lt-portal"><PageHero title="Sua equipe começa com você." /><Section><div className="lt-panel"><p>Entre na sua conta para pedir uma vaga, acompanhar convites e participar da comunidade.</p><a className="lt-button" href="/entrar">Entrar na conta</a><a className="lt-link" href="/cadastro">Criar minha conta</a></div></Section></div>;
  if(!state.data||state.data.owner_id!==auth.user.id||!data.data)return <div className="lt-portal"><Section><Notice error>{state.error||data.error}</Notice>{!state.error&&!data.error?<Waiting />:<Button secondary onClick={()=>{state.reload();requests.reload();data.reload();}}>Tentar novamente</Button>}</Section></div>;
  const s=state.data,d=data.data,managed=s.is_admin?d.teams:d.teams.filter(t=>s.captain_teams.includes(t.id));
  if(adminPage&&!s.is_admin&&access.data?.userId!==auth.user.id){
    return <div className="lt-portal"><Section>{access.error?<><Notice error>{access.error}</Notice><Button secondary onClick={access.reload}>Tentar novamente</Button></>:<Waiting />}</Section></div>;
  }
  const scopes=new Set(access.data?.userId===auth.user.id?access.data.rows.map(row=>row.modality_id):[]);
  if(adminPage&&!s.is_admin&&!access.error&&scopes.size){
    return <div className="lt-portal"><PageHero eyebrow="Administração da Liga" title="Gestão de modalidade" /><Section>
      <TournamentWorkspace key={auth.user.id} load={useLoader} modalities={d.modalities.filter(modality=>scopes.has(modality.id))} />
    </Section></div>;
  }
  if(adminPage&&!s.is_admin)return <div className="lt-portal"><Section><Notice error>A criação de equipes e a aprovação de capitães são exclusivas da administração da Liga.</Notice><a href="/painel" className="lt-link">Gerenciar minha equipe no painel</a></Section></div>;
  const tabs=adminPage?[['admin','Equipes e capitães'],['access','Pessoas e acessos'],['tournaments','Campeonatos'],['manage','Gerenciar elencos'],['community','Comunidade'],['badges','Insígnias'],['legacy','Conteúdo do portal']]:[['teams','Minhas equipes'],['community','Comunidade'],['profile','Minha ficha'],['legacy','Perfil e atividades']];
  return <div className="lt-portal"><nav className="lt-tabs" aria-label={adminPage?'Administração da Liga':'Meu portal'}>{tabs.map(([id,label])=><button key={id} type="button" aria-pressed={tab===id} onClick={()=>{setTab(id);setNotice('');setNewTeamId('');}}>{label}</button>)}</nav>{tab==='legacy'?<Legacy />:<><PageHero eyebrow={adminPage?'Administração da Liga':'Alfenas joga junto'} title={adminPage?'Organize a próxima formação.':'Sua comunidade. Seu próximo time.'}>{adminPage?'Crie equipes, aprove capitães e acompanhe os elencos da LAES.':'Convites, vagas, posições e contato para transformar uma conexão em equipe.'}</PageHero><Section><Notice error={isError}>{notice}</Notice>
    {token&&<div className="lt-panel lt-invitation"><h2>Você recebeu um convite.</h2><p className="lt-muted">Ao aceitar, seu nickname, posição e tipo de vaga aparecem no elenco público da equipe. Seu contato continua seguindo a autorização da sua ficha.</p>{linkInfo.data?<><p>{linkInfo.data.team_name} · {SLOT[linkInfo.data.member_type]}{linkInfo.data.role_name?' · '+linkInfo.data.role_name:''}</p><Button disabled={busy} onClick={()=>run('accept_link',{token},'Bem-vindo à equipe! Sua vaga foi confirmada.')}>Aceitar convite e entrar na equipe</Button></>:<Notice error>{linkInfo.error||'Carregando convite…'}</Notice>}<Button secondary onClick={()=>{sessionStorage.removeItem('laes-team-link');setToken('');}}>Dispensar convite</Button></div>}
    {intent&&d.teams.some(t=>t.id===intent.team_id)&&<div className="lt-panel"><h3>Continue seu pedido para {intent.team_name}</h3><Button disabled={busy} onClick={async()=>{const result=await run('request_join',{team_id:intent.team_id,kind:intent.kind,member_type:intent.member_type},'Pedido enviado. Acompanhe a análise neste painel.');if(result){sessionStorage.removeItem('laes-team-intent');setIntent(null);}}}>Confirmar pedido de {intent.kind==='captain'?'capitania':'vaga'}</Button><Button secondary onClick={()=>{sessionStorage.removeItem('laes-team-intent');setIntent(null);}}>Agora não</Button></div>}
    {tab==='admin'&&<div className="lt-detail-grid"><CreateTeam data={d} onCreated={id=>{setNewTeamId(id);setTab("manage");}} {...{run,busy}} /><div className="lt-panel"><h2>Pedidos de capitania</h2><p className="lt-muted">Aprovar um capitão dá acesso somente à equipe solicitada e ocupa a vaga escolhida no elenco.</p><Requests requests={(requests.data||empty).filter(r=>r.kind==='captain')} {...{run,busy}} /><h3 className="lt-space">Capitães aprovados</h3>{d.teams.filter(t=>t.captain_nick).map(t=><div key={t.id} className="lt-request"><strong>{t.name} · {t.captain_nick}</strong><Button secondary disabled={busy} onClick={()=>{if(confirm(`Retirar a capitania de ${t.name}? A pessoa continua no elenco como atleta.`))run('revoke_captain',{team_id:t.id},'Capitania retirada. A pessoa continua no elenco.');}}>Retirar capitania</Button></div>)}</div></div>}
    {tab==='access'&&s.is_admin&&<PeopleAccess key={auth.user.id} load={useLoader} modalities={d.modalities} />}
    {tab==='tournaments'&&s.is_admin&&<TournamentWorkspace key={auth.user.id} load={useLoader} modalities={d.modalities} />}
    {tab==='badges'&&<BadgeAdmin />}
    {tab==='manage'&&<TeamManager teams={managed} requests={requests.data||empty} initialTeamId={newTeamId} profileEditor={s.is_admin ? { userId:auth.user.id, onSaved:data.reload } : undefined} {...{run,busy,revision}} />}
    {tab==='community'&&<Community data={d} {...{managed,run,busy,revision}} />}
    {tab==='profile'&&<ContactEditor key={auth.user.id} contact={s.contact} initialNick={s.nick} games={s.games} data={d} onSaved={()=>{state.reload();setRevision(r=>r+1);}} />}
    {tab==='teams'&&<>
      {!s.contact?.whatsapp&&<div className="lt-panel lt-invitation"><h3>Complete sua ficha para combinar os treinos.</h3><p>Adicione seu WhatsApp e suas rotas ou posições. Você escolhe se deseja compartilhar o contato com os responsáveis.</p><Button secondary onClick={()=>setTab('profile')}>Completar minha ficha</Button></div>}
      {!!s.invites.length&&<div className="lt-panel"><h2>Convites recebidos</h2><p className="lt-muted">Ao aceitar, seu nickname e sua posição passam a aparecer no elenco público da equipe.</p>{s.invites.map(i=><article key={i.id} className="lt-request"><h3>{i.name}</h3><Pill>{SLOT[i.member_type]}</Pill><p>{i.message}</p><div className="lt-actions"><Button disabled={busy} onClick={()=>run('respond_invite',{id:i.id,accept:true},'Convite aceito. Você já está no elenco.')}>Aceitar convite</Button><Button secondary disabled={busy} onClick={()=>run('respond_invite',{id:i.id,accept:false},'Convite recusado.')}>Recusar</Button></div></article>)}</div>}
      <div className="lt-panel"><h2>Minhas equipes</h2>{s.memberships.length?<div className="lt-team-grid">{s.memberships.map(m=><article key={m.id} className="lt-request"><h3>{m.name}</h3><Pill>{SLOT[m.member_type]}{m.is_captain?' · Capitão':''}</Pill>{m.role_name&&<p>{m.role_name}</p>}</article>)}</div>:<p className="lt-muted">Seu próximo time pode estar esperando por você. <a className="lt-link" href="/equipes">Conhecer equipes com vagas</a></p>}</div>
      {!!managed.length&&<TeamManager teams={managed} requests={requests.data||empty} {...{run,busy,revision}} />}
      <div className="lt-panel"><h2>Meus pedidos</h2>{s.requests.length?s.requests.map(r=><article key={r.id} className="lt-request"><div className="lt-row"><h3>{r.name}</h3><Pill>{STATUS[r.status]}</Pill></div><p>{r.kind==='captain'?'Capitania':SLOT[r.member_type]}{r.role_name?' · '+r.role_name:''}</p>{r.status==='pending'&&<Button secondary disabled={busy} onClick={()=>run('cancel_request',{id:r.id},'Pedido cancelado.')}>Cancelar pedido</Button>}</article>):<p className="lt-muted">Quando você pedir uma vaga ou capitania, a análise aparecerá aqui.</p>}</div>
    </>}
  </Section></>}</div>;
}
export function Portal({ Legacy }) {
  useEffect(()=>{const params=new URLSearchParams(location.search),incoming=params.get('convite');if(incoming&&/^[a-f0-9]{64}$/.test(incoming)){sessionStorage.setItem('laes-team-link',incoming);params.delete('convite');history.replaceState(history.state,'',location.pathname+(params.toString()?'?'+params:''));}},[]);
  return <Legacy AthleteRegistration={AthleteRegistration} AthleteTeamSection={AthleteTeamSection} AthleteProfile={AthleteProfile} />;
}
export function Admin({ Legacy }) { return <TeamWorkspace adminPage Legacy={Legacy} />; }

// Included in teams.jsx so team management uses the same RPC and permissions.
function AthleteTeamSection({section='teams'}) {
 const auth=useAuth(),[busy,setBusy]=useState(false),[notice,setNotice]=useState(''),[error,setError]=useState(false),[revision,setRevision]=useState(0),[token,setToken]=useState(''),[intent,setIntent]=useState(null);
 const data=useLoader(publicData),state=useLoader(()=>rpc('state'),[auth.user?.id]),requests=useLoader(()=>rpc('review_requests'),[auth.user?.id]);
 useEffect(()=>{const timer=setInterval(()=>{state.reload();requests.reload()},15000);return()=>clearInterval(timer)},[auth.user?.id]);
 useEffect(()=>{const params=new URLSearchParams(location.search),incoming=params.get('convite');if(incoming&&/^[a-f0-9]{64}$/.test(incoming)){sessionStorage.setItem('laes-team-link',incoming);params.delete('convite');history.replaceState(history.state,'',location.pathname+(params.toString()?'?'+params:''))}setToken(sessionStorage.getItem('laes-team-link')||'');try{const pending=JSON.parse(sessionStorage.getItem('laes-team-intent')||'null');if(pending&&Date.now()-pending.created_at<86400000)setIntent(pending)}catch{}},[]);
 const linkInfo=useLoader(()=>token?rpc('inspect_link',{token}):null,[token,revision]);
 async function run(action,payload,message){setBusy(true);setNotice('');setError(false);try{const result=await rpc(action,payload);await Promise.all([state.reload(),requests.reload(),data.reload()]);setRevision(r=>r+1);setNotice(message||'Informações atualizadas.');if(action==='accept_link'){sessionStorage.removeItem('laes-team-link');setToken('')}return result}catch(e){setError(true);setNotice(friendly(e));return null}finally{setBusy(false)}}
 if(!state.data||!data.data)return <div className="lt-portal lt-embedded"><Notice error>{state.error||data.error}</Notice>{state.loading||data.loading?<Waiting/>:<Button secondary onClick={()=>{state.reload();data.reload();requests.reload()}}>Tentar novamente</Button>}</div>;
 const s=state.data,d=data.data,managed=s.is_admin?d.teams:d.teams.filter(t=>s.captain_teams.includes(t.id));
 return <div className="lt-portal lt-embedded"><div className="lt-embed-body"><Notice error={error}>{notice}</Notice>
 {section==='teams'&&<><div className="lt-panel"><p className="lt-eyebrow">Seu próximo time</p><h2>Minhas equipes</h2>{s.memberships.length?<div className="lt-team-grid">{s.memberships.map(m=><article key={m.id} className="lt-request"><h3>{m.name}</h3><Pill>{SLOT[m.member_type]}{m.is_captain?' · Capitão':''}</Pill>{m.role_name&&<p>{m.role_name}</p>}</article>)}</div>:<p className="lt-muted">Você ainda não faz parte de uma equipe. <a className="lt-link" href="/equipes">Encontre sua próxima equipe →</a></p>}</div>{!!managed.length&&<TeamManager teams={managed} requests={requests.data||empty} {...{run,busy,revision}}/>}</>}
 {section==='invites'&&<>{token&&<div className="lt-panel lt-invitation"><h2>Você recebeu um convite por link.</h2>{linkInfo.data?<><p>{linkInfo.data.team_name} · {SLOT[linkInfo.data.member_type]}{linkInfo.data.role_name?' · '+linkInfo.data.role_name:''}</p><Button disabled={busy} onClick={()=>run('accept_link',{token},'Convite aceito. Você já está no elenco.')}>Aceitar convite e entrar na equipe</Button></>:<Notice error={!!linkInfo.error}>{linkInfo.error||'Carregando convite…'}</Notice>}<Button secondary disabled={busy} onClick={()=>{sessionStorage.removeItem('laes-team-link');setToken('')}}>Dispensar convite</Button></div>}
 <div className="lt-panel"><p className="lt-eyebrow">O próximo jogo pode começar aqui</p><h2>Convites recebidos</h2>{!s.invites.length&&<p className="lt-muted">Nenhum convite pendente por enquanto. Seu perfil já está na comunidade para outros jogadores conhecerem você.</p>}{s.invites.map(i=><article key={i.id} className="lt-request"><h3>{i.name}</h3><Pill>{SLOT[i.member_type]}</Pill><p>{i.message}</p><div className="lt-actions"><Button disabled={busy} onClick={()=>run('respond_invite',{id:i.id,accept:true},'Convite aceito. Você já está no elenco.')}>Aceitar convite</Button><Button secondary disabled={busy} onClick={()=>run('respond_invite',{id:i.id,accept:false},'Convite recusado.')}>Recusar</Button></div></article>)}</div></>}
 {section==='activity'&&<>{intent&&d.teams.some(t=>t.id===intent.team_id)&&<div className="lt-panel"><h3>Continue seu pedido para {intent.team_name}</h3><Button disabled={busy} onClick={async()=>{const result=await run('request_join',{team_id:intent.team_id,kind:intent.kind,member_type:intent.member_type},'Pedido enviado.');if(result){sessionStorage.removeItem('laes-team-intent');setIntent(null)}}}>Confirmar pedido</Button></div>}<div className="lt-panel"><p className="lt-eyebrow">Acompanhe seu próximo passo</p><h2>Pedidos de vaga e capitania</h2>{s.requests.length?s.requests.map(r=><article key={r.id} className="lt-request"><div className="lt-row"><h3>{r.name}</h3><Pill>{STATUS[r.status]}</Pill></div><p>{r.kind==='captain'?'Capitania':SLOT[r.member_type]}{r.role_name?' · '+r.role_name:''}</p>{r.status==='pending'&&<Button secondary disabled={busy} onClick={()=>run('cancel_request',{id:r.id},'Pedido cancelado.')}>Cancelar pedido</Button>}</article>):<p className="lt-muted">Suas solicitações de vaga e capitania aparecem aqui. <a className="lt-link" href="/equipes">Explorar equipes →</a></p>}</div></>}
 </div></div>;
}
function AthleteProfile({onEdit}) {
 const auth=useAuth(),p=auth.profile||{},games=useLoader(async()=>{const r=await supabase.from('athlete_games').select('modality_id,roles,rank,game_nick,modalities(name)').eq('user_id',auth.user.id);if(r.error)throw r.error;return r.data},[auth.user.id]);
 return <div className="lt-portal"><div className="lt-row"><div><p className="lt-eyebrow">Você na comunidade</p><h2>Meu perfil de atleta</h2></div><Button secondary onClick={onEdit}>Editar em Configurações</Button></div><div className="lt-request"><div className="lt-row"><MediaImage src={p.avatar_url} alt={`Foto de ${p.nick}`} className="ar-avatar"/><div><h3>{p.nick}</h3><p className="lt-muted">{[p.city,p.state].filter(Boolean).join(' · ')}</p></div><Pill>Na comunidade</Pill></div>{p.bio&&<p className="lt-message">{p.bio}</p>}{p.availability&&<p>Horários: {p.availability}</p>}<Notice error>{games.error}</Notice>{games.loading?<Waiting/>:games.data?.map(g=><div key={g.modality_id} className="lt-request"><h4>{g.modalities?.name}</h4><p>{g.roles.join(' · ')}</p>{g.rank&&<Pill>{g.rank}</Pill>}{g.game_nick&&<p>Nick no jogo: {g.game_nick}</p>}</div>)}<a className="lt-link" href={`/atletas/${encodeURIComponent(p.nick||'')}`}>Ver meu perfil público →</a>{p.twitch_channel&&<div className="lv-profile-channel"><div><span>Seu canal na comunidade</span><br/><a href={`https://www.twitch.tv/${encodeURIComponent(p.twitch_channel)}`} target="_blank" rel="noopener noreferrer">twitch.tv/{p.twitch_channel} ↗</a></div><a href="/ao-vivo">Ver a LAES AO VIVO →</a></div>}</div><BadgeCollection nick={p.nick}/><AthleteVacancies games={games.data||[]}/></div>;
}
function AthleteVacancies({games}) {
 const q=useLoader(async()=>{const r=await supabase.from('team_roster_status').select('*').order('sort').order('name');if(r.error)throw r.error;return r.data},[]);
 const preferred=new Set(games.map(g=>g.modality_id));
 const available=(q.data||[]).filter(t=>Number(t.starter_vacancies)+Number(t.reserve_vacancies)>0);
 const matches=available.filter(t=>preferred.has(t.modality_id)),teams=(matches.length?matches:available).slice(0,3);
 return <section className="ap-vacancies" aria-labelledby="athlete-vacancies-title"><header><div><p className="lt-eyebrow">Seu próximo passo</p><h3 id="athlete-vacancies-title">Seu jogo. Sua próxima equipe.</h3><p>{matches.length?'Vagas nas modalidades do seu cadastro.':'Encontre uma equipe e leve seu jogo mais longe.'}</p></div><a className="ap-vacancies-all" href="/equipes">Ver todas as equipes <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></a></header>{q.loading?<Waiting/>:q.error?<p className="lt-muted">As oportunidades estão na página de equipes. <a className="lt-link" href="/equipes">Explorar equipes →</a></p>:teams.length?<div className="ap-vacancies-grid">{teams.map(t=><article key={t.id}><Pill>{t.modality_name}</Pill><h4>{t.name}</h4><p>{t.starter_vacancies} {Number(t.starter_vacancies)===1?'vaga titular':'vagas titulares'} · {t.reserve_vacancies} {Number(t.reserve_vacancies)===1?'reserva':'reservas'}</p><a href={`/equipes/${encodeURIComponent(t.slug)}`} className="lt-link">Conhecer equipe e solicitar vaga →</a></article>)}</div>:<p className="lt-muted">Novas oportunidades aparecem por aqui. <a className="lt-link" href="/equipes">Conhecer as equipes →</a></p>}</section>;
}
