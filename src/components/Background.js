import React from "react";
import Image from "next/image";
import styles from "./Background.module.css"
const Background=() =>{
    return (
      <div className={styles.container}>
          {/*div to set the iamge  */}
      <div className={styles.backgroundDiv}>
      <Image src="/background.jpg" className={styles.background} alt="background" layout="fill"></Image>
      </div>
      {/* balck part */}
      <div className={styles.black}>      </div>
    </div>
    )
}
export default Background;