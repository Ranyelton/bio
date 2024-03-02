// Importa o componente Head do Next.js para modificar o cabeçalho da página
import Head from 'next/head';
// Importa o componente de estilos do Next.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bem-vindo ao Next.js!</title>
        <meta name="description" content="Página de boas-vindas do Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Comece editando{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {/* Aqui você pode adicionar mais conteúdo, como links para suas páginas, imagens, etc. */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
