let alunos = [
{
    Nome: "Ingrid",
    Idade: 23,
    Curso: "Front-End",
    Nota: 10
},
{
    Nome: "João",
    Idade: 19,
    Curso: "Front-End",
    Nota: 7
},
{
    Nome: "Maria",
    Idade: 22,
    Curso: "Back-End",
    Nota: 6
}
];

for (let i = 0; i < alunos.length; i++) {
    alert(
        "Nome: " + alunos[i].Nome +
        "\nCurso: " + alunos[i].Curso +
        "\nNota: " + alunos[i].Nota
    )
   
}

for (let i = 0; i < alunos.length; i++) {
    if (alunos [i].Nota >= 7) {
        alert(alunos[i].Nome + " está APROVADO");
    } else {
        alert(alunos[i].Nome + " está REPROVADO");
    }
}