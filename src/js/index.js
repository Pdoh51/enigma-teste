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

        mensagem.textContent = "Senha correta!";
        mensagem.style.color = "green";
        document.getElementById("senha").value = "";

        // 🔥 PRIMEIRO: BOSS MORRE
        derrotarBoss();

        // ⏳ ESPERA A ANIMAÇÃO ACABAR PRA IR PRA PRÓXIMA FASE
        setTimeout(() => {

            faseAtual++; // AGORA sim avança a fase

            // 🟢 AINDA EXISTEM FASES
            if (faseAtual < senhas.length) {

                atualizarBoss(); // aparece o próximo boss

                const boss = document.getElementById("boss");
                boss.style.display = "block";
                boss.classList.remove("boss-derrotado");

                mensagemTimeout = setTimeout(() => {
                    mensagem.style.opacity = "0";
                    mensagem.style.display = "none";
                }, 2000);

            }
            // 🏁 FINAL DO JOGO
            else {
                mensagem.textContent = "Você completou o desafio!";
                mensagem.style.color = "green";
                document.querySelector(".linha-senha").style.display = "none";
                mensagem.style.marginTop = "120px";

                setTimeout(() => {
                    mensagem.style.opacity = "0";
                    mensagem.style.display = "none";
                    document.querySelector(".recompensa_final").style.display = "block";
                    // enviarMensagemDiscord();
                }, 3000);
            }

        }, 1600); // TEMPO DA ANIMAÇÃO DO BOSS
    }

    // ❌ SENHA ERRADA
    else {
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

function derrotarBoss() {
    const boss = document.getElementById("boss");

    boss.classList.remove("boss-derrotado");
    void boss.offsetWidth; // reinicia a animação
    boss.classList.add("boss-derrotado");
}

function aparecerHiitsumo() {
    const aparecer = document.getElementById("Hiitsumo");

    aparecer.classList.remove("aparecer");
    void aparecer.offsetWidth;
    aparecer.classList.add("aparecer");
}


let HiitsumoEstado = 0;

document.getElementById("botaoIniciar").addEventListener("click", () => {
    const botao = document.getElementById("botaoIniciar");
    const tela = document.getElementById("iniciar");
    const mensagem = document.getElementById("caixa-dialogo");
    const blang = document.getElementById("blang");
    const hiitsumoInicial = document.getElementsByClassName("Hiitsumo-inicial")[0];
    const cabecaIntro = document.getElementById("cabecaIntro");
    const opcA = document.getElementById("opcaoA");
    const opcB = document.getElementById("opcaoB");

    botao.src = "./src/img/iniciar-pressionado.webp";

    setTimeout(() => {
        tela.style.display = "none";
    }, 1000);

    cabecaIntro.style.display = "none";

    blang.play();
    // depois de 3.5s, mostra a caixa de diálogo e digita a fala
    setTimeout(() => {
        mensagem.style.display = "flex";
        digitarMensagemIntro("AAAHH! Isso é ruim! Ruim!", "falaHiitsumoIntro");
    }, 3500);

    document.querySelector(".introducao").addEventListener("click", () => {

        if (HiitsumoEstado === 0) {
            mensagem.style.display = "block";
            digitarMensagemIntro("(Você não se lembra exatamente como ou quando foi parar aí, nesse lugar vazio e escuro.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 1) {
            digitarMensagemIntro("Não. Não vai funcionar. E agora?!", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 2) {
            digitarMensagemIntro("(Nada além de um vento distante e aquela voz feminina.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 3) {
            digitarMensagemIntro("Ah! Alôoooou! Você aí!", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 4) {
            digitarMensagemIntro("(Você olha na direção dela.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 5) {
            digitarMensagemIntro("Foi mal! Acho que você veio parar aqui por acidente!", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 6) {
            hiitsumoInicial.style.display = "block";
            cabecaIntro.style.display = "block";
            digitarMensagemIntro("Foi mal mesmo! Minha máquina do tempo deve ter te pegado.", "falaHiitsumoIntro");
            HiitsumoEstado += 1
            aparecerHiitsumo();
        } else if (HiitsumoEstado === 7) {
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Onde nós estamos?"', "opcaoA");
            opcB.style.display = "none";
            opcA.onclick = () => {
                HiitsumoEstado += 1;
            };
        } else if (HiitsumoEstado === 8) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            const agora = new Date();
            const hora = agora.getHours();
            digitarMensagemIntro(`Bom, esse deve ser o seu quarto, mas estamos na hora que existe entre ${hora} e ${hora + 1}.`, "falaHiitsumoIntro");
            HiitsumoEstado += 1
        }
    })
});

// Função para digitar texto como em jogo de diálogo
function digitarOpcao(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");

    elemento.textContent = "";
    elemento.style.display = "block";

    textoCompleto = texto;
    pulando = false;
    let i = 0;

    clearInterval(intervaloDigitacao);

    // Inicia o áudio em loop
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();

    intervaloDigitacao = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacao);
            audio.pause();
            audio.currentTime = 0;
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacao);
            audio.pause();
            audio.currentTime = 0;
        }
    }, velocidade);
}

// Função para digitar texto como em jogo de diálogo
function digitarMensagemIntro(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabecaIntro");
    const Hiitsumo = document.getElementById("HiitsumoIntro");


    elemento.textContent = "";
    elemento.style.display = "block";

    textoCompleto = texto;
    pulando = false;
    let i = 0;

    clearInterval(intervaloDigitacao);

    // Troca para imagem de fala
    cabeca.src = "./src/img/cabeca-falando.gif";
    Hiitsumo.src = "./src/img/hiitsumo-falando.gif";

    // Inicia o áudio em loop
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();

    intervaloDigitacao = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacao);
            audio.pause();
            audio.currentTime = 0;

            // Troca para imagem parada
            cabeca.src = "./src/img/cabeca.gif";
            Hiitsumo.src = "./src/img/hiitsumo.gif";
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacao);
            audio.pause();
            audio.currentTime = 0;

            // Troca para imagem parada
            cabeca.src = "./src/img/cabeca.gif";
            Hiitsumo.src = "./src/img/hiitsumo.gif";
        }
    }, velocidade);
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
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");


    elemento.textContent = "";
    elemento.style.display = "block";

    textoCompleto = texto;
    pulando = false;
    let i = 0;

    clearInterval(intervaloDigitacao);

    // Troca para imagem de fala
    cabeca.src = "./src/img/cabeca-falando.gif";
    Hiitsumo.src = "./src/img/hiitsumo-falando.gif";

    // Inicia o áudio em loop
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();

    intervaloDigitacao = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacao);
            audio.pause();
            audio.currentTime = 0;

            // Troca para imagem parada
            cabeca.src = "./src/img/cabeca.gif";
            Hiitsumo.src = "./src/img/hiitsumo.gif";
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacao);
            audio.pause();
            audio.currentTime = 0;

            // Troca para imagem parada
            cabeca.src = "./src/img/cabeca.gif";
            Hiitsumo.src = "./src/img/hiitsumo.gif";
        }
    }, velocidade);
}

// Permite pular a digitação ao clicar na mensagem
document.getElementById("dica").addEventListener("click", () => {
    pulando = true;

    document.getElementById("Hiitsumo").click();
});

document.getElementById("Hiitsumo").addEventListener("click", () => {
    const mensagem = document.getElementById("dica");

    if (faseAtual === 0) {
        if (HiitsumoEstado1 === 0) {
            mensagem.style.display = "block";
            digitarMensagem("Já que meu criador mandou mais trabalho para o desenvolvedor, ele deveria me dar mais imagens e gifs animados bonitos", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 1) {
            digitarMensagem("Tá lá 2 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 2) {
            digitarMensagem("Tá lá 3", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 3) {
            mensagem.style.display = "none";
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 4) {
            mensagem.style.display = "block";
            digitarMensagem("Tá lá 4", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 5) {
            digitarMensagem("Tá lá 5", "falaHiitsumo");
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 6) {
            mensagem.style.display = "none";
            HiitsumoEstado1 += 1;
        } else if (HiitsumoEstado1 === 7) {
            mensagem.style.display = "block";
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
        if (HiitsumoEstado2 === 0) {
            mensagem.style.display = "block";
            digitarMensagem("1", "falaHiitsumo");
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 1) {
            digitarMensagem("2", "falaHiitsumo");
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 2) {
            digitarMensagem("3", "falaHiitsumo");
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 3) {
            mensagem.style.display = "none";
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 4) {
            mensagem.style.display = "block";
            digitarMensagem("4", "falaHiitsumo");
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 5) {
            digitarMensagem("5", "falaHiitsumo");
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 6) {
            mensagem.style.display = "none";
            HiitsumoEstado2 += 1;
        } else if (HiitsumoEstado2 === 7) {
            mensagem.style.display = "block";
            digitarMensagem("6", "falaHiitsumo");
            HiitsumoEstado2 += 1;
        } else {
            mensagem.style.display = "none";
            HiitsumoEstado2 = 0;
        }
    } else if (faseAtual === 2) {
        if (HiitsumoEstado3 === 0) {
            mensagem.style.display = "block";
            digitarMensagem("1", "falaHiitsumo");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 1) {
            digitarMensagem("2", "falaHiitsumo");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 2) {
            digitarMensagem("3", "falaHiitsumo");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 3) {
            digitarMensagem("4", "falaHiitsumo");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 4) {
            digitarMensagem("5", "falaHiitsumo");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 5) {
            mensagem.style.display = "none";
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 6) {
            mensagem.style.display = "block";
            digitarMensagem("6", "mensagemMamaco");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 7) {
            digitarMensagem("7", "mensagemMamaco");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 8) {
            mensagem.style.display = "none";
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 9) {
            mensagem.style.display = "block";
            digitarMensagem("8", "mensagemMamaco");
            HiitsumoEstado3 += 1;
        } else if (HiitsumoEstado3 === 10) {
            digitarMensagem("9", "mensagemMamaco");
            HiitsumoEstado3 += 1;
        } else {
            mensagem.style.display = "none";
            HiitsumoEstado3 = 0;
        }
    } else if (faseAtual === 3) {
        document.getElementById("mensagemMamaco").classList.add("mensagem-fase4");
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