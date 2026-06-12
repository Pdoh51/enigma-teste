// ================================================================================================================
// CONEXÃO 2  —  Entre Boss 2 (Graciane) e Boss 3 (Dinossauro)
// Controlado por HiitsumoEstado3 (faseAtual === 2, HiitsumoEstado2 === 0)
// ================================================================================================================

function iniciarConexao2() { /* chamada após boss2 estado 223 */ }

function tickConexao2() {
    if (HiitsumoEstado3 === 0) {
        cabecaIntro.style.display     = "none";
        carregar.style.display        = "flex";
        maquina.src                   = "./src/img/maquina-tempo2.gif";
        aparecerMaquina();
        hiitsumoInicial.style.display = "flex";
        hiitsumoInicial.style.opacity = "0";
        hiitsumoInicial.style.visibility = "hidden";
        digitarMensagemIntro("(A máquina aparece na frente de vocês dois.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 1) {
        hiitsumoInicial.style.opacity    = "1";
        hiitsumoInicial.style.visibility = "visible";
        cabecaIntro.style.display        = "flex";
        digitarMensagemIntro("Quer um pouco de refri?", "falaHiitsumoIntro", "refri");
        HiitsumoEstado3 += 1; // apagar depois (colocar 1)

    } else if (HiitsumoEstado3 === 2) {
        mensagem.style.display = "none";
        opcoes.style.display   = "block";
        opcA.style.display = "block"; digitarOpcao('"Tô bem."',  "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"Aceito."', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 += 1; };
        opcB.onclick = () => { HiitsumoEstado3 += 13; };

    } else if (HiitsumoEstado3 === 3) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Em algum momento você vai ter que tomar pelo menos um copo. Não consigo tomar tudo sozinha.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 4) {
        digitarMensagemIntro("Pensei que ela ia me dar uma latinha, mas ela me deu esse garrafão de Frutuba.", "falaHiitsumoIntro", "beicinhoNormal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 5) {
        digitarMensagemIntro("Bom, fazer o que, o que vale é a intenção. Ela parece ter gostado da gente de verdade.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 6) {
        digitarMensagemIntro("Mas você tem certeza?", "falaHiitsumoIntro", "refri");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 7) {
        mensagem.style.display = "none";
        opcoes.style.display   = "block";
        opcA.style.display = "block"; digitarOpcao('"Sim."',          "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"Aceito o refri."', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 += 4; };
        opcB.onclick = () => { HiitsumoEstado3 += 1; };

    } else if (HiitsumoEstado3 === 8) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Me dá a engrenagem e pode aproveitar seu refri, vou arrumando as coisas aqui.", "falaHiitsumoIntro", "refri");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 9) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Você faz como ela manda e depois dá um gole no refri. Ele é mais doce do que você se lembra.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 10) {
        digitarMensagemIntro("(Mas pelo menos sua sede acabou.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 12;

    } else if (HiitsumoEstado3 === 11) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Bom, entendo. Também não quero nada agora. Vou deixar ele em algum canto.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 12) {
        digitarMensagemIntro("Mas preciso da engrenagem para arrumar as coisas logo.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 13) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Você entrega a engrenagem para ela.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 14) {
        digitarMensagemIntro("(Você percebe estar com sede. Talvez água ajudasse. Mas não há nada que se possa fazer agora.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 8;

    } else if (HiitsumoEstado3 === 15) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Que ótimo, deixa eu colocar num copo pra você.", "falaHiitsumoIntro", "refri");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 16) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Após receber o copo, você dá um gole bem pequeno. Ele é mais doce do que você esperava.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 17) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("Espero que seja bom, porque ela deu 2L pra gente.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 18) {
        digitarMensagemIntro("Cara, pensei que ela ia me dar só uma latinha, mas né…", "falaHiitsumoIntro", "beicinhoNormal");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 19) {
        digitarMensagemIntro("Deve ser a forma dela de agradar às pessoas. O que vale é a intenção, né?", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 20) {
        digitarMensagemIntro("E ela parece ter gostado da gente de verdade…", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 21) {
        digitarMensagemIntro("Bom, de volta ao trabalho.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 22) {
        mensagem.style.display    = "flex";
        opcoes.style.display      = "none";
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo encaixa as engrenagens de volta no lugar, tanto a primeira quanto a segunda.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 23) {
        digitarMensagemIntro("(Como foi necessário fugir do mago com urgência, Hiitsumo não conseguiu averiguar a situação da máquina até esse instante.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 24) {
        digitarMensagemIntro("(Foi uma sorte tremenda que a outra engrenagem estava numa época e num ambiente amigável e que a máquina os levou para esta mesma.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 25) {
        digitarMensagemIntro("(Afinal, pelo o que Hiitsumo tinha dito, a máquina ainda está instável.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 26) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("E pronto!", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 27) {
        digitarMensagemIntro(`Vem ver como ela está, ${nomePlayer}.`, "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 28) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo toca nas paredes da máquina e olha para você com um sorriso.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 29) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("Eu queria deixar a máquina mais bonita, pra ser sincera.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 30) {
        digitarMensagemIntro("Vamos mostrar para a Graci depois, aposto que ela-", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 31) {
        cabecaIntro.style.display = "none";
        mensagem.classList.add("tremer");
        carregar.classList.add("tremer");
        somMaquina = document.getElementById("somMaquina");
        somMaquina.play(); somMaquina.loop = true; somMaquina.currentTime = 0;
        digitarMensagemIntro("(De repente, algo ruim acontece. Acontece sem nenhum aviso prévio.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 32) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro(`Ah, não. Não, não, não. ${nomePlayer}.`, "falaHiitsumoIntro", "surpresa");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 33) {
        digitarMensagemIntro("Por favor, máquina. Onde eu errei? Eu errei o lugar? O que foi dessa vez?", "falaHiitsumoIntro", "surpresa");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 34) {
        digitarMensagemIntro(`${nomePlayer}, ajuda. Por que isso está acontecendo?!`, "falaHiitsumoIntro", "surpresa");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 35) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Ela chamou por você nesse instante por puro instinto, você sabe disso.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 36) {
        digitarMensagemIntro("(E você sabe que também não pode fazer nada. Mas com pressa, se aproxima de Hiitsumo.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 37) {
        hiitsumoInicial.style.display = "none";
        digitarMensagemIntro("(Você não consegue ver a expressão dela, mas em meio a falas enroladas. Ela entra na máquina do tempo e tenta desligá-la.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 38) {
        digitarMensagemIntro("(E no exato instante em que você pisa dentro dela…)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 39) {
        carregar.style.display = "none";
        digitarMensagemIntro("(O som da ativação dispara.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 40) {
        mensagem.classList.remove("tremer");
        carregar.classList.remove("tremer");
        somMaquina.pause(); somMaquina.currentTime = 0; somMaquina.loop = false;
        digitarMensagemIntro("(E é mais um salto no tempo.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 41) {
        digitarMensagemIntro("(Você sente uma pequena dor de cabeça.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 42) {
        digitarMensagemIntro("(O tempo pareceu cortar dentro da máquina, mas dessa vez você se manteve consciente.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 43) {
        digitarMensagemIntro("(O salto no tempo era como estar dentro de um tanque no oceano. E as ondas ao redor conseguem mover a estrutura, dando um efeito estranho.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 44) {
        digitarMensagemIntro("(As luzes piscavam, mas estavam muito fracas.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 45) {
        digitarMensagemIntro("(Você suporta um pouco deste enjoo e depois tudo parou de uma vez.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 46) {
        digitarMensagemIntro("(As luzes voltaram.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 47) {
        hiitsumoInicial.style.display = "flex";
        digitarMensagemIntro("Ai… Que droga…", "falaHiitsumoIntro", "raiva");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 48) {
        digitarMensagemIntro("Ela ainda tá toda zoada…", "falaHiitsumoIntro", "raiva");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 49) {
        mensagem.style.display = "none";
        opcoes.style.display   = "block";
        opcA.style.display = "block"; digitarOpcao('"Você está bem?"',       "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"Por que ela está assim?"', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 += 1; };
        opcB.onclick = () => { HiitsumoEstado3 += 8; };

    } else if (HiitsumoEstado3 === 50) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Estou… estou bem sim…", "falaHiitsumoIntro", "triste");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 51) {
        digitarMensagemIntro(".......", "falaHiitsumoIntro", "suspiro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 52) {
        digitarMensagemIntro(`Obrigada pela preocupação, ${nomePlayer}. Estou bem.`, "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 53) {
        digitarMensagemIntro("Você está bem?", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 54) {
        mensagem.style.display = "none";
        opcoes.style.display   = "block";
        opcA.style.display = "block"; digitarOpcao('"Sim."', "opcaoA");
        opcB.style.display = "block"; digitarOpcao('"Não."', "opcaoB");
        opcA.onclick = () => { HiitsumoEstado3 += 1; };
        opcB.onclick = () => { HiitsumoEstado3 += 2; };

    } else if (HiitsumoEstado3 === 55) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Entendo. Que bom…", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 2;

    } else if (HiitsumoEstado3 === 56) {
        mensagem.style.display = "flex";
        opcoes.style.display   = "none";
        digitarMensagemIntro("Nós vamos ficar bem, não se preocupa, tá certo?", "falaHiitsumoIntro", "empatica");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 57) {
        digitarMensagemIntro("Bem, nossa situação…", "falaHiitsumoIntro", "seria");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 58) {
        digitarMensagemIntro(`Ela está funcionando "melhor" que antes. Mas tem um efeito estranho agora.`, "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 59) {
        digitarMensagemIntro(`Nós deveríamos poder viajar no tempo de forma bem suave, vendo exatamente o que está acontecendo e sem dar aqueles "apagões" em que você fecha o olho e quando acorda está em outro lugar.`, "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 60) {
        digitarMensagemIntro("Inclusive, eu queria ir pro futuro quando te encontrei e quando nós nos encontramos com o Mago, mas a máquina ignorou o comando.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 61) {
        digitarMensagemIntro("E ela fez isso de novo, mas dessa vez ela quis se ativar sozinha. Por sorte, consegui estabilizar ela por dentro, mas ainda deu aquele enjoo todo.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 62) {
        digitarMensagemIntro("Deve ser porque faltam três engrenagens, então espere que o próximo salto temporal não seja tão agradável.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 63) {
        digitarMensagemIntro("Por outro lado, parece que é só isso que falta, então ela deve funcionar perfeitamente e incrivelmente como a incrível bugiganga que ela é depois que a gente conseguir todas.", "falaHiitsumoIntro", "nerd");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 64) {
        digitarMensagemIntro("Eu deveria parar de chamar ela de bugiganga, talvez ela tenha sentimentos e só está dando uma de birrenta.", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 65) {
        digitarMensagemIntro("Talvez a bonitona comece a funcionar bem se eu elogiar ela…", "falaHiitsumoIntro");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 66) {
        digitarMensagemIntro(`Enfim, estamos ainda mais no futuro, então pode abrir essa porta, ${nomePlayer}.`, "falaHiitsumoIntro", "mao");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 67) {
        cabecaIntro.style.display     = "none";
        hiitsumoInicial.style.display = "none";
        digitarMensagemIntro("(Você coloca a mão na maçaneta.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 68) {
        digitarMensagemIntro("(Você abre a porta gentilmente.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 69) {
        digitarMensagemIntro("(E você é bem vindo com um matagal imenso.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 70) {
        digitarMensagemIntro("(Todas as árvores parecem maiores e o ambiente é úmido. É uma floresta tropical gigante.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 71) {
        digitarMensagemIntro("(Tem uma bananeira a alguns metros de distância. Cada banana individualmente poderia alimentar uma família. É um tanto intimidador.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 72) {
        hiitsumoInicial.style.display = "flex";
        cabecaIntro.style.display     = "flex";
        digitarMensagemIntro("Hahahaha você só pode estar de brincadeira comigo.", "falaHiitsumoIntro", "rindo");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 73) {
        digitarMensagemIntro("Só pode ser brincadeira.", "falaHiitsumoIntro", "beicinho");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 74) {
        digitarMensagemIntro("Nós devemos estar numa reserva florestal. Isso. Era o papo do momento no meu ensino médio.", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 75) {
        digitarMensagemIntro("Devem ter várias dessas agora para preservar o meio ambiente.", "falaHiitsumoIntro", "nerd");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 76) {
        digitarMensagemIntro("Que bom que eu tenho um GPS importado que nunca falha e vai nos dizer exatamente ond-", "falaHiitsumoIntro", "nerd");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 77) {
        digitarMensagemIntro("Texas. Estamos no meio do Texas.", "falaHiitsumoIntro", "beicinho");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 78) {
        cabecaIntro.style.display = "none";
        digitarMensagemIntro("(Hiitsumo vai até a porta da máquina, bem ao seu lado.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 79) {
        digitarMensagemIntro("(Ela parece estar segurando um grito.)", "falaHiitsumoIntro", "paradaFeliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 80) {
        cabecaIntro.style.display = "flex";
        digitarMensagemIntro("A vegetação do Texas é desértica! Como a floresta amazônica veio parar aqui?!", "falaHiitsumoIntro", "raiva");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 81) {
        digitarMensagemIntro("Nós nunca vamos achar a engrenagem no meio dessa coisa. Acho melhor procurar em outro período antes.", "falaHiitsumoIntro", "triste");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 82) {
        digitarMensagemIntro("Vamos priorizar nossa segurança e sair daqui, não é?", "falaHiitsumoIntro", "feliz");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 83) {
        dinossauroPerto.play();
        digitarMensagemIntro("......", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 84) {
        cabecaIntro.style.display = "none";
        bossImg.src               = "./src/img/boss2.gif";
        digitarMensagemIntro("(Algo está se movendo nas folhas, e muito mais perto do que vocês esperavam.)", "falaHiitsumoIntro", "surpresaParada");
        HiitsumoEstado3 += 1;

    } else if (HiitsumoEstado3 === 85) {
        // Transição para Boss 3
        mensagem.style.display              = "none";
        fundo.style.display                 = "none";
        introducao.style.pointerEvents      = "none";
        mensagem2.style.pointerEvents       = "auto";
        mensagem2.style.display             = "none";
        mensagem2.style.maxWidth            = "600px";
        mensagem1.style.display             = "flex";
        hiitsumoInicial.style.display       = "none";
        cabeca1.style.display               = "flex";
        bossImg.style.display               = "flex";
        bossImg.src                         = "./src/img/boss2.gif";
        Hiitsumo.src                        = "./src/img/hiitsumo-surpresa.gif";
        digitar_Mensagem(`A-a-a—a-a–aaa—... ${nomePlayer}-`, "falaHiitsumo", "surpresa");
        HiitsumoEstado2 = 1;
        HiitsumoEstado3 = 0;
    }
}