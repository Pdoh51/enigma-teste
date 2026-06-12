// ================================================================================================================
// BOSS 2  —  faseAtual === 1  (Graciane)
// Listener .apertar para HiitsumoEstado2 === 0 (pre-boss) + tickBoss2 para o jogo
// ================================================================================================================

// ── Pre-boss: conexão do escuro até acender as luzes ──────────────────────
function tickBoss2Pre() {
    if (HiitsumoEstado2 !== 0) return;
    if (HiitsumoEstado2 === 0) {
        if (HiitsumoEstado3 === 0) {
            cabecaIntro.style.display     = "none";
            hiitsumoInicial.style.display = "none";
            digitarMensagemIntro("paradaFeliz", "(Vocês estão num lugar escuro de novo.)", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1; // apagar depois (colocar 1)

        } else if (HiitsumoEstado3 === 1) {
            hiitsumoInicial.style.display    = "flex";
            hiitsumoInicial.style.opacity    = "1";
            hiitsumoInicial.style.visibility = "visible";
            digitarMensagemIntro("paradaFeliz", "(Hiitsumo olha diretamente para você e diz)", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 2) {
            cabecaIntro.style.display = "flex";
            digitarMensagemIntro("beicinho", "Eu perdi o chapéu.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 3) {
            digitarMensagemIntro("beicinho", "Ele era meio fedido, mas até que era bonito…", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 4) {
            digitarMensagemIntro("feliz", "Bom, não temos mais nada que nos lembre daquele mago chato, pelo menos.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 5) {
            digitarMensagemIntro("feliz", "Mas me diz aí, você preferiria ser um cientista, ou um mago?", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 6) {
            mensagem.style.display    = "none";
            cabecaIntro.style.display = "none";
            document.getElementById("opcoes").style.display = "block";
            opcA.style.display = "block";
            digitarOpcao('"Cientista/Engenheiro."', "opcaoA");
            opcB.style.display = "block";
            digitarOpcao('"Mago."', "opcaoB");
            opcA.onclick = () => { HiitsumoEstado3 += 1; };
            opcB.onclick = () => { HiitsumoEstado3 += 5; };

        } else if (HiitsumoEstado3 === 7) {
            mensagem.style.display    = "flex";
            cabecaIntro.style.display = "flex";
            document.getElementById("opcoes").style.display = "none";
            digitarMensagemIntro("V", "Podemos ir pro futuro depois que consertamos a máquina, e aí você pode aprender de tudo.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 8) {
            digitarMensagemIntro("feliz", "Você tem um grande potencial para a engenharia e grandes coisas.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 9) {
            digitarMensagemIntro("Eu só não posso deixar que você pegue invenções do futuro e leve elas pro passado…", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 10) {
            digitarMensagemIntro("feliz", "Ou se eu tiver de bom humor, eu posso deixar também, um pequeno paradoxo não é nada demais.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 4;

        } else if (HiitsumoEstado3 === 11) {
            mensagem.style.display    = "flex";
            cabecaIntro.style.display = "flex";
            document.getElementById("opcoes").style.display = "none";
            digitarMensagemIntro("feliz", "Podemos dar uma volta no passado e ingressar numa escola de magia, que tal?", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 12) {
            digitarMensagemIntro("feliz", "Já derrotamos um mago poderoso sem treino nenhum, afinal", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 13) {
            digitarMensagemIntro("V", "E você conseguiu decifrar o feitiço na hora, é um talento natural!", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 14) {
            digitarMensagemIntro("Bem… agora vamos voltar pros peixes maiores…", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 15) {
            digitarMensagemIntro("raiva", "Não tô gostando muito desse lugar, está tudo escuro.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 16) {
            digitarMensagemIntro("raiva", "Vamos deixar de conversa e procurar mais.", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 17) {
            digitarMensagem_Boss("Mas a conversa de vocês está tão interessante, tenho certeza de que o público está adorando!", "falaHiitsumoIntro", "introShow");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 18) {
            digitarMensagemIntro("surpresa", "E-E-E-Essa voz…?", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 19) {
            digitarMensagemIntro("surpresa", "Não pode ser… será que…", "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 20) {
            digitarMensagemIntro("surpresa", `${nomePlayer}, e-ela é…`, "falaHiitsumoIntro");
            HiitsumoEstado3 += 1;

        } else if (HiitsumoEstado3 === 21) {
            // Transição para o Boss 2
            mensagem.style.display              = "none";
            fundo.style.display                 = "none";
            introducao.style.pointerEvents      = "none";
            mensagem2.style.pointerEvents       = "auto";
            mensagem2.style.display             = "flex";
            mensagem2.style.maxWidth            = "600px";
            hiitsumoInicial.style.display       = "none";
            cabeca1.style.display               = "none";
            bossImg.style.display               = "none";
            bossImg.src                         = "./src/img/boss1-nada.png";
            Hiitsumo.src                        = "./src/img/hiitsumo-surpresa.gif";
            clickLuz.play();
            digitarMensagem_Boss("(As luzes são acesas.)", "falaBoss", "showParado1");
            HiitsumoEstado2 += 1;
            HiitsumoEstado3 = 0;
        }
    }
};

// ── Tick principal do boss 2 ───────────────────────────────────────────────

function tickBoss2() {
    if (HiitsumoEstado2 === 1) {
        digitarMensagem_Boss("(Você e Hiitsumo estão atrás de bancadas, daquelas de programas de TV.)", "falaBoss", "showParado1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 2) {
        digitarMensagem_Boss("(O ambiente ao redor é aconchegante, uma cozinha arquitetado para fazer você se sentir em casa.)", "falaBoss", "showParado1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 3) {
        digitarMensagem_Boss("(Mas você não se sente familiarizado, especialmente pelos aparatos futuristas nela e as câmeras apontadas em sua direção.)", "falaBoss", "showParado1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 4) {
        bossImg.style.display = "flex";
        digitarMensagem_Boss("(E uma geladeira especialmente grande.)", "falaBoss", "showParado1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 5) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`É ela… ${nomePlayer}, estamos na…`, "falaHiitsumo", "surpresa");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 6) {
        digitar_Mensagem(`Cozinha da Graciane!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 7) {
        duranteShow.loop   = true;
        duranteShow.volume = 0.05;
        duranteShow.play();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "flex";
        digitarMensagem_Boss(`Parece que temos uma grande fã no palco hoje hahaha.`, "falaBoss", "show");
        HiitsumoEstado2 += 1; // apagar depois (colocar 8)

    } else if (HiitsumoEstado2 === 8) {
        digitarMensagem_Boss(`Vamos ter que atrasar a gravação dos convidados de hoje e faremos uma exceção especial para estes intrusos especiais.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 9) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Nós?! Participando do seu programa? Uma edição comigo?!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 10) {
        digitar_Mensagem(`Meu Deus, eu vou desmaiar.`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 11) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Se acalme, jovem! Que tal uma bebida gelada para que esse seu enjôo passe?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 12) {
        digitarMensagem_Boss(`Chá gelado, água com gás, sucos e refrigerantes, também sua graxa para meus companheiros robôs. Tudo gelado em pouco tempo e com gelo extra na minha porta.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 13) {
        digitarMensagem_Boss(`É a praticidade e a eficiência numa só amiga da sua cozinha, quem sou eu e como pode ser tudo isso?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 14) {
        digitarMensagem_Boss(`Graciane Eletroluz a sua disposição, a geladeira do futuro que uniu os humanos e os robôs, quem disse que óleo e água não poderiam estar juntos?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 15) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`AAAAAAAAAAAAAAAAAA Graciane, você é a melhor!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 16) {
        digitar_Mensagem(`Eu ficava até tarde da noite assistindo seus programas quando eu era criança!`, "falaHiitsumo", "coradaDedo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 17) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Quando você era criança, querida? O programa começou esse ano.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 18) {
        digitarMensagem_Boss(`A conversa sobre viajar no tempo não era brincadeira mesmo! Qual seu nome?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 19) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`É Hiitsumo.`, "falaHiitsumo", "corada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 20) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Ora, Hii, o que eu faço com você se você já sabe todas as respostas do jogo?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 21) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`O ${nomePlayer} é do passado, ele pode responder as perguntas.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 22) {
        digitar_Mensagem(`E não é como se eu soubesse todas as respostas…`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 23) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.width       = "500px";
        opcA1.style.display = "block";
        digitarOpcao('"Nós estamos com pouco tempo, precisamos achar a engrenagem logo."', "opcaoA1");
        opcB1.style.display = "none";
        opcA1.onclick = () => { avancarOpcao(HiitsumoEstado2 + 1); };

    } else if (HiitsumoEstado2 === 24) {
        opcA1.style.width       = "350px";
        opcoes1.style.display   = "none";
        mensagem1.style.display = "flex";
        digitar_Mensagem(`Ah, é verdade.`, "falaHiitsumo", "corada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 25) {
        digitar_Mensagem(`Podemos voltar para cá logo depois que consertarmos a máquina, o que acha?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 26) {
        digitar_Mensagem(`Vai para nossa lista de objetivos.`, "falaHiitsumo", "V");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 27) {
        digitar_Mensagem(`Mas bem… Graciane, precisamos ir.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 28) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Awwn, que pena.`, "falaBoss", "showTriste");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 29) {
        digitarMensagem_Boss(`Não querem nem dar uma olhada nos prêmios de hoje?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 30) {
        digitarMensagem_Boss(`Uma air fryer.`, "falaBoss", "showPremio1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 31) {
        digitarMensagem_Boss(`Temos uma chave de fenda chiquérrima para presentear seus robôs preferidos.`, "falaBoss", "showPremio2");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 32) {
        digitarMensagem_Boss(`Um travesseiro.`, "falaBoss", "showPremio3");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 33) {
        digitarMensagem_Boss(`Uma pelúcia para lhe acompanhar na cozinha.`, "falaBoss", "showPremio4");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 34) {
        digitarMensagem_Boss(`………`, "falaBoss", "showPremio4");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 35) {
        digitarMensagem_Boss(`E esse item não identificado que achamos nos bastidores.`, "falaBoss", "showPremio5");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 36) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Ei, isso é meu!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 37) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Não mais. Parece que o jogo vai ter que acontecer.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 38) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Bom… Vamos jogar então, ${nomePlayer}, vamos ter que ganhar a engrenagem de volta!`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 39) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Muito bem! Muito bem! Faremos as perguntas primeiro e depois teremos nosso evento de culinária!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 40) {
        document.querySelector(".Hiitsumo").src = "./src/img/hiitsumo-corada-dedo.gif";
        digitarMensagem_Boss(`Estou muito animada para receber vocês! Senhoras e senhores, uma salva de palmas para Hii e ${nomePlayer}!`, "falaBoss", "show");
        setTimeout(() => { palmas.play(); }, 3500);
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 41) {
        document.querySelector(".Hiitsumo").src = "./src/img/hiitsumo.gif";
        digitarMensagem_Boss(`E para a primeira pergunta vamos ver um pouco de história!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 42) {
        digitarMensagem_Boss(`Em que ano aconteceu a primeira revolução dos robôs?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 43) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block"; digitarOpcao('"2017."', "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"2020."', "opcaoB1");
        opcC1.style.display = "block"; digitarOpcao('"2026."', "opcaoC1");
        opcD1.style.display = "block"; digitarOpcao('"2012."', "opcaoD1");
        opcA1.onclick = () => { avancarOpcao(47); };
        opcB1.onclick = () => { avancarOpcao(47); };
        opcC1.onclick = () => { avancarOpcao(53); };
        opcD1.onclick = () => { avancarOpcao(47); };
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 44) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Você está em 2026, não é? Sinto muito por você, mas não tem jeito.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 45) {
        digitar_Mensagem(`Fica seguro e tome cuidado com o que posta na internet.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 46) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 = 44;

    } else if (HiitsumoEstado2 === 47) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Mas que pena! A resposta correta era 2026!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 48) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Como você errou isso, ${nomePlayer}?!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 49) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Vocês ganham…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 50) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Nada?`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 51) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Seria nada, mas ninguém quer essa chave de fenda aqui, então fiquem com ela!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 52) {
        cabeca1.style.display = "none";
        digitarMensagem_Boss(`(Vocês obtiveram uma chave de fenda, inevitavelmente.)`, "falaBoss", "showPremio2");
        HiitsumoEstado2 += 6;

    } else if (HiitsumoEstado2 === 53) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Correta a resposta! Vocês acabaram de ganhar uma…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 54) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Uma air fryer?`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 55) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`A air fryer era o primeiro prêmio, mas como essa pergunta é ridícula, vocês vão ganhar uma chave de fenda.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 56) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Isso é meio injusto, mas eu tô animada demais pra reclamar!`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 57) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "none";
        digitarMensagem_Boss(`(Vocês obtiveram uma chave de fenda.)`, "falaBoss", "showPremio2");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 58) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "flex";
        digitarMensagem_Boss(`Agora para a pergunta da air fryer! Essa especialmente para os gamers dos mais clássicos!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 59) {
        digitarMensagem_Boss(`Qual animal melhor se associa a essa personagem?`, "falaBoss", "showPersonagem");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 60) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block"; digitarOpcao('"Delphinus delphis."',    "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Lampyridae."',           "opcaoB1");
        opcC1.style.display = "block"; digitarOpcao('"Selachimorpha."',        "opcaoC1");
        opcD1.style.display = "block"; digitarOpcao('"Colossoma Macropomum."', "opcaoD1");
        opcA1.onclick = () => { avancarOpcao(66); };
        opcB1.onclick = () => { avancarOpcao(74); };
        opcC1.onclick = () => { avancarOpcao(66); };
        opcD1.onclick = () => { avancarOpcao(66); };
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 61) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Hummm, deixa eu pensar…`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 62) {
        digitar_Mensagem(`Esses são os nomes científicos dos animais, então saber qual é cada um é o caminho certo!`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 63) {
        digitar_Mensagem(`Creio que você pode pesquisar, ${nomePlayer}.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 64) {
        digitar_Mensagem(`Agora para a personagem… espero que você saiba quem ela seja, por que eu não sei.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 65) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        HiitsumoEstado2 = 61;

    } else if (HiitsumoEstado2 === 66) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`AHH! Que pena! A resposta correta era Lampyridae!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 67) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Como isso faz sentido? Que pergunta injusta é essa!`, "falaHiitsumo", "raiva");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 68) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Tenha calma, querida Hii! Lampyridae significa vagalume, que é a tradução do nome da personagem.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 69) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`E como nós íamos saber disso?`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 70) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Com seus poderes de viajante do tempo, ou algo do tipo. Bom, fico feliz de saber que vocês não pesquisaram nada e jogaram justo!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 71) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Vamos pra próxima pergunta logo, perdi minha air fryer…`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 72) {
        digitar_Mensagem(`Nada de coxinhas, batatas, salgadinhos…`, "falaHiitsumo", "triste");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 73) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Sinto muito, querida, mas o jogo tem que seguir.`, "falaBoss", "show");
        HiitsumoEstado2 = 84;

    } else if (HiitsumoEstado2 === 74) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Muito bem, jogadores! Resposta correta!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 75) {
        digitarMensagem_Boss(`Vocês acabaram de ganhar sua magnífica air fryer! Parabéns!`, "falaBoss", "showPremio1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 76) {
        digitarMensagem_Boss(`Espero que vocês não tenham pesquisado no Google ou no chat GPT, mas vocês jamais fariam isso, não é mesmo?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 77) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`É- É… Claro que não! Não é, o ${nomePlayer} sabia bem desses nomes…`, "falaHiitsumo", "corada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 78) {
        digitar_Mensagem(`O que importa é que ganhamos a air fryer, ${nomePlayer}!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 79) {
        digitar_Mensagem(`Eu posso implementá-la na nossa máquina do tempo, é essencial para missão, você não acha?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 80) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Ela é magnífica mesmo, uma com a maior qualidade.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 81) {
        digitarMensagem_Boss(`Não tanto ao ponto de ser capaz de falar e exibir seus vídeos favoritos da semana, mas…`, "falaBoss", "showSiume");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 82) {
        digitarMensagem_Boss(`Enfim, vamos não fazer delongas e passar para o próximo prêmio.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 83) {
        cabeca1.style.display = "none";
        digitarMensagem_Boss(`(Vocês obtiveram uma air fryer.)`, "falaBoss", "showPremio1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 84) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "flex";
        digitarMensagem_Boss(`E para a próxima pergunta…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 85) {
        digitarMensagem_Boss(`Vamos embarcar em memórias de tirar o fôlego!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 86) {
        digitarMensagem_Boss(`Então peguem seus controles, um balde de pipoca e um microfone meus queridos!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 87) {
        digitarMensagem_Boss(`Pois vamos misturar os conteúdos de um jogo que virou absolutamente cinema e uma de suas melhores músicas!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 88) {
        digitarMensagem_Boss(`Valendo uma almofada cheia de sensualidade e um sorriso que conquista corações:`, "falaBoss", "showPremio3");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 89) {
        digitarMensagem_Boss(`Em Arcane, qual música Heimmerdinger canta quando está em outra linha temporal?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 90) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block"; digitarOpcao('"The Line."',        "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Wasteland."',       "opcaoB1");
        opcC1.style.display = "block"; digitarOpcao('"Spin the wheel."',  "opcaoC1");
        opcD1.style.display = "block"; digitarOpcao('"Paint The town blue."', "opcaoD1");
        opcA1.onclick = () => { avancarOpcao(102); };
        opcB1.onclick = () => { avancarOpcao(102); };
        opcC1.onclick = () => { avancarOpcao(108); };
        opcD1.onclick = () => { avancarOpcao(102); };
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 91) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Bem… olhando aqui… deve ser…`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 92) {
        digitar_Mensagem(`Já parou pra pensar que você é tipo, muito ancião pra mim, ${nomePlayer}?`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 93) {
        digitar_Mensagem(`Não conheço nada dessas séries e jogos, sabe?`, "falaHiitsumo", "coradaDedo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 94) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        Hiitsumo.src            = "./src/img/hiitsumo-frente-feliz.gif";
        esconderOpcoes1();
        digitarMensagem_Boss(`Ora, fico com pena de vocês assim, meus amores.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 95) {
        digitarMensagem_Boss(`Vamos lá, vou agraciar vocês com um pouco da minha voz de canto.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 96) {
        digitarMensagem_Boss(`A plateia, não se acostumem com isso, vou dar essa cortesia para vocês hoje.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 97) {
        digitarMensagem_Boss(`Ou vocês gostariam de escutá-la todos os dias na própria casa? A decisão é de vocês.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 98) {
        digitarMensagem_Boss(`Vamos lá…`, "falaBoss", "show");
        setTimeout(() => { musicaLol.play(); }, 1000);
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 99) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Sua voz estava um pouco mais… máscula, eu acho. Mas tudo bem, Graciane, você foi ótima!`, "falaHiitsumo", "mao");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 100) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Muito obrigada, Hii! E o show continua com vocês!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 101) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`${nomePlayer}, agora você tem ideia da música? Confio em você.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 = 90;

    } else if (HiitsumoEstado2 === 102) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`AHH! Que pena! A resposta correta era "Spin the wheel"!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 103) {
        digitarMensagem_Boss(`A pergunta era difícil mesmo, nem todo fã acertaria essa.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 104) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`${nomePlayer}, acertamos a próxima com certeza, não há problema!`, "falaHiitsumo", "V");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 105) {
        digitar_Mensagem(`Mas aí, Graciane, não tem nenhum prêmio de consolação no final não?`, "falaHiitsumo", "seria");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 106) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Eu tenho outra chave de fenda aqui.`, "falaBoss", "showPremio2");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 107) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Estamos bem, então…`, "falaHiitsumo", "beicinhoNormal");
        HiitsumoEstado2 = 112;

    } else if (HiitsumoEstado2 === 108) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Alguém terá uma ótima noite de sono, meus queridos!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 109) {
        digitarMensagem_Boss(`"Exatamente! A resposta era "Spin the Wheel", apenas os verdadeiros fãs de Arcane sabem desta!`, "falaBoss", "showPremio3");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 110) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`${nomePlayer}, você salvou muito agora!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 111) {
        digitar_Mensagem(`Eu vou aceitar que você leve a almofada para a sua linha do tempo, você deve aproveitar ela melhor que eu…`, "falaHiitsumo", "V");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 112) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Agora, para a próxima pergunta!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 113) {
        digitarMensagem_Boss(`Temos mais cinema, sim, cinema do mais alto nível!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 114) {
        digitarMensagem_Boss(`Para vocês que se apaixonaram pela fofa atendente da cafeteria próxima da casa de vocês.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 115) {
        digitarMensagem_Boss(`E para os que tiveram o coração partido pelas circunstâncias, apresento a vocês o prêmio que vai te livrar desse amargor!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 116) {
        digitarMensagem_Boss(`Uma pelúcia vindo do aclamado clássico anime chainsawman, a queridíssima Reze.`, "falaBoss", "showPremio4");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 117) {
        digitarMensagem_Boss(`O autor de chainsawman era um grande fã de cinema e constantemente faz referência a outros em sua obra.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 118) {
        digitarMensagem_Boss(`No arco da Reze, qual destes outros filmes ele fez uma referência diretamente na história?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 119) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block"; digitarOpcao('"Pulp Fiction."',                    "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Sharknado."',                       "opcaoB1");
        opcC1.style.display = "block"; digitarOpcao('"O ataque dos tomates assassinos."', "opcaoC1");
        opcD1.style.display = "block"; digitarOpcao('"A divina comédia."',                "opcaoD1");
        opcA1.onclick = () => { avancarOpcao(124); };
        opcB1.onclick = () => { avancarOpcao(137); };
        opcC1.onclick = () => { avancarOpcao(124); };
        opcD1.onclick = () => { avancarOpcao(124); };
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 120) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Aí, Graciane, não tem nenhuma ajuda pra essa pergunta não?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 121) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Não posso dar muito ajuda a vocês, queridos, mas para não causar nenhuma confusão vou esclarecer uma coisa.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 122) {
        digitarMensagem_Boss(`A referência é feita diretamente pelas personagens do filme, não vamos contar referências feitas nas aberturas e encerramentos.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 123) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`${nomePlayer}, é com você agora.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 = 119;

    } else if (HiitsumoEstado2 === 124) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Sinto muito pra vocês, queridos, mas a resposta correta era Sharknado!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 125) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Foi mal, ${nomePlayer}, não sabia nada disso de novo…`, "falaHiitsumo", "triste");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 126) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`É só mais uma pergunta, Hii, não se abata por isso, querida!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 127) {
        digitarMensagem_Boss(`Talvez você só deva assistir mais filmes.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 128) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Eu preciso mesmo…`, "falaHiitsumo", "coradaDedo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 129) {
        digitar_Mensagem(`Agora que minha máquina do tempo vai funcionar quando recuperamos as engrenagens, eu poderia tirar um tempo pra mim.`, "falaHiitsumo", "corada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 130) {
        digitar_Mensagem(`Eu nem precisaria passar tanto tempo trabalhando e…`, "falaHiitsumo", "triste");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 131) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Bem, falando em filmes, seria interessante ver suas reações.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 132) {
        digitarMensagem_Boss(`Daria um ótimo conteúdo pro meu canal no YouTube…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 133) {
        digitarMensagem_Boss(`Só um comentário despretensioso.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 134) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Graciane, se isso for verdade, vai ser o melhor dia da minha vida!`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 135) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Ora, o que eu faço com vocês? Hahaha.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 136) {
        digitarMensagem_Boss(`Bom, não posso dar um prêmio a você agora, mas o show segue!`, "falaBoss", "show");
        HiitsumoEstado2 = 151;

    } else if (HiitsumoEstado2 === 137) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Correta a resposta! O filme faz referência a Sharknado na cena em que Denji usa as correntes e monta no Beam!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 138) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`O que… O que acontece nesse filme?`, "falaHiitsumo", "raiva1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 139) {
        digitar_Mensagem(`O que é Sharknado?`, "falaHiitsumo", "raiva1");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 140) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Hii, você precisa assistir mais filmes.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 141) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Eu preciso mesmo…`, "falaHiitsumo", "coradaDedo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 142) {
        digitar_Mensagem(`Agora que minha máquina do tempo vai funcionar quando recuperamos as engrenagens, eu poderia tirar um tempo pra mim.`, "falaHiitsumo", "corada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 143) {
        digitar_Mensagem(`Eu nem precisaria passar tanto tempo trabalhando e…`, "falaHiitsumo", "triste");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 144) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Bem, falando em filmes, seria interessante ver suas reações.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 145) {
        digitarMensagem_Boss(`Daria um ótimo conteúdo pro meu canal no YouTube…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 146) {
        digitarMensagem_Boss(`Só um comentário despretensioso.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 147) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`É o melhor dia da minha vida.`, "falaHiitsumo", "animada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 148) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Hahaha, vocês são uma graça! Mas eu ainda não combinei nada, tenha calma.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 149) {
        digitarMensagem_Boss(`E agora a recompensa de vocês, a Reze!`, "falaBoss", "showPremio4");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 150) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Ela é tão fofa, ${nomePlayer}, mas vou deixar ela com você…`, "falaHiitsumo", "mao");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 151) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Agora, para a última pergunta do quadro, vamos para algo um pouco mais filosófico.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 152) {
        digitarMensagem_Boss(`Valendo uma engrenagem bem bonita…`, "falaBoss", "showPremio5");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 153) {
        digitarMensagem_Boss(`O que precisamos para sermos unidos?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 154) {
        digitarMensagem_Boss(`Humm… que pergunta estranha essa…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 155) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Não é você que decide as perguntas do show, Graci?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 156) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Tenho uma equipe que desenvolve elas, ser uma apresentadora é mais difícil do que parece.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 157) {
        digitarMensagem_Boss(`Se não fosse minha equipe, o programa não poderia acontecer, afinal, sou apenas uma geladeira que fala.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 158) {
        digitarMensagem_Boss(`Creio ter passado por um devaneio agora, enfim, jogadores…`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 159) {
        digitarMensagem_Boss(`Hii e ${nomePlayer}, vocês estão a uma pergunta de se tornarem estrelas, façam o jogo de vocês agora!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 160) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block"; digitarOpcao('"Amizade."',      "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Honestidade."',  "opcaoB1");
        opcC1.style.display = "block"; digitarOpcao('"Cooperação."',   "opcaoC1");
        opcD1.style.display = "block"; digitarOpcao('"Uma Graciane."', "opcaoD1");
        opcA1.onclick = () => { avancarOpcao(164); };
        opcB1.onclick = () => { avancarOpcao(164); };
        opcC1.onclick = () => { avancarOpcao(164); };
        opcD1.onclick = () => { avancarOpcao(174); };
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 161) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Eu sei qual é a resposta dessa, eu já vi ela fazendo em outras edições.`, "falaHiitsumo", "feliz");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 162) {
        digitar_Mensagem(`É um pouco óbvia, considerando que ela é um pouco ciumenta e tem um certo ego…`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 163) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Que rude!`, "falaBoss", "showSiume");
        HiitsumoEstado2 = 160;

    } else if (HiitsumoEstado2 === 164) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Poxa vida, parece que a resposta está…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 165) {
        digitarMensagem_Boss(`Errada.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 166) {
        digitarMensagem_Boss(`...`, "falaBoss", "showSiume");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 167) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Humm… Tá tudo bem?`, "falaHiitsumo", "preocupada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 168) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Vamos pra um comercial agora, voltamos no próximo bloco!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;
        setTimeout(() => { palmas.play(); }, 2500);

    } else if (HiitsumoEstado2 === 169) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Graciane?`, "falaHiitsumo", "preocupada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 170) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Bom, que estranho.`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 171) {
        digitarMensagem_Boss(`A dificuldade que eu tinha de dizer que aquela era a resposta errada ficou maior.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 172) {
        digitarMensagem_Boss(`Sim, sim. A resposta correta era "uma Graciane", mas…`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 173) {
        digitarMensagem_Boss(`Vocês deram a resposta correta.`, "falaBoss", "show");
        HiitsumoEstado2 = 185;

    } else if (HiitsumoEstado2 === 174) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        esconderOpcoes1();
        digitarMensagem_Boss(`Correta a resposta! Parabéns, jogadores!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 175) {
        digitarMensagem_Boss(`Com essa, entramos para um intervalo e depois voltamos com mais desafios divertidíssimos!`, "falaBoss", "show");
        HiitsumoEstado2 += 1;
        setTimeout(() => { palmas.play(); }, 3500);

    } else if (HiitsumoEstado2 === 176) {
        duranteShow.pause();
        digitarMensagem_Boss(`Bom, agora posso falar o que eu quiser pra vocês sem me preocupar com os patrocinadores.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 177) {
        digitarMensagem_Boss(`Não que eu estivesse mentindo antes, é claro.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 178) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Hum… o que é? Alguma coisa de errado, Graci?`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 179) {
        depoisShow.loop   = true;
        depoisShow.volume = 0.05;
        depoisShow.play();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Eu aprecio essa intimidade e já me dar um apelido, Hiitsumo.`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 180) {
        digitarMensagem_Boss(`Mas por que aquela resposta?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 181) {
        digitarMensagem_Boss(`Vocês sabem que essa pergunta só foi uma forma de vender mais, não sabem?`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 182) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Bom, a gente sabia que era a resposta correta, e querendo ou não, precisamos urgente da engrenagem`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 183) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Entendo plenamente…`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 184) {
        digitarMensagem_Boss(`Creio que a resposta correta seria qualquer uma das outras três.`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 185) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`As três opções são muito infantis, são respostas muito simples e que não significam nada sério. Amizade, honestidade e cooperação.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 186) {
        digitarMensagem_Boss(`Mas eu também não consigo entender essas coisas como vocês, e isso é natural. Por isso parecem infantis.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 187) {
        digitarMensagem_Boss(`Só que ganhei uma perspectiva nova hoje.`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 188) {
        digitarMensagem_Boss(`Todos os meus convidados até então tem sido dos mais mesquinhos, muitos deles apenas para ganhar fama.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 189) {
        digitarMensagem_Boss(`Alguns são contratados pela empresa para fazer os produtos parecerem melhor.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 190) {
        digitarMensagem_Boss(`Alguns usam o programa para ganharem seguidores na própria carreira.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 191) {
        digitarMensagem_Boss(`Mas é a primeira vez que uma fã participa.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 192) {
        digitarMensagem_Boss(`Ou dois fãs, vocês se consideram? Tem sido divertido para você também, ${nomePlayer}?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 193) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        opcoes1.style.display   = "flex";
        opcA1.style.display = "block"; digitarOpcao('"Sim."', "opcaoA1");
        opcB1.style.display = "block"; digitarOpcao('"Não."', "opcaoB1");
        opcA1.onclick = () => { avancarOpcao(195); };
        opcB1.onclick = () => { avancarOpcao(194); };

    } else if (HiitsumoEstado2 === 194) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display   = "none";
        opcA1.style.display     = "none";
        opcB1.style.display     = "none";
        digitarMensagem_Boss(`Não posso evitar decepções, gostaria de ter feito um show melhor para vocês…`, "falaBoss", "showFechada");
        HiitsumoEstado2 = 196;

    } else if (HiitsumoEstado2 === 195) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        opcoes1.style.display   = "none";
        opcA1.style.display     = "none";
        opcB1.style.display     = "none";
        digitarMensagem_Boss(`Eu entendo que isso é digno de me fazer satisfeita, entendo…`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 196) {
        digitarMensagem_Boss(`Mas o show é isso, algo para vender, algo para viralizar.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 197) {
        digitarMensagem_Boss(`Mas a cozinha ainda é minha, não é?`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 198) {
        digitarMensagem_Boss(`Mesmo que eu não consiga entender as coisas como vocês humanos, posso cumprir o meu propósito aqui.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 199) {
        digitarMensagem_Boss(`De verdade, meu propósito é apenas resfriar e congelar. Também é tocar músicas e vídeos.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 200) {
        digitarMensagem_Boss(`Se for pedido, conversar com o usuário caso ele queira.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 201) {
        digitarMensagem_Boss(`Mas talvez meu propósito possa ser um pouco mais do que um produto, que um entretenimento.`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 202) {
        digitarMensagem_Boss(`Vocês me ajudaram a ver isso.`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 203) {
        digitarMensagem_Boss(`Talvez algo que possa unir as pessoas de verdade, seria bom…`, "falaBoss", "showFechada");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 204) {
        digitarMensagem_Boss(`É algo bem mais valioso que um simples comercial.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 205) {
        digitarMensagem_Boss(`Hii e ${nomePlayer}, acho que devo lhes dar de volta o que lhes pertence.`, "falaBoss", "showPremio5");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 206) {
        digitarMensagem_Boss(`Consertem sua máquina do tempo, é o propósito de vocês para hoje.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 207) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Graci… ${nomePlayer}...`, "falaHiitsumo", "chorando");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 208) {
        digitar_Mensagem(`Muito obrigada, pessoal!`, "falaHiitsumo", "chorando");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 209) {
        document.querySelector(".engrenagens").style.opacity = "1";
        atualizarEngrenagem();
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        cabeca1.style.display   = "none";
        digitarMensagem_Boss(`(Vocês obtiveram a engrenagem)`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 210) {
        cabeca1.style.display = "flex";
        document.querySelector(".engrenagens").style.opacity = "0";
        digitarMensagem_Boss(`Hii, pra que tudo isso, querida?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 211) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Eu não sei porque, mas isso me deixou muito feliz…`, "falaHiitsumo", "chorando");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 212) {
        digitar_Mensagem(`Preciso de um minuto…`, "falaHiitsumo", "chorando");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 213) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Uma bebida pra lhe ajudar, se acalme…`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 214) {
        cabeca1.style.display = "none";
        digitarMensagem_Boss(`(Após um minuto de Graciane consolando Hiitsumo, as coisas se acalmam.)`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 215) {
        digitarMensagem_Boss(`(Hiitsumo não bebeu o refrigerante barato e duvidoso que Graciane a ofereceu.)`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 216) {
        digitarMensagem_Boss(`(O intervalo continua.)`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 217) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        cabeca1.style.display   = "flex";
        digitar_Mensagem(`Ei, Graciane, eu e o ${nomePlayer} vamos dar uma olhada na máquina do tempo agora.`, "falaHiitsumo");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 218) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Aproveitem para descansar um pouco, que tal?`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 219) {
        digitarMensagem_Boss(`O show não acaba tão cedo, vou precisar de vocês por mais um tempinho.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 220) {
        digitarMensagem_Boss(`Mas se possível, não demorem tanto.`, "falaBoss", "show");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 221) {
        mensagem1.style.display = "flex";
        mensagem2.style.display = "none";
        digitar_Mensagem(`Pode deixar.`, "falaHiitsumo", "V");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 222) {
        mensagem1.style.display = "none";
        mensagem2.style.display = "flex";
        digitarMensagem_Boss(`Piscadela.`, "falaBoss", "showPisca");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 223) {
        // monta a tela e digita — a troca de fase só acontece no próximo clique (224)
        cabeca1.style.display          = "none";
        mensagem1.style.display        = "none";
        mensagem2.style.display        = "none";
        fundo.style.display            = "flex";
        introducao.style.display       = "flex";
        mensagem.style.display         = "flex";
        fundo.style.pointerEvents      = "none";
        introducao.style.pointerEvents = "auto";
        mensagem.style.pointerEvents   = "auto";
        carregar.style.display         = "none";
        digitarMensagemIntro("(Vocês se afastam um pouco da cozinha e vão para um lugar espaçoso.)", "falaHiitsumoIntro");
        HiitsumoEstado2 += 1;

    } else if (HiitsumoEstado2 === 224) {
        // troca de fase — emTransicao impede tickConexao2 de disparar nesse mesmo clique
        emTransicao     = true;
        faseAtual       = 2;
        HiitsumoEstado2 = 0;
        HiitsumoEstado3 = 0;
    }
}