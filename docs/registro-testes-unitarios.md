# Registro de Testes Unitários

**Aluno:** Vitoria Ibide  
**Grupo:** 7  
**Data:** 24/09/2026  

## Testes escritos

| # | Arquivo | O que o teste verifica | Tipo |
| --- | ------- | ---------------------- | ---- |
| 1 | `tests/unit/validators.test.js` | Se um e-mail válido não retorna erro (`null`) | sucesso |
| 2 | `tests/unit/validators.test.js` | Se um e-mail sem `@` retorna a mensagem "E-mail inválido" | falha |
| 3 | `tests/unit/validators.test.js` | Se um nome com exatamente 3 letras é aceito quando o mínimo é 3 | borda |
| 4 | `tests/unit/parseId.test.js` | Se o ID `"12abc"` lança `ValidationError` ao invés de aceitar texto misturado com números | borda |

## Resultado

* **Passaram:** 4
* **Falharam:** 1

## Defeito encontrado

* **Teste:** `parseId("12abc")`
* **Esperado:** Lançar um erro `ValidationError` por conter letras misturadas com números.
* **Obtido:** A função aceitou o valor e retornou o número `12` (devido ao uso de `parseInt`), ignorando os caracteres `"abc"`.

## Cobertura

* **% Lines da linha "helpers":** 51.85%
* **Em uma frase, o que esse número significa:** Significa que os nossos testes unitários executaram e validaram exatamente 51,85% de todas as linhas de código presentes nos arquivos da pasta `helpers`.