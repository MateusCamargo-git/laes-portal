# LAES — Portal da Liga Alfenense de E-Sports

Código da aplicação publicada em https://ligaalfenense.com.br. O GitHub é a origem de publicação; a Hostinger executa o build deste repositório. Não publique os antigos ZIPs nem a antiga aplicação Vite sobre este portal.

## Desenvolvimento e publicação

Node.js 24 e npm:

```sh
npm ci
npm run build
npm test
npm start
```

A saída é `.output/`, o tipo de aplicação na Hostinger é **Nitro** e a entrada é `server/index.mjs` dentro dessa saída. O build não altera os arquivos de entrada e recalcula os tamanhos/ETags dos assets. Todos os módulos de navegador recebem uma versão única para manter imports circulares, roteador e React na mesma instância.

## Onde alterar

- `features/navigation/`: cabeçalho compartilhado e menu responsivo.
- `features/about/`: equipes atuais na apresentação da liga.
- `features/teams/`: equipes, cadastro de atleta, painel, convites e elencos.
- `features/profiles/`: comunidade e perfis públicos.
- `features/badges/`: insígnias e administração.
- `features/tournaments/`: cards e agenda por modalidade.
- `features/live/`: diretório e transmissões da Twitch.
- `features/loading/`: estados de carregamento.
- `runtime/public/images/`: logos e imagens locais, incluindo as seis equipes padronizadas.
- `runtime/server/`: servidor Nitro, segurança, serviço Twitch e rotas legadas.
- `runtime/public/assets/`: base preservada das rotas legadas e adapters compartilhados de React/backend.
- `scripts/build.mjs`: compilação das funcionalidades editáveis, versionamento do grafo e registro de assets.
- `test/`: regressões de segurança, datas, Twitch e integridade da publicação.

Parte da aplicação original só estava disponível como JavaScript compilado na hospedagem. Essa parte foi recuperada e está versionada em `runtime/`; os arquivos React originais dessas rotas não foram inventados. As funcionalidades com fontes recuperadas permanecem editáveis em `features/` e são recompiladas no build.

## Dados e segredos

Os dados atuais permanecem no Supabase. Não executar os arquivos SQL de teste na produção sem revisar seus cenários e transações. Nenhum arquivo `.env`, senha ou chave privilegiada deve entrar no Git. As credenciais Twitch existentes ficam nas variáveis de ambiente da Hostinger. A chave pública do Supabase presente no cliente é protegida pelas regras do banco.

## Reversão

Republique um commit anterior conhecido pela integração Git. A primeira consolidação preservou uma cópia local da aplicação completa e a versão anterior da Hostinger. Registros, usuários, elencos e torneios não são apagados por uma atualização de interface.

Detalhes da manutenção: [docs/maintenance-20261117.md](docs/maintenance-20261117.md).
