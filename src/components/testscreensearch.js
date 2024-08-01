
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from './testscreensearch.module.css';
import { CiMenuKebab } from "react-icons/ci";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
        <span className={styles.name}>Test Name</span>
        </div>
        <div className={styles.navmenu} onClick={toggleMenu}>
        <CiMenuKebab size={30} />
        </div>
        {menuOpen && (
        <div className={styles.menu_options}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Total Students</li>
            <li>Present Students</li>
            <li>Absent Students</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

  

