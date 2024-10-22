import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Menu } from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Loja Next</title>
                <meta name="description" content="Loja de Livros usando Next.js" />
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Página Inicial</h1>
            </main>
        </div>
    );
};

export default Home;