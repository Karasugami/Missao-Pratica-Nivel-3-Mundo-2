import React, { useEffect, useState } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

// b) Definir o componente auxiliar LinhaLivro
const LinhaLivro = ({ livro, excluir }) => {
  // c) Definir o atributo nomeEditora
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  // d-f) Retorno da linha de tabela com os valores do livro
  return (
    <tr>
      <td>
        {livro.titulo}
        <button className="btn btn-danger btn-sm ml-2" onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

// g) Definir o componente LivroLista
const LivroLista = () => {
  // h) Definir as propriedades livros e carregado
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // i) Utilizar o Hook useEffect
  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  // j) Método excluir
  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  // k-l) Retorno do componente com a tabela
  return (
    <main>
      <h1>Lista de Livros</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;