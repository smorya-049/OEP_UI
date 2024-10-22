
// 'use client'
import React from "react";
import Link from 'next/link';
import Background from "@/components/Background";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from './page.module.css';
import navStyles from '@/components/Navbar.module.css';
import { fetchExternalImage } from "next/dist/server/image-optimizer";

// fetching data from api using async function
export default async function Home(){
  let heading ='';
  let tagline= '';
  let error =null;
  try{
    //fetch data from api
    const res = await fetch("http://68.183.90.216:8083/home");
    if (!res.ok){
      throw new Error(`failed to fetch data,status code: ${re.status}`);  
    }
    const data = await res.json();
    heading = data?.data?.heading || "";
    tagline = data?.data?.tagline || "";
    // Handle case where these fields are missing
    if (!heading || !tagline) {
      throw new Error('API response does not contain valid heading or tagline.');
    }
  }
  catch (err) {
    // Catch any errors and set error message
    error = err.message || 'An error occurred while fetching the API.';
  }
  return (
    <main>
      <Background className={styles.background} ></Background>
      <nav className={navStyles.navbar}>
      <div className={navStyles.logo}>
        <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
        <span className={navStyles.name}>{heading}</span>
      </div>
      <div className={navStyles.navLinks}>
        <Link href="#" className={navStyles.link}>
          About Us
        </Link>
      </div>
    </nav>
      {/* main text */}
      <div className={styles.contentDiv}>
              <h1 className={styles.tagline}>{tagline} </h1>
              <a href="./login" target="">
             <button className={styles.button}>Schedule a test</button> 
             </a>          
      </div>
      {/* footer */}
    <footer className={styles.footer}>
      <p>
      Made by ~ Mr Kulanshu Sharma and Team </p>
      </footer>
    </main> 
      );
};
// const Navbar = () => {
//   return (
//     <nav className={navStyles.navbar}>
//       <div className={navStyles.logo}>
//         <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
//         <span className={navStyles.name}>My Website</span>
//       </div>
//       <div className={navStyles.navLinks}>
//         <Link href="#" className={navStyles.link}>
//           About Us
//         </Link>
//       </div>
//     </nav>
//   );
// };








