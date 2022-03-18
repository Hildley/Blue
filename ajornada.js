const prompt = require('prompt-sync')();

console.log("Um jovem garoto, aos seus 12 anos, descobriu que era um semideus, e ao mesmo tempo, descobriu que o destino dos Deus do Olimpo estava em suas mãos.")
console.log("");
console.log("Inumeros monstros viviam a sua procura, afim de acabar com sua existencia e assim decretar o fim do Olimpo, porem, foi treinado sobre a tutela de Quiron, um dos maiores mestres que existiu na Grecia Antiga, e mesmo não confiante, saiu em uma aventura afim de salvar os deuses e o planeta.");
console.log("");
console.log("Ao fim de sua jornada, uma entidade desconhecida aparece diante de nosso heroi, afim de esclarecer algumas questões.");
console.log("");

let pergunta1 = prompt("Voce recuperou e devolveu o Raio Mestre de Zeus?").toUpperCase();

let pergunta2 = prompt("Voce conseguiu derrotou o ciclope e recuperou o Velocino de Ouro?").toUpperCase();

let pergunta3 = prompt("Voce conseguiu convencer Hades a te ajudar a defender o Monte Olimpo?").toUpperCase();

let pergunta4 = prompt("Voce conseguiu proteger a cidade de Manhattan do ataque de Cronos e Orfeus?").toUpperCase();

let pergunta5 = prompt("Voce impediu de Cronos destruir os tronos do Panteão Grego?").toUpperCase();

let contador = 0;

if (pergunta1 == "SIM"){
    contador++;
}

if (pergunta2 == "SIM"){
    contador++;
}

if (pergunta3 == "SIM"){
    contador++;
}

if (pergunta4 == "SIM"){
    contador++;
}

if (pergunta5 == "SIM"){
    contador++;
}

if (contador == 0){
    console.log("Por que voce falhou miseralvemente, a humanidade foi extinta, os Titans dominaram toda a terra.");
}

else if (contador == 1 || contador == 2 ){
    console.log("Voce falhou, a humanidade sofreu uma perda catastrofica, mas não o suficiente para ser exitinta.");
}
else if (contador == 3){
    console.log("Por pouco, voce não conseguiu seu objetivo, os deuses deram um jeito da humanidade não sofre uma perda muito maior.");
}
else if (contador == 4){
    console.log("Voce se esforçou bastante e conseguiu o seu objetivo, porem teve algumas perdas importantes. Foi dificil mas, a humanidade esta protegida com sucesso.");
}

else {
    console.log("Perfeição! Voce conseguiu almejar seu objetivo com maestria, voce salvou a humanidade sem ter perdas. Suas bravura fez com que Zeus te convidasse a fazer parte do Panteão Grego.");
}