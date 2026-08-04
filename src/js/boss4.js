// ================================================================================================================
// BOSS 4  —  faseAtual === 3
// ================================================================================================================

function tickBoss4() {
    if (HiitsumoEstado2 === 1) {
        boss.src = "./src/img/Uno.png";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block"; digitarOpcao('"Sequência de 3 +4 e gritar UNO."', "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Comprar 2 cartas. Tentar não humilhar ela."', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(2); };
        opcB1.onclick = () => { avancarOpcao(5); };

    } else if (HiitsumoEstado2 === 2) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display = "none";

        digitarMensagem_Boss(`(O brilho nos olhos de Hiitsumo some.)`, "falaBoss", "UnoSemBrilho");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 3) {
        cabeca1.style.display = "flex";

        digitarMensagem_Boss(`UNO é melhor com mais pessoas…`, "falaBoss", "UnoBeicinho");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 4) {
        digitarMensagem_Boss(`Vamos fazer alguma outra coisa, né. Foi um bom jogo. É um jogo de sorte.`, "falaBoss", "UnoBeicinho");
        HiitsumoEstado2 += 4;
    } else if (HiitsumoEstado2 === 5) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display = "none";

        digitarMensagem_Boss(`(Hiitsumo sorri e joga uma sequência de 3 bloqueios!)`, "falaBoss", "Uno");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 6) {
        cabeca1.style.display = "flex";

        digitarMensagem_Boss(`UNO! Foi mal, mas um jogo é um jogo, não fica triste por isso…`, "falaBoss", "UnoFeliz");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 7) {
        cabeca1.style.display = "none";

        digitarMensagem_Boss(`(Ela joga a última carta e vence o jogo. Ela parece satisfeita.)`, "falaBoss", "Uno");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 8) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display = "none";
        cabeca1.style.display = "flex";

        digitarMensagem_Boss(`Eu tenho bastante coisa antiga salva nesse notebook, quer ver o que?`, "falaBoss", "computador");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 9) {
        digitarMensagem_Boss(`Tem uma pasta de filmes e outra de programas de TV de todo tipo…`, "falaBoss", "computador");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 10) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block"; digitarOpcao('"Filmes."', "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Programas de TV."', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(11); };
        opcB1.onclick = () => { avancarOpcao(15); };
    } else if (HiitsumoEstado2 === 11) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display = "none";
        cabeca1.style.display = "none";

        digitarMensagem_Boss(`(Hiitsumo balança a cabeça e mostra uma visão geral da pasta.)`, "falaBoss", "computador");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 12) {
        digitarMensagem_Boss(`(Você lê alguns dos filmes: De Volta Para o Futuro 1, 2 e 3. Looper. Viagem radial. O predestinado. Projeto almanaque. Interestelar. The Great Paradox, uma série com 5 temporadas. E outros.)`, "falaBoss", "computador");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 13) {
        cabeca1.style.display = "flex";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        fundo.style.display = "flex";
        introducao.style.display = "flex";
        mensagem.style.display = "flex";
        fundo.style.pointerEvents = "none";
        introducao.style.pointerEvents = "auto";
        mensagem.style.pointerEvents = "auto";
        carregar.style.display = "none";
        digitarMensagemIntro("... Que nostalgia, agora eu me lembrei.", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 14) {
        faseAtual = 4;
        HiitsumoEstado2 = 0;
        HiitsumoEstado3 = 1;
        tickConexao4();
    } else if (HiitsumoEstado2 === 15) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display = "none";
        cabeca1.style.display = "none";

        digitarMensagem_Boss(`(Tem uma pasta com programas de variedades, especificamente programas de variedades coreanos e o programa da Graciane.)`, "falaBoss", "computador");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 16) {
        cabeca1.style.display = "flex";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        fundo.style.display = "flex";
        introducao.style.display = "flex";
        mensagem.style.display = "flex";
        fundo.style.pointerEvents = "none";
        introducao.style.pointerEvents = "auto";
        mensagem.style.pointerEvents = "auto";
        carregar.style.display = "none";
        digitarMensagemIntro("Ah, que saudade da época que eu assistia esses programas.", "falaHiitsumoIntro", "normal");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 17) {
        faseAtual = 4;
        HiitsumoEstado2 = 0;
        HiitsumoEstado3 = 50;
        tickConexao4();
    }
}