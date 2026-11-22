import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3023';
const executablePath = process.env.PLAYWRIGHT_EXECUTABLE_PATH;
const browser = await chromium.launch({ executablePath, args: ['--no-sandbox'] });
const project = 'txwxodscfnbsgltmrfjz';
const email = 'qa@example.invalid';
const password = 'Test-only-A7!';
const user = {
  id: '00000000-0000-4000-8000-000000000017',
  email,
  email_confirmed_at: '2026-11-21T00:00:00Z',
  app_metadata: { provider: 'google', providers: ['google'] },
  user_metadata: { display_name: 'QA LAES', account_notice_version: '2026-11-08' },
  aud: 'authenticated',
  role: 'authenticated',
};
const exp = Math.floor(Date.now() / 1000) + 3600;
const token = 'eyJhbGciOiJIUzI1NiJ9.' + Buffer.from(JSON.stringify({ sub: user.id, exp })).toString('base64url') + '.test';
const session = { access_token: token, refresh_token: 'test', expires_at: exp, expires_in: 3600, token_type: 'bearer', user };

try {
  const page = await browser.newPage();
  let storedPassword;
  let writes = 0;
  let signups = 0;
  let enteredUserId;
  await page.route(`https://${project}.supabase.co/**`, async route => {
    const request = route.request();
    const path = new URL(request.url()).pathname;
    const send = (json, status = 200) => route.fulfill({ json, status, headers: { 'X-Supabase-Api-Version': '2024-01-01' } });
    if (path === '/auth/v1/user') {
      if (request.method() === 'PUT') {
        const payload = request.postDataJSON();
        assert.equal(payload.password, password);
        assert.equal(Object.hasOwn(payload, 'email'), false);
        storedPassword = payload.password;
        writes++;
      }
      return send(user);
    }
    if (path === '/auth/v1/token') {
      const payload = request.postDataJSON();
      if (payload.email !== email || payload.password !== storedPassword) return send({ code: 'invalid_credentials' }, 400);
      enteredUserId = user.id;
      return send(session);
    }
    if (path === '/auth/v1/signup') {
      signups++;
      assert.equal(request.postDataJSON().email, email);
      return send({ code: 'over_email_send_rate_limit' }, 429);
    }
    if (path === '/auth/v1/recover') return send({ code: 'over_email_send_rate_limit' }, 429);
    return send((request.headers().accept || '').includes('vnd.pgrst.object') ? null : []);
  });

  await page.goto(base + '/redefinir-senha');
  await page.getByText('Entre com o Google ou use o link', { exact: false }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Salvar senha' }).count(), 0);

  await page.evaluate(({ project, session }) => localStorage.setItem(`laes-${project}-auth`, JSON.stringify(session)), { project, session });
  await page.goto(base + '/redefinir-senha?code=invalid');
  await page.getByText('O link é inválido ou expirou.', { exact: false }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Salvar senha' }).count(), 0);

  await page.goto(base + '/redefinir-senha');
  await page.getByText(email, { exact: true }).waitFor();
  await page.getByLabel('Nova senha').fill(password);
  await page.getByLabel('Confirme a senha').fill('different-password');
  await page.getByRole('button', { name: 'Salvar senha' }).click();
  await page.getByText('As senhas devem ser iguais.').waitFor();
  assert.equal(writes, 0);
  await page.getByLabel('Confirme a senha').fill(password);
  await page.getByRole('button', { name: 'Salvar senha' }).click();
  await page.getByText('Senha salva.', { exact: false }).waitFor();
  assert.equal(writes, 1);

  await page.evaluate(project => localStorage.removeItem(`laes-${project}-auth`), project);
  await page.goto(base + '/auth?code=invalid');
  await page.getByText('Não foi possível concluir o acesso.', { exact: false }).waitFor();
  await page.getByLabel('E-mail', { exact: true }).fill(email);
  await page.getByLabel('Senha (mínimo de 8 caracteres)').fill(password);
  await page.getByRole('button', { name: 'Entrar na conta' }).click();
  await page.waitForURL(base + '/painel');
  assert.equal(enteredUserId, user.id);
  assert.equal(signups, 0);

  await page.evaluate(project => localStorage.removeItem(`laes-${project}-auth`), project);
  await page.goto(base + '/cadastro');
  await page.getByLabel('Como quer ser chamado?').fill('Atleta QA');
  await page.getByLabel('E-mail', { exact: true }).fill(email);
  await page.getByLabel('Senha (mínimo de 8 caracteres)').fill(password);
  await page.getByLabel('Confirme sua senha').fill(password);
  await page.locator('[name=account_notice]').check();
  await page.getByRole('button', { name: 'Cadastrar', exact: true }).click();
  await page.getByText('O envio de e-mails atingiu o limite temporário.', { exact: false }).waitFor();
  assert.equal(signups, 1);

  await page.goto(base + '/recuperar-senha');
  await page.getByLabel('E-mail', { exact: true }).fill(email);
  await page.getByRole('button', { name: 'Enviar instruções' }).click();
  await page.getByText('O envio de e-mails atingiu o limite temporário.', { exact: false }).waitFor();
  console.log('Auth browser regression checks passed with simulated Supabase responses.');
} finally {
  await browser.close();
}
