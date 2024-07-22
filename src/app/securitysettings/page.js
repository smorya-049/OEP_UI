'use client'
import { GrFormView } from "react-icons/gr";
import styles from "./securitysettings.module.css";
import Script from "next/script";
import React from "react";

const Myfunction = ()=>
    <Script id="show_password">
      {function Myfunction() {
         var x = document.getElementById("Input");
          if (typeof(x) === "password") {
            typeof(x) == "text";
          } else {
            typeof(x) == "password";
           }}
      }</Script>

export default function securitysettings(){
    
    return(
        <div className="mt-20">
            <form><div className={styles.password}>Old Password : <input type="password" className={styles.pass}></input><button className={styles.button}><GrFormView/>
            </button></div></form>
            <form > <div className={styles.password}>New Password: <input type="password" className={styles.pass}></input><button className={styles.button2}><GrFormView/>
            </button></div></form>
            <form ><div className={styles.password}>Confirm Password:<input id="Input" type="password" className={styles.pass1}></input><button onClick={Myfunction} className={styles.button3} >
                <GrFormView/>
            </button></div></form>
            <form>
            <input type="submit" value="CHANGE PASSWORD" className={styles.confirm}/><button></button></form>
        </div>
    )

}