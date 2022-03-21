const prompt = require('prompt-sync')();
let continua = 0;
let opcoes = ["pedra" , "papel" , "tesoura"];
do {
    console.log("Boas Vindas ao mais novo jogo de Jokenpô, Pagou pelo acento todo? Há, so vai precisar da beirada.");
    console.log();
    console.log("A premissa do jogo é simples, temos 3 elementos: Pedra, Papel e Tesoura.")
    console.log("Voce pode escolher um deles, sendo eles : 0 = pedra, 1 = papel, 2 = tesoura ");
    console.log("Vamos as regras basica do jogo: Pedra ganha de Tesoura, mas perde para papel.");
    console.log("Papel ganha de pedra, mas perde para tesoura. ");
    console.log("tesoura ganha de papel, mas perde para pedra.");
    console.log();
    let rept = prompt("Quantas rodadas voce gostaria de jogar? ");
    let cont = 1;
    let vitoriap = 0;
    let vitoriac = 0;
    let empate = 0;
    while (cont >= 1 && cont <= rept){
        let pce = Math.floor(Math.random() * 3)
        console.log("vamos as escolhas, lembrando: 0 = pedra, 1 = papel, 2 = tesoura ");
        let escolha = +prompt("Qual a sua escolha? ");
        if (escolha == 0 || escolha == 1 || escolha == 2 ){
            console.log("voce escolheu :" + opcoes[escolha] + " e o computador escolheu: " + opcoes[pce]);
            if ((escolha == 0 && pce == 2) || (escolha == 1 && pce == 0 ) || (escolha == 2 && pce == 1) ){
                console.log("Parabens, voce ganhou a rodada!");
                console.log();
                vitoriap = vitoriap + 1;
                cont++;
            }
            else if ((escolha == 2 && pce == 0) || (escolha == 0 && pce == 1 ) || (escolha == 1 && pce == 2) ){
                console.log("Que pena, o computador ganhou esta rodada!");
                console.log();
                vitoriac = vitoriac + 1;
                cont++;
            }

            else {
                console.log("Temos um empate!")
                console.log();
                empate = empate + 1;
                cont++;
            }
        }
        else{
            console.log("Calma la amigão, Voce escolheu uma opção errada! Tente novamente.");
            console.log();

        }
        
    }
    console.log("Voce ganhou " + vitoriap + " rodadas, e o computador ganhou " + vitoriac + " rodadas");
    console.log();
    console.log("E tambem tivemos " + empate + " empates.");
    console.log();
    if( vitoriap > vitoriac){
        console.log("E o grande campeão foi VOCE, magnifico, explendido!!");
        console.log();
    }
    else if( vitoriac > vitoriap){
        console.log("E o grande campeão foi o COMPUTADOR! Mais sorte na proxima vez.");
        console.log();
    }
    else {
        console.log("esta partida foi muito acirrada, não tivemos ganhador, temos um EMPATE!")
        console.log();
    }

continua = prompt("deseja continuar? ").toLowerCase();
console.clear();

} while(continua == 'sim');
