// ================================================================================================================
// CONEXÃO 3  —  Após Boss 3 (Dinossauro)
// Controlado por HiitsumoEstado3, chamado após boss3 estado 182
// faseAtual === 3, HiitsumoEstado2 === 0
// ================================================================================================================
function iniciarConexao3() { /* chamada após boss3 estado 182 */ }

function tickConexao3() {
    if (HiitsumoEstado3 === 0) {
        carregar.style.display = "flex";
        maquina.src = "./src/img/maquina-tempo3.gif";
        aparecerMaquina();
        hiitsumoInicial.style.display = "flex";
        hiitsumoInicial.style.opacity = "0";
        hiitsumoInicial.style.visibility = "hidden";
        cabecaIntro.style.display = "none";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        cabeca1.style.display = "none";
        bossImg.style.display = "none";
        fundo.style.display = "flex";
        introducao.style.display = "flex";
        mensagem.style.display = "flex";
        fundo.style.pointerEvents = "none";
        introducao.style.pointerEvents = "auto";
        mensagem.style.pointerEvents = "auto";
        somMaquina = document.getElementById("somMaquina");
        somMaquina.loop = true;
        somMaquina.currentTime = 0;
        somMaquina.play();
        digitarMensagemIntro("(Em seguida, entrou na máquina do tempo e ligou.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 1) {
        maquina.style.display = "none";
        digitarMensagemIntro("(Você entra junto dela e se senta numa pequena poltrona que há lá dentro.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 2) {
        digitarMensagemIntro("(Suas pernas estavam um pouco pesadas.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 3) {
        hiitsumoInicial.style.opacity = "1";
        hiitsumoInicial.style.visibility = "visible";
        cabecaIntro.style.display = "flex";

        digitarMensagemIntro(`${nomePlayer}, o tempo de viagem vai ser um pouco maior dessa vez. E eu sei pra onde a máquina tá indo, vamos ter alguns probleminhas que eu te mostro na hora.`, "falaHiitsumoIntro", "beicinhoNormal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 4) {
        digitarMensagemIntro("De qualquer jeito, vou dar início à viagem e… achamos coisas para não nos entediar enquanto isso, certo?", "falaHiitsumoIntro", "V");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 5) {
        hiitsumoInicial.style.display = "none";
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(E com isso, vocês partem para a penúltima engrenagem.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 6) {
        somMaquina = document.getElementById("somMaquina");
        somMaquina.pause();
        somMaquina.loop = false;
        digitarMensagemIntro("(O ruído de funcionamento da máquina se torna mais abafado e mais lento. De alguma forma, não é irritante.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 7) {
        antesEspaco.play();
        antesEspaco.loop = true;

        digitarMensagemIntro("(Vocês decidem passar um pouco o tempo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    }else if (HiitsumoEstado3 === 8) {
        // Transição para Boss 4 — monta a tela do boss diretamente
        mensagem.style.display = "none";
        fundo.style.display = "none";
        introducao.style.pointerEvents = "none";
        mensagem2.style.pointerEvents = "auto";
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        hiitsumoInicial.style.display = "none";
        cabeca1.style.display = "none";
        bossImg.style.display = "flex";
        boss.src = "./src/img/Uno.png";
        Hiitsumo.style.display = "none";
        digitarMensagem_Boss(`(Vocês jogam UNO. Hiitsumo joga um +2 verde!)`, "falaBoss", "Uno");
        HiitsumoEstado2 = 1;
        HiitsumoEstado3 = 0;
    }
}