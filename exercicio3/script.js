//Observe o objeto abaixo e, utilizando o espalhamento resolva os exercícios a seguir:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

console.log("Original", pokemon1)

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando nome por “Squirtle” e tipo por “Água

const pokemon1Copia={...pokemon1}
pokemon1.nome= "Squirtle";
pokemon1.tipo= "Água";
console.log(" A - Copia alterada", pokemon1)

/*b) No objeto original, adicione mais uma propriedade, chamada ataques. Esta propriedade deve guardar um array 
de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando **push()**
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;*/

pokemon1.ataque = []
pokemon1.ataque.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100, 
})

console.log(" B - Adição da propriedade ataque",pokemon1)

//c) Na cópia do objeto original, adicione a propriedade ataques a partir do espalhamento da propriedade criada para o objeto original;

const pokemon1Copia2 = {...pokemon1Copia}
pokemon1Copia2.ataques = pokemon1
console.log(" C - Cópia do original", pokemon1Copia2)

//d) para o objeto original, adicione o ataque “Folha Navalha”, com 45 de dano, 100 de precisão, e de tipo “Grama”;


pokemon1.ataque1 = [{
    nome: "Folha navalha",
    dano: 45,
    Precisão: 100,
    Tipo: "grama",
}]
console.log(" D - Adição de ataque ao original", pokemon1)

pokemon1.ataque2 = [{
    nome: "Jato de Água",
    dano: 40,
    Precisão: 100,
    Tipo: "Àgua",
}]
console.log(" E - Adição de ataque ao original", pokemon1)