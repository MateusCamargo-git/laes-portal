import { useEffect, useState } from 'react';
import { Link, PageHero, Section, supabase, useAuth } from '@laes/runtime';

export function component() {
  const { user, loading } = useAuth();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState(false);
  const [checking, setChecking] = useState(true);
  const [invalidLink, setInvalidLink] = useState(false);

  useEffect(() => {
    let active = true;
    async function checkLink() {
      let failed;
      try {
        const { error } = await supabase.auth.initialize();
        const query = new URLSearchParams(window.location.search);
        const hash = new URLSearchParams(window.location.hash.slice(1));
        failed = Boolean(error || query.has('code') || query.has('error') || hash.has('error'));
      } catch {
        failed = true;
      }
      if (active) {
        setInvalidLink(failed);
        setChecking(false);
      }
    }
    checkLink();
    return () => { active = false; };
  }, []);

  async function save(event) {
    event.preventDefault();
    if (!user?.email || !user.email_confirmed_at || checking || invalidLink || busy || saved) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const password = String(fields.get('password') ?? '');
    if (password !== fields.get('confirm')) {
      setMessage('As senhas devem ser iguais.');
      return;
    }

    setBusy(true);
    setMessage('');
    try {
      const { data, error: sessionError } = await supabase.auth.getUser();
      if (sessionError || data.user?.id !== user.id || data.user?.email !== user.email) {
        setMessage('Sua sessão mudou. Entre novamente para definir a senha.');
        return;
      }
      const { error } = await supabase.auth.updateUser({ password });
      if (error?.code === 'same_password') {
        setMessage('Essa já é a senha da sua conta.');
        return;
      }
      if (error?.code === 'reauthentication_needed') {
        setMessage('Entre novamente com o Google ou com sua senha atual e tente outra vez.');
        return;
      }
      if (error) throw error;
      form.reset();
      setSaved(true);
      setMessage('Senha salva. Você já pode entrar com este e-mail e a senha que definiu.');
    } catch {
      setMessage('Não foi possível salvar a senha. Tente novamente com uma senha diferente.');
    } finally {
      setBusy(false);
    }
  }

  return <>
    <PageHero title="Definir senha da LAES" />
    <Section className="max-w-xl">
      {checking || loading ? <p role="status">Verificando sessão…</p> :
        invalidLink ? <p role="status">O link é inválido ou expirou. Solicite outro e abra no mesmo navegador. <Link to="/recuperar-senha">Recuperar senha</Link></p> :
        !user?.email || !user.email_confirmed_at ? <p role="status">Entre com o Google ou use o link enviado ao seu e-mail. <Link to="/entrar">Entrar</Link></p> :
        <form key={user.id} onSubmit={save} className="grid gap-4">
          <p>Use <strong>{user.email}</strong> para entrar com a senha que definir aqui.</p>
          <p>Se você já usa o Google, esse acesso continua disponível.</p>
          {!saved && <>
            <label className="grid gap-2">Nova senha
              <input className="rounded border px-3 py-2" name="password" type="password" autoComplete="new-password" required minLength={8} maxLength={72} />
            </label>
            <label className="grid gap-2">Confirme a senha
              <input className="rounded border px-3 py-2" name="confirm" type="password" autoComplete="new-password" required minLength={8} maxLength={72} />
            </label>
            <button className="rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground" disabled={busy}>
              {busy ? 'Salvando…' : 'Salvar senha'}
            </button>
          </>}
          {message && <p role="status">{message}</p>}
          {saved && <Link to="/painel">Ir para meu painel</Link>}
        </form>}
    </Section>
  </>;
}
