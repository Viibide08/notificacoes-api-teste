it("não grava evento com nome de 2 letras", async () => {
  // Arrange
  const dados = { nome: "TI", data: "2026-10-15" };

  // Act + Assert: a gravação precisa ser recusada
  await expect(EventoService.criar(dados)).rejects.toThrow(ValidationError);

  // Assert no banco: nada foi gravado
  const total = await Evento.count();
  expect(total).toBe(0);
});