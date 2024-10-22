import { Livro } from "../modelo/Livro";

// b) Definir a variável livros, como Array<Livro>
const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Livro 1",
    resumo: "Resumo do Livro 1",
    autores: ["Autor A", "Autor B"]
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Livro 2",
    resumo: "Resumo do Livro 2",
    autores: ["Autor C"]
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Livro 3",
    resumo: "Resumo do Livro 3",
    autores: ["Autor D", "Autor E"]
  }
];

// c) Criar a classe ControleLivro
export class ControleLivro {
  // d) Implementar o método obterLivros
  obterLivros(): Array<Livro> {
    return livros;
  }

  // e) Implementar o método incluir
  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  // f) Implementar o método excluir
  excluir(codigo: number): void {
    const index = livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}