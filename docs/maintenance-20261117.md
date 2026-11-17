# Manutenção — 17/11/2026

## Causas reproduzidas

1. A entrada do navegador `index-laes-agenda-20261115-v1.js` coexistia com a entrada antiga importada por páginas de detalhe, painel e formulários. Ambas inicializavam o roteador e a hidratação do documento. A segunda inicialização encontrava `window.$_TSR` já consumido e falhava com `Cannot set properties of undefined (setting 't')`.
2. O componente pendente padrão do roteador havia sido adicionado apenas no navegador. O servidor não criava a mesma fronteira Suspense. Isso produzia erro React 418 e reconstrução do documento, com desaparecimento/transição inconsistente de seções.
3. Recursos de head eram inseridos por substituição textual depois da renderização. Foram movidos para os recursos da rota em servidor e navegador. Caracteres NUL dos IDs internos serializados passam a ser escapados antes de entregar o HTML.
4. O GitHub mantinha uma aplicação Vite anterior; a hospedagem executava outro pacote Nitro com alterações posteriores. A versão efetiva foi recuperada, incluindo imagens e ajustes da agenda, e consolidada aqui.

## Correções

Uma entrada canônica para todo o grafo, opções equivalentes de roteador em servidor e cliente, metadados e estilos equivalentes, registro Nitro recalculado, versão de assets por hash de conteúdo. Mais de 600 cópias históricas de módulos foram excluídas da base recuperada; somente módulos alcançáveis e estilos necessários permanecem. O build passa a compilar as fontes recuperadas das funcionalidades e conserva as rotas legadas.

As seis equipes, logos padronizadas, agenda por modalidade, dados de campeonatos, cadastro, privacidade e credenciais configuradas são preservados. A checagem de senhas vazadas permanece na configuração anteriormente escolhida pelo responsável; não faz parte desta correção de carregamento.

## Escopo de verificação

Navegação pública desktop/mobile, faixa das oito modalidades, seis equipes e detalhes, agenda e filtros, acesso/cadastro/recuperação, bloqueio de painel/admin sem sessão e testes de interface autenticada com respostas isoladas de atleta e administrador. Nenhuma conta real foi assumida e nenhuma gravação de teste foi encaminhada ao Supabase real. Os testes de interface autenticada não substituem validação de credenciais reais ou do provedor Google.

O banco foi consultado pelas integrações autorizadas, sem alteração de usuários, pedidos, permissões ou elencos durante esta manutenção.

## Cabeçalho e equipes em Sobre

O cabeçalho compartilhado tem fonte editável em `features/navigation/header.jsx` e estilos em `header.css`, compilados para servidor e navegador. Mantém leão, preto, vinho, laranja e Chakra Petch; organiza os acessos, marca a rota atual, preserva ações de usuário/equipe administrativa e oferece menu móvel com Escape, fechamento ao navegar e foco de retorno.

A grade da página Sobre deixou de usar nomes e caminhos de logos fixos. `features/about/teams.jsx` consulta as equipes ativas ordenadas em `teams`, usando seus nomes, logos padronizadas e slugs atuais. Assim a equipe Vixens aparece com sua identidade atual e as próximas mudanças não dependem de editar a apresentação manualmente.
