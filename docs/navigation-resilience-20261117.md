# Navegação da LAES — 17/11/2026

O portal publicado é o runtime Nitro da build Hostinger `01a1da7b-22a0-71a0-8607-eef762ae5896`, com ajustes posteriores de agenda. A pasta src deste repositório continua sendo uma aplicação Vite antiga e não deve substituir a produção.

Na navegação anônima foi observado menu atualizado enquanto o conteúdo anterior ainda permanecia visível durante a importação da próxima página. Não houve reprodução de uma indisponibilidade permanente nesta sessão. Foram identificadas requisições sem prazo no backend e no carregamento de metadados, além de ausência de componente pendente padrão do roteador.

Correções incrementais em production-overrides/navigation-resilience-20261117.mjs: estado pendente após 150 ms, sem duração mínima artificial; pré-carregamento por intenção; prazo de 20 segundos para consultas Supabase e funções de servidor, preservando sinais de cancelamento e sem repetir gravações; prazo para importação da rota; recuperação por recarga após erro de chunk, já que invalidar a rota não limpa a falha memorizada do módulo. Após 12 segundos o estado pendente oferece recarga manual, sem descartar formulários automaticamente.

Servidor: mesmo prazo no backend SSR; política de revalidação para HTML/assets atendidos pelo middleware; tamanho e ETag dos três módulos públicos recalculados. Filenames preservados para manter a identidade dos módulos com imports circulares e a compatibilidade com abas existentes. A Hostinger também pode servir assets diretamente; a invalidação de CDN é feita ao concluir a aplicação.

Validação: node --test production-overrides/navigation-resilience-20261117.test.mjs (quatro testes); node --check dos seis arquivos modificados. A validação anônima no domínio real é realizada após reiniciar o processo. Cadastro, usuários, tabelas e permissões não são modificados.

Reversão: originais verificados antes da gravação em hbuilds/versions/01a1da7b-22a0-71a0-8607-eef762ae5896/nodejs/tmp, com prefixo navigation-before-20261117- e caminho relativo substituindo / por _. Restaurar os seis arquivos correspondentes, reiniciar a aplicação e limpar o cache. Não reverter para os ZIPs de 10/11 e não publicar a base Vite antiga.
