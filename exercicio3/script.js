const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1)
//**`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemonNovo = {
    ...pokemon1,
    nome: 'squirtle', 
    tipo: 'água'
}
console.log(pokemonNovo)
console.log('________________________')





pokemon1.ataques = []

const objetoAtaque = {nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}
pokemon1.ataques.push(objetoAtaque)
console.log(pokemon1)
console.log('________________________')














/*Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** 
da propriedade criada para o objeto original;*/

pokemonNovo.ataques = {
    ...pokemon1.ataques,
    nome: "Jato D'água", 
    dano: 40, 
    tipo: "Água", 
    precisao: 100,    
}
console.log('________________________')
/*para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**,
 **100 de precisão**, e de tipo **“Grama”**;*/

pokemon1.ataques ={
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'grama',
    precisao: 100
}
console.log(pokemon1)

