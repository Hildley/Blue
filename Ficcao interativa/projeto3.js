const prompt = require('prompt-sync')();
let verdade = true;
do{



    var depressao = 50;
    var ansiedade = 50;
    var dias = 1;
    let esc = 0;
    let verdade = true;
    let esco = 0 ;
    let contaexe = 0;
    let dac = 0;
    let dac2 = 1;
    let dac3 = 1;
    let indicelista = 0;

    const pensamentos = ["Hilkira: desde o dia que eu tentei entrar para o mundo de E-sports, minha vida não foi mais a mesma. Perdi a vontade de fazer tudo que eu gostava\n não tenho mais prazer em sair com meus amigos, nem mesmo jogar por tanto tempo algum jogo." ,
    "Hilkira: Eu apostei tudo, eu sabia que se eu passasse aquela semana jogando, não iria conseguir passar em calculo 2 mais uma vez, e acabaria perdendo minha vaga na universidade...\n Mas eu fui la \n Eu tentei \n eu fui ate o fim \n Eu falhei..." , 
    "Hilkira: Minha mãe sempre falou para eu focar nos estudos, pois é a unica forma de um pobre sair da miseria\n ela esta certa, mas essa não é a unica forma, e eu sei disso!",
    "Hilkira: Eu não entendo, por que certas coisas aconteceram na minha vida... \n Desde moleque sempre sofri bullying na escola, sempre me batiam, me xingavam de muitas coisas. \n E por muito tempo eu acreditei que era so ignorar que tudo ficaria bem... \n Nunca ficou.",
    "Hilkira: ALem de tudo que eu ja passei, no meu aniversario de 12 anos, meu presente foi um trabalho em uma oficina de moto...\n Essa mesma oficina no qual todos os dias eu era molestado. \n A mesma que tentaram me est**pa, e mesmo contando a minha familia\n Eles sempre diziam que era desculpa minha para não ir trabalhar." ,
    "Hilkira: Talvez um psicologo me ajude a superar  essas coisas, mas eu não tenho forças para isso... pensando bem, acho que o melhor pra mim vai ser praticar exercicios."]


    function fimgame (){
        console.log("");
        console.log("Voce deseja jogar novamente?");
        console.log("1. Sim / 2. Não ");
        let m = escolha();
        if (m == 2){
            verdade = false;

        }
        return verdade;
    }

    function escolha (){
        let escolha = +prompt();
        return escolha;
    }

    const indicie3 = [1 , 2 , 3];

    function exercicio (){
        if (contaexe <= 3){
            console.log("");
            console.log("Sistema: Voce tentou fazer exercicios, porem, como voce não tem costume, os resultados não foram muitos satisfatorio. Mas, mesmo assim isso te ajudou de forma indireta, Continue tentando!");
            contaexe = contaexe + 1;
            return contaexe;
        }

        else {
            console.log("");
            console.log("Sistema: voce conseguiu praticar alguns exercicios, sua saude mental agradece! ");
            console.log("Sistema: seu nivel de ansiedade e depressão diminuiram");
        }
    }


    function erroop(mensagem1 , mensagem2){
        console.log("");
        console.log("Voce escolheu uma opção inexistente, por favor, tente novamente");
        console.log(mensagem1);;
        console.log(mensagem2);
    }

    function opdias(){
        do{
            console.log("");
            console.log("Sistema: o que vamos fazer agora?");
            console.log("1. Jogar no computador / 2. assistir na tv / 3. Dormir mais / 4. Tentar Fazer exercicios fisico");;
            let escolha1 = escolha()
            if (escolha1 == 1){
                console.log("Hilkira: Vou jogar alguma coisa, sem paciencia pra fazer alguma coisa...");
                console.log("");
                console.log("Sistema: Voce passa a manhã inteira e um pouco da tarde jogando, ate perceber que ja passou da hora do almoço.");
                console.log("");
                depressao = depressao + 5 ;
                return depressao;
                a = false ;
            }
            else if (escolha1 == 2){
                console.log("Hilkira: vou assitir um pouco, so quero entreter a mente um pouco sem me esforçar muito.");
                console.log("");
                console.log("Sistema: Voce passa a manhã toda assistindo, mas para quando dar meio dia para esquentar a comida e almoçar. ");
                console.log("");
                depressao = depressao + 5 ;
                return depressao
                a = false;
            }
            else if (escolha1 == 3){
                console.log("Hilkira: irei continuar a dormir, papo reto mo sono gostosinho. ");
                console.log("");
                console.log("Sistema: Voce estava com muito sono e foi dormir, quando acordou, ja era periodo da tarde!");
                console.log("");
                depressao = depressao + 5;
                return depressao
                a = false;
            }
            else if (escolha1 == 4){
                exercicio();
                dac = dac++
                return dac ;
                a = false;
            }
            else{
                console.log("Sistema: Voce escolheu uma opção inexistente, por favor, tente novamente!");
            }
        }while(a = true)
    }


    function optarde(){
        do{
            console.log("");
            console.log("Sistema: o que vamos fazer agora?");
            console.log("1. Jogar no computador / 2. assistir na tv / 3. Dormir mais / 4. Tentar Fazer exercicios fisico");;
            let escolha1 = escolha()
            if (escolha1 == 1){
                console.log("Hilkira: Vou jogar alguma coisa, sem paciencia pra fazer alguma coisa...");
                console.log("");
                console.log("Sistema: Voce passa a tarde inteira jogando, ate perceber que ja passou da hora da janta.");
                console.log("");
                depressao = depressao + 5 ;
                return depressao;
                a = false ;
            }
            else if (escolha1 == 2){
                console.log("Hilkira: vou assitir um pouco, so quero entreter a mente um pouco sem me esforçar muito.");
                console.log("");
                console.log("Sistema: Voce passa a tarde toda assistindo, mas para quando dar 18:00pm para fazer algo para comer.");
                console.log("");
                depressao = depressao + 5 ;
                return depressao
                a = false;
            }
            else if (escolha1 == 3){
                console.log("Hilkira: irei continuar a dormir, papo reto mo sono gostosinho. ");
                console.log("");
                console.log("Sistema: Voce estava com muito sono e foi dormir, quando acordou, ja era periodo noturno");
                console.log("");
                depressao = depressao + 5;
                return depressao
                a = false;
            }
            else if (escolha1 == 4){
                exercicio();
                dac = dac++
                console.log(dac)
                return dac ;
                

            }
            else{
                console.log("Sistema: Voce escolheu uma opção inexistente, por favor, tente novamente!");
            }
        }while(a = true)
    }
    function noites(){
        console.log("");
        console.log("Sistema: é chegada a noite, Voce continua a fazer o que estava fazendo durante a tarde.");
        console.log("Sistema: a diferença, é que agora, alguns pensamento indesejaveis aparecem aqui e acular.");
        console.log(".");
        console.log(".");
        console.log(".");
        if (indicelista < 6){
            let z = pensamentos [indicelista];
            console.log(z);
            indicelista = indicelista + 1 ;
            return indicelista;
        }
    }
    function consfor(){
        for(let i = 0; i <= 5 ; i++){
            console.log("")
        }
    }





    console.log (" Porque?");
    console.log("");
    console.log("Porque tudo tinha que ser assim...");
    console.log("");
    console.log("Eu tinha certeza de que tudo estava indo como eu planejei a minha vida toda...");
    console.log("");
    console.log("Eu tentei... Tentei de todas as formas");
    console.log("");
    console.log("Porque eu não conseguir?");
    console.log("");
    console.log("Porque tudo que eu tento sempre dar errado?");
    console.log("");
    console.log("Eu dei o meu maximo, eu passei 4 dias diretos sem dormir...");
    console.log("");
    console.log("Porque não deu certo?...");
    console.log("");
    console.log("porque?...");
    console.log("");
    console.log("PORQUE?...");
    console.log("");
    console.log("P O R Q U E ? ");
    console.log("");
    console.log("");
    console.log("");

    console.log("                                                  Alerta!!!!!                                         ");
    console.log("Este jogo contem cenas que podem dar GATILHO, principalmente para aqueles que ja sofreram ou sofrem com Ansiedade/Depressão. ");
    console.log("Eu realmente não recomendo voce a jogar este jogo caso tenha problemas com isso!");
    console.log("E saiba de uma coisa, pode parecer cliche mas, VOCE NÃO está sozinho!");
    console.log("Se possivel procure um psicologo, uma academia, essas são as melhores opções para te ajudar a passar por esse momento dificil!!");
    consfor();
        
            console.log("Porque é um jogo de ficção interativa, no qual o objetivo do jogador é conseguir tirar o personagem da depressão.");
            console.log("");
            console.log("Suas ações irão determinar se os niveis de depressão e ansiedade irá subir ou descer.");
            consfor();
            console.log("Minha mãe viajou hoje, ela ira passar um bom tempo fora com meu novo padastro...");
            console.log("Tempo ate de mais...");
            console.log("Sei la se ela ainda vai voltar pra casa...");
            console.log("Depois de tudo que eu fiz");
            console.log("...");
            console.log("mas bem, acho que esta na hora de começar a pagar pelo preço de minhas escolhas.");
            console.log("");
            console.log("");
            console.log("Pelo menos antes dela ir, deixou almoço pronto e alguns trocados... dar pra se virar por um mês.");
            console.log("Eu acho... rsrs");
            consfor();
            console.log("Sistema: Seu nivel de Depresssão inicial é " + depressao + " e seu nivel inicial de ansiedade é " + ansiedade);
            consfor();
            console.log("Bom, agora que eu tenho bastante tempo livre, talvez eu possa botar alguns jogos em dia, ou talvez assistir alguma serie ou filme, sei la, talvez dormir.");
            consfor();
            console.log("Sistema: voce podera escolher algumas ações para seu personagem tomar, para escolher, basta selecionar o numero associado a ação desejada.");
            console.log("Sistema: O que seu personagem ira fazer agora?");
            console.log("1.Jogar no computador. / 2. Assistir algo. / 3. Ir dormir");
            
            let a = true;

            do{
                let escolha1 = escolha()
                if (escolha1 == 1){
                    console.log("Acredito que vai ser uma boa eu começar a zerar CupHead!");
                    console.log("");
                    console.log("Sistema: Voce passa a manhã inteira e um pouco da tarde jogando, ate perceber que ja passou da hora do almoço.");
                    console.log("");
                    depressao = depressao + 2 ;
                    a = false ;
                }
                else if (escolha1 == 2){
                    console.log("Vai ser uma boa colocar minhas series em dias, quem sabe ate assistir aquele filme do homem aranha que saiu ano passado e ate agora não vi.");
                    console.log("");
                    console.log("Sistema: Voce passa a manhã toda assistindo, mas para quando dar meio dia para esquentar a comida e almoçar. ");
                    console.log("");
                    depressao = depressao + 2 ;
                    a = false;
                }
                else if (escolha1 == 3){
                    console.log("mano, eu to com muito sono, faz tempo que não durmo direito, acho que vou a mimir...");
                    console.log("");
                    console.log("Sistema: Voce estava com muito sono e foi dormir, acabou acordando ja proximo do por do sol");
                    console.log("");
                    depressao = depressao + 1;
                    a = false;
                }
                else{
                    console.log("Sistema: Voce escolheu uma opção inexistente, por favor, tente novamente!");
                    console.log("Sistema: O que seu personagem ira fazer agora?");
                    console.log("1.Jogar no computador. / 2. Assistir algo. / 3. Ir dormir");

                }
            }while(a == true);
            console.log("");
            console.log("");
            console.log("");
            console.log("Sistema: O dia se passou, é chegada a noite! ");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log("Vey, não fiz nada produtivo hoje...");
            console.log("Como todos os outros dias, desde que larguei a universidade.");
            console.log("e mesmo que tenha dado errado, pelo menos no futuro eu não vou ficar com a amargura de nunca ter tentado...");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log("esses ultimos dias tem sido bastantes intensos.");
            console.log("minha mãe esta certa em não aceitar essa decisão, ela não conhece esse mundo que eu tentei entrar...");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log(".");
            console.log("~~TRUMMMM ♫♫");
            console.log("~~TRUMMMM ♫♫");
            console.log("~~TRUMMMM ♫♫");
            console.log("Sistema: Voce esta recebendo uma chamada via Discord!");
            console.log("O que deseja fazer? ");
            console.log("1. atender a ligação / 2. desligar a ligação / 3. deixar tocar ate desistirem");
            let b  = true;
            do {
                var escolha2 = escolha();
                if (escolha2 ==1){
                    console.log("");
                    console.log("Sistema : Voce atendeu a ligação...");
                    console.log("");
                    console.log("");
                    console.log("?: Eae Hilkira, como que voce ta em? vamo bater um lolzinho agora com a galera?");
                    console.log("");
                    console.log("");
                    console.log("Sistema: Aceitar a jogatina com os amigos?");
                    console.log("1. Sim / 2. Não");
                    let a = true;
                    do{
                        esco  = escolha();
                        if (esco == 1 ){
                            ansiedade = ansiedade - 5;
                            console.log("");
                            console.log("Salve G , Vamos sim meu campeão, vou entrar no jogo agora, sem hora pra acabar em!");
                            console.log("");
                            console.log("G: oxente meu amigo,por mim a gente so para quando perde kkkkkk");
                            console.log("");
                            console.log("Hilkira: kkkkkkkk, então vamo dormir logo cedo desse jeito.");
                            console.log("");
                            console.log("Sistema: Voce passou a noite jogando com seus amigos, sua ansiedade diminuiu um pouco!");
                            a = false;
                        }
                        else if (esco == 2 ){
                            depressao = depressao + 10 ;
                            console.log("");
                            console.log("Hilkira: Salve G, Nem da irmão to muito no clima não, vou fazer umas outras coisas aqui, deixa pra proxima!");
                            console.log("");
                            console.log("G: Tranquilo brother. ");
                            console.log("");
                            console.log("Sistema: Voce passou a noite junto somente a seus pensamentos, seu nivel de depressão aumentou");
                            a = false ;
                        }
                        else {
                            let mensagem1 = "O que deseja fazer?";
                            let mensagem2 = "1. Sim / 2. Não";
                            erroop(mensagem1 , mensagem2);

                        }
                    }while(a == true);
                    b = false;
                }

                else if (escolha2 == 2){
                    depressao = depressao + 10 ;
                    console.log("");
                    console.log("Sistema: Voce desligou a ligação");
                    console.log("");
                    console.log("Sistema: Seu nivel de depressão aumentou!");
                    console.log("");
                    b = false ;

                }
                else if (escolha2 == 3){
                    depressao = depressao + 15;
                    ansiedade = ansiedade + 10;
                    console.log("");
                    console.log("Sistema: Seus amigos insitiram muito em tentar falar com voce, mas voce não quis atender.");
                    console.log("Sistema: Enquanto tocava, voce se sentia triste, mas voce queria um momento somente para voce.");
                    console.log("Sistema: Seu nivel de depressão e ansiedade aumentaram bastante!");
                    b = false;

                }
                else{
                    let mensagem1 = "Sistema: Aceitar a jogatina com os amigos?";
                    let mensagem2 = "1. atender a ligação / 2. desligar a ligação / 3. deixar tocar ate desistirem";
                    erroop(mensagem1 , mensagem2);
                }

            }while (b == true);
        


        do{
            opdias();
            if (dac == dac2){
                ansiedade = ansiedade - 5 ;
                depressao = depressao - 5;
                dac2 = dac2 + 1;
            }

            optarde();
            if (dac == dac3){
                ansiedade = ansiedade - 5 ;
                depressao = depressao - 5;
                dac3 = dac3 + 1;

            }

            noites();

            


        }while((depressao >= 10 && depressao < 95 ) && (ansiedade >= 10 && ansiedade < 95) );

        if (depressao <= 10 ){
            console.log("");
            console.log("Sistema: Parabens amigo, Voce VENCEU a depressão!");
            console.log("Sistema: Vai la, VIVA A VIDA!");
        }

        if (depressao >= 95){
            console.log("");
            console.log("Sistema:...");
            console.log("Sistema: Sua depressão chegou a um nivel muito alto...");
            console.log("Sistema: diante de tantas dificuldades, Sua mente não consegue aguentar...");
            console.log("Sistema: Voce acabou cometendo S**C*DIO!");

        }

        if (ansiedade <= 10){
            console.log("Sistema: Parabens! Voce conseguiu controlar sua ansiedade, Sua vida melhorou tanto depois disso que acabou te ajudando a Vencer a depressão!");
            console.log("Sistema: Vai la, VIVA A VIDA!");
        }

        if (ansiedade >= 95 ) {
            console.log("");
            console.log("Sistema: Bem...");
            console.log("Sistema: Sua ansiedade chegou em um nivel incontrolavel...");
            console.log("Sistema: Seu coração começou a bater muito rapido!");
            console.log("Sistema: Voce veio a obito...");
        }

        console.log("");
        console.log("Voce deseja jogar novamente?");
        console.log("1. Sim / 2. Não ");
        let m = escolha();
        if (m == 2){
            break

        }



}while(verdade == true);