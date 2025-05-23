'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Background from "@/components/Background";
import Image from "next/image";
import styles from './page.module.css';
import navStyles from '@/components/Navbar.module.css';
import myInterceptor from "@/lib/interceptor";

export default  function Home() {

  const [data, setData]=useState();
  const [loading,setLoading]=useState(true);
  const [token, setToken] = useState(null);


  useEffect(()=>{
    const fetchData =async() =>{
    try {
      const response = await myInterceptor.get("/home");
      setData(response.data);
      setLoading(false);

      // Extract token from headers
      const token = response.headers?.authorization || response.headers?.Authorization;
      if (token) {
        localStorage.setItem('authToken', token);
        setToken(token);
        console.log("Token from headers:", token);
      } else {
        console.warn("Token not found in headers");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

    
    fetchData();
  },[])

  if(loading)return <h1 className={styles.loading}>loading</h1>
  return (
    <main>
      
      <Background className={styles.background} />
      <nav className={navStyles.navbar}>
        <div className={navStyles.logo}>
          <Image src="/logo.jpg" alt="Logo" width={50} height={50} />
          <span className={navStyles.name}>{data?.heading || ""}</span>
        </div>
        <div className={navStyles.navLinks}>
          <Link href="#" className={navStyles.link}>
            About Us
          </Link>
        </div>
      </nav>
      <div className={styles.contentDiv}>
        <h1 className={styles.tagline}>{data?.tagline || ""}</h1>
        <Link href="/login">
          <button className={styles.button}>Schedule a test</button>
        </Link>
        
      </div>
      <footer className={styles.footer}>
        <p>Made by ~ Mr Kulanshu Sharma and Team</p>
      </footer>
    </main>
  );
}
// const handlepost=()=>{
//   const user={name:"SEP"}
//   myInterceptor.post("/secure/adminRegister",user).then(response =>{
//     console.log(response);
//   })
// }

  // useEffect(()=>{
  //   fetch('http://68.183.90.216:8083/home')
  //     .then(response => response.json())
  //     .then(data =>{
  //       setData(data);
  //       setLoading(false);
  //       console.log(data);
  //     });
  // },[])
//
  //   let heading = '';
  //   let tagline = '';
  //   let error = null;
  //   useEffect(() => {
  //     const { fetch: originalFetch } = window;
  //     window.fetch = async (...args) => {
        
  //       console.log(args);
  //       let [resource, config] = args;
  //       if(localStorage.getItem("authToken");
  //       const response = await originalFetch(resource, config);
  //       localStorage.setItem(config.headers["authTokenFromBE"]);
  //       return response;
  //     };
      
  //   },[])
  // useEffect(() => {
  //     const { fetch: originalFetch } = window;
  //     window.fetch = async (...args) => {
  //       let [resource, config] = args;
  //       if(localStorage.getItem("authToken")){
  //         localStorage.getItem("authToken");
  //       }
  //       const response = await originalFetch(resource, config);
  //       localStorage.setItem(config.headers["authTokenFromBE"]);
  //       return response;
  //     };
      
  //   },[])
  
    // try {
    //   // Fetch data from the home API
    //   const res = await fetch("http://68.183.90.216:8083/home");
    //   if (!res.ok) {
    //     throw new Error(`Failed to fetch data, status code: ${res.status}`);
    //   }
    //   const data = await res.json();
    //   heading = data?.data?.heading || "";
    //   tagline = data?.data?.tagline || "";
  
    //   // Retrieve token and store it in a cookie
    //   const token = data?.token || "";
    //   if (token) {
    //     cookies().set('authToken', token, { httpOnly: true, secure: true });
    //   } else {
    //     throw new Error('No token provided in API response.');
    //   }
  
    // } catch (err) {
    //   error = err.message || 'An error occurred while fetching the API.';
    // }