// ================================================================================================================
// CONEXÃO 4  —  Após Boss 4 (UNO / Computador)
// Controlado por HiitsumoEstado3, chamado após boss4 estados 14 (Filmes) e 17 (Programas de TV)
// faseAtual === 4
// Ramo "Filmes"          -> HiitsumoEstado3 inicia em 1
// Ramo "Programas de TV" -> HiitsumoEstado3 inicia em 50
// Os dois ramos convergem no estado 100
// ================================================================================================================

function tickConexao4() {

    // ============================================================================================================
    // RAMO — FILMES (continuação depois de "... Que nostalgia, agora eu me lembrei." no boss4)
    // ============================================================================================================

    if (HiitsumoEstado3 === 1) {
        hiitsumoInicial.style.display    = "flex";
        hiitsumoInicial.style.opacity    = "1";
        hiitsumoInicial.style.visibility = "visible";
        cabecaIntro.style.display        = "flex";

        digitarMensagemIntro("Eu assisti esses filmes até enjoar quando eu era mais nova! Decorei todas as falas de The Great Paradox.", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 2) {
        digitarMensagemIntro("Eu devo parecer uma doida com tudo isso de filme sobre viagem no tempo…", "falaHiitsumoIntro", "corada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 3) {
        digitarMensagemIntro("Meu pai é um cinéfilo, sabe? Eu costumava assistir alguns filmes com ele.", "falaHiitsumoIntro", "coradaDedo");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 4) {
        digitarMensagemIntro("Os filmes de viagem no tempo sempre me entretiam muito, foi na mesma época que meu pai começou a construir a máquina.", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 5) {
        digitarMensagemIntro("Então eu comecei a estudar mais a fundo pra tentar ajudar ele.", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 6) {
        digitarMensagemIntro("Nem tudo ocorreu como planejado mas…", "falaHiitsumoIntro", "triste");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 7) {
        digitarMensagemIntro("Não importa! Vamos assistir alguma coisa, boa escolha.", "falaHiitsumoIntro", "V");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 8) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo dá play em um episódio aleatório de The Great Paradox, uma série de comédia lançada em 2082 e finalizada em 2090. Parece ter sido famosa durante seu lançamento.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 9) {
        digitarMensagemIntro("(O enredo se baseia na vida de um estudante que usa sua máquina do tempo para consertar todos os mínimos problemas que ele enfrenta após mudar de casa.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 10) {
        digitarMensagemIntro("(Até agora, parece que ele tenta evitá-los ao invés de consertá-los, mas é um pouco engraçado. Hiitsumo ri bastante.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 11) {
        digitarMensagemIntro("(O rosto dela está vermelho. Ela põe a mão nos olhos e continua sorrindo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 12) {
        digitarMensagemIntro("(Parece que ela precisou parar para limpar os olhos.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 13) {
        digitarMensagemIntro("(Ela olha diretamente para você, e não comenta sobre você já estar olhando para ela.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 14) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("Gostou desse episódio?", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 15) {
        mensagem.style.display    = "none";
        cabecaIntro.style.display = "none";
        document.getElementById("opcoes").style.display = "block";
        opcA.style.display = "block"; digitarOpcao('"Sim, foi divertido."', "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"Não prestei muita atenção."', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 = 16; tickConexao4(); };
        opcB.onclick = () => { HiitsumoEstado3 = 17; tickConexao4(); };

    } else if (HiitsumoEstado3 === 16) {
        mensagem.style.display    = "flex";
        cabecaIntro.style.display = "flex";
        document.getElementById("opcoes").style.display = "none";
        digitarMensagemIntro("Meu senso de humor é terrível, que bom que o seu também é.", "falaHiitsumoIntro", "rindo");
        HiitsumoEstado3 = 20;

    } else if (HiitsumoEstado3 === 17) {
        mensagem.style.display    = "flex";
        cabecaIntro.style.display = "flex";
        document.getElementById("opcoes").style.display = "none";
        digitarMensagemIntro("Poxa, que pena.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 18) {
        digitarMensagemIntro("Mas olha, eu tive uma ideia.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 = 20;

    } else if (HiitsumoEstado3 === 20) {
        digitarMensagemIntro("Na próxima, assistimos uma coisa que você gosta, que tal?", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 21) {
        digitarMensagemIntro("Tinham aqueles que a Graciane nos mostrou, deu pra ver que você gostava deles.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 22) {
        digitarMensagemIntro("Era um da motosserra… e o outro que o prêmio era uma almofada…", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 23) {
        digitarMensagemIntro("Recomenda assistir um desses dois?", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 24) {
        mensagem.style.display    = "none";
        cabecaIntro.style.display = "none";
        document.getElementById("opcoes").style.display = "block";
        opcA.style.display = "block"; digitarOpcao('"Assista Chainsaw Man."', "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"Assista Arcane."', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 = 25; tickConexao4(); };
        opcB.onclick = () => { HiitsumoEstado3 = 25; tickConexao4(); };

    } else if (HiitsumoEstado3 === 25) {
        mensagem.style.display    = "flex";
        cabecaIntro.style.display = "flex";
        document.getElementById("opcoes").style.display = "none";
        digitarMensagemIntro("Eu vou assistir, se quiser, depois podemos assistir juntos.", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 26) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Você balança a cabeça e volta a assistir a série com Hiitsumo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 = 100; 

    } else if (HiitsumoEstado3 === 50) {
        hiitsumoInicial.style.display    = "flex";
        hiitsumoInicial.style.opacity    = "1";
        hiitsumoInicial.style.visibility = "visible";
        cabecaIntro.style.display        = "flex";

        digitarMensagemIntro("Eu precisava estudar bastante pra ajudar meu pai a construir a máquina, então eu tirei todas as minhas redes sociais para eu me focar ao máximo.", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 51) {
        digitarMensagemIntro("Meu pai não reclamava muito de filmes, e eu gostava. Mas eu queria algo que eu não precisasse prestar atenção também.", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 52) {
        digitarMensagemIntro("Eu percebi que ele não reclamava dos programas de TV, então eu ficava assistindo até tarde quando eu não queria estudar mesmo!", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 53) {
        digitarMensagemIntro("As vezes eu abria meus cadernos, anotava a data e aí passava o resto da noite assistindo a Graciane!", "falaHiitsumoIntro", "rindo");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 54) {
        digitarMensagemIntro("Esses negócios são muito bestas, não sei se você vai gostar, mas espero que sim! Vamos assistir.", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 55) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo dá play num programa em que os participantes precisam atravessar um percurso com vários obstáculos.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 56) {
        digitarMensagemIntro("(O editor repetiu os clipes várias vezes para cada vez que algo dramático aparecia.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 57) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("Assistindo um pouco agora, eu acho que eu deveria ter me esforçado um pouco mais antigamente…", "falaHiitsumoIntro", "triste");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 58) {
        mensagem.style.display    = "none";
        cabecaIntro.style.display = "none";
        document.getElementById("opcoes").style.display = "block";
        opcA.style.display = "block"; digitarOpcao('"Você não precisa se esforçar tanto."', "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"..."', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 = 59; tickConexao4(); };
        opcB.onclick = () => { HiitsumoEstado3 = 68; tickConexao4(); }; 

    } else if (HiitsumoEstado3 === 59) {
        mensagem.style.display    = "flex";
        cabecaIntro.style.display = "flex";
        document.getElementById("opcoes").style.display = "none";
        digitarMensagemIntro("Um pouco mais de maestria faz toda a diferença …", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 60) {
        digitarMensagemIntro("Não tenho como contar com mais nada além de mim mesma pra finalizar isso.", "falaHiitsumoIntro", "triste");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 61) {
        mensagem.style.display    = "none";
        cabecaIntro.style.display = "none";
        document.getElementById("opcoes").style.display = "block";
        opcA.style.display = "block"; digitarOpcao('"Você pode contar comigo."', "opcaoA");
        opcB.style.display = "none";
        opcA.onclick = () => { HiitsumoEstado3 = 62; tickConexao4(); };

    } else if (HiitsumoEstado3 === 62) {
        mensagem.style.display    = "flex";
        cabecaIntro.style.display = "flex";
        document.getElementById("opcoes").style.display = "none";
        digitarMensagemIntro("...", "falaHiitsumoIntro", "triste");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 63) {
        digitarMensagemIntro("... É claro…", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 64) {
        digitarMensagemIntro("... Obrigada…", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 65) {
        digitarMensagemIntro("Bom, estamos perto das últimas engrenagens agora, e então não vai importar se eu deixei de estudar um ou dois dias a mais ou a menos.", "falaHiitsumoIntro", "V");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 66) {
        digitarMensagemIntro("Vamos continuar assistindo enquanto isso.", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 = 68; 

    } else if (HiitsumoEstado3 === 68) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Vocês continuam assistindo normalmente.)", "falaHiitsumoIntro");
        HiitsumoEstado3 = 100; 

    } else if (HiitsumoEstado3 === 100) {
        antesEspaco.pause();
        antesEspaco.loop = false;
        
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Mas, passando a hora chegou o momento em que…)", "falaHiitsumoIntro");
        
    } else if (HiitsumoEstado3 === 101) {
        digitarMensagemIntro("(TRUNK!)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 102) {
        duranteEspaco.play();
        duranteEspaco.loop = true;

        digitarMensagemIntro("(A máquina do tempo chegou no destino estabelecido por Hiitsumo.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 103) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro(`Estamos aqui, ${nomePlayer}, e agora vamos ter um problema…`, "falaHiitsumoIntro", "beicinho");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 104) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("Hiitsumo dá duas batidas na parede da máquina do tempo e uma pequena janela aparece.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 105) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("Levei muito mais tempo pra implementar isso do que pode parecer!", "falaHiitsumoIntro", "coradaDedo");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 106) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Você se aproxima da janela e do lado de fora vê…)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 107) {
        digitarMensagemIntro("(Uma vastidão de estrelas, um pouco acima de você.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 108) {
        digitarMensagemIntro("(A terra, muito abaixo de você.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 109) {
        digitarMensagemIntro("(E um ponto brilhante e dourado, na altura dos seus olhos.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 110) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro(`A engrenagem está bem ali, ${nomePlayer}.`, "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 111) {
        digitarMensagemIntro("Eu já estive aqui e não consegui recuperar ela.", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 112) {
        digitarMensagemIntro("Mas, eu já me preparei pra essa situação!", "falaHiitsumoIntro", "nerd");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 113) {
        digitarMensagemIntro("Nós estamos lentamente indo em direção a ela,  mas isso não é suficiente.", "falaHiitsumoIntro", "normal");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 114) {
        digitarMensagemIntro("Contemple…", "falaHiitsumoIntro", "bracoEsticado");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 115) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo mostra um enorme braço mecânico.)", "falaHiitsumoIntro", "bracoMecanico");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 116) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro(`Não precisa me elogiar, ${nomePlayer}, foi apenas muito conveniente, eu sei, eu sei.`, "falaHiitsumoIntro", "nerd");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 117) {
        digitarMensagemIntro("Vai ser moleza pra gente recuperar essa engrenagem com isso, não é verdade?", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 118) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo olha pela janela.)", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;
    } else if (HiitsumoEstado3 === 119) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("Só precisa agarrar a engrenagem e desviar dos meteoros, muito fáci-", "falaHiitsumoIntro", "normal");
        
        TimeRanges.apply(HiitsumoEstado3 = 120, tickConexao4, 3000);
    } else if (HiitsumoEstado3 === 120) {
        digitandoMensagemIntro("METEROROS??????", "falaHiitsumoIntro", "surpresaClassico");
        HiitsumoEstado3 += 1;
    }
}