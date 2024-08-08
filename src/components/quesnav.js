import React from "react";
import styles from "./quesnav.module.css";
import { FaUser } from "react-icons/fa";

export default function QuesNav(){
    return(
        <div>
        <div className={styles.sidebar}>
     <div className="flex items-center mb-3"> <div className="py-7 flex justify-start items-center pl-4 p-3 rounded-md group cursor-pointer">< FaUser className="text-3xl text-black  "/></div>
      <div><h3 className= "text-base text-black "> Student Name</h3></div></div>
      <div className={styles.container}>
            <button className={styles.done}>1 </button>
            <button className={styles.done}>2 </button>
            <button className={styles.done}>3 </button>
            <button className={styles.done}>4 </button><br></br>
            <button className={styles.done}>5 </button>
            <button className={styles.done}>6 </button>
            <button className={styles.draft}>7 </button>
            <button className={styles.draft}>8 </button><br></br>
            <button className={styles.draft}>9 </button>
            <button className={styles.undone}>10 </button>
            <button className={styles.undone}>11 </button>
      </div>
        </div></div>
    )
}