import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { LinhaLivro } from '../componentes/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const baseURL: string = "http://localhost:3000/api/livros";


const obterLivros = async (): Promise<Livro[]> => {
    const response = await fetch(baseURL);
    return response.json();
};

const excluirLivro = async (codigo: number): Promise<boolean> => {
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return response.ok;
};

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    useEffect(() => {
        if (!carregado) {
            obterLivros().then((data) => {
                setLivros(data);
                setCarregado(true);
            });
        }
    }, [carregado]);

    const excluir = (codigo: number) => {
        excluirLivro(codigo).then(() => setCarregado(false));
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next - Lista de Livros</title>
                <meta name="description" content="Lista de livros da loja Next.js" />
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Lista de Livros</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro
                                key={livro.codigo}
                                livro={livro}
                                excluir={() => excluir(livro.codigo)}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;
