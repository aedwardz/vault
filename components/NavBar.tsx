import Link from 'next/link';
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Finance
      </Link>
      <div className={styles.links}>
        <Link href="/dashboard" className={styles.link}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
