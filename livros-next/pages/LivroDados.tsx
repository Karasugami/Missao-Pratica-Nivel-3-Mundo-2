import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const controleEditora = new ControleEditora();
const baseURL: string = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro): Promise<boolean> => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
    });
    return response.ok;
};

const LivroDados: NextPage = () => {
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const [autores, setAutores] = useState<string>('');
    const [codEditora, setCodEditora] = useState<number>(opcoes[0].value);
    const router = useRouter();

    const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const novoLivro: Livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora,
        };

        incluirLivro(novoLivro).then(() => {
            router.push('/LivroLista');
        });
    };

    return (
        <div className={styles.container}>
            <head>
                <title>Loja Next - Adicionar Livro</title>
                <meta name="description" content="Adicione novos livros à loja Next.js" />
            </head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Adicionar Livro</h1>
                <form onSubmit={incluir}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="resumo" className="form-label">Resumo</label>
                        <textarea
                            className="form-control"
                            id="resumo"
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
                        <textarea
                            className="form-control"
                            id="autores"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="editora" className="form-label">Editora</label>
                        <select
                            className="form-select"
                            id="editora"
                            value={codEditora}
                            onChange={tratarCombo}
                        >
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;
