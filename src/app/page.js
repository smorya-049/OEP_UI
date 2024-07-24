
'use client'
import Background from "@/components/Background";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from './page.module.css';


export default function Home() {

  return (
<main>
  <Background className={styles.background} ></Background>
  <Navbar/>
  {/* main text */}
  <div className={styles.contentDiv}>
          <h1 className={styles.tagline}>SMART EVALUATION PORTAL</h1>
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
}

