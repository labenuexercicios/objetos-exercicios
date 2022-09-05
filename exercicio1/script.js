// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

const sacolao=[]
console.log('==========')

const ex10=[ 
     
    {
    nome: 'Laranja',
    preco: 1,
    disponibilidade: sacolao === 3
},
    { 
     nome: 'uva',
     preço: 5,
     disponibilidade: sacolao === sacolao  
    },
    { 
    nome: 'morango',
    preço: 20,
    disponibilidade: sacolao === []
    }
]
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
const addSacolao = sacolao.push(ex10)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log('Impressão do sacolao:',sacolao)
console.log('==========')




