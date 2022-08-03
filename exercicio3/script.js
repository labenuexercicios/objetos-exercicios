console.log("Exercício 3")

//Observe o objeto abaixo e, utilizando o espalhamento resolva os exercícios a seguir:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

console.log("Original:", pokemon1)

//A  - Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando nome por “Squirtle” e tipo por “Água”

const pokemon1Copia = {...pokemon1}
    pokemon1Copia.nome = "Squirtle";
    pokemon1Copia.tipo = "Água"


console.log("A - Cópia alterada", pokemon1Copia)

/*b) No objeto original, adicione mais uma propriedade, chamada ataques. Esta propriedade deve guardar um array de objetos com a estrutura abaixo. 
Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando **push()**

nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;*/

pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,})

console.log("B - Array adc ao original", pokemon1.ataques)

//c) Na cópia do objeto original, adicione a propriedade ataques a partir do espalhamento da propriedade criada para o objeto original;

pokemon1Copia.ataques = [...pokemon1.ataques]

console.log("C - adicionado ataques a cópia",pokemon1Copia)

//d) para o objeto original, adicione o ataque “Folha Navalha”, com 45 de dano, 100 de precisão, e de tipo “Grama”;

pokemon1.ataque = {nome: "Folha naval", Dano: 45, Precisão: 100, Tipo: "Grama"}

console.log("D - Propriedade ataque adicionada a frase original",pokemon1)

//e) para a cópia, crie o ataque “Jato de Água”, com 40 de dano, 100 de precisão, e do tipo “Água”;

pokemon1Copia.ataque = {nome: "jato de água", Dano:40, Precisão:100, Tipo: "água"}

console.log(pokemon1)
console.log(pokemon1Copia)