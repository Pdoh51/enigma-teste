function entrarTelaCheia() {
    const el = document.documentElement;

    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen(); // Safari
    } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen(); // IE antigo
    }
}



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

function aparecerMaquina() {
    const aparecerMaquina = document.getElementById("maquina");

    aparecerMaquina.classList.remove("aparecer-maquina");
    void aparecerMaquina.offsetWidth;
    aparecerMaquina.classList.add("aparecer-maquina");
}



function processarClique(alvo) {
    if (digitando) {
        pulando = true;
        return;
    }

    switch (Momento) {
        case 0:
            fluxoMomento0();
            break;
        case 1:
            fluxoMomento1();
            break;
        case 2:
            fluxoMomento2(alvo);
            break;
    }
}

document.addEventListener("click", (e) => {
    processarClique(e.target);
});


let HiitsumoEstado = 0;
let Momento = 0;
let somMaquina = null;

const botao = document.getElementById("botaoIniciar");
const tela = document.getElementById("iniciar");
const mensagem = document.getElementById("caixa-dialogo");
const blang = document.getElementById("blang");
const hiitsumoInicial = document.getElementsByClassName("Hiitsumo-inicial")[0];
const cabecaIntro = document.getElementById("cabecaIntro");
const opcA = document.getElementById("opcaoA");
const opcB = document.getElementById("opcaoB");
const carregar = document.getElementById("carregar");
const linhaNome = document.getElementById("nome");
const introducao = document.getElementById("introducao");
const fundo = document.getElementById("fundo");
const titulo = document.getElementById("titulo");

document.getElementById("botaoIniciar").addEventListener("click", () => {
    entrarTelaCheia();

    const veioDoSave01 = localStorage.getItem("veioDoSave") === "true";

    // SE VEIO DE SAVE, executa só a lógica
    if (veioDoSave01) {
        entradaPosSave01();
    }

    // RESET TOTAL AO INICIAR O JOGO
    if (intervaloDigitacaoAtual) {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
    }
    textoCompleto = "";
    pulando = false;
    digitando = false;

    botao.src = "./src/img/iniciar-pressionado.webp";

    setTimeout(() => {
        tela.style.display = "none";
    }, 1000);
});


function fluxoMomento0() {
    const somMaquina = document.getElementById("somMaquina");

    // 1) Primeira entrada no Momento 0
    if (HiitsumoEstado === 0 && !fluxoMomento0.iniciado) {
        fluxoMomento0.iniciado = true;

        cabecaIntro.style.display = "none";

        if (!SAVE_ATIVO || !veioDoSave01) {
            blang.play();
        }

        setTimeout(() => {
            mensagem.style.display = "block";
            introducao.style.display = "flex";
            digitarMensagemIntro("AAAHH! Isso é ruim! Ruim!", "falaHiitsumoIntro");
        }, 3500);

        return;
    }

    // 2) Bloqueio de pulo de digitação
    if (digitando) {
        pulando = true;
        return;
    }


    // 3) Máquina de estados do Momento 0
    switch (HiitsumoEstado) {
        case 0:
            document.getElementById("caixa-dialogo").style.display = "flex";
            digitarMensagemIntro("(Você não se lembra exatamente como ou quando foi parar aí.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 1:
            digitarMensagemIntro("(Um lugar vazio e escuro, onde nada parece existir ou mudar)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 2:
            digitarMensagemIntro("Não. Não vai funcionar. E agora?!", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 3:
            digitarMensagemIntro("(Nada além de um vento distante e aquela voz feminina.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 4:
            digitarMensagemIntro("Ah! Alôoooou! Você aí! Bem aqui!", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 5:
            digitarMensagemIntro("(Você olha na direção dela.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 6:
            digitarMensagemIntro("Foi mal! Acho que você veio parar aqui por acidente!", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 7:
            hiitsumoInicial.style.display = "block";
            cabecaIntro.style.display = "block";
            digitarMensagemCorada("Foi mal mesmo! Minha máquina do tempo deve ter te pegado.", "falaHiitsumoIntro");
            aparecerHiitsumo();
            HiitsumoEstado++;
            break;

        case 8:
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Onde nós estamos?"', "opcaoA");

            opcB.style.display = "none";

            opcA.onclick = () => {
                HiitsumoEstado++;
            };
            break;

        case 9:
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "400px";

            const agora = new Date();
            const hora = agora.getHours();
            digitarMensagemNerd(
                `Bom, esse deve ser o seu quarto, mas estamos na hora que existe entre às ${hora} e ${hora + 1}.`,
                "falaHiitsumoIntro"
            );

            HiitsumoEstado++;
            break;

        case 10:
            document.getElementById("caixa-dialogo").style.maxWidth = "500px";
            digitarMensagemFeliz(
                `Deve ser confuso pra você, eu sei, mas não se preocupe! Essa bugiganga que eu construí com o projeto do meu pai está com alguns problemas, mas você pode voltar pra casa em um instante.`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 11:
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Você é do futuro?"', "opcaoA");

            opcB.style.display = "block";
            digitarOpcao('"Não entendi nada"', "opcaoB");

            opcA.onclick = () => {
                HiitsumoEstado++;
            };

            opcB.onclick = () => {
                HiitsumoEstado += 3;
            };
            break;

        case 12:
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "400px";

            digitarMensagemFeliz(`HA! Eu finalmente posso falar que sim!`, "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 13:
            digitarMensagemV(`Eu vim do futuro, sim, do ano de 2309`, "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 14:
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            document.getElementById("caixa-dialogo").style.display = "flex";
            cabecaIntro.style.display = "block";

            document.getElementById("caixa-dialogo").style.maxWidth = "750px";

            digitarMensagemIntro(
                `Pra resumir o que está acontecendo, eu tenho uma máquina do tempo que não funciona muito bem, e quando eu tentei usar ela várias peças caíram em épocas e lugares diferentes, então eu estou tentando resgatar elas pra consertar a máquina e voltar pra minha casa, só que ela deve ter te puxado pro raio de distorção temporal por acidente, entendeu?`,
                "falaHiitsumoIntro"
            );

            HiitsumoEstado++;
            break;

        case 15:
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"???"', "opcaoA");

            opcB.style.display = "block";
            digitarOpcao('"Entendi"', "opcaoB");

            opcA.onclick = () => {
                HiitsumoEstado++;
            };

            opcB.onclick = () => {
                HiitsumoEstado += 2;
            };
            break;

        case 16:
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("caixa-dialogo").style.display = "flex";
            document.getElementById("caixa-dialogo").style.maxWidth = "450px";

            digitarMensagemParada(`(Ela parece ter ignorado sua confusão)`, "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 17:
            cabecaIntro.style.display = "block";
            opcoes.style.display = "none";
            mensagem.style.display = "flex";
            document.getElementById("caixa-dialogo").style.maxWidth = "500px";

            digitarMensagemMao(
                `Perfeito então! Pra você voltar pra sua casa, só precisamos esperar uma hora que o efeito deve desaparecer, fácil, não?`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 18:
            document.getElementById("caixa-dialogo").style.display = "none";
            cabecaIntro.style.display = "none";

            document.getElementById("opcoes").style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Quero voltar logo"', "opcaoA");

            opcB.style.display = "block";
            digitarOpcao('"Você quer ajuda pra recuperar as peças?"', "opcaoB");

            opcA.onclick = () => {
                HiitsumoEstado++;
            };

            opcB.onclick = () => {
                HiitsumoEstado += 5;
            };
            break;

        case 19:
            document.getElementById("opcoes").style.display = "none";
            mensagem.style.display = "flex";
            mensagem.style.maxWidth = "500px";

            digitarMensagemParada(
                `(Ela acena pra você e volta aos reparos da máquina, você fica entediado, mas antes que pudesse perceber, o vazio foi borrando e…)`,
                "falaHiitsumoIntro"
            );

            setTimeout(() => {
                desaparecerHiitsumo();
            }, 5500);

            HiitsumoEstado++;
            break;

        case 20:
            hiitsumoInicial.style.display = "none";
            digitarMensagemIntro(
                `(Você está de pé no seu quarto, como se nada tivesse acontecido)`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 21:
            mensagem.style.border = "4px solid #fff8a8"
            digitarMensagemIntro(
                `(Final alternativo: “O que foi isso?”)`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 22:
            mensagem.style.border = "4px solid #c9780e";
            tela.style.display = "flex";
            botao.src = "./src/img/iniciar.png";
            mensagem.style.display = "none";
            document.getElementById("caixa-dialogo").style.maxWidth = "360px";
            hiitsumoInicial.classList.remove("desaparecer");

            HiitsumoEstado = 0;
            break;

        case 23:
            document.getElementById("opcoes").style.display = "none";
            cabecaIntro.style.display = "block";
            mensagem.style.display = "flex"
            mensagem.style.maxWidth = "400px";

            digitarMensagemAnimada(
                `Sério?! Você faria isso?! Pois então vamos! São 5 peças que eu perdi e com sua ajuda não deve demorar muito!`,
                "falaHiitsumoIntro"
            );

            HiitsumoEstado++;
            break;

        case 24:
            cabecaIntro.style.display = "none";
            carregar.style.display = "flex";
            aparecerMaquina();

            digitarMensagemParadaFeliz(
                `(Ela vai com passos rápidos até a máquina do tempo e você vai atrás dela)`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 25:
            document.getElementById("caixa-dialogo").style.maxWidth = "450px";
            digitarMensagemParadaFeliz(
                `(Ela toca em alguns botões para iniciar a máquina, você fica apreensivo, mas algo te diz que vai ficar tudo certo)`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 26:
            cabecaIntro.style.display = "block";
            document.getElementById("caixa-dialogo").style.maxWidth = "400px";

            digitarMensagemFeliz(
                `Ei, eu quero te agradecer pela sua gentileza, qual o seu nome?`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 27:
            cabecaIntro.style.display = "none";
            mensagem.style.display = "none";
            linhaNome.style.display = "flex";
            break;

        case 28:
            cabecaIntro.style.display = "block";
            mensagem.style.display = "flex";
            linhaNome.style.display = "none";
            mensagem.style.maxWidth = "450px";

            digitarMensagemFeliz(
                `É um prazer te conhecer, ${nomePlayer}.`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 29:
            cabecaIntro.style.display = "none";
            mensagem.classList.add("tremer");
            carregar.classList.add("tremer");

            somMaquina.loop = true;
            somMaquina.currentTime = 0;
            somMaquina.play();

            digitarMensagemParadaFeliz(
                `(Você sente a máquina tremer e o espaço ao seu redor acelerar e distorcer, como uma turbulência)`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 30:
            digitarMensagemParadaFeliz(
                `(É realmente um tanto assustador, mas ela parece estar acostumada, e com um sorriso, ela diz…)`,
                "falaHiitsumoIntro"
            );
            HiitsumoEstado++;
            break;

        case 31:
            cabecaIntro.style.display = "block";
            mensagem.classList.remove("tremer");
            carregar.classList.remove("tremer");

            somMaquina.loop = false;
            somMaquina.pause();
            somMaquina.currentTime = 0;

            mensagem.style.maxWidth = "360px";
            digitarMensagemFeliz(`O meu nome é Hiitsumo!`, "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 32:
            introducao.style.display = "none";
            carregar.style.display = "none";
            titulo.style.display = "flex";
            mensagem.style.display = "none";

            jogoIniciado = true;
            salvarEstadoSite();

            setTimeout(() => {
                titulo.style.display = "none";
                HiitsumoEstado = 0;
                Momento = 1;
                fluxoMomento0.iniciado = false; // reset inicial

            }, 4000);

            setTimeout(() => {
                hiitsumoInicial.style.display = "none";
                carregar.style.display = "flex";
                carregar.style.zIndex = "6"
                cabecaIntro.style.display = "none";
                mensagem.style.position = "absolute";
                mensagem.style.opacity = "0"

                digitarMensagemParada(``, "falaHiitsumoIntro");

                fluxoMomento1({ auto: true });
            }, 5000)
            break;
    }
}

function fluxoMomento1() {
    // Se for a primeira vez entrando no Momento 1
    if (!fluxoMomento1.iniciado) {
        fluxoMomento1.iniciado = true;

        introducao.style.display = "flex";
        carregar.style.display = "flex";
        mensagem.style.display = "flex";

        // reset do estado
        HiitsumoEstado = 0;

        return; // evita rodar o restante imediatamente
    }

    // Se ainda está digitando, só pula
    if (digitando) {
        pulando = true;
        return;
    }

    // Máquina de estados do Momento 1
    switch (HiitsumoEstado) {

        case 0:
            titulo.style.display = "none";
            hiitsumoInicial.style.display = "none";
            carregar.style.display = "flex";
            carregar.style.cursor = "pointer";
            carregar.style.zIndex = "4"
            mensagem.style.display = "block";
            mensagem.style.opacity = "1";

            mensagem.style.position = "absolute";
            mensagem.style.top = "530px";
            mensagem.style.left = "36%";

            digitarMensagemIntro("(Os ruídos da máquina do tempo somem após um instante)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 1:
            digitarMensagemIntro("(Sua visão começa a clarear e…)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 2:
            carregar.style.display = "none";
            carregar.style.cursor = "none";
            hiitsumoInicial.style.display = "flex";

            mensagem.style.position = "";
            mensagem.style.top = "";
            mensagem.style.left = "";

            digitarMensagemParadaFeliz("(Hiitsumo está bem a sua frente, olhando de um lado pro outro.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 3:
            mensagem.style.maxWidth = "400px";
            digitarMensagemParadaFeliz("(Você se vê dentro de um salão muito grande, com várias estantes de livro e candelabros.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 4:
            digitarMensagemParadaFeliz("(De um dos lados, você vê uma prateleira exibindo vassouras muito bem ornamentadas.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 5:
            digitarMensagemParadaFeliz("(O chão é empoeirado, apesar da quantidade ridícula de vassouras.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 6:
            digitarMensagemParadaFeliz("(O lugar cheira a gengibre e cinzas.)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 7:
            opcoes.style.display = "block";
            mensagem.style.display = "none";

            opcA.style.display = "block";
            digitarOpcao('"Cadê a máquina?"', "opcaoA");

            opcB.style.display = "none";

            opcA.onclick = () => {
                HiitsumoEstado++;
            };
            break;

        case 8:
            opcoes.style.display = "none";
            mensagem.style.display = "flex";
            cabecaIntro.style.display = "flex";
            digitarMensagemFeliz("No meu bolso.", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 9:
            mensagem.style.maxWidth = "450px";
            digitarMensagemFeliz("Sim, isso mesmo. Literalmente.", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 10:
            digitarMensagemNerd("Por questões de conveniência, eu implementei uma versão miniatura da máquina para carregar ela por aí.", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 11:
            mensagem.style.maxWidth = "400px";
            digitarMensagemFeliz("Mas preciso de um espaço bom para usar ela.", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 12:
            cabecaIntro.style.display = "none";
            digitarMensagemParadaFeliz("(Hiitsumo olha ao redor outra vez e lhe diz...)", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 13:
            cabecaIntro.style.display = "flex"
            digitarMensagemBeicinho("Bem, já sei onde nós estamos, melhor acharmos a peça logo…", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 14:
            digitarMensagemFeliz("Bom, ela não deve estar muito longe.", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 15:
            digitarMensagemFeliz("E pra esclarecer, estamos na era medieval se você não percebeu.", "falaHiitsumoIntro");
            HiitsumoEstado++;
            break;

        case 16:
            digitarMensagemFeliz("PAROU AQUI PQ TÁ COMPLICADO", "falaHiitsumoIntro");
            break;

        case 20:
            salvarEstadoSite();

            fluxoMomento1.iniciado = false;
            Momento = 2;  // OU o momento que você quiser
            break;
    }
}

function fluxoMomento2(alvo) {

    // Só reage se clicou exatamente no Hiitsumo
    if (!alvo || alvo.id !== "Hiitsumo") return;

    const mensagem1 = document.getElementById("dica");

    // ============================
    // FASE ATUAL 0
    // ============================
    if (faseAtual === 0) {

        switch (HiitsumoEstado1) {

            case 0:
                mensagem1.style.display = "flex";
                digitarMensagem(
                    "Já que meu criador mandou mais trabalho para o desenvolvedor, ele deveria me dar mais imagens e gifs animados bonitos",
                    "falaHiitsumo"
                );
                HiitsumoEstado1++;
                break;

            case 1:
                digitarMensagem(
                    "Tá lá 2 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ...",
                    "falaHiitsumo"
                );
                HiitsumoEstado1++;
                break;

            case 2:
                digitarMensagem("Tá lá 3", "falaHiitsumo");
                HiitsumoEstado1++;
                break;

            case 3:
                mensagem1.style.display = "none";
                HiitsumoEstado1++;
                break;

            case 4:
                mensagem1.style.display = "flex";
                digitarMensagem("Tá lá 4", "falaHiitsumo");
                HiitsumoEstado1++;
                break;

            case 5:
                digitarMensagem("Tá lá 5", "falaHiitsumo");
                HiitsumoEstado1++;
                break;

            case 6:
                mensagem1.style.display = "none";
                HiitsumoEstado1++;
                break;

            case 7:
                mensagem1.style.display = "flex";
                digitarMensagem("Tá lá 6", "falaHiitsumo");
                HiitsumoEstado1++;
                break;

            case 8:
                digitarMensagem("Tá lá 7", "falaHiitsumo");
                HiitsumoEstado1++;
                break;

            default:
                mensagem1.style.display = "none";
                HiitsumoEstado1 = 0;
                break;
        }

        return;
    }

    // ============================
    // FASE ATUAL 1
    // ============================
    if (faseAtual === 1) {

        switch (HiitsumoEstado2) {

            case 0:
                mensagem1.style.display = "flex";
                digitarMensagem("1", "falaHiitsumo");
                HiitsumoEstado2++;
                break;

            case 1:
                digitarMensagem("2", "falaHiitsumo");
                HiitsumoEstado2++;
                break;

            case 2:
                digitarMensagem("3", "falaHiitsumo");
                HiitsumoEstado2++;
                break;

            case 3:
                mensagem1.style.display = "none";
                HiitsumoEstado2++;
                break;

            case 4:
                mensagem1.style.display = "flex";
                digitarMensagem("4", "falaHiitsumo");
                HiitsumoEstado2++;
                break;

            case 5:
                digitarMensagem("5", "falaHiitsumo");
                HiitsumoEstado2++;
                break;

            case 6:
                mensagem1.style.display = "none";
                HiitsumoEstado2++;
                break;

            case 7:
                mensagem1.style.display = "flex";
                digitarMensagem("6", "falaHiitsumo");
                HiitsumoEstado2++;
                break;

            default:
                mensagem1.style.display = "none";
                HiitsumoEstado2 = 0;
                break;
        }

        return;
    }
}

let nomePlayer = "";

document.getElementById("confirmarNome").addEventListener("click", () => {
    const input = document.getElementById("nomeJogador");
    nomePlayer = input.value.trim();

    if (nomePlayer === "") {
        return;
    }

    // Esconde a caixa depois de confirmar
    document.getElementById("nome").style.display = "none";
    HiitsumoEstado += 1;
});


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
    if (!SAVE_ATIVO || !veioDoSave01) {
        audio.play().catch(() => { });
    }

    if (cabeca) cabeca.src = "./src/img/cabeca-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";
        }
    }, velocidade);
}

function digitarMensagemParadaFeliz(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz.gif";
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

function digitarMensagemNerd(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-nerd-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-nerd.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-nerd.gif";
        }
    }, velocidade);
}

function digitarMensagemV(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-V-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-V.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-V.gif";
        }
    }, velocidade);
}

function digitarMensagemMao(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-mao-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-mao.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-mao.gif";
        }
    }, velocidade);
}

function digitarMensagemAnimada(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-animada-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-animada.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-animada.gif";
        }
    }, velocidade);
}

function digitarMensagemFeliz(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz.gif";
        }
    }, velocidade);
}

function digitarMensagemBeicinho(texto, elementoId, velocidade = 40) {
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
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho-falando.gif";

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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho.gif";
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
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho.gif";
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

// Permite pular a digitação ao clicar na mensagem
document.getElementById("dica").addEventListener("click", () => {
    pulando = true;

    document.getElementById("Hiitsumo").click();
})
