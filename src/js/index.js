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

    if (senhaDigitada === senhas[faseAtual]) {

        // abre engrenagem da fase atual
        const engrenagem = document.getElementById(`engrenagem${faseAtual}`);
        engrenagem.src = "./src/img/engrenagem-verde.png";
        engrenagem.classList.add("verde");

        mensagem.textContent = "Senha correta!";
        mensagem.style.color = "green";
        document.getElementById("senha").value = "";

        derrotarBoss();

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
            } else {
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

function derrotarBoss() {
    const boss = document.getElementById("boss");

    boss.classList.remove("boss-derrotado");
    void boss.offsetWidth; // reinicia a animação
    boss.classList.add("boss-derrotado");
}

function aparecerHiitsumo() {
    const aparecer = document.getElementById("HiitsumoIntro");

    aparecer.classList.remove("aparecer");
    void aparecer.offsetWidth;
    aparecer.classList.add("aparecer");
}

function desaparecerHiitsumo() {
    const desaparecer = document.getElementById("HiitsumoIntro");

    desaparecer.classList.remove("desaparecer");
    void desaparecer.offsetWidth;
    desaparecer.classList.add("desaparecer");
}


let HiitsumoEstado = 0;

document.getElementById("botaoIniciar").addEventListener("click", () => {

    // ✅ RESET TOTAL AO INICIAR O JOGO
    if (intervaloDigitacaoAtual) {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
    }
    textoCompleto = "";
    pulando = false;
    digitando = false;

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
        mensagem.style.display = "block";
        digitarMensagemIntro("AAAHH! Isso é ruim! Ruim!", "falaHiitsumoIntro");
    }, 3500);

    document.querySelector(".introducao").onclick = () => {

        if (digitando) {
            pulando = true;
            return;
        }

        if (HiitsumoEstado === 0) {
            document.getElementById("caixa-dialogo").style.display = "flex";
            digitarMensagemIntro("(Você não se lembra exatamente como ou quando foi parar aí.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 1) {
            digitarMensagemIntro("(Um lugar vazio e escuro, onde nada parece existir ou mudar)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 2) {
            digitarMensagemIntro("Não. Não vai funcionar. E agora?!", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 3) {
            digitarMensagemIntro("(Nada além de um vento distante e aquela voz feminina.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 4) {
            digitarMensagemIntro("Ah! Alôoooou! Você aí! Bem aqui!", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 5) {
            digitarMensagemIntro("(Você olha na direção dela.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 6) {
            digitarMensagemIntro("Foi mal! Acho que você veio parar aqui por acidente!", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 7) {
            hiitsumoInicial.style.display = "block";
            cabecaIntro.style.display = "block";
            digitarMensagemCorada("Foi mal mesmo! Minha máquina do tempo deve ter te pegado.", "falaHiitsumoIntro");
            HiitsumoEstado += 1;
            aparecerHiitsumo();
        } else if (HiitsumoEstado === 8) {
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Onde nós estamos?"', "opcaoA");
            opcB.style.display = "none";
            opcA.onclick = () => {
                HiitsumoEstado += 1;
            };
        } else if (HiitsumoEstado === 9) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "400px";

            const agora = new Date();
            const hora = agora.getHours();
            digitarMensagemIntro(`Bom, esse deve ser o seu quarto, mas estamos na hora que existe entre às ${hora} e ${hora + 1}.`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 10) {
            document.getElementById("caixa-dialogo").style.maxWidth = "500px";
            digitarMensagemIntro(`Deve ser confuso pra você, eu sei, mas não se preocupe! Essa bugiganga que eu construí com o projeto do meu pai está com alguns problemas, mas você pode voltar pra casa em um instante.`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 11) {
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Você é do futuro?"', "opcaoA");

            opcB.style.display = "block";
            digitarOpcao('"Não entendi nada"', "opcaoB");

            opcA.onclick = () => {
                HiitsumoEstado += 1;
            };

            opcB.onclick = () => {
                HiitsumoEstado += 3;
            };
        } else if (HiitsumoEstado === 12) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "400px";

            digitarMensagemIntro(`HA! Eu finalmente posso falar que sim!`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 13) {
            digitarMensagemIntro(`Eu vim do futuro, sim, do ano de 2309`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 14) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "730px";

            digitarMensagemIntro(`Pra resumir o que está acontecendo, eu tenho uma máquina do tempo que não funciona muito bem, e quando eu tentei usar ela várias peças caíram em épocas e lugares diferentes, então eu estou tentando resgatar elas pra consertar a máquina e voltar pra minha casa, só que ela deve ter te puxado pro raio de distorção temporal por acidente, entendeu?`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 15) {
            document.getElementById("caixa-dialogo").style.display = "none";
            document.getElementById("caixa-dialogo").style.maxWidth = "350px";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"???"', "opcaoA");

            opcB.style.display = "block";
            digitarOpcao('"Entendi"', "opcaoB");

            opcA.onclick = () => {
                HiitsumoEstado += 1;
            };

            opcB.onclick = () => {
                HiitsumoEstado += 2;
            };
        } else if (HiitsumoEstado === 16) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("caixa-dialogo").style.display = "flex";

            digitarMensagemParada(`(Ela parece ter ignorado sua confusão)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 17) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "450px";

            digitarMensagemIntro(`Perfeito então! Pra você voltar pra sua casa, só precisamos esperar uma hora que o efeito deve desaparecer, fácil, não?`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 18) {
            document.getElementById("caixa-dialogo").style.display = "none";
            document.getElementById("caixa-dialogo").style.maxWidth = "350px";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Quero voltar logo"', "opcaoA");

            opcB.style.display = "block";
            digitarOpcao('"Você quer ajuda pra recuperar as peças?"', "opcaoB");

            opcA.onclick = () => {
                HiitsumoEstado += 1;
            };

            opcB.onclick = () => {
                HiitsumoEstado += 5;
            };
        } else if (HiitsumoEstado === 19) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("caixa-dialogo").style.display = "flex";
            document.getElementById("caixa-dialogo").style.maxWidth = "500px";

            digitarMensagemParada(`(Ela acena pra você e volta aos reparos da máquina, você fica entediado, mas antes que pudesse perceber, o vazio foi borrando e…)`, "falaHiitsumoIntro");
            setTimeout(() => {
                desaparecerHiitsumo();
            }, 5500);
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 20) {
            hiitsumoInicial.style.display = "none";
            digitarMensagemIntro(`(Você está de pé no seu quarto, como se nada tivesse acontecido)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 21) {
            digitarMensagemIntro(`(Final alternativo: “O que foi isso?”)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 22) {
            tela.style.display = "flex";
            botao.src = "./src/img/iniciar.png";
            mensagem.style.display = "none";
            document.getElementById("caixa-dialogo").style.maxWidth = "360px";
            hiitsumoInicial.classList.remove("desaparecer");

            resetarDigitacao();

            HiitsumoEstado = 0;
        }
    }
});

function resetarDigitacao() {
    if (intervaloDigitacaoAtual) {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
    }
    textoCompleto = "";
    pulando = false;
    digitando = false;
}


// Função para digitar texto como em jogo de diálogo (introdução)
// variável global para controlar a digitação atual
let intervaloDigitacaoAtual = null;
let textoCompleto = "";
let pulando = false;
let digitando = false;

function digitarOpcao(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    // reset visual
    elemento.textContent = "";
    elemento.style.display = "block";

    // criar áudio LOCAL para esta opção (usa o mesmo src do audioHiitsumo)
    const globalAudio = document.getElementById("audioHiitsumo");
    const audioOpc = new Audio(globalAudio ? globalAudio.src : "");
    audioOpc.loop = false;
    audioOpc.currentTime = 0;
    // tente tocar (pode falhar se navegador bloquear, mas não quebra)
    audioOpc.play().catch(() => { /* ignorar */ });

    // flags/intervalo por elemento (evita interferência entre opções)
    if (elemento._interval) {
        clearInterval(elemento._interval);
        elemento._interval = null;
    }
    elemento._pulando = false;

    // permitir pular a digitação clicando na própria opção
    const handleSkip = (e) => {
        e.stopPropagation();
        elemento._pulando = true;
    };
    elemento.addEventListener("click", handleSkip, { once: false });

    let i = 0;
    elemento._interval = setInterval(() => {
        if (elemento._pulando) {
            elemento.textContent = texto;
            clearInterval(elemento._interval);
            elemento._interval = null;
            audioOpc.pause();
            audioOpc.currentTime = 0;
            elemento.removeEventListener("click", handleSkip);
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(elemento._interval);
            elemento._interval = null;
            audioOpc.pause();
            audioOpc.currentTime = 0;
            elemento.removeEventListener("click", handleSkip);
        }
    }, velocidade);
}

function digitarMensagemIntro(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabecaIntro");
    const Hiitsumo = document.getElementById("HiitsumoIntro");

    if (!elemento) return;

    // Se já estiver digitando, apenas COMPLETA o texto
    if (digitando) {
        pulando = true;
        return;
    }

    // Cancela qualquer intervalo antigo
    if (intervaloDigitacaoAtual) {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
    }

    textoCompleto = texto;
    pulando = false;
    digitando = true;

    elemento.textContent = "";
    elemento.style.display = "block";

    // Áudio
    audio.pause();
    audio.currentTime = 0;
    audio.loop = true;
    audio.play().catch(() => { });

    if (cabeca) cabeca.src = "./src/img/cabeca-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-falando.gif";

    let i = 0;
    intervaloDigitacaoAtual = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacaoAtual);
            intervaloDigitacaoAtual = null;
            digitando = false;
            pulando = false;

            audio.pause();
            audio.currentTime = 0;

            if (cabeca) cabeca.src = "./src/img/cabeca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo.gif";
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacaoAtual);
            intervaloDigitacaoAtual = null;
            digitando = false;

            audio.pause();
            audio.currentTime = 0;

            if (cabeca) cabeca.src = "./src/img/cabeca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo.gif";
        }
    }, velocidade);
}

function digitarMensagemParada(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabecaIntro");
    const Hiitsumo = document.getElementById("HiitsumoIntro");

    if (!elemento) return;

    // Se já estiver digitando, apenas COMPLETA o texto
    if (digitando) {
        pulando = true;
        return;
    }

    // Cancela qualquer intervalo antigo
    if (intervaloDigitacaoAtual) {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
    }

    textoCompleto = texto;
    pulando = false;
    digitando = true;

    elemento.textContent = "";
    elemento.style.display = "block";

    // Áudio
    audio.pause();
    audio.currentTime = 0;
    audio.loop = true;
    audio.play().catch(() => { });

    if (cabeca) cabeca.src = "./src/img/cabeca-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo.gif";

    let i = 0;
    intervaloDigitacaoAtual = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacaoAtual);
            intervaloDigitacaoAtual = null;
            digitando = false;
            pulando = false;

            audio.pause();
            audio.currentTime = 0;

            if (cabeca) cabeca.src = "./src/img/cabeca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo.gif";
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacaoAtual);
            intervaloDigitacaoAtual = null;
            digitando = false;

            audio.pause();
            audio.currentTime = 0;

            if (cabeca) cabeca.src = "./src/img/cabeca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo.gif";
        }
    }, velocidade);
}

function digitarMensagemCorada(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabecaIntro");
    const Hiitsumo = document.getElementById("HiitsumoIntro");

    if (!elemento) return;

    // Se já estiver digitando, apenas COMPLETA o texto
    if (digitando) {
        pulando = true;
        return;
    }

    // Cancela qualquer intervalo antigo
    if (intervaloDigitacaoAtual) {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
    }

    textoCompleto = texto;
    pulando = false;
    digitando = true;

    elemento.textContent = "";
    elemento.style.display = "block";

    // Áudio
    audio.pause();
    audio.currentTime = 0;
    audio.loop = true;
    audio.play().catch(() => { });

    if (cabeca) cabeca.src = "./src/img/cabeca-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada-falando.gif";

    let i = 0;
    intervaloDigitacaoAtual = setInterval(() => {
        if (pulando) {
            elemento.textContent = textoCompleto;
            clearInterval(intervaloDigitacaoAtual);
            intervaloDigitacaoAtual = null;
            digitando = false;
            pulando = false;

            audio.pause();
            audio.currentTime = 0;

            if (cabeca) cabeca.src = "./src/img/cabeca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada.gif";
            return;
        }

        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervaloDigitacaoAtual);
            intervaloDigitacaoAtual = null;
            digitando = false;

            audio.pause();
            audio.currentTime = 0;

            if (cabeca) cabeca.src = "./src/img/cabeca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada.gif";
        }
    }, velocidade);
}


let HiitsumoEstado1 = 0;
let HiitsumoEstado2 = 0;
let HiitsumoEstado3 = 0;
let HiitsumoEstado4 = 0;
let HiitsumoEstado5 = 0;
let intervaloDigitacao = null;

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