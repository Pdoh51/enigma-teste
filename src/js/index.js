let HiitsumoEstado1 = 0;
let HiitsumoEstado2 = 0;
let HiitsumoEstado3 = 0;
let HiitsumoEstado4 = 0;
let HiitsumoEstado5 = 0;
let intervaloDigitacao = null;

let faseAtual = 0;
let mensagemTimeout = null;

let HiitsumoEstado = 0;
let somMaquina = null;

let nomePlayer = "";

let intervaloDigitacaoAtual = null;
let textoCompleto = "";
let pulando = false;
let digitando = false;

let indiceEngrenagem = 0;

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
const carregar = document.getElementById("carregar");
const linhaNome = document.getElementById("nome");
const introducao = document.getElementById("introducao");
const fundo = document.getElementById("fundo");
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



const senhas = [
    ["Iyauck y zoack", "Iyauck zoack", "Iyauck y Zoack", "Iyauck Zoack"],
    ["1"],
    ["1"],
    ["1"],
    ["1"]
];



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
    somBotao.play();

    setTimeout(() => {
        tela.style.display = "none";
    }, 1000);

    cabecaIntro.style.display = "none";
    mensagem.style.display = "none";

    setTimeout(() => {
        blang.play();
    }, 2000);

    setTimeout(() => {
        somFundo.loop = true;
        somFundo.play();
    }, 2500);

    setTimeout(() => {
        mensagem.style.display = "block";
        digitarMensagemIntro("AAAHH! Isso é ruim! Ruim!", "falaHiitsumoIntro");
    }, 5000);

    document.querySelector(".apertar").onclick = () => {
        const somMaquina = document.getElementById("somMaquina");

        if (digitando) {
            pulando = true;
            return;
        }

        if (HiitsumoEstado === 0) {
            mensagem.style.display = "flex";
            digitarMensagemIntro("(Você não se lembra exatamente como ou quando foi parar aí.)", "falaHiitsumoIntro");
            HiitsumoEstado += 32;
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
            aparecerHiitsumo();
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 8) {
            mensagem.style.display = "none";
            cabecaIntro.style.display = "none";
            opcoes.style.display = "block";

            opcA.style.display = "block";
            digitarOpcao('"Onde nós estamos?"', "opcaoA");

            opcB.style.display = "none";

            opcA.onclick = () => {
                HiitsumoEstado += 1;
            };
        } else if (HiitsumoEstado === 9) {
            opcoes.style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display = "flex";
            cabecaIntro.style.display = "block";

            mensagem.style.maxWidth = "400px";

            const agora = new Date();
            const hora = agora.getHours();
            digitarMensagemNerd(`Bom, esse deve ser o seu quarto, mas estamos na hora que existe entre às ${hora} e ${hora + 1}.`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 10) {
            mensagem.style.maxWidth = "500px";
            digitarMensagemFeliz(`Deve ser confuso pra você, eu sei, mas não se preocupe! Essa bugiganga que eu construí com o projeto do meu pai está com alguns problemas, mas você pode voltar pra casa em um instante.`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 11) {
            mensagem.style.display = "none";
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
            mensagem.style.display = "flex";
            cabecaIntro.style.display = "block";
            mensagem.style.maxWidth = "400px";

            digitarMensagemFeliz(`HA! Eu finalmente posso falar que sim!`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 13) {
            digitarMensagemV(`Eu vim do futuro, sim, do ano de 2309`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 14) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display = "flex";
            cabecaIntro.style.display = "block";

            mensagem.style.maxWidth = "750px";

            digitarMensagemIntro(`Pra resumir o que está acontecendo, eu tenho uma máquina do tempo que não funciona muito bem, e quando eu tentei usar ela várias peças caíram em épocas e lugares diferentes, então eu estou tentando resgatar elas pra consertar a máquina e voltar pra minha casa, só que ela deve ter te puxado pro raio de distorção temporal por acidente, entendeu?`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 15) {
            mensagem.style.display = "none";
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
            mensagem.style.display = "flex";
            mensagem.style.maxWidth = "450px";

            digitarMensagemParada(`(Ela parece ter ignorado sua confusão)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 17) {
            opcoes.style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display = "flex";
            cabecaIntro.style.display = "block";

            mensagem.style.maxWidth = "500px";

            digitarMensagemMao(`Perfeito então! Pra você voltar pra sua casa, só precisamos esperar uma hora que o efeito deve desaparecer, fácil, não?`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 18) {
            mensagem.style.display = "none";
            mensagem.style.maxWidth = "350px";
            cabecaIntro.style.display = "none";

            opcoes.style.display = "block";

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
            opcoes.style.display = "none";
            mensagem.style.display = "flex";
            mensagem.style.maxWidth = "500px";

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
            mensagem.style.border = "4px solid #fff8a8"
            digitarMensagemIntro(`(Final alternativo: “O que foi isso?”)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 22) {
            mensagem.style.border = "4px solid #c9780e"
            tela.style.display = "flex";
            botao.src = "./src/img/iniciar.png";
            mensagem.style.display = "none";
            mensagem.style.maxWidth = "360px";
            hiitsumoInicial.classList.remove("desaparecer");

            HiitsumoEstado = 0;
        } else if (HiitsumoEstado === 23) {
            opcoes.style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display = "flex";
            cabecaIntro.style.display = "block";
            mensagem.style.maxWidth = "400px";

            digitarMensagemAnimada(`Sério?! Você faria isso?! Pois então vamos! São cinco peças que eu perdi e com sua ajuda não deve demorar muito!`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 24) {
            cabecaIntro.style.display = "none";
            carregar.style.display = "flex";
            aparecerMaquina();

            digitarMensagemParadaFeliz(`(Ela vai com passos rápidos até a máquina do tempo e você vai atrás dela.)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 25) {
            mensagem.style.maxWidth = "450px";
            digitarMensagemParadaFeliz(`(Ela toca em alguns botões para iniciar a máquina, você fica apreensivo, mas algo te diz que vai ficar tudo certo.)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 26) {
            cabecaIntro.style.display = "block";
            mensagem.style.maxWidth = "400px";
            digitarMensagemFeliz(`Ei, eu quero te agradecer pela sua gentileza, qual o seu nome?`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 27) {
            cabecaIntro.style.display = "none";
            mensagem.style.display = "none";
            linhaNome.style.display = "flex";
        } else if (HiitsumoEstado === 28) {
            cabecaIntro.style.display = "block";
            mensagem.style.display = "flex";
            linhaNome.style.display = "none";
            mensagem.style.maxWidth = "450px";

            digitarMensagemFeliz(`É um prazer te conhecer, ${nomePlayer}.`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 29) {
            cabecaIntro.style.display = "none";
            mensagem.classList.add("tremer");
            carregar.classList.add("tremer");

            somMaquina.loop = true;
            somMaquina.currentTime = 0;
            somMaquina.play();

            digitarMensagemParadaFeliz(`(Você sente a máquina tremer e o espaço ao seu redor acelerar e distorcer, como uma turbulência.)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 30) {
            digitarMensagemParadaFeliz(`(É realmente um tanto assustador, mas ela parece estar acostumada, e com um sorriso, ela diz…)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 31) {
            cabecaIntro.style.display = "block";
            mensagem.classList.remove("tremer");
            carregar.classList.remove("tremer");

            somMaquina.loop = false;
            somMaquina.pause();
            somMaquina.currentTime = 0;

            mensagem.style.maxWidth = "360px";
            digitarMensagemFeliz(`O meu nome é Hiitsumo!`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 32) {
            introducao.style.display = "none";
            carregar.style.display = "none";
            titulo.style.display = "flex";
            mensagem.style.display = "none";

            jogoIniciado = true;
            salvarEstadoSite();

            setTimeout(() => {
                titulo.style.display = "none";
                introducao.style.display = "flex";
                carregar.style.display = "flex";
                mensagem.style.display = "flex";
                hiitsumoInicial.style.display = "flex";
                hiitsumoInicial.style.opacity = "0";
                hiitsumoInicial.style.visibility = "hidden";
                cabecaIntro.style.display = "none";
                digitarMensagemIntro("(Os ruídos da máquina do tempo somem após um instante)", "falaHiitsumoIntro");
                HiitsumoEstado1 = 1;
            }, 4000);
            HiitsumoEstado += 1;
        } else if (HiitsumoEstado === 33) {
            titulo.style.display = "none";
            digitarMensagemIntro("(Sua visão começa a clarear e…)", "falaHiitsumoIntro");
        };

        if (HiitsumoEstado1 === 1) {
            document.querySelector(".apertar").onclick = () => {

                if (digitando) {
                    pulando = true;
                    return;
                }

                if (HiitsumoEstado1 === 1) {
                    carregar.style.display = "none";
                    hiitsumoInicial.style.opacity = "1";
                    hiitsumoInicial.style.visibility = "visible";
                    digitarMensagemParadaFeliz("(Hiitsumo está bem a sua frente, olhando de um lado pro outro.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 34;
                } else if (HiitsumoEstado1 === 2) {
                    mensagem.style.maxWidth = "400px";
                    digitarMensagemParadaFeliz("(Você se vê dentro de um salão muito grande, com várias estantes de livro e candelabros.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 3) {
                    digitarMensagemParadaFeliz("(De um dos lados, você vê uma prateleira exibindo vassouras muito bem ornamentadas.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 4) {
                    digitarMensagemParadaFeliz("(O chão é empoeirado, apesar da quantidade ridícula de vassouras.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 5) {
                    digitarMensagemParadaFeliz("(O lugar cheira a gengibre e cinzas.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 6) {
                    opcoes.style.display = "block";
                    mensagem.style.display = "none";

                    opcA.style.display = "block";
                    digitarOpcao('"Cadê a máquina?"', "opcaoA");

                    opcB.style.display = "none";

                    opcA.onclick = () => {
                        HiitsumoEstado1 += 1;
                    };
                } else if (HiitsumoEstado1 === 7) {
                    opcoes.style.display = "none";
                    mensagem.style.display = "flex";
                    cabecaIntro.style.display = "flex";

                    digitarMensagemFeliz("No meu bolso.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 8) {
                    mensagem.style.maxWidth = "450px";
                    digitarMensagemFeliz("Sim, isso mesmo. Literalmente.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 9) {
                    digitarMensagemNerd("Por questões de conveniência, eu implementei uma versão miniatura da máquina para carregar ela por aí.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 10) {
                    mensagem.style.maxWidth = "400px";
                    digitarMensagemFeliz("Mas preciso de um espaço bom para usar ela.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 11) {
                    cabecaIntro.style.display = "none";
                    digitarMensagemParadaFeliz("(Hiitsumo olha ao redor outra vez e lhe diz...)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 12) {
                    cabecaIntro.style.display = "flex";
                    digitarMensagemBeicinho("Bem, já sei onde nós estamos, melhor acharmos a peça logo…", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 13) {
                    digitarMensagemFeliz("Bom, ela não deve estar muito longe.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 14) {
                    digitarMensagemFeliz("E pra esclarecer, estamos na era medieval se você não percebeu.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 15) {
                    cabecaIntro.style.display = "none";
                    digitarMensagemParadaFeliz("(Vocês andam ao redor da sala, vasculhando as prateleiras em busca de qualquer pista.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 16) {
                    cabecaIntro.style.display = "flex";
                    digitarMensagemAnimada(`Ei, ${nomePlayer}, olha ali!`, "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 17) {
                    cabecaIntro.style.display = "none";
                    digitarMensagemParadaFeliz("(Tem uma engrenagem, amarela e grande o suficiente para que se destacasse do resto da sala.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 18) {
                    digitarMensagemParadaFeliz("(Ela é um tanto reluzente e o ambiente ao redor parece apontar para ela.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 19) {
                    digitarMensagemParadaFeliz("(E tem um chapéu de bruxo muito legal)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 20) {
                    opcoes.style.display = "block";
                    mensagem.style.display = "none";

                    opcA.style.display = "block";
                    digitarOpcao('(Pegar a engrenagem)', "opcaoA");

                    opcB.style.display = "block";
                    digitarOpcao('(Pegar o chapéu)', "opcaoB");

                    opcA.onclick = () => {
                        HiitsumoEstado1 += 5;
                    };

                    opcB.onclick = () => {
                        HiitsumoEstado1 += 1;
                    };
                } else if (HiitsumoEstado1 === 21) {
                    opcoes.style.display = "none";
                    mensagem.style.display = "flex";
                    cabecaIntro.style.display = "flex";

                    digitarMensagemBeicinho("Não era bem isso, mas…", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 22) {
                    digitarMensagemV("Belo chapéu!", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 23) {
                    digitarMensagemIntro("Enfim, vamos pegar a engrenagem e dar o fora daqui.", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 24) {
                    cabecaIntro.style.display = "none";
                    digitarMensagemParadaFeliz("(Hiitsumo pega a engrenagem e a entrega nas suas mão.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 25) {
                    opcoes.style.display = "none";
                    mensagem.style.display = "flex";
                    cabecaIntro.style.display = "none";

                    digitarMensagemParadaFeliz("(A engrenagem é um pouco mais leve do que você imaginava.)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 26) {
                    cabecaIntro.style.display = "flex";
                    digitarMensagemMao("Foi bem mais rápido do que eu esperava! Ótimo!", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 27) {
                    digitarMensagemIntro("Vamos voltar agora!", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 28) {
                    cabecaIntro.style.display = "none";
                    digitarMensagemParada("(Hiitsumo parece um pouco inquieta)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 29) {
                    opcoes.style.display = "block";
                    mensagem.style.display = "none";

                    opcA.style.display = "block";
                    digitarOpcao('"O que foi? Que cara é essa?"', "opcaoA");

                    opcB.style.display = "none";

                    opcA.onclick = () => {
                        HiitsumoEstado1 += 1;
                    };
                } else if (HiitsumoEstado1 === 30) {
                    opcoes.style.display = "none";
                    mensagem.style.display = "flex";
                    cabecaIntro.style.display = "flex";

                    digitarMensagemIntro("Bem… Eu já estive aqui antes e…", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 31) {
                    digitarMensagemBeicinho("Os caras da era medieval conseguem ser muito chatos, sabe?", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 32) {
                    digitarMensagemIntro("Na última vez que eu estive aqui, meio que…", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 33) {
                    cabecaIntro.style.display = "none";
                    digitarMensagemParada("(Hiitsumo é interrompida por uma voz aguda e sem sentido que vem do fundo do corredor)", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 34) {
                    cabecaIntro.style.display = "flex";
                    mensagem.style.maxWidth = "600px";
                    digitarMensagemMago("※⁂⁜ VLORU! VLORU! MUCU XUKOC! ⁜⁂※", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 35) {
                    mensagem.style.maxWidth = "400px";
                    digitarMensagemRaiva("Aí tá o problema…", "falaHiitsumoIntro");
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 36) {
                    mensagem.style.display = "none";
                    fundo.style.display = "none";
                    introducao.style.pointerEvents = "none";
                    mensagem2.style.pointerEvents = "auto";
                    mensagem2.style.display = "flex";
                    mensagem2.style.maxWidth = "600px";
                    hiitsumoInicial.style.display = "none";
                    cabeca1.style.display = "flex";
                    digitarMensagemMago("※⁂⁜ LIOVUL Y JLYHXYL!!! ⁜⁂※", "falaBoss");
                    HiitsumoEstado2 = 1;
                    HiitsumoEstado1 += 1;
                } else if (HiitsumoEstado1 === 37) {

                }
            }
        }
    }
}
);

["Hiitsumo", "dica", "caixa-boss"].forEach(id => {
    document.getElementById(id).addEventListener("click", () => {

        if (digitando) {
            pulando = true;
            return;
        }

        if (faseAtual === 0) {
            if (HiitsumoEstado2 === 1) {
                cabeca1.style.display = "none";
                mensagem2.style.maxWidth = "600px";
                mensagem2.style.display = "flex";
                digitarMensagemParada("(Em um instante, a peça que estava em sua mão voa começa a levitar e ela voa até a direção do mago.)", "falaBoss");
                HiitsumoEstado2 += 87;
            } else if (HiitsumoEstado2 === 2) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemRaiva("Ei, devolva isso!", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 3) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                magia.style.display = "flex";
                digitar_MensagemSurpresaParada("(Um círculo amarelo surge ao redor de vocês dois e forma uma barreira mágica)", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 4) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemSurpresa("O que?! O que você fez?", "falaHiitsumo")
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 5) {
                digitar_MensagemSurpresa("Nos deixe sair!", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 6) {
                cabeca1.style.display = "flex";
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("※⁂⁜ Vloru… y wigjuhbcu… ⁜⁂※", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 7) {
                digitarMensagem_Mago("※⁂⁜ Chnylymmuhny ⁜⁂※", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 8) {
                digitarMensagem_Mago("Vocês não conseguem me entender, não é mesmo?", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 9) {
                digitarMensagem_Mago("Fufufu… Muahahaha", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 10) {
                digitarMensagem_Mago("※⁂⁜ Vloru, jymny. ⁜⁂※ Finalmente peguei você", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 11) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemRaiva("Pode ir parando com esse negócio de “Vloru”, tá legal?", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 12) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("Bruxas que nem você não tem o direito de falar nada, peste! ※⁂⁜ Jymnym! ⁜⁂※", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 13) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemRaiva("Bruxa?! Eu sou uma cientista!", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 14) {
                digitar_MensagemRaiva("VOCÊ é um bruxo!", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 15) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("Mas você me dá nojo, bruxa.", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 16) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemBeicinho("Cientista.", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 17) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("Você não usa chapéus e nem túnicas.", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 18) {
                digitarMensagem_Mago("Não viaja com vassouras, só com estas…", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 19) {
                digitarMensagem_Mago("Aberrações que você chama de “máquina”.", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 20) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemBeicinho("Do tempo. É uma máquina do tempo.", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 21) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("E a alquimia? Onde está a sua pedra filosofal?", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 22) {
                digitarMensagem_Mago("Que magias estranhas são essas?", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 23) {
                digitarMensagem_Mago("Você é uma praticante das artes das trevas?", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 24) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemFeliz("Eu ganhei uma medalha dos “Grandes Pequenos inventores”, não serve?", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 25) {
                digitar_MensagemFeliz("E uma da OBMEP, também.", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 26) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("AH! ※⁂⁜ WUFUXU! ⁜⁂※ Você fala coisas sem nenhum sentido.", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 27) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_MensagemRaiva("Vloru, só deixa a gente sair daqui logo.", "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 28) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("Sou um ※⁂⁜ Vlori ⁜⁂※, não um ※⁂⁜ Vloru!! ⁜⁂※", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 29) {
                digitarMensagem_Mago("Olha só você, não sabe nem falar direito!", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 30) {
                cabeca1.style.display = "none";
                digitarMensagem_Mago("(Hiitsumo olha de volta para você e sussurra.)", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 31) {
                cabeca1.style.display = "flex";
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_Mensagem(`${nomePlayer}, você tem alguma ideia do que fazer?`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 32) {
                mensagem1.style.display = "none";
                opcoes1.style.display = "flex";

                opcA1.style.display = "block";
                digitarOpcao('"Usar a máquina do tempo."', "opcaoA1");

                opcB1.style.display = "block";
                digitarOpcao('"Fazer uma magia."', "opcaoB1");

                opcA1.onclick = () => {
                    HiitsumoEstado2 += 1;
                };

                opcB1.onclick = () => {
                    HiitsumoEstado2 += 4;
                };
            } else if (HiitsumoEstado2 === 33) {
                opcoes1.style.display = "none";
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_Mensagem(`O espaço aqui é pequeno demais para usá-la. Nós seríamos esmagados na hora.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 34) {
                digitar_Mensagem(`Bom, eu não quero morrer esmagada, então…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 35) {
                cabeca1.style.display = "none";
                digitar_Mensagem(`Acho que eu tenho uma ideia melhor.`, "falaHiitsumo");
                HiitsumoEstado2 += 2;
            } else if (HiitsumoEstado2 === 36) {
                opcoes1.style.display = "none";
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_Mensagem(`É uma boa ideia…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 37) {
                digitar_MensagemFeliz(`Os objetos daqui devem ter magia neles, quem sabe se conjurarmos o feitiço certo ele funcionará?`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 38) {
                digitar_MensagemFeliz(`Talvez só as palavras funcionem. Precisamos tentar.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 39) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                cabeca1.style.display = "flex";
                digitarMensagem_Mago("Eu escutei o plano todo de vocês, ※⁂⁜ Jymnym! ⁜⁂※ E eu desafio vocês a tentarem!", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 40) {
                mensagem2.style.display = "flex";
                mensagem1.style.display = "none";
                digitarMensagem_Mago("Muahahah! Nunca conseguirão!", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 41) {
                mensagem2.style.display = "none";
                mensagem1.style.display = "flex";
                digitar_Mensagem(`Se você tiver ideia do que dizer, me fale.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 42) {
                document.querySelector(".linha-senha").style.opacity = "1";
                document.querySelector(".engrenagens").style.opacity = "1";
                mensagem1.style.display = "none";
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 43) {
                mensagem1.style.display = "flex";
                digitar_Mensagem(`Que situação chata que nos metemos, não?`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 44) {
                digitar_MensagemRaiva(`Eu gostaria de usar a máquina do tempo para fugir daqui, mas ela tem um problema para cada solução que eu acho.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 45) {
                digitar_Mensagem(`Ela está nos levando exatamente para onde as engrenagens estão, mas eu não consigo escolher o quando.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 46) {
                digitar_Mensagem(`Então, nosso foco tem que ser em *pegar* a engrenagem de volta.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 47) {
                digitar_Mensagem(`E todos os feitiços que eu já vi ele fazer foram naquela língua estranha, talvez tentar algo assim?`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 48) {
                mensagem1.style.display = "none";
                dicasFase.style.display = "flex";
                dica1.style.display = "flex";
                digitarMensagemParada("Dica 1: Recitar o feitiço na língua do mago. Pegar é a prioridade.", "dica-1")
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 49) {
                mensagem1.style.display = "flex";
                digitar_MensagemFeliz(`Eu não entendo nada da língua dele, mas eu decorei algumas palavras.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 50) {
                digitar_MensagemNerd(`Eu sei que Vloru é bruxa!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 51) {
                digitar_MensagemNerd(`E ele é um Vlori, é pouca diferença, mas pode nos dar uma pista grande!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 52) {
                mensagem1.style.display = "none";
                dica2.style.display = "flex";
                digitarMensagemParada("Dica 2: Vloru = Bruxa. Vlori = ?", "dica-2")
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 53) {
                mensagem1.style.display = "flex";
                digitar_Mensagem(`Outras palavras que eu lembro dele ter falado foram:`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 54) {
                digitar_Mensagem(`jymny, wufuxu e Chnylymmuhny.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 55) {
                digitar_Mensagem(`E também falou: liovul y jlhxyl.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 56) {
                digitar_Mensagem(`Como eu me lembrei delas perfeitamente?`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 57) {
                digitar_MensagemNerd(`Minha memória é algo bem interessante, as vezes eu lembro bem, as vezes não.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 58) {
                mensagem1.style.display = "none";
                dica3.style.display = "flex";
                digitarMensagemParada("Dica 3: Jymny, wufuxu, Chnylymmuhny, liovul y jlhxyl” Foram coisas que o mago disse.", "dica-3")
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 59) {
                mensagem1.style.display = "flex";
                digitar_Mensagem(`Deve existir um padrão para os feitiços, se nós conseguíssemos achar uma ligação entre as coisas…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 60) {
                digitar_Mensagem(`Poderíamos prever exatamente o que acontecesse em seguida, mesmo sem saber de tudo`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 61) {
                mensagem1.style.display = "none";
                dica4.style.display = "flex";
                digitarMensagemParada("Dica 4: Existe um padrão para as letras do alfabeto. Tente entendê-lo.", "dica-4")
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 62) {
                mensagem1.style.display = "flex";
                digitar_MensagemRaiva(`Quero *fugir* daqui…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 63) {
                digitar_Mensagem(`Bem que poderíamos imitar ele e fazer dois feitiços de uma vez…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 64) {
                mensagem1.style.display = "none";
                dica5.style.display = "flex";
                digitarMensagemParada("Dica 5: Use o mesmo padrão que o mago utilizou quando ele prendeu vocês.", "dica-5")
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 65) {
                mensagem1.style.display = "flex";
                digitar_Mensagem(`Quer que eu repita o que eu falei? Tudo bem.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 66) {
                mensagem1.style.display = "none";
                HiitsumoEstado2 = 43;
            } else if (HiitsumoEstado2 === 67) {
                mensagem1.style.display = "flex";
                mensagem2.style.display = "none";
                digitar_Mensagem(`${senhaDigitada}? Hmmmm, acho que não é isso.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 68) {
                document.querySelector(".linha-senha").style.opacity = "0";
                document.querySelector(".engrenagens").style.opacity = "0";
                mensagem1.style.display = "none";
                mensagem2.style.display = "flex";
                cabeca1.style.display = "flex";
                digitarMensagem_Mago(`Muahahahahahahahaha! Nunca conseguirão!`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 69) {
                document.querySelector(".linha-senha").style.opacity = "1";
                document.querySelector(".engrenagens").style.opacity = "1";
                mensagem1.style.display = "none";
                mensagem2.style.display = "none";
            } else if (HiitsumoEstado2 === 70) {
                dicasFase.style.display = "none";
                dica1.style.display = "none";
                dica2.style.display = "none";
                dica3.style.display = "none";
                dica4.style.display = "none";
                dica5.style.display = "none";

                document.querySelector(".linha-senha").style.opacity = "0";
                document.querySelector(".engrenagens").style.opacity = "0";
                mensagem1.style.display = "flex";
                mensagem2.style.display = "none";
                digitar_Mensagem(`${senhaDigitada}... ${senhaDigitada}...`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 71) {
                digitar_MensagemAnimada(`${nomePlayer}! Você é um gênio!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 72) {
                digitar_MensagemAnimada(`Me passa aquele chapéu.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 73) {
                digitar_MensagemChapeu(`Ei, Vlori! Olha aqui!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 74) {
                cabeca1.style.display = "flex";
                mensagem1.style.display = "none";
                mensagem2.style.display = "flex";
                digitarMensagem_Mago(`Você decidiu se revelar agora, bruxa.`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 75) {
                digitarMensagem_Mago(`Teremos um duelo lendário, finalmente!`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 76) {
                mensagem1.style.display = "flex";
                mensagem2.style.display = "none";
                digitar_MensagemChapeu(`É isso que você pensa.`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 77) {
                digitar_MensagemChapeuNerd(`Eu vou juntar meu lado bruxo e o meu lado cientista! É o melhor do passado e do futuro, concorda?`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 78) {
                digitar_MensagemChapeuOlhoFechado(`Pois aí vai…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 79) {
                digitar_MensagemChapeuMagia(`IYACK Y ZOACK!!!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 80) {
                document.querySelector(".engrenagens").style.opacity = "1";
                mensagem1.style.display = "none";
                mensagem2.style.display = "flex";
                cabeca1.style.display = "none";
                digitarMensagem_Mago(`(A engrenagem começa a vibrar e ela some num instante! Sendo teleportada para sua mão.)`, "falaBoss");
                HiitsumoEstado2 += 1;
                atualizarEngrenagem();
            } else if (HiitsumoEstado2 === 81) {
                magia.style.display = "none";
                digitarMensagem_Mago(`(E antes que você possa fazer qualquer coisa, vocês somem e aparecem fora do círculo mágico.)`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 82) {
                document.querySelector(".engrenagens").style.opacity = "0";
                cabeca1.style.display = "flex";
                digitarMensagem_Mago(`O quê?! para onde eles foram?!`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 83) {
                mensagem1.style.display = "flex";
                mensagem2.style.display = "none";
                digitar_MensagemChapeu(`Agora…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 84) {
                cabeca1.style.display = "none";
                mensagem1.style.display = "none";
                mensagem2.style.display = "flex";
                digitarMensagem_Mago(`(Hiitsumo coloca as mãos no bolso, procurando algo.)`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 85) {
                cabeca1.style.display = "flex";
                digitarMensagem_Mago(`Eu não vou deixar você me enganar de novo, Vloru!`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 86) {
                digitarMensagem_Mago(`ZIAI!!!!!!!!`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 87) {
                cabeca1.style.display = "none";
                mensagem1.style.display = "none";
                mensagem2.style.display = "flex";
                digitarMensagem_Mago(`(Ele levanta as mãos e uma grande bola de fogo se forma bem acima de vocês, o calor engole a sala.)`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 88) {
                digitarMensagem_Mago(`(Mas é o tempo suficiente para que Hiitsumo remova a miniatura do bolso.)`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 89) {
                digitarMensagem_Mago(`(O fogo começa a descer na direção de vocês.)`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 90) {
                mensagem1.style.display = "flex";
                mensagem2.style.display = "none";
                digitar_MensagemChapeuMagia(`MÁQUINA DO TEMPO!!!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 91) {

                digitarMensagemIntro("(Você pisca.)", "falaHiitsumoIntro");

                mensagem1.style.display = "none";
                mensagem2.style.display = "none";
                mensagem.style.display = "flex";
                fundo.style.display = "flex";
                introducao.style.display = "flex";
                fundo.style.pointerEvents = "none";
                introducao.style.pointerEvents = "auto";
                mensagem.style.pointerEvents = "auto";

                carregar.style.display = "none";

                HiitsumoEstado3 = 1;

                document.querySelector(".apertar").onclick = () => {

                    if (digitando) {
                        pulando = true;
                        return;
                    }

                    if (HiitsumoEstado3 === 1) {
                        digitarMensagemIntro("(E nesse instante…)", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 2) {
                        carregar.style.display = "flex";
                        maquina.src = "./src/img/maquina-tempo1.gif";
                        aparecerMaquina();

                        hiitsumoInicial.style.display = "flex";
                        hiitsumoInicial.style.opacity = "0";
                        hiitsumoInicial.style.visibility = "hidden";

                        digitarMensagemIntro("(Você está dentro da máquina do tempo, viajando de novo.)", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 3) {
                        digitarMensagemIntro("(Seu coração ainda está acelerado, assustado.)", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 4) {
                        digitarMensagemIntro("(E você escuta uma risada.)", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 5) {
                        hiitsumoInicial.style.opacity = "1";
                        hiitsumoInicial.style.visibility = "visible";
                        cabecaIntro.style.display = "flex";

                        digitarMensagemChapeuRindo("Haha… Hahahaha!", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 6) {
                        digitarMensagemChapeuCorada("Por um segundo, pensei que não ia dar certo.", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 7) {
                        digitarMensagemChapeuV("Mas conseguimos!", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 8) {
                        carregar.style.display = "none";
                        hiitsumoInicial.style.display = "none";
                        cabecaIntro.style.display = "none";
                        digitarMensagemIntro("(Sua visão fica clara de novo, e sem que você pudesse processar, seguem para o próximo passo.)", "falaHiitsumoIntro");
                        HiitsumoEstado3 += 1;
                    } else if (HiitsumoEstado3 === 9) {
                        digitarMensagemIntro("(Um passo muito longo no tempo.)", "falaHiitsumoIntro");

                        // Transição para a próxima fase
                        faseAtual = 1;
                        HiitsumoEstado2 = 0;
                        HiitsumoEstado3 = 0;
                        // Resetar o onclick para usar o event listener geral
                        document.querySelector(".apertar").onclick = null;
                    }
                }
                HiitsumoEstado2 = 92;
            } else if (HiitsumoEstado2 === 92) {

            }
        } else if (faseAtual === 1) {
            if (HiitsumoEstado2 === 0) {

            } else if (HiitsumoEstado2 === 1) {
                digitarMensagem_ShowParado1("(Você e Hiitsumo estão atrás de bancadas, daquelas de programas de TV.)", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 2) {
                digitarMensagem_ShowParado1("(O ambiente ao redor é aconchegante, uma cozinha arquitetado para fazer você se sentir em casa.)", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 3) {
                digitarMensagem_ShowParado1("(Mas você não se sente familiarizado, especialmente pelos aparatos futuristas nela e as câmeras apontadas em sua direção.)", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 4) {
                bossImg.style.display = "flex";
                digitarMensagem_ShowParado1("(E uma geladeira especialmente grande.)", "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 5) {
                mensagem1.style.display = "flex";
                mensagem2.style.display = "none";
                digitar_MensagemSurpresa(`É ela… ${nomePlayer}, estamos na…`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 6) {
                digitar_MensagemAnimada(`Cozinha da Graciane!`, "falaHiitsumo");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 7) {
                mensagem1.style.display = "none";
                mensagem2.style.display = "flex";
                cabeca1.style.display = "flex";
                digitarMensagem_Show(`Parece que temos uma grande fã no palco hoje hahaha.`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 8) {
                digitarMensagem_ShowPisca(`Vamos ter que atrasar a gravação dos convidados de hoje e faremos uma exceção especial para estes intrusos especiais.`, "falaBoss");
                HiitsumoEstado2 += 1;
            } else if (HiitsumoEstado2 === 9) {
                digitarMensagem_ShowPisca(`É isso por enquanto, mas lembrem o show sempre deve continuar!`, "falaBoss");
                HiitsumoEstado2 += 0;
            } else if (HiitsumoEstado2 === 10) {
                
            }
        }
    });
})

document.querySelector(".apertar").addEventListener("click", () => {
    if (digitando) {
        pulando = true;
        return;
    }

    if (faseAtual === 1) {
        if (HiitsumoEstado2 === 0) {
            if (HiitsumoEstado3 === 0) {
                cabecaIntro.style.display = "none";
                hiitsumoInicial.style.display = "flex";
                hiitsumoInicial.style.opacity = "1";
                hiitsumoInicial.style.visibility = "visible";

                digitarMensagemParadaFeliz("(Vocês estão num lugar escuro de novo.)", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 1) {
                digitarMensagemParadaFeliz("(Hiitsumo olha diretamente para você e diz)", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 2) {
                cabecaIntro.style.display = "flex";
                digitarMensagemBeicinho("Eu perdi o chapéu.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 3) {
                digitarMensagemBeicinho("Ele era meio fedido, mas até que era bonito…", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 4) {
                digitarMensagemFeliz("Bom, não temos mais nada que nos lembre daquele mago chato, pelo menos.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 5) {
                digitarMensagemFeliz("Mas me diz aí, você preferiria ser um cientista, ou um mago?", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 6) {
                mensagem.style.display = "none";
                cabecaIntro.style.display = "none";
                document.getElementById("opcoes").style.display = "block";

                opcA.style.display = "block";
                digitarOpcao('"Cientista/Engenheiro."', "opcaoA");

                opcB.style.display = "block";
                digitarOpcao('"Mago."', "opcaoB");

                opcA.onclick = () => {
                    HiitsumoEstado3 += 1;
                };

                opcB.onclick = () => {
                    HiitsumoEstado3 += 5;
                };
            } else if (HiitsumoEstado3 === 7) {
                mensagem.style.display = "flex";
                cabecaIntro.style.display = "flex";
                document.getElementById("opcoes").style.display = "none";

                digitarMensagemV("Podemos ir pro futuro depois que consertamos a máquina, e aí você pode aprender de tudo.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 8) {
                digitarMensagemFeliz("Você tem um grande potencial para a engenharia e grandes coisas.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 9) {
                digitarMensagem("Eu só não posso deixar que você pegue invenções do futuro e leve elas pro passado…", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 10) {
                digitarMensagemFeliz("Ou se eu tiver de bom humor, eu posso deixar também, um pequeno paradoxo não é nada demais.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 4;
            } else if (HiitsumoEstado3 === 11) {
                mensagem.style.display = "flex";
                cabecaIntro.style.display = "flex";
                document.getElementById("opcoes").style.display = "none";

                digitarMensagemFeliz("Podemos dar uma volta no passado e ingressar numa escola de magia, que tal?", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 12) {
                digitarMensagemFeliz("Já derrotamos um mago poderoso sem treino nenhum, afinal", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 13) {
                digitarMensagemV("E você conseguiu decifrar o feitiço na hora, é um talento natural!", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 14) {
                digitarMensagem("Bem… agora vamos voltar pros peixes maiores…", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 15) {
                digitarMensagemRaiva("Não tô gostando muito desse lugar, está tudo escuro.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 16) {
                digitarMensagemRaiva("Vamos deixar de conversa e procurar mais.", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 17) {
                digitarMensagem_IntroShow("Mas a conversa de vocês está tão interessante, tenho certeza de que o público está adorando!", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 18) {
                digitarMensagemSurpresa("E-E-E-Essa voz…?", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 19) {
                digitarMensagemSurpresa("Não pode ser… será que…", "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 20) {
                digitarMensagemSurpresa(`${nomePlayer}, e-ela é…`, "falaHiitsumoIntro");
                HiitsumoEstado3 += 1;
            } else if (HiitsumoEstado3 === 21) {
                // Executar o bloco para HiitsumoEstado2 === 1
                mensagem.style.display = "none";
                fundo.style.display = "none";
                introducao.style.pointerEvents = "none";
                mensagem2.style.pointerEvents = "auto";
                mensagem2.style.display = "flex";
                mensagem2.style.maxWidth = "600px";
                hiitsumoInicial.style.display = "none";
                cabeca1.style.display = "none";
                bossImg.style.display = "none";
                bossImg.src = "./src/img/boss1-nada.png";
                Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";

                digitarMensagem_ShowParado1("(As luzes são acesas.)", "falaBoss");
                HiitsumoEstado2 += 1;
                HiitsumoEstado3 = 0;
            }
        }
    }
});










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

function atualizarEngrenagem() {
    const engrenagem = document.getElementById(`engrenagem${indiceEngrenagem}`);

    engrenagem.src = "./src/img/engrenagem-verde.png";
    engrenagem.classList.add("verde");

    indiceEngrenagem++;
}





let senhaDigitada = "";

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
    } else {
        // espaço para outras fases
    }
}

function verificarSenhaErrada() {
    if (faseAtual === 0) {
        HiitsumoEstado2 = 67;

        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Hmmmm....`, "falaHiitsumo");
    } else {
        // espaço para outras fases
    }
}