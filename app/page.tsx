import styles from "../styles/Home.module.css";
import Head from 'next/head';

export default function Home() {;
  return (
    <>
      <Head>
        <title>GitHub Repositories Finder</title>
        <meta name="description" content="Search GitHub users and view their projects" />
      </Head>

      <main className={styles.main}>
        <h1><span className={styles.textBlue}>Welcome to</span> <span className={styles.textYellow}>Repositories Finder</span></h1>
        <p className={styles.description}>Search for GitHub users to view their projects</p>
      </main>
    </>
  );
}
