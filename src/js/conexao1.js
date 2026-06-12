// ================================================================================================================
// CONEXÃO 1  —  Entre Boss 1 (Mago) e Boss 2 (Graciane)
// Controlado por HiitsumoEstado3, chamado após boss1 === 91
// ================================================================================================================

function iniciarConexao1() { /* chamada após boss1 estado 91 */ }

function tickConexao1() {
    if (HiitsumoEstado3 === 1) {
        digitarMensagemIntro("(E nesse instante…)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1; // apagar depois (colocar 1)

    } else if (HiitsumoEstado3 === 2) {
        carregar.style.display            = "flex";
        maquina.src                       = "./src/img/maquina-tempo1.gif";
        aparecerMaquina();
        hiitsumoInicial.style.display     = "flex";
        hiitsumoInicial.style.opacity     = "0";
        hiitsumoInicial.style.visibility  = "hidden";
        digitarMensagemIntro("(Você está dentro da máquina do tempo, viajando de novo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 3) {
        digitarMensagemIntro("(Seu coração ainda está acelerado, assustado.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 4) {
        digitarMensagemIntro("(E você escuta uma risada.)", "falaHiitsumoIntro", "chapeuRindo");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 5) {
        hiitsumoInicial.style.opacity    = "1";
        hiitsumoInicial.style.visibility = "visible";
        cabecaIntro.style.display        = "flex";
        digitarMensagemIntro("Haha… Hahahaha!", "falaHiitsumoIntro", "chapeuRindo");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 6) {
        digitarMensagemIntro("Por um segundo, pensei que não ia dar certo.", "falaHiitsumoIntro", "chapeuCorada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 7) {
        digitarMensagemIntro("Mas conseguimos!", "falaHiitsumoIntro", "chapeuV");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 8) {
        carregar.style.display        = "none";
        hiitsumoInicial.style.display = "none";
        cabecaIntro.style.display     = "none";
        digitarMensagemIntro("(Sua visão fica clara de novo, e sem que você pudesse processar, seguem para o próximo passo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 9) {
        digitarMensagemIntro("(Um passo muito longo no tempo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 10) {
        // troca de fase — emTransicao impede tickBoss2Pre de disparar nesse mesmo clique
        emTransicao     = true;
        faseAtual       = 1;
        HiitsumoEstado2 = 0;
        HiitsumoEstado3 = 0;
        emConexao1      = false;
    }
}