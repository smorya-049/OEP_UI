import React from "react";
import styles from "./SignUpForm.module.css";
import { FaPhoneAlt } from 'react-icons/fa';

const SignUpForm=() =>{
    return(
    <div className={styles.SignUpPage}>
       <form autoComplete="off" className="form">
        <p className={styles.p1}>UNLOCK THE TEST ZONE!</p>
        <p className={styles.p2}>LOG IN NOW TO START.</p>
        <label htmlFor="username" >
        </label>
        <input type="text" className={styles.input} placeholder="Username"/>
        <label htmlFor="email">
        </label>
        <input type="email" className={styles.input} placeholder="E-mail" />
        <label htmlFor="contact" >
        </label>
        <input type="number" className={styles.input} placeholder="Contact No."/>
        <label htmlFor="organisation" >
        </label>
        <input type="text" className={styles.input} placeholder="Organisation Name"/>
        <button className={styles.button}>Register</button>
       </form>
       <div className={styles.horizontal_line_container}>
        <hr className={styles.horizontal_line} />
        <span className={styles.text_between}>OR</span>
        <hr className={styles.horizontal_line} />
       </div>
       <p className={styles.p3}><FaPhoneAlt size={15} style={{ marginRight: '10px' }} />{/* Adjust size and style as needed */}
       <a className={styles.contactus}>Contact Us</a> to generate key</p>
    </div>
    )
}

export default SignUpForm;