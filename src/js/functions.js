// ================================================================================================================
// BOTÃO
// ================================================================================================================

function digitarOpcao(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    elemento.textContent = "";
    elemento.style.display = "block";

    const globalAudio = document.getElementById("audioHiitsumo");
    const audioOpc = new Audio(globalAudio ? globalAudio.src : "");
    audioOpc.loop = false;
    audioOpc.currentTime = 0;
    audioOpc.play().catch(() => { });

    if (elemento._interval) {
        clearInterval(elemento._interval);
        elemento._interval = null;
    }
    elemento._pulando = false;

    const handleSkip = (e) => {
        // Se ainda está digitando, completa o texto imediatamente
        // mas NÃO bloqueia o evento — o onclick do botão ainda deve disparar normalmente
        if (elemento._interval) {
            elemento._pulando = true;
        }
    };
    elemento.addEventListener("click", handleSkip, true);

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


// ================================================================================================================
// INTRO  (cabecaIntro / HiitsumoIntro)
// ================================================================================================================

// Mapa de estados para a intro
// Formato: estado → { cabFalando, cabIdle, hFalando, hIdle, salvarAudio? }
// salvarAudio: true = só toca se !SAVE_ATIVO || !veioDoSave01
const _INTRO_GIFS = {
    normal:          { cabFalando: "cabeca-falando.gif",                    cabIdle: "cabeca.gif",                       hFalando: "hiitsumo-falando.gif",                    hIdle: "hiitsumo.gif",                       salvarAudio: true  },
    intro:           { cabFalando: "cabeca-falando.gif",                    cabIdle: "cabeca.gif",                       hFalando: "hiitsumo-frente-seria-falando.gif",        hIdle: "hiitsumo-frente-seria.gif",           salvarAudio: true  },
    parada:          { cabFalando: "cabeca-falando.gif",                    cabIdle: "cabeca.gif",                       hFalando: "hiitsumo-frente-seria.gif",               hIdle: "hiitsumo-frente-seria.gif",           salvarAudio: false },
    paradaFeliz:     { cabFalando: "cabeca-feliz.gif",                      cabIdle: "cabeca-feliz.gif",                  hFalando: "hiitsumo-frente-feliz.gif",               hIdle: "hiitsumo-frente-feliz.gif",           salvarAudio: false },
    corada:          { cabFalando: "cabeca-corada-falando.gif",              cabIdle: "cabeca-corada.gif",                 hFalando: "hiitsumo-corada-falando.gif",             hIdle: "hiitsumo-corada.gif",                 salvarAudio: false },
    nerd:            { cabFalando: "cabeca-nerd-falando.gif",                cabIdle: "cabeca-nerd.gif",                   hFalando: "hiitsumo-nerd-falando.gif",               hIdle: "hiitsumo-nerd.gif",                   salvarAudio: false },
    V:               { cabFalando: "cabeca-V-falando.gif",                   cabIdle: "cabeca-V.gif",                      hFalando: "hiitsumo-V-falando.gif",                  hIdle: "hiitsumo-V.gif",                      salvarAudio: false },
    mao:             { cabFalando: "cabeca-feliz-falando.gif",               cabIdle: "cabeca-feliz.gif",                  hFalando: "hiitsumo-mao-falando.gif",                hIdle: "hiitsumo-mao.gif",                    salvarAudio: false },
    animada:         { cabFalando: "cabeca-animada-falando.gif",             cabIdle: "cabeca-animada.gif",                hFalando: "hiitsumo-animada-falando.gif",            hIdle: "hiitsumo-animada.gif",                salvarAudio: false },
    feliz:           { cabFalando: "cabeca-feliz-falando.gif",               cabIdle: "cabeca-feliz.gif",                  hFalando: "hiitsumo-frente-feliz-falando.gif",       hIdle: "hiitsumo-frente-feliz.gif",           salvarAudio: false },
    rindo:           { cabFalando: "cabeca-rindo.gif",                       cabIdle: "cabeca-rindo.gif",                  hFalando: "hiitsumo-rindo.gif",                      hIdle: "hiitsumo-rindo.gif",                  salvarAudio: false },
    beicinho:        { cabFalando: "cabeca-beicinho-falando.gif",            cabIdle: "cabeca-beicinho.gif",               hFalando: "hiitsumo-beicinho-falando.gif",           hIdle: "hiitsumo-beicinho.gif",               salvarAudio: false },
    beicinhoNormal:  { cabFalando: "cabeca-beicinho1-falando.gif",           cabIdle: "cabeca-beicinho1.gif",              hFalando: "hiitsumo-beicinho1-falando.gif",          hIdle: "hiitsumo-beicinho1.gif",              salvarAudio: false },
    mago:            { cabFalando: "cabeca-mago.gif",                        cabIdle: "cabeca-mago.gif",                   hFalando: "hiitsumo-frente-seria.gif",               hIdle: "hiitsumo-frente-seria.gif",           salvarAudio: false },
    raiva:           { cabFalando: "cabeca-raiva-falando.gif",               cabIdle: "cabeca-raiva.gif",                  hFalando: "hiitsumo-raiva-falando.gif",              hIdle: "hiitsumo-raiva.gif",                  salvarAudio: false },
    raiva1:          { cabFalando: "cabeca-raiva1-falando.gif",              cabIdle: "cabeca-raiva.gif",                  hFalando: "hiitsumo-raiva1-falando.gif",             hIdle: "hiitsumo-raiva.gif",                  salvarAudio: false, cabecaId: "cabecaintro", hiitsumoId: "Hiitsumointro" },
    chapeuRindo:     { cabFalando: "cabeca-chapeu-rindo.gif",                cabIdle: "cabeca-chapeu-rindo.gif",           hFalando: "hiitsumo-chapeu-rindo.gif",               hIdle: "hiitsumo-chapeu-rindo.gif",           salvarAudio: false },
    chapeuCorada:    { cabFalando: "cabeca-chapeu-corada-falando.gif",       cabIdle: "cabeca-chapeu-corada.gif",          hFalando: "hiitsumo-chapeu-corada-falando.gif",      hIdle: "hiitsumo-chapeu-corada.gif",          salvarAudio: false },
    chapeuV:         { cabFalando: "cabeca-chapeu-V-falando.gif",            cabIdle: "cabeca-chapeu-V.gif",               hFalando: "hiitsumo-chapeu-V-falando.gif",           hIdle: "hiitsumo-chapeu-V.gif",               salvarAudio: false },
    surpresa:        { cabFalando: "cabeca-surpresa-falando.gif",            cabIdle: "cabeca-surpresa.gif",               hFalando: "hiitsumo-surpresa-falando.gif",           hIdle: "hiitsumo-surpresa.gif",               salvarAudio: true  },
    surpresaParada:  { cabFalando: "cabeca-surpresa.gif",                    cabIdle: "cabeca-surpresa.gif",               hFalando: "hiitsumo-surpresa.gif",                   hIdle: "hiitsumo-surpresa.gif",               salvarAudio: true  },
    refri:           { cabFalando: "cabeca-feliz-falando.gif",               cabIdle: "cabeca-feliz.gif",                  hFalando: "hiitsumo-refri-falando.gif",              hIdle: "hiitsumo-refri.gif",                  salvarAudio: false },
    triste:          { cabFalando: "cabeca-triste-falando.gif",              cabIdle: "cabeca-triste.gif",                 hFalando: "hiitsumo-triste-falando.gif",             hIdle: "hiitsumo-triste.gif",                 salvarAudio: false },
    suspiro:         { cabFalando: "cabeca-suspiro-falando.gif",             cabIdle: "cabeca-suspiro.webp",               hFalando: "hiitsumo-suspiro-falando.gif",            hIdle: "hiitsumo-suspiro.webp",               salvarAudio: false },
    empatica:        { cabFalando: "cabeca-empatica-falando.gif",            cabIdle: "cabeca-empatica.gif",               hFalando: "hiitsumo-empatica-falando.gif",           hIdle: "hiitsumo-empatica.gif",               salvarAudio: false },
    seria:           { cabFalando: "cabeca-falando.gif",                     cabIdle: "cabeca.gif",                        hFalando: "hiitsumo-frente-seria-falando.gif",       hIdle: "hiitsumo-frente-seria.gif",           salvarAudio: true  },
    introShow:       { cabFalando: "cabeca-show-falando.gif",                cabIdle: "cabeca-show.gif",                   hFalando: "hiitsumo-surpresa.gif",                   hIdle: "hiitsumo-surpresa.gif",               salvarAudio: false },
};

function digitarMensagemIntro(texto, elementoId, estado = "normal", velocidade = 40) {
    const cfg = _INTRO_GIFS[estado] ?? _INTRO_GIFS.normal;
    const cabecaId  = cfg.cabecaId  ?? "cabecaIntro";
    const hiitsumoId = cfg.hiitsumoId ?? "HiitsumoIntro";

    const elemento = document.getElementById(elementoId);
    const audio    = document.getElementById("audioHiitsumo");
    const cabeca   = document.getElementById(cabecaId);
    const Hiitsumo = document.getElementById(hiitsumoId);
    const BASE = "./src/img/";

    if (!elemento) return;
    if (digitando) { pulando = true; return; }
    if (intervaloDigitacaoAtual) { clearInterval(intervaloDigitacaoAtual); intervaloDigitacaoAtual = null; }

    textoCompleto = texto;
    pulando = false;
    digitando = true;
    elemento.textContent = "";
    elemento.style.display = "block";

    audio.pause(); audio.currentTime = 0; audio.loop = true;
    if (!cfg.salvarAudio || !SAVE_ATIVO || !veioDoSave01) {
        audio.play().catch(() => { });
    }
    if (cabeca)   cabeca.src   = BASE + cfg.cabFalando;
    if (Hiitsumo) Hiitsumo.src = BASE + cfg.hFalando;

    const parar = () => {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
        digitando = false;
        audio.pause(); audio.currentTime = 0;
        if (cabeca)   cabeca.src   = BASE + cfg.cabIdle;
        if (Hiitsumo) Hiitsumo.src = BASE + cfg.hIdle;
    };

    let i = 0;
    intervaloDigitacaoAtual = setInterval(() => {
        if (pulando) { elemento.textContent = textoCompleto; pulando = false; parar(); return; }
        if (i < texto.length) { elemento.textContent += texto.charAt(i++); }
        else { parar(); }
    }, velocidade);
}



// ================================================================================================================
// FALAS  (cabeca / Hiitsumo — canto da tela)
// ================================================================================================================

const _FALAS_GIFS = {
    normal:              { cabFalando: "cabeca-falando.gif",                       cabIdle: "cabeca.gif",                         hFalando: "hiitsumo-falando.gif",                       hIdle: "hiitsumo.gif",                        salvarAudio: true  },
    surpresa:            { cabFalando: "cabeca-surpresa-falando.gif",              cabIdle: "cabeca-surpresa.gif",                hFalando: "hiitsumo-surpresa-falando.gif",              hIdle: "hiitsumo-surpresa.gif",               salvarAudio: true  },
    surpresaClassico:    { cabFalando: "cabeca-surpresa-classico-falando.gif",     cabIdle: "cabeca-surpresa-classico.gif",        hFalando: "hiitsumo-surpresa-classico-falando.gif",     hIdle: "hiitsumo-surpresa-classico.gif",      salvarAudio: true  },
    surpresaParada:      { cabFalando: "cabeca-surpresa.gif",                      cabIdle: "cabeca-surpresa.gif",                hFalando: "hiitsumo-surpresa.gif",                      hIdle: "hiitsumo-surpresa.gif",               salvarAudio: true  },
    raiva:               { cabFalando: "cabeca-raiva-falando.gif",                 cabIdle: "cabeca-raiva1.gif",                   hFalando: "hiitsumo-raiva-falando.gif",                 hIdle: "hiitsumo-raiva1.gif",                 salvarAudio: false },
    raivaNormal:         { cabFalando: "cabeca-raiva-falando.gif",                 cabIdle: "cabeca-raiva.gif",                    hFalando: "hiitsumo-raiva-falando.gif",                 hIdle: "hiitsumo-raiva.gif",                  salvarAudio: false },
    raiva1:              { cabFalando: "cabeca-raiva1-falando.gif",                cabIdle: "cabeca-raiva.gif",                    hFalando: "hiitsumo-raiva1-falando.gif",                hIdle: "hiitsumo-raiva.gif",                  salvarAudio: false },
    beicinho:            { cabFalando: "cabeca-beicinho-falando.gif",              cabIdle: "cabeca-beicinho.gif",                 hFalando: "hiitsumo-beicinho-falando.gif",              hIdle: "hiitsumo-beicinho.gif",               salvarAudio: false },
    beicinhoNormal:      { cabFalando: "cabeca-beicinho1-falando.gif",             cabIdle: "cabeca-beicinho1.gif",                hFalando: "hiitsumo-beicinho1-falando.gif",             hIdle: "hiitsumo-beicinho1.gif",              salvarAudio: false },
    feliz:               { cabFalando: "cabeca-feliz-falando.gif",                 cabIdle: "cabeca-feliz.gif",                    hFalando: "hiitsumo-frente-feliz-falando.gif",          hIdle: "hiitsumo-frente-feliz.gif",           salvarAudio: false },
    nerd:                { cabFalando: "cabeca-nerd-falando.gif",                  cabIdle: "cabeca-nerd.gif",                     hFalando: "hiitsumo-nerd-falando.gif",                  hIdle: "hiitsumo-nerd.gif",                   salvarAudio: false },
    animada:             { cabFalando: "cabeca-animada-falando.gif",               cabIdle: "cabeca-animada.gif",                  hFalando: "hiitsumo-animada-falando.gif",               hIdle: "hiitsumo-animada.gif",                salvarAudio: false },
    chapeu:              { cabFalando: "cabeca-chapeu-falando.gif",                cabIdle: "cabeca-chapeu.gif",                   hFalando: "hiitsumo-chapeu-falando.gif",                hIdle: "hiitsumo-chapeu.gif",                 salvarAudio: false },
    chapeuNerd:          { cabFalando: "cabeca-chapeu-nerd-falando.gif",           cabIdle: "cabeca-chapeu-nerd.png",              hFalando: "hiitsumo-chapeu-nerd-falando.gif",           hIdle: "hiitsumo-chapeu-nerd.png",            salvarAudio: false },
    chapeuOlhoFechado:   { cabFalando: "cabeca-chapeu-olho-fechado-falando.gif",   cabIdle: "cabeca-chapeu-olho-fechado.png",      hFalando: "hiitsumo-chapeu-olho-fechado-falando.gif",   hIdle: "hiitsumo-chapeu-olho-fechado.png",    salvarAudio: false },
    chapeuMagia:         { cabFalando: "cabeca-chapeu-magia-falando.gif",          cabIdle: "cabeca-chapeu-magia.gif",             hFalando: "hiitsumo-chapeu-magia-falando.gif",          hIdle: "hiitsumo-chapeu-magia.gif",           salvarAudio: false },
    coradaDedoNormal:    { cabFalando: "cabeca-corada-normal-falando.gif",         cabIdle: "cabeca-corada-normal.gif",            hFalando: "hiitsumo-corada-dedo-normal-falando.gif",    hIdle: "hiitsumo-corada-dedo-normal.gif",     salvarAudio: false },
    coradaDedo:          { cabFalando: "cabeca-corada-falando.gif",                cabIdle: "cabeca-corada.gif",                   hFalando: "hiitsumo-corada-dedo-falando.gif",           hIdle: "hiitsumo-corada-dedo.gif",            salvarAudio: false },
    corada:              { cabFalando: "cabeca-corada-falando.gif",                cabIdle: "cabeca-corada.gif",                   hFalando: "hiitsumo-corada-falando.gif",                hIdle: "hiitsumo-corada.gif",                 salvarAudio: false },
    V:                   { cabFalando: "cabeca-V-falando.gif",                     cabIdle: "cabeca-V.gif",                        hFalando: "hiitsumo-V-falando.gif",                     hIdle: "hiitsumo-V.gif",                      salvarAudio: false },
    triste:              { cabFalando: "cabeca-triste-falando.gif",                cabIdle: "cabeca-triste.gif",                   hFalando: "hiitsumo-triste-falando.gif",                hIdle: "hiitsumo-triste.gif",                 salvarAudio: false },
    mao:                 { cabFalando: "cabeca-feliz-falando.gif",                 cabIdle: "cabeca-feliz.gif",                    hFalando: "hiitsumo-mao-falando.gif",                   hIdle: "hiitsumo-mao.gif",                    salvarAudio: false },
    seria:               { cabFalando: "cabeca-falando.gif",                       cabIdle: "cabeca.gif",                          hFalando: "hiitsumo-frente-seria-falando.gif",          hIdle: "hiitsumo-frente-seria.gif",           salvarAudio: true  },
    preocupada:          { cabFalando: "cabeca-preocupada-falando.gif",            cabIdle: "cabeca-preocupada.gif",               hFalando: "hiitsumo-preocupada-falando.gif",            hIdle: "hiitsumo-preocupada.gif",             salvarAudio: false },
    chorando:            { cabFalando: "cabeca-chorando-falando.gif",              cabIdle: "cabeca-chorando.gif",                 hFalando: "hiitsumo-chorando-falando.gif",              hIdle: "hiitsumo-chorando.gif",               salvarAudio: false },
    nervosa:             { cabFalando: "cabeca-nervosa-falando.gif",               cabIdle: "cabeca-nervosa.gif",                  hFalando: "hiitsumo-nervosa-falando.gif",               hIdle: "hiitsumo-nervosa.gif",                salvarAudio: false },
    mago:                { cabFalando: "cabeca-mago.gif",                          cabIdle: "cabeca-mago.gif",                     hFalando: "hiitsumo-frente-seria.gif",                  hIdle: "hiitsumo-frente-seria.gif",           salvarAudio: false },
};

function digitar_Mensagem(texto, elementoId, estado = "normal", velocidade = 40) {
    const cfg = _FALAS_GIFS[estado] ?? _FALAS_GIFS.normal;

    const elemento = document.getElementById(elementoId);
    const audio    = document.getElementById("audioHiitsumo");
    const cabeca   = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");
    const BASE = "./src/img/";

    if (!elemento) return;
    if (digitando) { pulando = true; return; }
    if (intervaloDigitacaoAtual) { clearInterval(intervaloDigitacaoAtual); intervaloDigitacaoAtual = null; }

    textoCompleto = texto;
    pulando = false;
    digitando = true;
    elemento.textContent = "";
    elemento.style.display = "block";

    audio.pause(); audio.currentTime = 0; audio.loop = true;
    if (!cfg.salvarAudio || !SAVE_ATIVO || !veioDoSave01) {
        audio.play().catch(() => { });
    }
    if (cabeca)   cabeca.src   = BASE + cfg.cabFalando;
    if (Hiitsumo) Hiitsumo.src = BASE + cfg.hFalando;

    const parar = () => {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
        digitando = false;
        audio.pause(); audio.currentTime = 0;
        if (cabeca)   cabeca.src   = BASE + cfg.cabIdle;
        if (Hiitsumo) Hiitsumo.src = BASE + cfg.hIdle;
    };

    let i = 0;
    intervaloDigitacaoAtual = setInterval(() => {
        if (pulando) { elemento.textContent = textoCompleto; pulando = false; parar(); return; }
        if (i < texto.length) { elemento.textContent += texto.charAt(i++); }
        else { parar(); }
    }, velocidade);
}



// ================================================================================================================
// BOSS  (cabeca1 / boss — caixa de diálogo do boss)
// ================================================================================================================
const _BOSS_GIFS = {
    mago:          { cabFalando: "cabeca-mago.gif",                  cabIdle: "cabeca-mago.gif",              hFalando: "hiitsumo-frente-seria.gif",    hIdle: "hiitsumo-frente-seria.gif",  hiitsumoId: "HiitsumoIntro" },
    
    introShow:     { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-falando.gif",            hIdle: "boss1.gif"                   },
    showParado:    { cabFalando: "cabeca-show.gif",                  cabIdle: "cabeca-show.gif",              hFalando: "boss1.gif",                    hIdle: "boss1.gif"                   },
    showParado1:   { cabFalando: "cabeca-show.gif",                  cabIdle: "cabeca-show.gif",              hFalando: "boss1-nada.png",               hIdle: "boss1-nada.png"              },
    show:          { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-falando.gif",            hIdle: "boss1.gif"                   },
    showPisca:     { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show-pisca.gif",        hFalando: "boss1-falando.gif",            hIdle: "boss1-pisca.gif"             },
    showTriste:    { cabFalando: "cabeca-show-triste-falando.gif",   cabIdle: "cabeca-show-triste.gif",       hFalando: "boss1-triste-falando.gif",     hIdle: "boss1-triste.gif"            },
    showPremio1:   { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-premio1.gif",            hIdle: "boss1-premio1.gif"           },
    showPremio2:   { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-premio2.gif",            hIdle: "boss1-premio2.gif"           },
    showPremio3:   { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-premio3.gif",            hIdle: "boss1-premio3.gif"           },
    showPremio4:   { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-premio4.gif",            hIdle: "boss1-premio4.gif"           },
    showPremio5:   { cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-premio5.gif",            hIdle: "boss1-premio5.gif"           },
    showPersonagem:{ cabFalando: "cabeca-show-falando.gif",          cabIdle: "cabeca-show.gif",              hFalando: "boss1-p2.png",                 hIdle: "boss1-p2.png"                },
    showSiume:     { cabFalando: "cabeca-show-siume-falando.gif",    cabIdle: "cabeca-show-siume.gif",        hFalando: "boss1-siume-falando.gif",      hIdle: "boss1-siume.gif"             },
    showFechada:   { cabFalando: "cabeca-show-fechada-falando.gif",  cabIdle: "cabeca-show-fechada.gif",      hFalando: "boss1-fechada-falando.gif",    hIdle: "boss1-fechada.gif"           },
    
    dinossauro:    { cabFalando: "cabeca-dino-falando.gif",          cabIdle: "cabeca-dino.gif",              hFalando: "boss2-falando.gif",            hIdle: "boss2.gif"                   },
    dinossauroParado:  { cabFalando: "cabeca-dino.gif",              cabIdle: "cabeca-dino.gif",              hFalando: "boss2.gif",                    hIdle: "boss2.gif"                   },
    dinossauroRugindo: { cabFalando: "cabeca-dino-rugindo.gif",      cabIdle: "cabeca-dino-rugindo.gif",      hFalando: "boss2-rugindo.gif",            hIdle: "boss2-rugindo.gif"           },
    dinossauroBravo:   { cabFalando: "cabeca-dino-bravo-falando.gif",        cabIdle: "cabeca-dino-bravo.gif",        hFalando: "boss2-bravo-falando.gif",              hIdle: "boss2-bravo.gif"             },
};

function digitarMensagem_Boss(texto, elementoId, estado = "show", velocidade = 40) {
    const cfg = _BOSS_GIFS[estado] ?? _BOSS_GIFS.show;
    const hiitsumoId = cfg.hiitsumoId ?? "boss";

    const elemento = document.getElementById(elementoId);
    const audio    = document.getElementById("audioHiitsumo");
    const cabeca   = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById(hiitsumoId);
    const BASE = "./src/img/";

    if (!elemento) return;
    if (digitando) { pulando = true; return; }
    if (intervaloDigitacaoAtual) { clearInterval(intervaloDigitacaoAtual); intervaloDigitacaoAtual = null; }

    textoCompleto = texto;
    pulando = false;
    digitando = true;
    elemento.textContent = "";
    elemento.style.display = "block";

    audio.pause(); audio.currentTime = 0; audio.loop = true;
    audio.play().catch(() => { });
    if (cabeca)   cabeca.src   = BASE + cfg.cabFalando;
    if (Hiitsumo) Hiitsumo.src = BASE + cfg.hFalando;

    const parar = () => {
        clearInterval(intervaloDigitacaoAtual);
        intervaloDigitacaoAtual = null;
        digitando = false;
        audio.pause(); audio.currentTime = 0;
        if (cabeca)   cabeca.src   = BASE + cfg.cabIdle;
        if (Hiitsumo) Hiitsumo.src = BASE + cfg.hIdle;
    };

    let i = 0;
    intervaloDigitacaoAtual = setInterval(() => {
        if (pulando) { elemento.textContent = textoCompleto; pulando = false; parar(); return; }
        if (i < texto.length) { elemento.textContent += texto.charAt(i++); }
        else { parar(); }
    }, velocidade);
}

// ================================================================================================================
// ANIMAÇÕES
// ================================================================================================================

function derrotarBoss() {
    const boss = document.getElementById("boss");
    boss.classList.remove("boss-derrotado");
    void boss.offsetWidth;
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