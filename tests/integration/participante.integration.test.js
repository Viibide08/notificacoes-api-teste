it("grava o evento no banco com o nome correto", async () => {
    // Arrange: um evento válido (data no formato ano-mês-dia)
    const dados = { nome: "Semana de Tecnologia", data: "2026-11-20" };

    // Act: chamem o service que cria o evento (não esqueçam o await!)
    const criado = await EventoService.criar(dados);

    // Assert: busquem o evento NO BANCO pelo id
    const doBanco = await Evento.findByPk(criado.id);
    expect(doBanco).not.toBeNull();
    expect(doBanco.nome).toBe(dados.nome);
  });
  // --- TESTE 2 (Parte 4) ---
  it("não grava participante com e-mail inválido", async () => {
    // Arrange: um participante com e-mail SEM @
    const dados = { nome: "Bruno", email: "bruno.email.com" };

    // Act + Assert: a gravação precisa ser recusada
    await expect(ParticipanteService.criar(dados)).rejects.toThrow();

    // Assert no banco: quantos participantes devem existir agora?
    const total = await Participante.count();
    expect(total).toBe(0);
  });

  // --- TESTE 3: DESAFIO (Parte 5) ---
  describe("ParticipanteService.atualizar (integração)", () => {
    it("grava o nome novo no banco", async () => {
      // Arrange: criem um participante "Ana", e-mail "ana@senai.br"
      const criado = await ParticipanteService.criar({
        nome: "Ana",
        email: "ana@senai.br"
      });

      // Act: atualizem o nome para "Ana Maria"
      await ParticipanteService.atualizar(criado.id, { nome: "Ana Maria" });

      // Assert: busquem o participante no banco e confiram se o nome é "Ana Maria"
      const doBanco = await Participante.findByPk(criado.id);
      expect(doBanco.nome).toBe("Ana Maria");
    });
  });