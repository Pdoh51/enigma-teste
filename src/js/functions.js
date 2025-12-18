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

    if (cabeca) cabeca.src = "./src/img/cabeca-feliz-falando.gif";
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Funções da parte de falas da caixa-boss

function digitarMensagemMago(texto, elementoId, velocidade = 40) {
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