const SAVE_ATIVO = false; // Ativar save

function salvarEstadoSite() {
    if (!SAVE_ATIVO) return;

    const chave = nomePlayer ? `save_${nomePlayer}` : 'save_guest';
    const estado = {
        faseAtual,
        HiitsumoEstado,
        HiitsumoEstado1,
        HiitsumoEstado2,
        HiitsumoEstado3,
        HiitsumoEstado4,
        HiitsumoEstado5,
        nomePlayer,
        jogoIniciado,
        indiceEngrenagem
    };

    localStorage.setItem(chave, JSON.stringify(estado));
}

function carregarEstadoSite() {
    if (!SAVE_ATIVO) return false;

    let chave = nomePlayer ? `save_${nomePlayer}` : null;
    let save = null;

    if (chave) {
        save = localStorage.getItem(chave);
    } else {
        // Se nomePlayer vazio, procurar por qualquer save existente
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('save_')) {
                save = localStorage.getItem(key);
                break; // Carrega o primeiro encontrado
            }
        }
    }

    if (!save) return false;

    const estado = JSON.parse(save);

    faseAtual = estado.faseAtual ?? 0;
    HiitsumoEstado = estado.HiitsumoEstado ?? 0;
    HiitsumoEstado1 = estado.HiitsumoEstado1 ?? 0;
    HiitsumoEstado2 = estado.HiitsumoEstado2 ?? 0;
    HiitsumoEstado3 = estado.HiitsumoEstado3 ?? 0;
    HiitsumoEstado4 = estado.HiitsumoEstado4 ?? 0;
    HiitsumoEstado5 = estado.HiitsumoEstado5 ?? 0;
    nomePlayer = estado.nomePlayer ?? "";
    jogoIniciado = estado.jogoIniciado ?? false;
    indiceEngrenagem = estado.indiceEngrenagem ?? 0;

    return true;
}

let introFinalizada = false;
let veioDoSave01 = false;

function entradaPosSave01() {
    const botao01 = document.getElementById("botaoIniciar");
    const tela01 = document.getElementById("iniciar");
    const fundo01 = document.getElementById("fundo");
    const titulo01 = document.getElementById("titulo");

    botao01.style.display = "none";
    tela01.style.display = "none";
    fundo01.style.display = "none";
    titulo01.style.display = "none";

    // limpa o flag pra não repetir
    localStorage.removeItem("veioDoSave");
}

window.addEventListener("load", () => {
    if (!SAVE_ATIVO) return;

    carregarEstadoSite();

    const tela = document.getElementById("iniciar");
    const fundo = document.getElementById("fundo");
    const caixaDialogo = document.getElementById("caixa-dialogo");
    const introducao = document.getElementById("introducao");

    // ✅ sempre começa igual
    tela.style.display = "flex";
    fundo.style.display = "flex";

    caixaDialogo.style.display = "none";
    introducao.style.display = "none";
});