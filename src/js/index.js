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