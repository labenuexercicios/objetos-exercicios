const estudante = {
    nome: "Pedro",
    sobrenome: "Simoes",
    numeroDaMatricula: 22023002,
    notasDoSemestre: [9.5, 10, 9, 10]
}

estudante.modulo = "Módulo 2"

console.log("Nome: ", estudante.nome, 
    "notas: ", estudante.notasDoSemestre[1],
    "módulo: ", estudante.modulo)

const novoEstudante = {...estudante}

novoEstudante.nome = "Astrodev"
novoEstudante.notasDoSemestre.push(9)
novoEstudante.modulo = "Módulo 3"

console.log(estudante, novoEstudante)