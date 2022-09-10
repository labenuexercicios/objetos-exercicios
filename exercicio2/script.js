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
// Imprimindo o primeiro ator, e destacando em aspas simples.
console.log('Nome do primeiro ator:',filme.elenco[0])

// Imprimindo o ultimo ator, e destacando em aspas simples.
console.log('Nome do último ator:', filme.elenco[3])

// Exibindo todas as transmissões.

console.log(filme.transmissoesHoje)
// Exibindo todos os horarios.

filme.includes = ("canal")