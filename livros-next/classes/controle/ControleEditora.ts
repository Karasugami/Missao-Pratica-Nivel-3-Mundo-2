import { Editora } from "../modelo/Editora";

// b) Definir a variável editoras, como Array<Editora>
const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Editora A" },
  { codEditora: 2, nome: "Editora B" },
  { codEditora: 3, nome: "Editora C" }
];

// c) Criar a classe ControleEditora
export class ControleEditora {
  // d) Implementar o método getEditoras
  getEditoras(): Array<Editora> {
    return editoras;
  }

  // e) Implementar o método getNomeEditora
  getNomeEditora(codEditora: number): string {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : "Editora não encontrada";
  }
}