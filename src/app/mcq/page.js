import QuesNav from "@/components/QuesNav";
import styles from "./mcq.module.css";

export default function mcq(){
    return(
        <div>
            <div><QuesNav/>
            </div>
            <div className="float-right pt-7 text-4xl mr-20 text-red-600 font-semibold">00:00</div>
            <div className="ml-64 pt-20"><h1>QUESTION:1 (Multiple Choice Question)</h1><br>
            </br><br></br>
            <form>
            <b>Distinguish between Stock and Flow. </b><br></br><br></br>
            <input type="radio" value="a" name="answer"/>  Option-1<br></br>
            <input type="radio" value="b" name="answer"/>  Option-2<br></br>
            <input type="radio" value="c" name="answer"/>  Option-3<br></br>
            <input type="radio" value="d" name="answer"/>  Option-4<br></br>
            <br></br><br></br><br></br>
            <div><button className={styles.back}>Back</button>
            <button className={styles.next}>Next</button></div>
            </form></div>
        </div>
    )
}
