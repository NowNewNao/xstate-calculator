import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Calculator } from './components/Calculator';

const buttonContents = [
    'CE',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
    '%',
];

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Xstaet Calculator</title>
                <meta
                    name="description"
                    content="Calculator made by Xstate, React, and TypeScript"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Jura:wght@300&family=Press+Start+2P&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Calculator</h1>
                <p className={styles.description}>
                    made by Xstate, React, and TypeScript
                </p>
                <Calculator buttons={buttonContents} />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/NowNewNao/xstate-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className={styles.logo}>
                        <Image
                            src="/GitHub.png"
                            alt="GitHub Logo"
                            width={24}
                            height={24}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
