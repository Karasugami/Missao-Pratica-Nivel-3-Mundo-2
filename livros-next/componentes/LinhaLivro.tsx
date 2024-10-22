import React from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

// a) Instância de ControleEditora
const controleEditora = new ControleEditora();

// b) Interface para os props do componente
interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

// c) Definindo o componente exportável
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.autores.join(', ')}</td>
            <td>
                <button className="btn btn-danger" onClick={excluir}>Excluir</button>
            </td>
        </tr>
    );
};