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
// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?
const primeiroAtorAtriz = filme.elenco[0]
console.log("O nome do primeiro ator/atriz e: ", primeiroAtorAtriz)
// b) Qual o código para imprimir o nome do **último** ator/atriz?
const ultimoAtorAtriz = filme.elenco[3]
console.log("O nome do ultimo ator/atriz e: ", ultimoAtorAtriz)

// c) Qual o código para exibir o array com **todas** as transmissões de hoje?
const todasTransmissoes = filme.transmissoesHoje
console.log("Todas as transmissões que foram exibidas: ",todasTransmissoes)
// d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?
const canalBrasil = filme.transmissoesHoje[1]
console.log("O horario do filme do canal brasil e: ",canalBrasil)
