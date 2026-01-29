// Funções de digitação para introdução

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
    if (!SAVE_ATIVO || !veioDoSave01) {
        audio.play().catch(() => { });
    }

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

    if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-corada-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-corada.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-corada.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-nerd-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-nerd.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-nerd.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-V-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-V.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-V.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-feliz-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-animada-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-animada.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-animada.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-feliz-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

    if (cabeca) cabeca.src = "./src/img/cabeca-beicinho-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-beicinho.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-beicinho.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho.gif";
        }
    }, velocidade);
}

function digitarMensagemMago(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-mago.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-mago.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-mago.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";
        }
    }, velocidade);
}

function digitarMensagemRaiva(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-raiva-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-raiva.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-raiva.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva.gif";
        }
    }, velocidade);
}

function digitarMensagemChapeuRindo(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-rindo.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-rindo.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-rindo.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-rindo.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-rindo.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-rindo.gif";
        }
    }, velocidade);
}

function digitarMensagemChapeuCorada(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-corada-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-corada-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-corada.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-corada.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-corada.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-corada.gif";
        }
    }, velocidade);
}

function digitarMensagemChapeuV(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-V-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-V-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-V.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-V.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-V.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-V.gif";
        }
    }, velocidade);
}

function digitarMensagemSurpresa(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-surpresa-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
        }
    }, velocidade);
}

function digitar_MensagemSurpresaParada(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
        }
    }, velocidade);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Funções para a parte de falas da Hiitsumo no canto

function digitar_Mensagem(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

function digitar_MensagemSurpresa(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-surpresa-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
        }
    }, velocidade);
}

function digitar_MensagemSurpresaParada(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-surpresa.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
        }
    }, velocidade);
}

function digitar_MensagemRaiva(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-raiva-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-raiva1.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva1.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-raiva1.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva1.gif";
        }
    }, velocidade);
}

function digitar_MensagemRaivaNormal(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-raiva-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-raiva.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva1.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-raiva.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-raiva1.gif";
        }
    }, velocidade);
}

function digitar_MensagemBeicinho(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-beicinho-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-beicinho.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-beicinho.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho.gif";
        }
    }, velocidade);
}

function digitar_MensagemBeicinhoNormal(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-beicinho1-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho1-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-beicinho1.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho1.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-beicinho1.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-beicinho1.gif";
        }
    }, velocidade);
}

function digitar_MensagemFeliz(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-feliz-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-feliz.gif";
        }
    }, velocidade);
}

function digitar_MensagemNerd(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-nerd-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-nerd.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-nerd.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-nerd.gif";
        }
    }, velocidade);
}

function digitar_MensagemAnimada(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-animada-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-animada.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-animada.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-animada.gif";
        }
    }, velocidade);
}

function digitar_MensagemChapeu(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu.gif";
        }
    }, velocidade);
}

function digitar_MensagemChapeuNerd(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-nerd-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-nerd-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-nerd.png";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-nerd.png";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-nerd.png";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-nerd.png";
        }
    }, velocidade);
}

function digitar_MensagemChapeuOlhoFechado(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-olho-fechado-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-olho-fechado-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-olho-fechado.png";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-olho-fechado.png";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-olho-fechado.png";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-olho-fechado.png";
        }
    }, velocidade);
}

function digitar_MensagemChapeuMagia(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-magia-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-magia-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-magia.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-magia.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-chapeu-magia.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-chapeu-magia.gif";
        }
    }, velocidade);
}

function digitar_MensagemCoradaDedo(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-corada-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada-dedo-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-corada.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada-dedo.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-corada.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada-dedo.gif";
        }
    }, velocidade);
}

function digitar_MensagemCorada(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-corada-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-corada.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-corada.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-corada.gif";
        }
    }, velocidade);
}

function digitar_MensagemV(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-V-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-V.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-V.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-V.gif";
        }
    }, velocidade);
}

function digitar_MensagemTriste(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-triste-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-triste-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-triste.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-triste.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-triste.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-triste.gif";
        }
    }, velocidade);
}

function digitar_MensagemMao(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-feliz-falando.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-feliz.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-mao.gif";
        }
    }, velocidade);
}

function digitar_MensagemSeria(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca");
    const Hiitsumo = document.getElementById("Hiitsumo");

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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Funções da parte de falas da caixa-boss

function digitarMensagem_Mago(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
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

    if (cabeca) cabeca.src = "./src/img/cabeca-mago.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-mago.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-mago.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-frente-seria.gif";
        }
    }, velocidade);
}

function digitarMensagem_IntroShow(texto, elementoId, velocidade = 40) {
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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowParado(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowParado1(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-nada.png";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-nada.png";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-nada.png";
        }
    }, velocidade);
}

function digitarMensagem_Show(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPisca(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show-pisca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-pisca.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show-pisca.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-pisca.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowTriste(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-triste-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-triste-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show-triste.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-triste.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show-triste.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-triste.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPremio1(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio1.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio1.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio1.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPremio2(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio2.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio2.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio2.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPremio3(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio3.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio3.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio3.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPremio4(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio4.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio4.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio4.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPremio5(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio5.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio5.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-premio5.gif";
        }
    }, velocidade);
}

function digitarMensagem_ShowPersonagem(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-p2.png";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-p2.png";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-p2.png";
        }
    }, velocidade);
}

function digitarMensagem_ShowSiume(texto, elementoId, velocidade = 40) {
    const elemento = document.getElementById(elementoId);
    const audio = document.getElementById("audioHiitsumo");
    const cabeca = document.getElementById("cabeca1");
    const Hiitsumo = document.getElementById("boss");

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

    if (cabeca) cabeca.src = "./src/img/cabeca-show-siume-falando.gif";
    if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-siume-falando.gif";

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

            if (cabeca) cabeca.src = "./src/img/cabeca-show-siume.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-siume.gif";
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

            if (cabeca) cabeca.src = "./src/img/cabeca-show-siume.gif";
            if (Hiitsumo) Hiitsumo.src = "./src/img/boss1-siume.gif";
        }
    }, velocidade);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Animações 

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
