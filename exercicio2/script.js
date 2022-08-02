// EXERCÍCIO 2

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

console.log('Qual o código para imprimir o nome do primeiro ator?', filme.elenco[0]);
console.log('Qual o código para imprimir o nome do último ator?', filme.elenco[3]);
console.log('Qual o código para exibir o array com todas as transmissões de hoje?', filme.transmissoesHoje);
console.log('Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?', filme.transmissoesHoje[1].horario);