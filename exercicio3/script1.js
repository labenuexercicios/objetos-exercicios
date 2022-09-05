const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
//Copiar por espalhamento o objeto acima e mudar o nome e o tipo

const novoPokemon = {
    ...pokemon1
}
novoPokemon.nome = 'Squirtle'
novoPokemon.tipo = 'Água'
console.log(pokemon1)
console.log("_________________")
console.log(novoPokemon)
console.log("_________________")
// Crie um array vazio. criar um objeto. depois colocar esse objeto dentro do array com o metodo push



pokemon1.ataques = []
console.log(pokemon1) //criei essa linha pra mostrar a array dentro do pokenon1 vazia

const criandoUmobjeto = {
nome: 'Investida',
dano: 40,
tipo: 'Normal',
precisao: 100
}
pokemon1.ataques.push(criandoUmobjeto)//aqui eu coloco o objeto dentro da array
console.log(pokemon1)// criei essa linha pra mostrar a array com as propriedades
console.log("_________________")

/*pokemon1.ataque = 'Folha Navalha'
pokemon1.dano= 45
pokemon1.precisão =100
pokemon1.tipo = 'grama'
console.log(pokemon1) nesse caso, eu adiciono apenas ao pokemon mais propriedades*/

pokemon1.ataques.push({ataque: 'Folha Navalha', 
dano:45,
precisão:100,
tipo:'grama'}) 
console.log(pokemon1)


novoPokemon.novoAtaque = [] //Criei uma nova array para o novoPokemon
 
novoObjeto = {ataque:'jato de Água', //criei um objeto para colocar dentro do array que criei  acima
dano:40,
precisão:100}

novoPokemon.novoAtaque.push(novoObjeto) //aqui adicionei o objeto ao array
console.log(novoPokemon)


//obs: O metodo push() é utilizado em Arrays. Ele tem um parêntese porque pede um parâmetro, que é
//algo que queremos adicionar dentro deste array vazio que criamos. No caso desse exerício estamos 
//adicionando um objeto dentro do array.

