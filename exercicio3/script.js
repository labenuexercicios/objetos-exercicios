const pokemon1 = {
    nome:"Bulbasaur",
    tipo:"grama",
    nivel: 5,
}

//a)
const pokemon2 = {...pokemon1,
    nome:"Squirtle",
    tipo:"água"
}
 
//b)
pokemon1.ataques = []

//c)
pokemon1.ataques.push(
    {nome:"investida"},
    {dano:40},
    {tipo: "Normal"},
    {precisao: 100},
)

pokemon2.ataques=[]


//d)
pokemon1.ataques.push(
    {nome:"Folha navalha"},
    {dano:45},
    {tipo: "Grama"},
    {precisao: 100},
)

//e)
pokemon2.ataques.push(
    {nome:"Jato de Água"},
    {dano:40},
    {tipo: "Água"},
    {precisao: 100},
)

console.log(pokemon1)
console.log(pokemon2)
