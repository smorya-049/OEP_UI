import React from "react";
import Image from "next/image";
import styles from "./startTest.module.css"

const Background=() =>{
    return (
<>
<div>
<Image src="/background2.jpg" id={styles.bg_image} alt="background" layout="fill"></Image>
<div id={styles.text} >
<h2 class={styles.heading}>PLEASE ENTER YOUR DETAILS TO START THE TEST</h2>
<h2 class={styles.heading}>BEST OF LUCK!</h2>
<form id="starttestform" method="post">
    <input type="Email" class={styles.input} name="Email" placeholder="Enter Email" required/>
    <input type="text" class={styles.input} name="Studentname" placeholder="Enter Your Name" required/>
    <input type="text" class={styles.input} name="StudentID" placeholder="Enter Your Student ID" required/>
    <button type="submit" value="starttest" className={styles.button}>START TEST</button>
</form>
<p className={styles.para}>Experiencing access issues?</p> <p>Get <a class={styles.anchor} href="#"> support now</a></p>
</div>
</div>
</>
   
    )
}
export default Background;