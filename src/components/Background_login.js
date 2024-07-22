import React from "react";
import Image from "next/image";
import styles from "./Background_login.module.css"
const Background_sign=() =>{
    return (
      <div className={styles.container}>
          {/*div to set the iamge  */}
      <div className={styles.backgroundDiv}>
      <Image src="/background_sign.png" className={styles.background} alt="background" layout="fill"></Image>
      </div>
      {/* balck part */}
      <div className={styles.black}>      </div>
    </div>
    )
}
export default Background_sign;