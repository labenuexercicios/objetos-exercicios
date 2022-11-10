const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5
}
// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por 
// “Squirtle” e **`tipo`** por “Água”
const copiaPokemon1 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água"
}
console.log(copiaPokemon1)
// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta 
// propriedade deve guardar um **array** que deve começar vazio.
pokemon1.ataques = []
console.log(pokemon1)
// c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no array `ataques` 
// utilizando `**push()**
const ataque = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100
}
pokemon1.ataques.push(ataque)
console.log(pokemon1)
//c)Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do 
// **espalhamento** da propriedade de mesmo nome criada para o objeto original
copiaPokemon1.ataques = [...pokemon1.ataques]
console.log(copiaPokemon1)
//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com 
//**45 de dano**, **100 de precisão**, e de tipo **“Grama”**; no array de `ataques`
  const ataque1={
    nome:"Folha Navalha",
    dano:40,
    precisao:100,
    tipo:"Grama"
  }
    pokemon1.ataques=[...pokemon1.ataques,ataque1]
 // e) e) para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de 
          // precisão**, e do tipo **“Água”**; e adicione no array.
          const ataque2={
            nome:"Jato de Agua",
            dano:40,
            precisâo:100,
            tipo:"Água"
          }
            copiaPokemon1.ataques=[...copiaPokemon1.ataques,ataque2]
          //d)f) Imprima os dois objetos  do tipo pokemon no console.
            console.log("Copia",copiaPokemon1)
            console.log("original", pokemon1)

