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
}

// respostas aqui ⬇️
// a) Qual o código para imprimir o nome do primeiro ator/atriz?
console.log(filme.elenco[0]);
// b) Qual o código para imprimir o nome do último ator/atriz?
console.log(filme.elenco[filme.elenco.length-1]);
// c) Qual o código para exibir o array com todas as transmissões de hoje?
console.log(filme.transmissoesHoje[0],filme.transmissoesHoje[1],filme.transmissoesHoje[2]);
// d) Qual o código para exibir o horário de transmissão do filme no Canal Brasil?
console.log(`Qual o código para exibir o horário de transmissão do filme no Canal Brasil? ${filme.transmissoesHoje[1].horario}`);
// Dica: construa os caminhos para chegar em cada valor aos poucos, sempre verificando o que é exibido no console.