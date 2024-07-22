import React from "react";
import { RiDraftFill } from "react-icons/ri";
import { GrSchedules } from "react-icons/gr";
import { MdContentPasteSearch } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import styles from "./dashboard.module.css";

export default function dashboard (){
    return(
        <div>
            <div id={styles.drafttestcontent}> <div><RiDraftFill className={styles.logo}/></div>
            Draft Test
            <p className={styles.number}>0</p></div>
            <div id={styles.scheduletestcontent}> <div><GrSchedules className={styles.logo}/></div>
            Scheduled Test
            <p className={styles.number}>0</p></div><div id={styles.clear}></div>
            <div id={styles.resultawaitedcontent}> <div><MdContentPasteSearch className={styles.logo}/></div>
            Result Awaited
            <p className={styles.number}>0</p></div><div id={styles.clear}></div>
            <div id={styles.testcompletedcontent}> <div><SiTestcafe className={styles.logo}/></div>
            Test Completed
            <p className={styles.number}>0</p></div><div id={styles.clear}></div>
            <div id={styles.livetestcontent}> <div><MdLiveTv className={styles.logo}/></div>
            Live Test
            <p className={styles.number}>0</p></div><div id={styles.clear}></div>
            <div id={styles.admininfocontent}> <div><FaUser class={styles.logo}/></div>
            Admin Information
            <div id={styles.info}><br></br><br></br>
                <div> Name: </div><br></br>
            <div> Email: </div><br></br>
            <div> Contact Number: </div></div></div><div id={styles.clear}></div>

        </div>
    )
}