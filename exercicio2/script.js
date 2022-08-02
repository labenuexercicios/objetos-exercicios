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

const atores = filme.elenco[0]
console.log(atores)

const ultimoAtor = filme.elenco[3]
console.log(ultimoAtor)

cont todastramissao = filme.transmissoesHoje
console.log(todastramissao)

const horarioBrasil = todastramissao[1]
console.log(horarioBrasil)

const horariotrasmissao = horarioBrasil.horario
console.log(horariotrasmissao)