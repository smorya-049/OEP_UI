
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
        <span className={styles.name}>My Website</span>
      </div>
      <div className={styles.navLinks}>
        <Link href="#" className={styles.link}>
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

  

