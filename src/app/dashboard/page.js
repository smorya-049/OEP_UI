import React from "react";
import { RiDraftFill } from "react-icons/ri";
import { GrSchedules } from "react-icons/gr";
import { MdContentPasteSearch } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { MdLiveTv } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function dashboard (){
    return(
        <div>
            <div id="drafttestcontent"> <div><RiDraftFill class="logo"/></div>
            Draft Test
            <p class="number">0</p></div>
            <div id="scheduletestcontent"> <div><GrSchedules class="logo"/></div>
            Scheduled Test
            <p class="number">0</p></div><div id="clear"></div>
            <div id="resultawaitedcontent"> <div><MdContentPasteSearch class="logo"/></div>
            Result Awaited
            <p class="number">0</p></div><div id="clear"></div>
            <div id="testcompletedcontent"> <div><SiTestcafe class="logo"/></div>
            Test Completed
            <p class="number">0</p></div><div id="clear"></div>
            <div id="livetestcontent"> <div><MdLiveTv class="logo"/></div>
            Live Test
            <p class="number">0</p></div><div id="clear"></div>
            <div id="admininfocontent"> <div><FaUser class="logo"/></div>
            Admin Information
            <div id="info"><br></br><br></br>
                <div> Name: </div><br></br>
            <div> Email: </div><br></br>
            <div> Contact Number: </div></div></div><div id="clear"></div>

        </div>
    )
}