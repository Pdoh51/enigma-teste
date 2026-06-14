const TESTE = { ativo: true, fase: 2, estado2: 90, estado3: 0 };

// ================================================================================================================
// VARIÁVEIS GLOBAIS
// ================================================================================================================

let HiitsumoEstado = 0;
let HiitsumoEstado1 = 0;
let HiitsumoEstado2 = 0;
let HiitsumoEstado3 = 0;
let HiitsumoEstado4 = 0;
let HiitsumoEstado5 = 0;

let intervaloDigitacao = null;
let intervaloDigitacaoAtual = null;
let textoCompleto = "";
let pulando = false;
let digitando = false;

let faseAtual = 0;
let mensagemTimeout = null;
let HiitsumoEstadoGlobal = 0;
let somMaquina = null;
let nomePlayer = "";
let indiceEngrenagem = 0;
let jogoIniciado = false;
let emConexao1 = false;
let emTransicao = false; // bloqueia o listener durante troca de fase

const senhas = [
    ["Iyauck y zoack", "Iyauck zoack", "Iyauck y Zoack", "Iyauck Zoack"],
    ["Yutyrannus huali", "Yutyrannus Huali", "yutyrannus huali", "yutyrannus Huali"],
    ["1"],
    ["1"]
];

let senhaDigitada = "";

// ================================================================================================================
// ELEMENTOS DOM
// ================================================================================================================

const botao = document.getElementById("botaoIniciar");
const tela = document.getElementById("iniciar");
const mensagem = document.getElementById("caixa-dialogo");
const mensagem1 = document.getElementById("dica");
const mensagem2 = document.getElementById("caixa-dialogo-boss");
const blang = document.getElementById("blang");
const somBotao = document.getElementById("somBotao");
const hiitsumoInicial = document.getElementsByClassName("Hiitsumo-inicial")[0];
const cabecaIntro = document.getElementById("cabecaIntro");
const cabeca1 = document.getElementById("cabeca1");
const opcoes = document.getElementById("opcoes");
const opcA = document.getElementById("opcaoA");
const opcB = document.getElementById("opcaoB");
const opcoes1 = document.getElementById("opcoes1");
const opcA1 = document.getElementById("opcaoA1");
const opcB1 = document.getElementById("opcaoB1");
const opcC1 = document.getElementById("opcaoC1");
const opcD1 = document.getElementById("opcaoD1");
const carregar = document.getElementById("carregar");
const linhaNome = document.getElementById("nome");
const introducao = document.getElementById("introducao");
const fundo = document.getElementById("fundo");
const fundoImg = document.getElementById("fundoImg");
const magia = document.getElementById("magia");
const somFundo = document.getElementById("somFundo");
const titulo = document.getElementById("titulo");
const dicasFase = document.getElementById("dicas-fase");
const dica1 = document.getElementById("dica-1");
const dica2 = document.getElementById("dica-2");
const dica3 = document.getElementById("dica-3");
const dica4 = document.getElementById("dica-4");
const dica5 = document.getElementById("dica-5");
const maquina = document.getElementById("maquina");
const bossImg = document.getElementById("boss");
const Hiitsumo = document.getElementById("Hiitsumo");
const clickLuz = document.getElementById("clickLuz");
const palmas = document.getElementById("palmas");
const musicaLol = document.getElementById("musicaLol");
const dinossauroPerto = document.getElementById("dinossauroPerto");
const dinossauroRugido = document.getElementById("dinossauroRugido");

/* Músicas */
const hiitsumoMusica = document.getElementById("hiitsumoMusica");
const finalNada = document.getElementById("finalNada");
const antesMago = document.getElementById("antesMago");
const duranteMago = document.getElementById("duranteMago");
const depoisMago = document.getElementById("depoisMago");
const duranteShow = document.getElementById("duranteShow");
const depoisShow = document.getElementById("depoisShow");

// ================================================================================================================
// UTILITÁRIOS
// ================================================================================================================

function enviarMensagemDiscord() {
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1445902272964853997/LoLISuy2fQl5FLskz__wFcrIuXGpLKKwCPHjdPy2DY7NDDn5jIDF2hgi7niySg9DfyQv";
    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: "✅ **Ele Terminou os Enigmas**" })
    })
        .then(() => console.log("Mensagem enviada para o Discord"))
        .catch(err => console.error("Erro ao enviar para o Discord:", err));
}

function entrarTelaCheia() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

function atualizarEngrenagem() {
    const engrenagem = document.getElementById(`engrenagem${indiceEngrenagem}`);
    engrenagem.src = "./src/img/engrenagem-verde.png";
    engrenagem.classList.add("verde");
    indiceEngrenagem++;
}

function esconderOpcoes1() {
    opcoes1.style.display = "none";
    opcA1.style.display = "none";
    opcB1.style.display = "none";
    opcC1.style.display = "none";
    opcD1.style.display = "none";
}


// ================================================================================================================
// HELPER DE OPÇÕES — chama o tick correto após escolha
// ================================================================================================================

function avancarOpcao(novoEstado) {
    HiitsumoEstado2 = novoEstado;
    esconderOpcoes1();
    // Pequeno delay para garantir que o onclick terminou antes de chamar o tick
    setTimeout(() => {
        if (faseAtual === 0)                            tickBoss1();
        else if (faseAtual === 1 && HiitsumoEstado2 > 0) tickBoss2();
        else if (faseAtual === 2 && HiitsumoEstado2 > 0) tickBoss3();
    }, 0);
}
// ================================================================================================================
// LISTENER ÚNICO DE CLIQUE — bosses
// ================================================================================================================

document.addEventListener("click", (e) => {
    // ignora cliques em botões de opção, inputs e botões de UI
    if (e.target.closest(".apertar"))    return; // intro controla o próprio clique
    if (e.target.closest("#opcoes1"))   return;
    if (e.target.closest("#opcoes"))    return;
    if (e.target.closest(".linha-nome")) return;
    if (e.target.closest(".linha-senha")) return;
    if (e.target.closest("#iniciar"))   return;

    if (digitando) { pulando = true; return; }
    if (emTransicao) { emTransicao = false; return; }

    if (emConexao1) { tickConexao1(); return; }
    if (faseAtual === 0 && HiitsumoEstado2 > 0) { tickBoss1(); return; }
    if (faseAtual === 1 && HiitsumoEstado2 === 0) { tickBoss2Pre(); return; }
    if (faseAtual === 1 && HiitsumoEstado2 > 0) { tickBoss2(); return; }
    if (faseAtual === 2 && HiitsumoEstado2 === 0) { tickConexao2(); return; }
    if (faseAtual === 2 && HiitsumoEstado2 > 0) { tickBoss3(); return; }
});

// ================================================================================================================
// BOTÃO INICIAR
// ================================================================================================================

document.getElementById("botaoIniciar").addEventListener("click", () => {
    entrarTelaCheia();

    const veioDoSave01 = localStorage.getItem("veioDoSave") === "true";
    if (veioDoSave01) entradaPosSave01();

    // Reset total
    if (intervaloDigitacaoAtual) { clearInterval(intervaloDigitacaoAtual); intervaloDigitacaoAtual = null; }
    textoCompleto = "";
    pulando = false;
    digitando = false;

    botao.src = "./src/img/iniciar-pressionado.webp";
    somBotao.play();

    setTimeout(() => { tela.style.display = "none"; }, 1000);

    cabecaIntro.style.display = "none";
    mensagem.style.display = "none";

    setTimeout(() => { blang.play(); }, 2000);
    setTimeout(() => { somFundo.loop = true; somFundo.play(); }, 2500);
    setTimeout(() => {
        mensagem.style.display = "block";
        digitarMensagemIntro("AAAHH! Isso é ruim! Ruim!", "falaHiitsumoIntro");
    }, 5000);

    if (TESTE.ativo) {
        faseAtual       = TESTE.fase;
        HiitsumoEstado2 = TESTE.estado2;
        HiitsumoEstado3 = TESTE.estado3 ?? 0;

        // Monta a tela de acordo com a fase de teste
        tela.style.display            = "none";
        mensagem.style.display        = "none";
        carregar.style.display        = "none";
        hiitsumoInicial.style.display = "none";
        cabecaIntro.style.display     = "none";
        opcoes.style.display          = "none";
        opcoes1.style.display         = "none";
        introducao.style.display      = "none";
        fundo.style.display           = "none";

        if (faseAtual === 0) {
            // Boss 1 — tela de boss com hiitsumo e boss visíveis
            mensagem1.style.display = "flex";
            mensagem2.style.display = "none";
            cabeca1.style.display   = "flex";
            bossImg.style.display   = "flex";
        } else if (faseAtual === 1) {
            // Boss 2 — tela de boss
            mensagem1.style.display = "none";
            mensagem2.style.display = "flex";
            cabeca1.style.display   = "none";
            bossImg.style.display   = "flex";
        } else if (faseAtual === 2 && HiitsumoEstado2 === 0) {
            // Conexão 2 — tela de intro (fundo + introducao)
            fundo.style.display            = "flex";
            introducao.style.display       = "flex";
            mensagem.style.display         = "flex";
            fundo.style.pointerEvents      = "none";
            introducao.style.pointerEvents = "auto";
            mensagem.style.pointerEvents   = "auto";
            mensagem1.style.display        = "none";
            mensagem2.style.display        = "none";
        } else if (faseAtual === 2 && HiitsumoEstado2 > 0) {
            // Boss 3 — tela de boss
            mensagem1.style.display = "flex";
            mensagem2.style.display = "none";
            cabeca1.style.display   = "flex";
            bossImg.style.display   = "flex";
        }
        return;
    }

    iniciarIntro();
});

// ================================================================================================================
// CONFIRMAR NOME
// ================================================================================================================

document.getElementById("confirmarNome").addEventListener("click", () => {
    const input = document.getElementById("nomeJogador");
    nomePlayer = input.value.trim();
    if (nomePlayer === "") return;
    document.getElementById("nome").style.display = "none";
    HiitsumoEstado += 1;
});

// ================================================================================================================
// SENHA
// ================================================================================================================

document.getElementById("botaoEnviar").addEventListener("click", () => {
    senhaDigitada = document.getElementById("senha").value.trim();
    const correta = senhas[faseAtual].includes(senhaDigitada);
    if (correta) {
        verificarSenhaCorreta();
    } else {
        verificarSenhaErrada();
    }
});

function verificarSenhaCorreta() {
    document.getElementById("senha").value = "";
    if (faseAtual === 0) {
        HiitsumoEstado2 = 70;
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Hmmmm....`, "falaHiitsumo");
    } else if (faseAtual === 2) {

    }
}

function verificarSenhaErrada() {
    if (faseAtual === 0) {
        HiitsumoEstado2 = 67;
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Hmmmm....`, "falaHiitsumo");
    } else if (faseAtual === 2) {
        
    }
}