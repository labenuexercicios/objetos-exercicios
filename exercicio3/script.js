//EXERCÍCIO 03
//Observe o objeto abaixo e, utilizando o ESPELHAMENTO resolva os exercícios a seguir:
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a)Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando NOME por "Squirtle" e TIPO por "Água"
const copiaPokemon1 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//b) No objeto original, adicione mais uma propriedade, chamada ataques. Esta propriedade deve guardar um ARRAY que deve começar vazio.
/*
pokemon1.ataques = [];
*/
//OU PODE SER REFEITA ASSIM:
const ataques1 = {
    ...pokemon1,
    ataques: []
}

//c) crie um objeto de ataque com a estrutura abaixo e o adicione no array ataques utilizando **push()**
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

const adicionando = {

}
copiaPokemon1.ataques.push(ataque);

//d) Na cópia do objeto original, adicione a propriedade ATAQUES a partir do ESPALHAMENTO da propriedade de mesmo nome criada para o objeto original;
const espalhamento = {
   ...copiaPokemon1,
   ...ataques
}

//


console.table(pokemon1);



















