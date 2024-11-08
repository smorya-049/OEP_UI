import React from "react";
import styles from "./instructions.module.css";
import { Input } from "postcss";

export default function Home() {
  return (
    <main>
        <header class={styles.head}>INSTRUCTIONS</header>
        <div class={styles.div}> Please read the following instructions carefully before starting this examination.</div>
        <p class={styles.text}>1.Click on the <b>Start Exam</b> to begin the examination.</p>
        <p class={styles.text}>2.The timer will be displayed on the top right corner of the screen from where you can monitor time you have left to complete the exam.</p>
        <p class={styles.text}>3.Click on <b>Next Button</b> to move to the next question.</p>
        <p class={styles.text}>4.The color coded diagram on the right side of the screen shows the status of the questions.</p> 
        <p class={styles.text}><span id={styles.red} className={styles.span}>   Red   </span> Not Answered / Not Attempted Questions.</p>
        <p class={styles.text}><span id={styles.green} class={styles.span}> Green </span>  Answered / Attempted Questions.</p>
        <p class={styles.text}><span id={styles.yellow} class={styles.span}> Yellow </span> Not Visited.</p>
        <p class={styles.text}>5.All the answered questions will be calculated for final score.</p>
        <p class={styles.text}>6.Do not click End Exam button before completing the exam. In case you click End Exam Button you will not be permitted to re enter the exam.</p>
        <form>
        <p class={styles.check}><input type="checkbox" id={styles.check} required/> I have read and understood all the instructions given above.</p>
        <button type="submit" value="Start_Exam" className={styles.btn}> Start </button>
        </form>
    </main>
  );
}