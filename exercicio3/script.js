// # Exercício 3
// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,

};

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"


// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** 
// de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataques = []
pokemon1.ataques.push({
    nomeAtaque1: "Investida",
    dano: 40,
    tipo: "normal",
    precisao: 100
})


 //[ataque1, ataque2]

// ```text
// nome: Investida;
// dano: 40;
// tipo: Normal;
// precisao: 100;
// ```

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
// console.log(pokemon2) //squirtle
pokemon2.ataques = [... pokemon1.ataques]


// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push(
    {nomeAtaque2: "Folha Navalha",
    dano: 45,
    tipo:"Grama",
    precisao: 100})

    
// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemon2.ataques.push({
    nomeAtaque2: "jato de Água",
    dano: 40,
    tipo: "água",
    precisao: 100
})
console.log(pokemon1)
console.log(pokemon2)

