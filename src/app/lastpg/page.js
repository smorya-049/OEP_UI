import React from "react";
import Image from "next/image";
import styles from "./lastpg.module.css"

const Background=() =>{
    return (
<>
<div>
<Image src="/lastpg_bg.png" id={styles.bg_image} alt="background" layout="fill"></Image>
<div id={styles.text} >
<Image src="/lastpg_fg.png"  alt="background" height={250} width={250} id={styles.layout}></Image>
<h1>you did it!</h1>
<h2>Thanks for taking the test </h2>
<p>We're cruching the numbers, and results will be ready soon.</p>
<p id={styles.help}>Need assistance ? <a href="#">We are here to help!</a></p>
</div>
</div>
</>
   
    )
}
export default Background;