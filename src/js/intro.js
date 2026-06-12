// ================================================================================================================
// INTRO  —  HiitsumoEstado (apresentação) + HiitsumoEstado1 (castelo do mago)
// ================================================================================================================

function iniciarIntro() {
    document.querySelector(".apertar").onclick = () => {
        if (digitando) { pulando = true; return; }

        // ── HiitsumoEstado (apresentação) ──────────────────────────────────────
        if (HiitsumoEstado === 0) {
            mensagem.style.display = "flex";
            digitarMensagemIntro("(Você não se lembra exatamente como ou quando foi parar aí.)", "falaHiitsumoIntro");
            HiitsumoEstado += 1; // apagar depois (colocar 1)
            salvarEstadoSite();

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
            somFundo.pause();
            hiitsumoMusica.loop = true;
            hiitsumoMusica.volume = 0.05;
            hiitsumoMusica.play();
            hiitsumoInicial.style.display = "block";
            cabecaIntro.style.display     = "block";
            digitarMensagemIntro("Foi mal mesmo! Minha máquina do tempo deve ter te pegado.", "falaHiitsumoIntro", "corada");
            aparecerHiitsumo();
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 8) {
            mensagem.style.display        = "none";
            cabecaIntro.style.display     = "none";
            opcoes.style.display          = "block";
            opcA.style.display            = "block";
            digitarOpcao('"Onde nós estamos?"', "opcaoA");
            opcB.style.display            = "none";
            opcA.onclick = () => { HiitsumoEstado += 1; };

        } else if (HiitsumoEstado === 9) {
            opcoes.style.display  = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "block";
            mensagem.style.maxWidth       = "400px";
            const agora = new Date();
            const hora  = agora.getHours();
            digitarMensagemIntro(`Bom, esse deve ser o seu quarto, mas estamos na hora que existe entre às ${hora} e ${hora + 1}.`, "falaHiitsumoIntro", "nerd");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 10) {
            mensagem.style.maxWidth = "500px";
            digitarMensagemIntro(`Deve ser confuso pra você, eu sei, mas não se preocupe! Essa bugiganga que eu construí com o projeto do meu pai está com alguns problemas, mas você pode voltar pra casa em um instante.`, "falaHiitsumoIntro", "feliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 11) {
            mensagem.style.display    = "none";
            cabecaIntro.style.display = "none";
            document.getElementById("opcoes").style.display = "block";
            opcA.style.display = "block";
            digitarOpcao('"Você é do futuro?"', "opcaoA");
            opcB.style.display = "block";
            digitarOpcao('"Não entendi nada"', "opcaoB");
            opcA.onclick = () => { HiitsumoEstado += 1; };
            opcB.onclick = () => { HiitsumoEstado += 3; };

        } else if (HiitsumoEstado === 12) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "block";
            mensagem.style.maxWidth       = "400px";
            digitarMensagemIntro(`HA! Eu finalmente posso falar que sim!`, "falaHiitsumoIntro", "feliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 13) {
            digitarMensagemIntro(`Eu vim do futuro, sim, do ano de 2309`, "falaHiitsumoIntro", "V");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 14) {
            document.getElementById("opcoes").style.display = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "block";
            mensagem.style.maxWidth       = "750px";
            digitarMensagemIntro(`Pra resumir o que está acontecendo, eu tenho uma máquina do tempo que não funciona muito bem, e quando eu tentei usar ela várias peças caíram em épocas e lugares diferentes, então eu estou tentando resgatar elas pra consertar a máquina e voltar pra minha casa, só que ela deve ter te puxado pro raio de distorção temporal por acidente, entendeu?`, "falaHiitsumoIntro", "intro");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 15) {
            mensagem.style.display    = "none";
            cabecaIntro.style.display = "none";
            document.getElementById("opcoes").style.display = "block";
            opcA.style.display = "block";
            digitarOpcao('"???"', "opcaoA");
            opcB.style.display = "block";
            digitarOpcao('"Entendi"', "opcaoB");
            opcA.onclick = () => { HiitsumoEstado += 1; };
            opcB.onclick = () => { HiitsumoEstado += 2; };

        } else if (HiitsumoEstado === 16) {
            document.getElementById("opcoes").style.display = "none";
            mensagem.style.display    = "flex";
            mensagem.style.maxWidth   = "450px";
            digitarMensagemIntro(`(Ela parece ter ignorado sua confusão)`, "falaHiitsumoIntro", "parada");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 17) {
            opcoes.style.display      = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display    = "flex";
            cabecaIntro.style.display = "block";
            mensagem.style.maxWidth   = "500px";
            digitarMensagemIntro(`Perfeito então! Pra você voltar pra sua casa, só precisamos esperar uma hora que o efeito deve desaparecer, fácil, não?`, "falaHiitsumoIntro", "mao");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 18) {
            mensagem.style.display    = "none";
            mensagem.style.maxWidth   = "350px";
            cabecaIntro.style.display = "none";
            opcoes.style.display      = "block";
            opcA.style.display = "block";
            digitarOpcao('"Quero voltar logo"', "opcaoA");
            opcB.style.display = "block";
            digitarOpcao('"Você quer ajuda pra recuperar as peças?"', "opcaoB");
            opcA.onclick = () => { HiitsumoEstado += 1; };
            opcB.onclick = () => { HiitsumoEstado += 5; };

        } else if (HiitsumoEstado === 19) {
            hiitsumoMusica.pause();
            opcoes.style.display      = "none";
            mensagem.style.display    = "flex";
            mensagem.style.maxWidth   = "500px";
            digitarMensagemIntro(`(Ela acena pra você e volta aos reparos da máquina, você fica entediado, mas antes que pudesse perceber, o vazio foi borrando e…)`, "falaHiitsumoIntro", "parada");
            setTimeout(() => { desaparecerHiitsumo(); }, 5500);
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 20) {
            hiitsumoInicial.style.display = "none";
            digitarMensagemIntro(`(Você está de pé no seu quarto, como se nada tivesse acontecido)`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 21) {
            finalNada.volume = 1;
            finalNada.play();
            mensagem.style.border = "4px solid #fff8a8";
            digitarMensagemIntro(`(Final alternativo: "O que foi isso?")`, "falaHiitsumoIntro");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 22) {
            mensagem.style.border   = "4px solid #c9780e";
            tela.style.display      = "flex";
            botao.src               = "./src/img/iniciar.png";
            mensagem.style.display  = "none";
            mensagem.style.maxWidth = "360px";
            hiitsumoInicial.classList.remove("desaparecer");
            HiitsumoEstado = 0;

        } else if (HiitsumoEstado === 23) {
            opcoes.style.display      = "none";
            document.getElementById("falaHiitsumoIntro").style.display = "block";
            mensagem.style.display    = "flex";
            cabecaIntro.style.display = "block";
            mensagem.style.maxWidth   = "400px";
            digitarMensagemIntro(`Sério?! Você faria isso?! Pois então vamos! São cinco peças que eu perdi e com sua ajuda não deve demorar muito!`, "falaHiitsumoIntro", "animada");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 24) {
            cabecaIntro.style.display = "none";
            carregar.style.display    = "flex";
            aparecerMaquina();
            digitarMensagemIntro(`(Ela vai com passos rápidos até a máquina do tempo e você vai atrás dela.)`, "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 25) {
            mensagem.style.maxWidth = "450px";
            digitarMensagemIntro(`(Ela toca em alguns botões para iniciar a máquina, você fica apreensivo, mas algo te diz que vai ficar tudo certo.)`, "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 26) {
            cabecaIntro.style.display = "block";
            mensagem.style.maxWidth   = "400px";
            digitarMensagemIntro(`Ei, eu quero te agradecer pela sua gentileza, qual o seu nome?`, "falaHiitsumoIntro", "feliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 27) {
            cabecaIntro.style.display = "none";
            mensagem.style.display    = "none";
            linhaNome.style.display   = "flex";

        } else if (HiitsumoEstado === 28) {
            cabecaIntro.style.display = "block";
            mensagem.style.display    = "flex";
            linhaNome.style.display   = "none";
            mensagem.style.maxWidth   = "450px";
            digitarMensagemIntro(`É um prazer te conhecer, ${nomePlayer}.`, "falaHiitsumoIntro", "feliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 29) {
            cabecaIntro.style.display = "none";
            mensagem.classList.add("tremer");
            carregar.classList.add("tremer");
            somMaquina = document.getElementById("somMaquina");
            somMaquina.loop = true;
            somMaquina.currentTime = 0;
            somMaquina.play();
            digitarMensagemIntro(`(Você sente a máquina tremer e o espaço ao seu redor acelerar e distorcer, como uma turbulência.)`, "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 30) {
            digitarMensagemIntro(`(É realmente um tanto assustador, mas ela parece estar acostumada, e com um sorriso, ela diz…)`, "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 31) {
            cabecaIntro.style.display = "block";
            mensagem.classList.remove("tremer");
            carregar.classList.remove("tremer");
            somMaquina.loop = false;
            somMaquina.pause();
            somMaquina.currentTime = 0;
            mensagem.style.maxWidth = "360px";
            digitarMensagemIntro(`O meu nome é Hiitsumo!`, "falaHiitsumoIntro", "feliz");
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 32) {
            introducao.style.display = "none";
            carregar.style.display   = "none";
            titulo.style.display     = "flex";
            mensagem.style.display   = "none";
            jogoIniciado = true;

            setTimeout(() => {
                hiitsumoMusica.pause();
                titulo.style.display          = "none";
                introducao.style.display      = "flex";
                carregar.style.display        = "none";
                mensagem.style.display        = "flex";
                hiitsumoInicial.style.display = "none";
                cabecaIntro.style.display     = "none";
                digitarMensagemIntro("(Os ruídos da máquina do tempo somem após um instante)", "falaHiitsumoIntro");
                HiitsumoEstado1 = 1;
                iniciarBoss1Pre(); // ativa o onclick do HiitsumoEstado1
            }, 4000);
            HiitsumoEstado += 1;

        } else if (HiitsumoEstado === 33) {
            titulo.style.display = "none";
            digitarMensagemIntro("(Sua visão começa a clarear e…)", "falaHiitsumoIntro");
        }
    };
}

// ── HiitsumoEstado1: dentro do castelo até encontrar o mago ────────────────
function iniciarBoss1Pre() {
    document.querySelector(".apertar").onclick = () => {
        if (digitando) { pulando = true; return; }

        if (HiitsumoEstado1 === 1) {
            antesMago.loop   = true;
            antesMago.volume = 0.05;
            antesMago.play();
            fundoImg.style.display            = "flex";
            hiitsumoInicial.style.display     = "flex";
            hiitsumoInicial.style.opacity     = "1";
            hiitsumoInicial.style.visibility  = "visible";
            digitarMensagemIntro("(Hiitsumo está bem a sua frente, olhando de um lado pro outro.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1; // apagar depois (colocar 1)

        } else if (HiitsumoEstado1 === 2) {
            mensagem.style.maxWidth = "400px";
            digitarMensagemIntro("(Você se vê dentro de um salão muito grande, com várias estantes de livro e candelabros.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 3) {
            digitarMensagemIntro("(De um dos lados, você vê uma prateleira exibindo vassouras muito bem ornamentadas.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 4) {
            digitarMensagemIntro("(O chão é empoeirado, apesar da quantidade ridícula de vassouras.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 5) {
            digitarMensagemIntro("(O lugar cheira a gengibre e cinzas.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 6) {
            opcoes.style.display    = "block";
            mensagem.style.display  = "none";
            opcA.style.display = "block";
            digitarOpcao('"Cadê a máquina?"', "opcaoA");
            opcB.style.display = "none";
            opcA.onclick = () => { HiitsumoEstado1 += 1; };

        } else if (HiitsumoEstado1 === 7) {
            opcoes.style.display          = "none";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "flex";
            digitarMensagemIntro("No meu bolso.", "falaHiitsumoIntro", "feliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 8) {
            mensagem.style.maxWidth = "450px";
            digitarMensagemIntro("Sim, isso mesmo. Literalmente.", "falaHiitsumoIntro", "feliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 9) {
            digitarMensagemIntro("Por questões de conveniência, eu implementei uma versão miniatura da máquina para carregar ela por aí.", "falaHiitsumoIntro", "nerd");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 10) {
            mensagem.style.maxWidth = "400px";
            digitarMensagemIntro("Mas preciso de um espaço bom para usar ela.", "falaHiitsumoIntro", "feliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 11) {
            cabecaIntro.style.display = "none";
            digitarMensagemIntro("(Hiitsumo olha ao redor outra vez e lhe diz...)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 12) {
            cabecaIntro.style.display = "flex";
            digitarMensagemIntro("Bem, já sei onde nós estamos, melhor acharmos a peça logo…", "falaHiitsumoIntro", "beicinho");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 13) {
            digitarMensagemIntro("Bom, ela não deve estar muito longe.", "falaHiitsumoIntro", "feliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 14) {
            digitarMensagemIntro("E pra esclarecer, estamos na era medieval se você não percebeu.", "falaHiitsumoIntro", "feliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 15) {
            cabecaIntro.style.display = "none";
            digitarMensagemIntro("(Vocês andam ao redor da sala, vasculhando as prateleiras em busca de qualquer pista.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 16) {
            cabecaIntro.style.display = "flex";
            digitarMensagemIntro(`Ei, ${nomePlayer}, olha ali!`, "falaHiitsumoIntro", "animada");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 17) {
            cabecaIntro.style.display = "none";
            digitarMensagemIntro("(Tem uma engrenagem, amarela e grande o suficiente para que se destacasse do resto da sala.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 18) {
            digitarMensagemIntro("(Ela é um tanto reluzente e o ambiente ao redor parece apontar para ela.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 19) {
            digitarMensagemIntro("(E tem um chapéu de bruxo muito legal)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 20) {
            opcoes.style.display   = "block";
            mensagem.style.display = "none";
            opcA.style.display = "block";
            digitarOpcao('(Pegar a engrenagem)', "opcaoA");
            opcB.style.display = "block";
            digitarOpcao('(Pegar o chapéu)', "opcaoB");
            opcA.onclick = () => { HiitsumoEstado1 += 5; };
            opcB.onclick = () => { HiitsumoEstado1 += 1; };

        } else if (HiitsumoEstado1 === 21) {
            opcoes.style.display          = "none";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "flex";
            digitarMensagemIntro("Não era bem isso, mas…", "falaHiitsumoIntro", "beicinho");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 22) {
            digitarMensagemIntro("Belo chapéu!", "falaHiitsumoIntro", "V");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 23) {
            digitarMensagemIntro("Enfim, vamos pegar a engrenagem e dar o fora daqui.", "falaHiitsumoIntro", "intro");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 24) {
            cabecaIntro.style.display = "none";
            digitarMensagemIntro("(Hiitsumo pega a engrenagem e a entrega nas suas mãos.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 25) {
            opcoes.style.display          = "none";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "none";
            digitarMensagemIntro("(A engrenagem é um pouco mais leve do que você imaginava.)", "falaHiitsumoIntro", "paradaFeliz");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 26) {
            cabecaIntro.style.display = "flex";
            digitarMensagemIntro("Foi bem mais rápido do que eu esperava! Ótimo!", "falaHiitsumoIntro", "mao");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 27) {
            digitarMensagemIntro("Vamos voltar agora!", "falaHiitsumoIntro", "intro");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 28) {
            cabecaIntro.style.display = "none";
            digitarMensagemIntro("(Hiitsumo parece um pouco inquieta)", "falaHiitsumoIntro", "parada");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 29) {
            opcoes.style.display   = "block";
            mensagem.style.display = "none";
            opcA.style.display = "block";
            digitarOpcao('"O que foi? Que cara é essa?"', "opcaoA");
            opcB.style.display = "none";
            opcA.onclick = () => { HiitsumoEstado1 += 1; };

        } else if (HiitsumoEstado1 === 30) {
            opcoes.style.display          = "none";
            mensagem.style.display        = "flex";
            cabecaIntro.style.display     = "flex";
            digitarMensagemIntro("Bem… Eu já estive aqui antes e…", "falaHiitsumoIntro", "intro");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 31) {
            digitarMensagemIntro("Os caras da era medieval conseguem ser muito chatos, sabe?", "falaHiitsumoIntro", "beicinho");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 32) {
            digitarMensagemIntro("Na última vez que eu estive aqui, meio que…", "falaHiitsumoIntro", "intro");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 33) {
            cabecaIntro.style.display = "none";
            digitarMensagemIntro("(Hiitsumo é interrompida por uma voz aguda e sem sentido que vem do fundo do corredor)", "falaHiitsumoIntro", "parada");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 34) {
            cabecaIntro.style.display = "flex";
            mensagem.style.maxWidth   = "600px";
            digitarMensagemIntro("※⁂⁜ VLORU! VLORU! MUCU XUKOC! ⁜⁂※", "falaHiitsumoIntro", "mago");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 35) {
            mensagem.style.maxWidth = "400px";
            digitarMensagemIntro("Aí tá o problema…", "falaHiitsumoIntro", "raiva");
            HiitsumoEstado1 += 1;

        } else if (HiitsumoEstado1 === 36) {
            // Transição para o Boss 1
            antesMago.pause();
            duranteMago.loop   = true;
            duranteMago.volume = 0.05;
            duranteMago.play();
            mensagem.style.display              = "none";
            fundo.style.display                 = "none";
            introducao.style.pointerEvents      = "none";
            mensagem2.style.pointerEvents       = "auto";
            mensagem2.style.display             = "flex";
            mensagem2.style.maxWidth            = "600px";
            hiitsumoInicial.style.display       = "none";
            cabeca1.style.display               = "flex";
            digitarMensagem_Boss(`※⁂⁜ LIOVUL Y JLYHXYL!!! ⁜⁂※`, "falaBoss", "mago");
            HiitsumoEstado2 = 1;
            HiitsumoEstado1 += 1;
            document.querySelector(".apertar").onclick = null; // passa controle para o listener geral

        } else if (HiitsumoEstado1 === 37) {
            // aguarda boss1
        }
    };
}