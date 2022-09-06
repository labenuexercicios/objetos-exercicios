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

console.log(`a - ${filme.elenco[0]}`)

//length-1 pega o último elemento do vetor
//nesse caso visilmente é o elemento elenco[3]
console.log(`b - ${filme.elenco[filme.elenco.length-1]}`)

//console.log(`c - ${filme.transmissoesHoje} `)
console.log("c -\n" , filme.transmissoesHoje[0] , "\n" , filme.transmissoesHoje[1] , "\n" , filme.transmissoesHoje[2])

console.log("d - ", filme.transmissoesHoje[1].horario)