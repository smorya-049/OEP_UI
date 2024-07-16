'use client'
import { GrFormView } from "react-icons/gr";
import { GrFormViewHide } from "react-icons/gr";
import { useState } from "react";

export default function nav(){
    const ShowPassword=()=>{
        const [showPassword, setShowPassword]=useState(false);
    }
    return(
        <div>
            <div>Old Password: <form class="password"><input type="password" class="pass"></input></form></div>
            <div>New Password: <form class="password"><input type="password" class="pass"></input><button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-slate-700 rounded-full mt-0">
                    <GrFormView/>
                </button></form></div>
            <div>Confirm Password: <form class="password"><input type="password" class="pass"></input><button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-slate-700 rounded-full mt-0">
                    <GrFormView/>
                </button></form></div>
        </div>
    )

}