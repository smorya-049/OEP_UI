'use client'
import { GrFormView } from "react-icons/gr";
import styles from "./securitysettings.module.css";
import Script from "next/script";
import React from "react";


export default function securitysettings(){
    function Myfunction() {
        var x = document.getElementById("oldpassword");
         if (x.type === "password") {
           x.type = "text";
         } else {
           x.type = "password";
          }} 
    function Myfunction1() {
        var x = document.getElementById("newpassword");
         if (x.type === "password") {
               x.type = "text";
         } else {
            x.type = "password";
          }} 
    function Myfunction2() {
        var x = document.getElementById("confirmpassword");
         if (x.type === "password") {
               x.type = "text";
         } else {
               x.type = "password";
        }} 
        
    return(
        <div className="mt-20">
            <form><div className={styles.password}>Old Password : <input id="oldpassword" type="password" className={styles.pass}></input><button onMouseOver={Myfunction}  className={styles.button} ><GrFormView/>
            </button></div></form>
            <form > <div className={styles.password}>New Password: <input id="newpassword" type="password" className={styles.pass}></input><button onMouseOver={Myfunction1} className={styles.button2}><GrFormView/>
            </button></div></form>
            <form ><div className={styles.password}>Confirm Password:<input id="confirmpassword" type="password" className={styles.pass1}></input><button onMouseOver={Myfunction2} className={styles.button3} >
                <GrFormView/>
            </button></div></form>
            <form>
            <input type="submit" value="CHANGE PASSWORD" className={styles.confirm}/><button></button></form>
        </div>
    )

}