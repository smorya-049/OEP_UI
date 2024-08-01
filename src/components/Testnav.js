import Link from 'next/link';
import { useState } from 'react';
import styles from "./Testnav.css";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <Link href="/view-edit">
          <button>Admin Panel</button>
        </Link>
        <Link href="/">
          <button>Add New Question</button>
        </Link>
        <Link href="/updated">
          <button>View/Edit</button>
        </Link>
        <Link href="/generate-result">
          <button>Generate Result</button>
        </Link>
      </div>
      <div className={styles.icons}>
        <Link href="/notifications">
          <button className={styles.bell}>🔔</button>
        </Link>
        <button className={styles.dots} onClick={toggleDropdown}>
          ⋮
        </button>
        {dropdownVisible && (
          <div className={styles.dropdown}>
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
