
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

    const estado = {
        Momento
    };

    localStorage.setItem("save_hiitsumo", JSON.stringify(estado));
}

function carregarEstadoSite() {
    if (!SAVE_ATIVO) return false;

    const save = localStorage.getItem("save_hiitsumo");
    if (!save) return false;

    const estado = JSON.parse(save);

    Momento = estado.Momento ?? 0;

    // marca que veio de save
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
    carregarEstadoSite();

    const tela = document.getElementById("iniciar");
    const fundo = document.getElementById("fundo");
    const caixaDialogo = document.getElementById("caixa-dialogo");
    const introducao = document.getElementById("introducao");

    tela.style.display = "flex";
    fundo.style.display = "flex";

    caixaDialogo.style.display = "none";
    introducao.style.display = "none";
});
