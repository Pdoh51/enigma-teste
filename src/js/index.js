const senhas = [
    "1",
    "1",
    "1",
    "1",
    "1"];
let faseAtual = 0;
let mensagemTimeout = null;

function verificarSenha() {
    const senhaDigitada = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    // LIMPA QUALQUER TIMEOUT ANTERIOR
    clearTimeout(mensagemTimeout);

    // FORÇA A MENSAGEM A APARECER
    mensagem.style.opacity = "1";
    mensagem.style.display = "block";

    // SENHA CORRETA
    if (senhaDigitada === senhas[faseAtual]) {

        // abre engrenagem da fase atual
        const engrenagem = document.getElementById(`engrenagem${faseAtual}`);
        engrenagem.src = "./src/img/engrenagem-verde.png";
        engrenagem.classList.add("verde");

        // avança fase
        faseAtual++;

        atualizarBoss(); // muda a imagem do boss conforme a fase


        // AINDA EXISTEM FASES
        if (faseAtual < senhas.length) {
            mensagem.textContent = "Senha correta!";
            mensagem.style.color = "green";
            document.getElementById("senha").value = "";

            // ESCONDE APÓS 2s
            mensagemTimeout = setTimeout(() => {
                mensagem.style.opacity = "0";
                mensagem.style.display = "none";
            }, 2000);

            // FINAL DO JOGO
        } else {
            mensagem.textContent = "Você completou o desafio!";
            mensagem.style.color = "green";
            document.querySelector(".linha-senha").style.display = "none";
            mensagem.style.marginTop = "120px";

            setTimeout(() => {
                mensagem.style.opacity = "0";
                mensagem.style.display = "none";
                document.querySelector(".recompensa_final").style.display = "block";
                //enviarMensagemDiscord();
            }, 3000);
        }

        // SENHA ERRADA
    } else {
        mensagem.textContent = "Senha incorreta!";
        mensagem.style.color = "red";

        mensagemTimeout = setTimeout(() => {
            mensagem.style.opacity = "0";
            mensagem.style.display = "none";
        }, 2000);
    }
}

function atualizarBoss() {
    const bossImg = document.getElementById("boss");
    bossImg.src = `./src/img/boss${faseAtual}.webp`;
}

function enviarMensagemDiscord() {
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1445902272964853997/LoLISuy2fQl5FLskz__wFcrIuXGpLKKwCPHjdPy2DY7NDDn5jIDF2hgi7niySg9DfyQv";

    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: "✅ **Ele Terminou os Enigmas**"
        })
    })
        .then(() => {
            console.log("Mensagem enviada para o Discord");
        })
        .catch((err) => {
            console.error("Erro ao enviar para o Discord:", err);
        });
}



let HiitsumoEstado1 = 0;
let HiitsumoEstado2 = 0;
let HiitsumoEstado3 = 0;
let HiitsumoEstado4 = 0;
let HiitsumoEstado5 = 0;
let intervaloDigitacao = null;
let textoCompleto = "";
let pulando = false;

// Função para digitar texto como em jogo de diálogo
function digitarMensagem(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    elemento.textContent = "";
    elemento.style.display = "block";

    textoCompleto = texto;
    pulando = false;
    let i = 0;

    clearInterval(intervaloDigitacao);
    intervaloDigitacao = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacao);
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacao);
        }
    }, velocidade);
}

// Permite pular a digitação ao clicar na mensagem
document.getElementById("falaHiitsumo").addEventListener("click", () => {
    pulando = true;

    // Simula o clique no Nokia
    document.querySelector(".Hiitsumo").click();
});

document.querySelector(".Hiitsumo").addEventListener("click", () => {
    const mensagem = document.getElementById("falaHiitsumo");

    if (faseAtual === 0) {
        if (HiitsumoEstado1 === 0) {
            digitarMensagem("Tá lá 1", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 1) {
            digitarMensagem("Tá lá 2", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 2) {
            digitarMensagem("Tá lá 3", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 3) {
            mensagem.style.display = "none";
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 4) {
            digitarMensagem("Tá lá 4", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 5) {
            digitarMensagem("Tá lá 5", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 6) {
            mensagem.style.display = "none";
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 7) {
            digitarMensagem("Tá lá 6", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 8) {
            digitarMensagem("Tá lá 7", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else {
            mensagem.style.display = "none";
            HiitsumoEstado1 = 0;
        }
    } else if (faseAtual === 1) {
        if (mamacoEstado2 === 0) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Fala gorilão! Tô vendo aqui que você conseguiu passar de fase, meus parabéns sabia que você iria conseguir.", "mensagemMamaco");
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 1) {
            digitarMensagem("Tá querendo uma dica agora né? Deixa eu pensar aqui hmmmm...", "mensagemMamaco");
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 2) {
            digitarMensagem("A resposta da fase é a resposta das 3 perguntas tudo junto, sem espaço.", "mensagemMamaco");
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 3) {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 4) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Já quer outra dica? Beleza, deixa eu pensar hmmmmmm...", "mensagemMamaco");
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 5) {
            digitarMensagem("Presta atenção na música e no contexto do texto, as respostas vão estar na origem desses 2.", "mensagemMamaco");
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 6) {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado2 += 1;
        } else if (mamacoEstado2 === 7) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Última dica em. As respostas são todas números e se você não percebeu ainda, as respostas estão no Clash Royale. Se tá difícil vai reclamar com quem fez essa merda.", "mensagemMamaco");
            mamacoEstado2 += 1;
        } else {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado2 = 0;
        }
    } else if (faseAtual === 2) {
        if (mamacoEstado3 === 0) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Fala golira! Parabéns pela última em, mas agora se tá fudidu essa tá em nerdes.", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 1) {
            digitarMensagem("Esse é complicado, deixa eu pensar numa dica aqui hmmmm...", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 2) {
            digitarMensagem("Essa aí pelo que me falaram a resposta é só traduzir esse texto e mandar ele inteiro.", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 3) {
            digitarMensagem(".............. hmmmmmmm ..............", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 4) {
            digitarMensagem("Pediram aqui também pra você não usar gpt ou pesquisar pra traduzir, se não mamaco não ganha banana e nerd que fez esse enigma fica triste, mas confio que você não vai fazer isso, né?", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 5) {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 6) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Nerdes é difícil né? Mas eu te ajudo, deixa eu pensar aqui hmmmmm...", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 7) {
            digitarMensagem("Nesse texto tem alguns espaços de escrita, pra separar palavras e tals, eles são 00100000, 040 e 20, aí tu tenta resolver alguma coisa com isso.", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 8) {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 9) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Os orangotangos da sabedoria aqui perceberam que é meio complicado traduzir isso aí sem pesquisar. O que você não fez né? Bom, não importa muito, se você tá me ligando de novo não deve ter pesquisado, então eles me mandaram te entregar uma coisa aqui, deve chegar daqui a pouco...", "mensagemMamaco");
            mamacoEstado3 += 1;
        } else if (mamacoEstado3 === 10) {
            digitarMensagem("Opa! chegou aí né? Agora eu acho que da pra fazer de boa. Aliás essa foi a última dica tá, depois disso só vou repetir.", "mensagemMamaco");
            document.getElementById("imagemAlfabeto1").style.display = "block";
            document.getElementById("imagemAlfabeto2").style.display = "block";
            document.getElementById("imagemAlfabeto3").style.display = "block";
            mamacoEstado3 += 1;
        } else {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado3 = 0;
        }
    } else if (faseAtual === 3) {
        document.getElementById("mensagemMamaco").classList.add("mensagem-fase4");
        document.getElementById("imagemAlfabeto1").style.display = "none";
        document.getElementById("imagemAlfabeto2").style.display = "none";
        document.getElementById("imagemAlfabeto3").style.display = "none";
        if (mamacoEstado4 === 0) {
            imagemMamaco.src = "./src/img/gorila.gif";
            digitarMensagem("Hm? Quem ligar pra mamaco da dica? Alô? Hmmmm, mamaco da dica sair. Pegar mais Banana. Golira da ajuda dar dica.", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 1) {
            digitarMensagem("Hmmmmm, mim não entender porra nenhuma, mim não enxergar nada, luz pouca, Golira precisa de mais luz! Não ter luz, não enxergar nada, adeus.", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 2) {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 3) {
            imagemMamaco.src = "./src/img/gorila.gif";
            digitarMensagem("Hm? Mais dica? Mamaco da Dica ainda não voltar. Mim não gostar de dica, Golira ajuda, não dica. Mas Golira tenta.", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 4) {
            digitarMensagem("Hmmmmmm.. Sim... sim... Golira vê... Precisa de ajuda???? Mim ajuda... Golira sentiu... GOLIRA SABE!! SIMM!! GOLIRA SENTE!! ENIGMA GOSTAR DE ROCK!!!!", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 5) {
            digitarMensagem("U U U U U U U AAAAH AAAAH AAAAH!!!", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 6) {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 7) {
            imagemMamaco.src = "./src/img/gorila.gif";
            digitarMensagem("O QUE? MAIS DICA?", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 8) {
            digitarMensagem("MIM JÁ DIZER! GOLIRA AJUDA! NÃO GOLIRA DICA!!!", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else if (mamacoEstado4 === 9) {
            digitarMensagem("Última dica de Golira da ajuda.. Ordem das criaturas importar, sem ordem das criaturas, sem resposta do enigma... ADEUS!!!", "mensagemMamaco");
            mamacoEstado4 += 1;
        } else {
            imagemMamaco.src = "./src/img/nokia.gif";
            mensagem.style.display = "none";
            mamacoEstado4 = 0;
        }
    } else if (faseAtual === 4) {
        if (mamacoEstado5 === 0) {
            imagemMamaco.src = "./src/img/mamaco.gif";
            digitarMensagem("Aí já tá de sacanagem, não faço ideia de como resolver, não tão me pagando bananas o suficiente pra tudo isso de ligação, nunca vi um mamaco tão burro quanto eu, pode falar pra eles que eu me demito, THAU!!!", "mensagemMamaco");
            mamacoEstado5 += 1;
        } else {
            imagemMamaco.style.display = "none";
            mensagem.style.display = "none";
        }
    }
});