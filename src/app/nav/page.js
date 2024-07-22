import React from "react"
import {AiOutlineSearch} from "react-icons/ai"
import { AiOutlineDashboard } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GrShieldSecurity } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdPower } from "react-icons/io";
import styles from "./nav.module.css"

export default function nav(){
    return (
    <div>
      <div className={styles.header}>
        <div><button id={styles.button1}> logo and name </button></div>
      </div>
      <div><IoMdPower className="float-right text-3xl text-gray-900 my-9 mx-3"/></div>
      <div><IoIosNotifications className="float-right text-3xl text-gray-900 my-9 mx-3"/></div>
      <div><IoIosSettings className="float-right text-3xl text-gray-900 my-9 mx-3"/></div>
      <div className={styles.navbar}>
     <div className="flex items-center mb-3"> <div className="py-7 flex justify-start items-center pl-4 p-3 rounded-md group cursor-pointer">< FaUser className="text-2xl text-gray-400  "/></div>
      <div><h3 className= " text-base text-gray-400 font-semibold"> User name</h3>
      <h1 className=" px-0.5 text-gray-400 text-xs "> Administrator </h1></div></div>
      
      <form className='w-[200px] relative'>
            <div className="relative">
                <input type="search" placeholder=" Search " className="w-full p-1 rounded-full bg-slate-500 mt-25" />
                <button className="absolute right-0.5 top-1/2 -translate-y-1/2 p-1.5 bg-slate-700 rounded-full mt-0">
                    <AiOutlineSearch/>
                </button>
            </div>
        </form>
        <div className="my-4 border-b border-grey-100 pb-4">
    
        <a href="./dashboard" target="_blank"><div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-grey-300 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto "><AiOutlineDashboard className="text-2xl text-gray-400 group-hover:text-white"/>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold"> Dashboard </h3></div></a>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-grey-300 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"><FiCheckCircle className="text-2xl text-gray-400 group-hover:text-white"/>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold"> Exam Creation </h3></div>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-grey-300 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"><IoNewspaperOutline className="text-2xl text-gray-400 group-hover:text-white"/>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold"> Test Management </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-grey-300 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">< GrShieldSecurity className="text-2xl text-gray-400 group-hover:text-white"/>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold"> Security Settings </h3>
        </div>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-grey-300 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">< TbReportAnalytics className="text-2xl text-gray-400 group-hover:text-white"/>
          <h3 className="text-base text-gray-400 group-hover:text-white font-semibold"> Report and Analysis </h3>
        </div>
        <form className='w-[200px]'>
            <div className="relative py-14">
                <input type="submit" value="Support" className="w-full p-1 rounded-md bg-slate-500 text-gray mt-9" />
                <button className="absolute left-11 top-1/2 -translate-y-1/2 p-1 bg-slate-500 rounded-full font-semibold mt-4">
                    <MdSupportAgent/>
                </button>
            </div>
        </form>
        </div>
        </div>
        
        </div>
        
    )
}