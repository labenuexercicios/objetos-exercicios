let sacolao = []

const banana = [{
  nome : "Banana" ,
  preco : 5.89 ,
  disponibilidade : true
}]

const laranja = [{
  nome : "Laranja" ,
  preco : 3.20 ,
  disponibilidade : false
}]

const leite = [{
  nome : "Leite" ,
  preco : 6.15 ,
  disponibilidade : true
}]

console.log(`Inicialmente o vetor tem ${sacolao.length} elementos`)
sacolao.push(banana, laranja, leite)
console.log(sacolao)
console.log(`Ao final o vetor tem ${sacolao.length} elementos`)
