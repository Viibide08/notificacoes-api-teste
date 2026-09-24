// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");
describe("parseId", () => {
// Para testar ERRO, o expect recebe uma função: () => ...
it("lança ValidationError quando o id não é número", () => {
expect(() => parseId("abc")).toThrow(ValidationError);
});
// DESAFIO: escrevam aqui um teste para a pergunta abaixo
//saber se "12abc" é recusado
// it("lança ValidationError quando o id contém letras misturadas com números", () => {
//     expect(() => parseId("12abc")).toThrow(ValidationError);
//   });

});