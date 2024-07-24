import React from "react";
import styles from "./examcreation.module.css";

export default function Home() {
  return (
    <main>
        <form action="/action_page.php" className={styles.form} align="center">
        <label className={styles.label}>Exam Name/ Subject Name </label> 
        <input type="text" id="ExamName" className={styles.input}/><br/>
        <label className={styles.label}>Maximum Marks</label>   
        <input type="number" id="MaxMark" className={styles.input} /><br/>
        <label className={styles.label}>Approx. Number of Questions</label>  
        <input type="text" id="NoofQues" className={styles.input}/><br/>
        <label className={styles.label}>Maximum Number of Students</label>  
        <input type="text" id="NoofStud" className={styles.input}/><br/>
        <label className={styles.label}>Expected Date of Exam</label>  
        <input type="date" id="date" className={styles.input}/><br/>
        <label className={styles.label}>Expected Time of Exam</label> 
        <input type="time" id="time" className={styles.input}/><br/>
        <button type="submit" value="RequestKey" className={styles.btn}> Request KEY </button>
        </form>

        <footer className={styles.foot}>
          <p>Copyright © |All rights reserved.</p>
        </footer>
        
    </main>
  );
}