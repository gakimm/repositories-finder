import styles from "../../styles/Home.module.css";
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>GitHub Repositories Finder | About</title>
        <meta name="description" content="About Repositories Finder" />
      </Head>

      <main className={styles.main}>
        <h1>
          <span className={styles.textBlue}>Repositories </span>
          <span className={styles.textYellow}>Finder</span>
        </h1>
        <p className={styles.description}>
          This little project was crafted as part of the Frontend Test for D3Labs.  
          I had a lot of fun building it, and I’m genuinely excited about the opportunity to join the awesome team at D3Labs.  
          I hope you enjoy checking it out as much as I enjoyed making it!
        </p>
        <p className={styles.description}>
          made with heart by <a className={styles.textBlue} href="https://kimmycode.online" target="_blank" rel="noopener noreferrer">Muhammad Lukmanulhakim</a>
        </p>
      </main>
    </>
  );
}
