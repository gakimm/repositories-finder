import styles from '../../../styles/User.module.css'
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface UserPageProps {
  params: {
    username: string;
  };
}

interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
  }
  

export default async function UserPage({ params }: UserPageProps) {
  const { username } = await params;

  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) {
    return (
      <>
       <div className={styles.userPage}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link> / <span>User</span> / <span>{username}</span>
        </nav>
        <div className={styles.errormessage}>
          User not found or error fetching repos
        </div>
        </div>
      </>
    );
  }
  

  const repos = await res.json();

  return (
    <div className={styles.userPage}>
    <nav className={styles.breadcrumbs}>
        <Link href="/" >Home</Link> / <span>User</span> / <span>{username}</span>
    </nav>

     <h1>
        Repositories of {username}
        <span className={styles.repoCount}> ({repos.length})</span>
      </h1>
      <ul className={styles.repolist}>
        {repos.map((repo: GitHubRepo)  =>  (
          <li key={repo.id} className={styles.repoitem}>
            <div className={styles.repoHeader}>
              <Link href={`/user/${username}/${repo.name}`} title='View README'>
                {repo.name}
              </Link>
              
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                title="View on GitHub"
              >
                <ArrowTopRightOnSquareIcon className={styles.icon} />
                <span className={styles.tooltip}>Go to GitHub Profile</span>
              </a>
            </div>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
