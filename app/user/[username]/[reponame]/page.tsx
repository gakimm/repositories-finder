import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../../../../styles/Readme.module.css'
import Link from 'next/link';
import type { Metadata } from 'next';

type PageProps = {
  params: {
    username: string;
    reponame: string;
  };
};

export const metadata: Metadata = {
  title: 'Repository README',
  description: 'View the README file of a GitHub repository',
};

export default async function ReadmePage({ params }: PageProps) {
  const { username, reponame } = await params;

  const res = await fetch(`https://api.github.com/repos/${username}/${reponame}/readme`, {
    headers: {
      Accept: 'application/vnd.github.v3.raw',
    },
  });

  if (!res.ok) {
    
    return (
      <>
         <div className={styles.container}>
          <nav className={styles.breadcrumbs}>
          <Link href="/" >Home</Link> / <span>User</span> / <Link href={`/user/${username}`}>{username}</Link> / <span>{reponame}</span>
          </nav>
          <div className={styles.error}>README not found for this repository.</div>
        </div>
      </>
    )
  }

  const readmeContent = await res.text();

  return (
    <div className={styles.container}>
       <nav className={styles.breadcrumbs}>
        <Link href="/" >Home</Link> / <span>User</span> / <Link href={`/user/${username}`}>{username}</Link> / <span>{reponame}</span>
      </nav>
      <h1 className={styles.title}>{reponame}</h1>
      <p className={styles.subtitle}>by @{username}</p>
      <div className={styles.readme}>
        <ReactMarkdown>{readmeContent}</ReactMarkdown>
      </div>
    </div>
  );
}
