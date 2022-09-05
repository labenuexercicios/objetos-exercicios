const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//resposta letra A: Qual o código para imprimir o nome do **primeiro** ator/atriz?
console.log(`Primeiro ator/atriz: ${filme.elenco[0]}`)

//resposta letra B: Qual o código para imprimir o nome do **último** ator/atriz?
console.log(`último ator/atriz: ${filme.elenco[3]}`)

//resposta letra C: Qual o código para exibir o array com **todas** as transmissões de hoje?
console.log(`Essas são todas as transmissões de hoje: ${filme.transmissoesHoje}`)

//resposta letra D:

console.log(`Esse é o horário do "Canal Brasil": ${filme.transmissoesHoje[1].horario}`)

