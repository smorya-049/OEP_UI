
'use client'
import Background from "@/components/Background";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
    const route =useRouter();
  const navigate =(name)=>{
    route.push(name);
  }
  return (
<main>
  <Background className={styles.background} ></Background>
  <Navbar/>
  {/* main text */}
  <div className={styles.contentDiv}>
          <h1 className={styles.tagline}>SMART EVALUATION PORTAL</h1>
          <button onClick={navigate("#")} className={styles.button}>Schedule a test</button>          
  </div>
  {/* footer */}
<footer className={styles.footer}>
  <p>
  Made by ~ Mr Kulanshu Sharma and Team </p>
  </footer>
</main> 
  );
}

