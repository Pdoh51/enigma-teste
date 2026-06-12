// ================================================================================================================
// BOSS 1  —  faseAtual === 0  (Mago)
// ================================================================================================================

function tickBoss1() {
    if (HiitsumoEstado2 === 1) {
        cabeca1.style.display   = "none";
        mensagem2.style.maxWidth = "600px";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss("(Em um instante, a peça que estava em sua mão começa a levitar e ela voa até a direção do mago.)", "falaBoss", "mago");
        HiitsumoEstado2 += 1; // apagar depois (colocar 1)

    } else if (HiitsumoEstado2 === 2) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Ei, devolva isso!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 3) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        magia.style.display     = "flex";
        digitar_Mensagem(`(Um círculo amarelo surge ao redor de vocês dois e forma uma barreira mágica)`, "falaBoss", "surpresaParada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 4) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`O que?! O que você fez?`, "falaHiitsumo", "surpresa");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 5) {
        digitar_Mensagem(`Nos deixe sair!`, "falaHiitsumo", "surpresa");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 6) {
        cabeca1.style.display   = "flex";
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`※⁂⁜ Vloru… y wigjuhbcu… ⁜⁂※`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 7) {
        digitarMensagem_Boss(`※⁂⁜ Chnylymmuhny ⁜⁂※`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 8) {
        digitarMensagem_Boss(`Vocês não conseguem me entender, não é mesmo?`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 9) {
        digitarMensagem_Boss(`Fufufu… Muahahaha`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 10) {
        digitarMensagem_Boss(`※⁂⁜ Vloru, jymny. ⁜⁂※ Finalmente peguei você`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 11) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Pode ir parando com esse negócio de "Vloru", tá legal?`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 12) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`Bruxas que nem você não tem o direito de falar nada, peste! ※⁂⁜ Jymnym! ⁜⁂※`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 13) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Bruxa?! Eu sou uma cientista!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 14) {
        digitar_Mensagem(`VOCÊ é um bruxo!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 15) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`Mas você me dá nojo, bruxa.`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 16) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Cientista.`, "falaHiitsumo", "beicinho");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 17) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`Você não usa chapéus e nem túnicas.`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 18) {
        digitarMensagem_Boss(`Não viaja com vassouras, só com estas…`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 19) {
        digitarMensagem_Boss(`Aberrações que você chama de "máquina".`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 20) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Do tempo. É uma máquina do tempo.`, "falaHiitsumo", "beicinho");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 21) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`E a alquimia? Onde está a sua pedra filosofal?`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 22) {
        digitarMensagem_Boss(`Que magias estranhas são essas?`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 23) {
        digitarMensagem_Boss(`Você é uma praticante das artes das trevas?`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 24) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Eu ganhei uma medalha dos "Grandes Pequenos inventores", não serve?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 25) {
        digitar_Mensagem(`E uma da OBMEP, também.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 26) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`AH! ※⁂⁜ WUFUXU! ⁜⁂※ Você fala coisas sem nenhum sentido.`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 27) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Vloru, só deixa a gente sair daqui logo.`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 28) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        digitarMensagem_Boss(`Sou um ※⁂⁜ Vlori ⁜⁂※, não um ※⁂⁜ Vloru!! ⁜⁂※`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 29) {
        digitarMensagem_Boss(`Olha só você, não sabe nem falar direito!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 30) {
        cabeca1.style.display = "none";
        digitarMensagem_Boss(`(Hiitsumo olha de volta para você e sussurra.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 31) {
        cabeca1.style.display   = "flex";
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`${nomePlayer}, você tem alguma ideia do que fazer?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 32) {
        mensagem1.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block";
        digitarOpcao('"Usar a máquina do tempo."', "opcaoA1");
        opcB1.style.display = "block";
        digitarOpcao('"Fazer uma magia."', "opcaoB1");
        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };
        opcB1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 4); };

    } else if (HiitsumoEstado2 === 33) {
        opcoes1.style.display   = "none";
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
        opcoes1.style.display   = "none";
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`É uma boa ideia…`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 37) {
        digitar_Mensagem(`Os objetos daqui devem ter magia neles, quem sabe se conjurarmos o feitiço certo ele funcionará?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 38) {
        digitar_Mensagem(`Talvez só as palavras funcionem. Precisamos tentar.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 39) {
        mensagem2.style.display = "flex";
        mensagem1.style.display = "none";
        cabeca1.style.display   = "flex";
        digitarMensagem_Boss(`Eu escutei o plano todo de vocês, ※⁂⁜ Jymnym! ⁜⁂※ E eu desafio vocês a tentarem!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 40) {
        digitarMensagem_Boss(`Muahahah! Nunca conseguirão!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 41) {
        mensagem2.style.display = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Se você tiver ideia do que dizer, me fale.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 42) {
        document.querySelector(".linha-senha").style.opacity  = "1";
        document.querySelector(".engrenagens").style.opacity  = "1";
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 43) {
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Que situação chata que nos metemos, não?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 44) {
        digitar_Mensagem(`Eu gostaria de usar a máquina do tempo para fugir daqui, mas ela tem um problema para cada solução que eu acho.`, "falaHiitsumo", "raiva");
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
        dica1.style.display     = "flex";
        digitarMensagem_Boss("Dica 1: Recitar o feitiço na língua do mago. Pegar é a prioridade.", "dica-1", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 49) {
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Eu não entendo nada da língua dele, mas eu decorei algumas palavras.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 50) {
        digitar_Mensagem(`Eu sei que Vloru é bruxa!`, "falaHiitsumo", "nerd");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 51) {
        digitar_Mensagem(`E ele é um Vlori, é pouca diferença, mas pode nos dar uma pista grande!`, "falaHiitsumo", "nerd");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 52) {
        mensagem1.style.display = "none";
        dica2.style.display     = "flex";
        digitarMensagem_Boss("Dica 2: Vloru = Bruxa. Vlori = ?", "dica-2", "mago");
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
        digitar_Mensagem(`Minha memória é algo bem interessante, as vezes eu lembro bem, as vezes não.`, "falaHiitsumo", "nerd");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 58) {
        mensagem1.style.display = "none";
        dica3.style.display     = "flex";
        digitarMensagem_Boss(`Dica 3: Jymny, wufuxu, Chnylymmuhny, liovul y jlhxyl" Foram coisas que o mago disse.`, "dica-3", "mago");
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
        dica4.style.display     = "flex";
        digitarMensagem_Boss("Dica 4: Existe um padrão para as letras do alfabeto. Tente entendê-lo.", "dica-4", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 62) {
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Quero *fugir* daqui…`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 63) {
        digitar_Mensagem(`Bem que poderíamos imitar ele e fazer dois feitiços de uma vez…`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 64) {
        mensagem1.style.display = "none";
        dica5.style.display     = "flex";
        digitarMensagem_Boss("Dica 5: Use o mesmo padrão que o mago utilizou quando ele prendeu vocês.", "dica-5", "mago");
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
        cabeca1.style.display   = "flex";
        digitarMensagem_Boss(`Muahahahahahahahaha! Nunca conseguirão!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 69) {
        HiitsumoEstado2 = 42;

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
        duranteMago.pause();
        depoisMago.loop   = true;
        depoisMago.volume = 0.05;
        depoisMago.play();
        digitar_Mensagem(`${nomePlayer}! Você é um gênio!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 72) {
        digitar_Mensagem(`Me passa aquele chapéu.`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 73) {
        digitar_Mensagem(`Ei, Vlori! Olha aqui!`, "falaHiitsumo", "chapeu");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 74) {
        cabeca1.style.display   = "flex";
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Você decidiu se revelar agora, bruxa.`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 75) {
        digitarMensagem_Boss(`Teremos um duelo lendário, finalmente!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 76) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`É isso que você pensa.`, "falaHiitsumo", "chapeu");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 77) {
        digitar_Mensagem(`Eu vou juntar meu lado bruxo e o meu lado cientista! É o melhor do passado e do futuro, concorda?`, "falaHiitsumo", "chapeuNerd");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 78) {
        digitar_Mensagem(`Pois aí vai…`, "falaHiitsumo", "chapeuOlhoFechado");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 79) {
        digitar_Mensagem(`IYACK Y ZOACK!!!`, "falaHiitsumo", "chapeuMagia");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 80) {
        document.querySelector(".engrenagens").style.opacity = "1";
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "none";
        digitarMensagem_Boss(`(A engrenagem começa a vibrar e ela some num instante! Sendo teleportada para sua mão.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;
        atualizarEngrenagem();

    } else if (HiitsumoEstado2 === 81) {
        magia.style.display = "none";
        digitarMensagem_Boss(`(E antes que você possa fazer qualquer coisa, vocês somem e aparecem fora do círculo mágico.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 82) {
        document.querySelector(".engrenagens").style.opacity = "0";
        cabeca1.style.display = "flex";
        digitarMensagem_Boss(`O quê?! para onde eles foram?!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 83) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Agora…`, "falaHiitsumo", "chapeu");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 84) {
        cabeca1.style.display   = "none";
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`(Hiitsumo coloca as mãos no bolso, procurando algo.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 85) {
        cabeca1.style.display = "flex";
        digitarMensagem_Boss(`Eu não vou deixar você me enganar de novo, Vloru!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 86) {
        digitarMensagem_Boss(`ZIAI!!!!!!!!`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 87) {
        cabeca1.style.display   = "none";
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`(Ele levanta as mãos e uma grande bola de fogo se forma bem acima de vocês, o calor engole a sala.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 88) {
        digitarMensagem_Boss(`(Mas é o tempo suficiente para que Hiitsumo remova a miniatura do bolso.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 89) {
        digitarMensagem_Boss(`(O fogo começa a descer na direção de vocês.)`, "falaBoss", "mago");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 90) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`MÁQUINA DO TEMPO!!!`, "falaHiitsumo", "chapeuMagia");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 91) {
        // Transição para conexao1
        depoisMago.pause();
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        mensagem.style.display  = "flex";
        fundo.style.display     = "flex";
        introducao.style.display      = "flex";
        fundo.style.pointerEvents     = "none";
        introducao.style.pointerEvents = "auto";
        mensagem.style.pointerEvents  = "auto";
        carregar.style.display        = "none";
        digitarMensagemIntro("(Você pisca.)", "falaHiitsumoIntro");
        HiitsumoEstado3 = 1;
        emConexao1 = true;
        iniciarConexao1();
        HiitsumoEstado2 = 92;

    } else if (HiitsumoEstado2 === 92) {
        // aguarda conexao1
    }
}