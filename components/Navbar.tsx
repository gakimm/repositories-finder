'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from '../styles/Navbar.module.css';
import { useSearch } from '../lib/SearchContext'; 
import Link from 'next/link';

export default function Navbar() {
    const { username, setUsername } = useSearch(); 
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim() === '') {
            router.push('/');
            return;
        };
        router.push(`/user/${username}`);
        setSidebarOpen(false); 
    };

    return (
        <>
            <nav className={styles.navbar}>
                 <div className={styles.mobileOnly}>
                    <Bars3Icon className={styles.hamburgerIcon} onClick={() => setSidebarOpen(true)} />
                </div>
                <div className={styles.brand}>
                    <Link href="/">Repositories Finder</Link>
                </div>

                <div className={styles.desktopOnly}>
                    <form onSubmit={handleSearch} className={styles.searchForm}>
                        <input
                            type="text"
                            placeholder="Search GitHub username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.searchInput}
                        />
                        <button type="submit" className={styles.searchButton}>Search</button>
                    </form>

                    <div className={styles.links}>
                        <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
                        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
                    </div>
                </div>
            </nav>

            {/* responsive Sidebar */}
            <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <XMarkIcon className={styles.closeIcon} onClick={() => setSidebarOpen(false)} />
                    <h3>Menu</h3>
                </div>

                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <input
                        type="text"
                        placeholder="Search GitHub username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>Search</button>
                </form>

                <div className={styles.links}>
                    <a href={"/"} className={pathname === '/' ? styles.active : ''} onClick={() => setSidebarOpen(false)}>Home</a>
                    <a href="/about" className={pathname === '/about' ? styles.active : ''} onClick={() => setSidebarOpen(false)}>About</a>
                </div>

            </div>
        </>
    );
}
