# Teste de Integração — Bloco 4

**Data:** 
**Testador(es):** 

---

## Roteiro de Testes

| # | Teste | Resultado | Observação |
|---|---|---|---|
| 1 | GET /eventos (seed) | ✅ / ❌ | |
| 2 | POST /eventos | ✅ / ❌ | |
| 3 | POST /participantes | ✅ / ❌ | |
| 4 | POST /inscricoes | ✅ / ❌ | |
| 5 | E-mail de confirmação no MailPit | ✅ / ❌ | |
| 6 | GET /notificacoes (enviada: true) | ✅ / ❌ | |
| 7 | POST /inscricoes duplicada (400) | ✅ / ❌ | |
| 8 | PATCH /inscricoes/:id/cancelar | ✅ / ❌ | |
| 9 | E-mail de cancelamento no MailPit | ✅ / ❌ | |
| 10 | GET /notificacoes/estatisticas | ✅ / ❌ | |
| 11 | POST /notificacoes/:id/reenviar | ✅ / ❌ | |
| 12 | GET /exportar/eventos/xml | ✅ / ❌ | |
| 13 | GET /exportar/relatorio/inscricoes | ✅ / ❌ | |
| 14 | POST /eventos/:id/banner (upload) | ✅ / ❌ | |
| 15 | GET /api-docs (Swagger) | ✅ / ❌ | |
| 16 | Reiniciar servidor | ✅ / ❌ | |
| 17 | GET /eventos após reinício (persistência) | ✅ / ❌ | |

---

## Problemas encontrados

- 

## Correções feitas

- 
# Registro de Testes de Integração

Aluno: [Marya Ibide]
Grupo: [8]
Data: 15/10/2026

## Banco de teste

Nome do banco de teste: notificacoes_test
Por que ele é separado do banco da API (uma frase): Para isolar o ambiente de testes dos dados de desenvolvimento e evitar que a execução contínua de limpezas de dados altere ou apague informações reais.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |
| --- | ------- | ---------------------- | ------------------ |
| 1   | tests/integration/evento.integration.test.js | Gravação correta do evento no banco pelo nome | Verde |
| 2   | tests/integration/participante.integration.test.js | Recusa de cadastro de participante com e-mail inválido | Verde |
| 3   | tests/integration/participante.integration.test.js | Gravação do novo nome do participante no banco após atualização | Vermelho |

## Resultado

Linha "Tests:" da saída do npm run test:integration:
Tests: 1 failed, 5 passed, 6 total

## Defeito encontrado

Teste: ParticipanteService.atualizar (integração) - grava o nome novo no banco
Esperado: "Ana Maria"
Obtido: "Ana"
O que o usuário da API veria (a rota responde 200, mas...): A rota responde HTTP status 200 confirmando a alteração, porém a modificação não é gravada de fato no banco de dados.