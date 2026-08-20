class HomeController {
  index(req, res) {
    return res.render("home", {
      titulo: "Sistema Escolar",
      turmas: [
        { nome: "Informática 1", alunos: 42 },
        { nome: "Informática 2", alunos: 38 },
        { nome: "Informática 3", alunos: 45 },
        { nome: "Informática 4", alunos: 40 },
      ],
    });
  }
}
export default new HomeController();
