//Exercicio 3

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}
console.log("Inicial", pokemon1)

const pokemon1Copia = { ...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}
console.log("Primeira mudança letra a", pokemon1Copia)

const ataques = {}
pokemon1.ataques = {}
console.log(ataques)

ataques.push("nome: Investida, danos: 40, tipo: Normal, precisao: 100")

console.log(ataques)

