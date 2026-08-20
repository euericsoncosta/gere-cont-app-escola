class Aluno {
  static matriculaGeral = 0;

  constructor(matricula, nome, idade, nota) {
    this.matricula = Aluno.matriculaGeral++;
    this.nome = nome;
    this.idade = idade;
    this.nota = nota;
    // aqui estou incrementando a matricula geral a cada vez que um novo aluno é criado, garantindo que cada aluno tenha uma matrícula única.
  }
}

const alunos = [];

class AlunoController {
  index(req, res) {
    return res.render("alunos", alunos);
  }
}

export default new AlunoController();
