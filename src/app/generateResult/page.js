import styles from "./Result.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
     // <h2>Generate Result !!</h2> 
      <div className={styles.div}>
        <form className={styles.form} id="Generateresult"> 
        <label for="ResltOutDt" className={styles.label} > Result Out Date</label>
        <input type="Date" id="ResltOutDt" className={styles.input} /> <br/>
        <label for="ResltOutTym" className={styles.label} > Result Out Date</label>
        <input type="Time" id="ResltOutTym" className={styles.input} /> <br/>
        <label for="ResultOnMail" className={styles.label} > Send result on Email to the Candidate?</label>
        <input type="radio" id="Yes" className={styles.inputradio} name="ResultOnMail"/>
        <label for="Yes" className={styles.labelradio} >Yes</label>
        <input type="radio" id="No" className={styles.inputradio} name="ResultOnMail"/>
        <label for="No" className={styles.labelradio} >No</label><br/>
        <label for="ResultType" className={styles.label}>Result Type</label>
        <select form="Generateresult" name="ResultType" id="ResultType" className={styles.select}>
          <option value="Percentage">Percentage</option>
          <option value="Percentile">Percentile</option>
          <option value="Graph">Graph</option>
        </select><br/>
        <button type="submit" value="GenerateRslt" className={styles.button}>Generate Button</button>
        </form>
      </div>
    </main>
  );
}
