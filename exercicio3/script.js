//Spread
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1);
//A)
copiaPokemon = {
    ...pokemon1
}
const pokemon3 =[copiaPokemon]
copiaPokemon.nome = 'Squirtle';
copiaPokemon.tipo = 'Agua';
console.log(copiaPokemon);

//B)
const pokemon2 = [];
pokemon2.push(pokemon1)
pokemon2.push('ataques:', 'investida', 'dano: 40', 'tipo: normal', 'precisao:100')

console.log(pokemon2);

//C
copiaPokemon ={
    ...pokemon1,
    ataques:'',
}
console.log(copiaPokemon);

//D
const ataque = [pokemon1]
ataque.push(pokemon1)
ataque.push('Ataque: Folha navalha', 'Dano: 45', 'Precisão: 100', 'Tipo: grama')
console.log(ataque);
//E
const ataque1 = [pokemon3]
ataque1.push(pokemon3)
ataque1.push('Ataque: Jato da agua', 'Dano: 40', 'Precisão: 100', 'Tipo: agua')
console.log(ataque1);



console.log('bulbasaur:',pokemon1,ataque, 'squirtle:', pokemon3, ataque1);