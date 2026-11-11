# Supabase health check — LAES

Workflow: [.github/workflows/supabase-health.yml](../.github/workflows/supabase-health.yml).

## O que faz

Consulta uma modalidade pública via Data API a cada 8 horas, às 02:17, 10:17 e 18:17 UTC (23:17, 07:17 e 15:17 em Brasília). Também permite execução manual em Actions → LAES - Supabase health check → Run workflow. Alterar o próprio workflow dispara um teste.

A consulta retorna somente um identificador público. O corpo não é mostrado nos logs. Não cria, atualiza ou exclui registros, não acessa atletas, não utiliza service_role e não modifica RLS. O workflow não precisa ler o repositório e tem permissions: {}.

A chave publishable presente no arquivo é pública, a mesma usada no navegador. Não substituir por chave secret, service_role, senha de banco ou token pessoal. Se a chave pública for rotacionada, atualizar o workflow.

## O que garante e o que não garante

Uma execução verde confirma que a consulta funcionou naquele momento. O Supabase informa que algumas consultas diárias normalmente são suficientes para evitar pausa por pouca atividade, mas não há garantia no Free. Somente um plano pago exclui a pausa por inatividade.

Em repositórios públicos, o GitHub desativa workflows agendados após 60 dias sem atividade no repositório. As execuções agendadas não devem ser tratadas como manutenção dessa atividade. Verificar a aba Actions regularmente e reativar manualmente se necessário. O agendamento também pode atrasar ou ter execuções descartadas.

Se o projeto já estiver pausado, a rotina falha; ela não tem credenciais administrativas para restaurá-lo. Nesse caso, abrir o dashboard do Supabase, retomar o projeto e executar o workflow manualmente.

Se uma execução falhar, revisar o log da etapa Read one public modality. Uma tabela vazia ou com acesso público removido também faz o teste falhar. Não afrouxar políticas de segurança para corrigir o monitor.

## Validação inicial

Em 11/11/2026, a consulta direta retornou HTTP 200 e um registro público. A execução inicial no GitHub Actions terminou com sucesso:
https://github.com/MateusCamargo-git/laes-portal/actions/runs/42962790537

Isso valida o funcionamento atual da rotina, não demonstra que o projeto ficará ativo indefinidamente.

## Referências oficiais

- https://supabase.com/docs/guides/platform/free-project-pausing
- https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule
