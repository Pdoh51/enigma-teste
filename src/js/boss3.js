// ================================================================================================================
// BOSS 3  —  faseAtual === 2  (Dinossauro)
// ================================================================================================================

function tickBoss3() {
    if (HiitsumoEstado2 === 1) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Howdy, folks. What y'all doing down around here?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 2) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Nossa senhorinha das-`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 3) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Oh sweet darling, what happened to you? Hey, buddy, do something for your friend, she's pale as all-git out.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 4) {
        digitarMensagem_Boss(`Maybe, pardon me… (huff huff)`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 5) {
        digitarMensagem_Boss(`Cê num tá vendo sua amiga toda borocoxô aí não? Faz alguma coisa, sô.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 6) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block";
        digitarOpcao('"(Cutucando) Hiitsumo, se recomponha…"', "opcaoA1");

        opcB1.style.display = "block";
        digitarOpcao('"Ela só precisa de um ar."', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };
        opcB1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 2); };
    } else if (HiitsumoEstado2 === 7) {
        esconderOpcoes1();
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`${nomePlayer}... acho que…`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 2;
    } else if (HiitsumoEstado2 === 8) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Pois ela me parece bem mal…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 9) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Mas aí, me diz o que vocês tão fazendo aqui? Quem cês são?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 10) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block";
        digitarOpcao('"Somos viajantes do tempo."', "opcaoA1");

        opcB1.style.display = "block";
        digitarOpcao('"Estamos apenas de passagem."', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };
        opcB1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 5); };
    } else if (HiitsumoEstado2 === 11) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Viajantes do tempo?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 12) {
        digitarMensagem_Boss(`HA! Rapaz, conta otra aí pra mim agora.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 13) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Os pioneiros da viagem do tempo, aliás…`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 14) {
        digitar_Mensagem(`C-com a melhor máquina que…`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 13;
    } else if (HiitsumoEstado2 === 15) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block";
        digitarOpcao('"É uma máquina do tempo."', "opcaoA1");

        opcB1.style.display = "block";
        digitarOpcao('"Um banheiro químico?"', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };
        opcB1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 5); };
    } else if (HiitsumoEstado2 === 16) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`E o que é essa coisa aí que vocês trouxeram?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 17) {
        digitarMensagem_Boss(`Não me lembro de ter colocado esse trambolho aí não…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 18) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Uma máquina do tempo? Cês tão de brincadeira comigo, num é?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 19) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`É-é uma autêntica…`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 20) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Ha! Essa é boa.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 21) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`É sério… ela é…`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 3;
    } else if (HiitsumoEstado2 === 22) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Não, ${nomePlayer}. Não. Um banheiro químico é demais.`, "falaHiitsumo", "raiva1");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 23) {
        digitar_Mensagem(`Inventa alguma outra coisa… sei lá. Mas um banheiro químico é um nível muito sujo de comparação.`, "falaHiitsumo", "raiva1");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 24) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";

        dinossauroRugido.play();
        Hiitsumo.src = "./src/img/hiitsumo-surpresa-classico.gif";
        bossImg.src = "./src/img/boss2-rugindo.gif";

        setTimeout(() => {
            mensagem2.style.display = "flex";
            digitarMensagem_Boss(`E o que é então, garota? Já que tem alguém mentindo aqui, me diga com sinceridade. O que é que vocês fazem aqui?`, "falaBoss", "dinossauro");
        }, 3000);
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 25) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`N-nós somos… v-viajantes… do tempo.`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 26) {
        digitar_Mensagem(`É a nossa m-máquina e…`, "falaHiitsumo", "surpresaClassico");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 27) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";

        dinossauroRugido.play();
        Hiitsumo.src = "./src/img/hiitsumo-surpresa-classico.gif";
        bossImg.src = "./src/img/boss2-rugindo.gif";

        setTimeout(() => {
            mensagem2.style.display = "flex";
            digitarMensagem_Boss(`Os humanos no ápice da civilização deles chegaram perto de desenvolver essa invenção com sucesso, mas não conseguiram, e aí você tá me dizendo que dois…`, "falaBoss", "dinossauro");
        }, 3000);
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 28) {
        digitarMensagem_Boss(`Dumb-looking and chopped like a baboon, tryna tell me they DID IT?!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 29) {
        digitarMensagem_Boss(`Cês tão mentindo pra mim, num nasci ontem.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 30) {
        digitarMensagem_Boss(`O que cês querem na minha área? Seus invasores.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 31) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display = "none";

        Hiitsumo.src = "./src/img/hiitsumo.gif";

        digitarMensagem_Boss(`(A cor de pele de Hiitsumo parece deixar o pálido de medo e volta ao normal)`, "falaBoss", "dinossauroParado");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 32) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        cabeca1.style.display = "flex";

        digitar_Mensagem(`Minha máquina do tempo funciona SIM!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 33) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Não importa, fia! Eu quero saber o que vocês querem fazer aqui!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 34) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block";
        digitarOpcao('"Por que você consegue falar?"', "opcaoA1");

        opcB1.style.display = "block";
        digitarOpcao('"Uma peça da nossa máquina do tempo está aqui."', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };
        opcB1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 13); };
    } else if (HiitsumoEstado2 === 35) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`.....`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 36) {
        digitarMensagem_Boss(`Ora, rapaz, por que eu não conseguiria?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 37) {
        digitarMensagem_Boss(`Meus antepassados eram bem inteligentes, visse? Claro que eu também saberia falar`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 38) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Você é natural do Texas ou você é imigrante?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 39) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Sou natural daqui mesmo.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 40) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`E por que fala português?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 41) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`.....`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 42) {
        digitarMensagem_Boss(`Deixem de ser ignorantes, e isso não é dá conta de vocês não!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 43) {
        digitarMensagem_Boss(`Eu vou perguntar de novo, o que vocês querem aqui?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 44) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Não tem jeito com esse cara, ${nomePlayer}, distrair ele não vai dar certo.`, "falaHiitsumo", "beicinho");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 45) {
        digitar_Mensagem(`Nossa máquina do tempo quebrou e uma das peças veio para aqui, é isso.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 46) {
        digitar_Mensagem(`Só queremos recuperar ela.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 47) {
        esconderOpcoes1();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Ah, entendi. Se vocês são viajantes do tempo reais, isso faz sentido`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 48) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Então, Senhor Dinossauro, o senhor pode ajudar a gente?`, "falaHiitsumo", "coradaDedoNormal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 49) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`NUNCA! JAMAIS FARIA ISSO! NÃO NO *MEU* TERRITÓRIO!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 50) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`O que?! Por que isso, agora? Que obsessão é essa com o seu território?`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 51) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Ora…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 52) {
        // TODO: música faroeste começa aqui

        digitarMensagem_Boss(`Because this town ain't big enough for the three of us, folk.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 53) {
        digitarMensagem_Boss(`Meus antepassados foram fortes e dominaram a terra por milhões de anos, eu não vô deixar que vocês andem livremente por aqui.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 54) {
        digitarMensagem_Boss(`Nós somos os maiores do mundo, os mais fortes!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 55) {
        digitarMensagem_Boss(`Não vou deixar meros humanos ganharem vantagem em cima de mim e do meu território.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 56) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        // TODO: música faroeste termina aqui

        digitar_Mensagem(`E o meteoro?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 57) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`.....`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 58) {
        digitarMensagem_Boss(`Ele não importa, nós revivemos. É passado demais.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 59) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Quem reviveu vocês?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 60) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`.....`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 61) {
        // TODO: música faroeste começa aqui

        digitarMensagem_Boss(`SE VOCÊS QUISEREM MINHA AJUDA, VÃO PRECISAR ME VENCER EM UM DUELO!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 62) {
        digitarMensagem_Boss(`Um duelo justo, a altura, como nos velhos tempos!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 63) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Nós não temos armas! E aliás, isso aqui é uma floresta amazônica, não parece nem um pouco com o faroeste!`, "falaHiitsumo");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 64) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Menina abestalhada! A essência do faroeste tá no sangue e na força!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 65) {
        digitarMensagem_Boss(`Quando todos os continentes eram um, o faroeste tava em todo lugar!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 66) {
        digitarMensagem_Boss(`É a honra dos meus pais e a minha também, visse?!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 67) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`E-espera um minutinho aí! Você não acha q-que a gente pode resolver isso de outra forma?`, "falaHiitsumo", "nervosa");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 68) {
        digitar_Mensagem(`Você já parou pra pensar no que eles queriam de verdade?`, "falaHiitsumo", "nervosa");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 69) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`... Meus pais eram… eles eram bem…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 70) {
        document.getElementById("falaBoss").classList.add("pensamento");

        digitarMensagem_Boss(`Qual era mesmo o nome deles?… Era meio diferente…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 71) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        document.getElementById("falaBoss").classList.remove("pensamento");

        digitar_Mensagem(`Viu só? Só precisava pensar um pouquinho pra perceber que as coisas podem ser resolvidas sempre de outras formas!`, "falaHiitsumo", "nerd");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 72) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";

        dinossauroRugido.play();
        Hiitsumo.src = "./src/img/hiitsumo-assustada.gif";
        bossImg.src = "./src/img/boss2-surpresa.gif";

        setTimeout(() => {
            mensagem2.style.display = "flex";
            digitarMensagem_Boss(`CALADA!`, "falaBoss", "dinossauro");
        }, 3000);
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 73) {
        digitarMensagem_Boss(`Eu tô tentando me lembrar! Mas ocê fica me atrapalhando!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 74) {
        digitarMensagem_Boss(`Eu sei o nome deles mas eu não consigo me lembrar! É uma questão de honra agora que cê me desafiou!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 75) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display = "flex";

        opcA1.style.display = "block";
        digitarOpcao('"Podemos te ajudar a lembrar."', "opcaoA1");

        opcB1.style.display = "block";
        digitarOpcao('“Por que você não pergunta pra eles?”', "opcaoB1");

        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };
        opcB1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 5); };
    } else if (HiitsumoEstado2 === 76) {
        esconderOpcoes1();
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Isso mesmo, o ${nomePlayer} tem toda razão! Vamos evitar um conflito.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 77) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display = "none";

        digitarMensagem_Boss(`(Você sente que evitou uma confusão ao não perguntar sobre os pais dele.)`, "falaBoss", "dinossauroParado");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 78) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        cabeca1.style.display = "flex";

        digitar_Mensagem(`Tive uma ideia! Por que você não pergunta pros seus pais, senhor dinossauro?`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 79) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display = "none";

        dinossauroPerto.play();
        Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";

        setTimeout(() => {
            digitarMensagem_Boss(`(Dessa vez você não poderia evitar um conflito.)`, "falaBoss", "dinossauroParado");
        }, 3000);
        HiitsumoEstado2 += 3;
    } else if (HiitsumoEstado2 === 80) {
        esconderOpcoes1();
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Boa, ${nomePlayer}, que ótima ideia, nem eu teria pensado nisso!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 81) {
        digitar_Mensagem(`Queremos te ajudar a lembrar deles, aí sua honra não fica ferida e nós também não, todos saímos ganhando, né?`, "falaHiitsumo", "V");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 82) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display = "none";

        dinossauroPerto.play();
        Hiitsumo.src = "./src/img/hiitsumo-surpresa.gif";

        setTimeout(() => {
            digitarMensagem_Boss(`(Infelizmente, um conflito inevitável acontece.)`, "falaBoss", "dinossauroParado");
        }, 3000);
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 83) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display = "flex";

        digitarMensagem_Boss(`Que audácia! Vocês vem pra cá com a maior cara de pau e ainda tentam me fazer de besta?!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 84) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`“Isso é um… tópico sensível?... Eu falei alguma coisa errada?`, "falaHiitsumo", "preocupada");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 85) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`I have never seen such bullshi’ in all my years out in the wild.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 86) {
        digitarMensagem_Boss(`Ya never ask about somebody mamma like that.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 87) {
        digitarMensagem_Boss(`Vou deixar essa passar, contanto que cês me ajudem a lembrar da raça dos meus ancestrais, visse?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 88) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Acordo fechado!`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 89) {
        digitar_Mensagem(`E foi mal aí por ter…`, "falaHiitsumo", "corada");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 90) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Esquece as desculpas, só me ajuda e isso é o suficiente.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 91) {
        digitarMensagem_Boss(`Meu sou um T-Rex, o nome completo é Tyrannosaurus rex!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 92) {
        digitarMensagem_Boss(`Meus ancestrais era de milhões e milhões de anos atrás, se eu não me engano, era do período que cês chamaram de cretáceo!`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 93) {
        digitarMensagem_Boss(`Vocês conseguem descobrir, hein?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 94) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`${nomePlayer}, acho que ainda tenho internet, vamos pesquisar e você me ajuda, viu?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 95) {
        digitar_Mensagem(`Confio em você!`, "falaHiitsumo", "V");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 96) {
        document.querySelector(".linha-senha").style.opacity = "1";
        document.querySelector(".engrenagens").style.opacity = "1";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 97) {
        document.querySelector(".linha-senha").style.opacity = "0";
        document.querySelector(".engrenagens").style.opacity = "0";

        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`É… senhor dinossauro, eu queria saber uma coisa, se você pudesse me dizer mais algumas coisas, ajudaria a descobrir sobre seus antepassados.`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 98) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Bem… pelo que eu me lembro…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 99) {
        digitarMensagem_Boss(`Ele andava que nem eu ando e caçava como eu caço.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 100) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Algo mais?`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 101) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Se você ficar quieta talvez eu me lembre.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 102) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`${nomePlayer}, acho que isso quer dizer que ele andava em duas patas e era carnívoro…`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 103) {
        digitar_Mensagem(`Vamos ter que pensar e pesquisar mais. Espero que ele coopere com a gente.`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 104) {
        mensagem1.style.display = "none";
        dicasFase.style.display = "flex";
        dica1.style.display = "flex";

        digitarMensagem_Boss(`Dica 1: Os antepassados dele andavam em duas patas e eram carnívoros.`, "dica-1", "dinossauroParado");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 105) {
        document.querySelector(".linha-senha").style.opacity = "1";
        document.querySelector(".engrenagens").style.opacity = "1";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 106) {
        document.querySelector(".linha-senha").style.opacity = "0";
        document.querySelector(".engrenagens").style.opacity = "0";

        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Ei! Aliás, você sabe de onde seus pais vieram?`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 107) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Do faroeste. É claro. Você é burra por acaso?`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 108) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`.....`, "falaHiitsumo", "beicinho");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 109) {
        digitar_Mensagem(`.....`, "falaHiitsumo", "suspiro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 110) {
        digitar_Mensagem(`De QUAL parte do faroeste?`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 111) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Ah, certo! Certo! Agora eu entendi!.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 112) {
        digitarMensagem_Boss(`Eles vieram de bem longe, do otro lado do mundo, lá da china.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 113) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`${nomePlayer}, isso já ajuda bastante, não é?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 114) {
        mensagem1.style.display = "none";
        dicasFase.style.display = "flex";
        dica1.style.display = "flex";

        digitarMensagem_Boss(`Dica 2: Os antepassados deles vieram da China.`, "dica-2", "dinossauroParado");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 115) {
        document.querySelector(".linha-senha").style.opacity = "1";
        document.querySelector(".engrenagens").style.opacity = "1";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 116) {
        document.querySelector(".linha-senha").style.opacity = "0";
        document.querySelector(".engrenagens").style.opacity = "0";
        
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Ei, se lembrou de mais alguma coisa?`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 117) {
        digitar_Mensagem(`Eu tô quieta a um tempo já, não adianta reclamar.`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 118) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Só dessa vez eu vô deixar passar, então.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 119) {
        Hiitsumo.src = "./src/img/hiitsumo-empatica.gif";

        digitarMensagem_Boss(`Já me acostumei com vocês aqui, cês não são tão ruins quanto parecem.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 120) {
        digitarMensagem_Boss(`Meus antepassados eram um pouco parecidos com os que tão no céu, daqueles que voam pra bem longe.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 121) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Ué, eles voavam? Por que você não consegue?`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 122) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Nem, eles não voavam, mas eles eram parecidos com os pássaro.`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 123) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Me pergunto o que isso significa…`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 124) {
        digitar_Mensagem(`${nomePlayer}, acho que isso ajuda a gente um pouco mais, talvez já seja possível descobrir.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 125) {
        mensagem1.style.display = "none";
        dicasFase.style.display = "flex";
        dica1.style.display = "flex";

        digitarMensagem_Boss(`Dica 3: Os antepassados dele tinham uma característica em comum com os pássaros.`, "dica-3", "dinossauroParado");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 126) {
        document.querySelector(".linha-senha").style.opacity = "1";
        document.querySelector(".engrenagens").style.opacity = "1";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 127) {
        document.querySelector(".linha-senha").style.opacity = "0";
        document.querySelector(".engrenagens").style.opacity = "0";

        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";

        digitar_Mensagem(`Algo mais, senhor dinossauro?`, "falaHiitsumo", "normal");
        HiitsumoEstado2 += 1;
    } else if (HiitsumoEstado2 === 128) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";

        digitarMensagem_Boss(`Num me lembro de mais nada…`, "falaBoss", "dinossauro");
        HiitsumoEstado2 += 126;
    } else if (HiitsumoEstado2 === 129) {
        
    }
}