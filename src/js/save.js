const SAVE_ATIVO = false;

function obterIdUsuario() {
    let id = localStorage.getItem("idUsuario");

    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("idUsuario", id);
    }

    return id;
}

let introFinalizada = false;
let veioDoSave01 = false;

function salvarEstadoSite() {
    if (!SAVE_ATIVO) return;

    localStorage.setItem("save_hiitsumo", JSON.stringify(estado));
    const idUsuario = obterIdUsuario();

    const estado = {
        faseAtual,
        HiitsumoEstado,
        nomePlayer,
        jogoIniciado
    };

    localStorage.setItem(
        `save_${idUsuario}`,
        JSON.stringify(estado)
    );
}

function carregarEstadoSite() {
    if (!SAVE_ATIVO) return;

    const idUsuario = obterIdUsuario();
    const save = localStorage.getItem(`save_${idUsuario}`);

    if (!save) return false;

    const estado = JSON.parse(save);

    faseAtual = estado.faseAtual ?? 0;
    HiitsumoEstado = estado.HiitsumoEstado ?? 0;
    nomePlayer = estado.nomePlayer ?? "";
    jogoIniciado = estado.jogoIniciado ?? false;

    veioDoSave01 = true;

    // ✅ marca que veio de save
    localStorage.setItem("veioDoSave", "true");

    return true;
}

function obterIdUsuario() {
    let id = localStorage.getItem("idUsuario");

    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("idUsuario", id);
    }

    return id;
}

function salvarEstadoSite() {
    if (!SAVE_ATIVO) return;

    localStorage.setItem("save_hiitsumo", JSON.stringify(estado));
    const idUsuario = obterIdUsuario();

    const estado = {
        faseAtual,
        HiitsumoEstado,
        nomePlayer,
        jogoIniciado
    };

    localStorage.setItem(
        `save_${idUsuario}`,
        JSON.stringify(estado)
    );
}

function carregarEstadoSite() {
    if (!SAVE_ATIVO) return;

    const idUsuario = obterIdUsuario();
    const save = localStorage.getItem(`save_${idUsuario}`);

    if (!save) return false;

    const estado = JSON.parse(save);

    faseAtual = estado.faseAtual ?? 0;
    HiitsumoEstado = estado.HiitsumoEstado ?? 0;
    nomePlayer = estado.nomePlayer ?? "";
    jogoIniciado = estado.jogoIniciado ?? false;

    veioDoSave01 = true;

    // ✅ marca que veio de save
    localStorage.setItem("veioDoSave", "true");

    return true;
}

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