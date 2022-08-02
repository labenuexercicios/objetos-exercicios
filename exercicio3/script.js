const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {...pokemon1}
pokemon2.nome = 'Squirtle'
pokemon2.tipo = 'Água'

const ataques = []

// const informacoesAtaque = {
//     nome: 'Ember',
//     dano: 60,
//     tipo: 'fogo',
//     precisao: 80
// }

// ataques.push(informacoesAtaque)
// console.log(ataques);

// pokemon1.push(ataques)
// console.log(pokemon1);

ataques.push (
    'nome: Ember',
    'dano: 60',
    'tipo: fogo',
    'precisao: 80'
)


pokemon2.ataque= ataques


const folhaNavalha = [
    'Nome do ataque: Folha Navalha',
    'Dano: 45',
    'Precisão:100',
    'Tipo: Grama'
]

pokemon1.ataque = folhaNavalha


const jatoDeAgua = [
    'Ataque: Jato de água',
    'Dano:40',
    'Precisão: 100',
    'Tipo: Água'
]

pokemon2.ataque2 = jatoDeAgua

console.log(pokemon1);
console.log(pokemon2);
