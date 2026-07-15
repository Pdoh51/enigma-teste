// ================================================================================================================
// CONEXÃO 3  —  Após Boss 3 (Dinossauro)
// Controlado por HiitsumoEstado3, chamado após boss3 estado 182
// faseAtual === 3, HiitsumoEstado2 === 0
// ================================================================================================================
console.log("Conexão 3 — Carregando...");
function iniciarConexao3() { /* chamada após boss3 estado 182 */ }

function tickConexao3() {
    if (HiitsumoEstado3 === 0) {
        console.log("Conexão 3 — Iniciando...");
        carregar.style.display           = "flex";
        maquina.src                      = "./src/img/maquina-tempo3.gif";
        aparecerMaquina();
        hiitsumoInicial.style.display    = "flex";
        hiitsumoInicial.style.opacity    = "0";
        hiitsumoInicial.style.visibility = "hidden";
        cabecaIntro.style.display        = "none";
        mensagem1.style.display          = "none";
        mensagem2.style.display          = "none";
        cabeca1.style.display            = "none";
        bossImg.style.display            = "none";
        fundo.style.display              = "flex";
        introducao.style.display         = "flex";
        mensagem.style.display           = "flex";
        fundo.style.pointerEvents        = "none";
        introducao.style.pointerEvents   = "auto";
        mensagem.style.pointerEvents     = "auto";
        digitarMensagemIntro("(Hiitsumo se aproximou da máquina com afinco, e colocou a engrenagem no lugar correto.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 1) {
        // Transição para Boss 4 — monta a tela do boss diretamente
        mensagem.style.display              = "none";
        fundo.style.display                 = "none";
        introducao.style.pointerEvents      = "none";
        mensagem2.style.pointerEvents       = "auto";
        mensagem2.style.display             = "none";
        mensagem1.style.display             = "flex";
        hiitsumoInicial.style.display       = "none";
        cabeca1.style.display               = "flex";
        bossImg.style.display               = "flex";
        bossImg.src                         = "./src/img/boss3.gif";
        Hiitsumo.src                        = "./src/img/hiitsumo-surpresa.gif";
        digitar_Mensagem(`...${nomePlayer}.`, "falaHiitsumo", "surpresa");
        HiitsumoEstado2 = 1;
        HiitsumoEstado3 = 0;
    }
}