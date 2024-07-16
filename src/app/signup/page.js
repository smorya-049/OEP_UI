
'use client'
import Background_login from "@/components/Background_login";
import { useRouter } from "next/navigation";
import Image from "next/image";

//import LogInForm from "@/components/LogInForm";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
    const route =useRouter();
  const navigate =(name)=>{
    route.push(name);
  }
  return (
<main>
  <Background_login></Background_login>
  {/* main text */}
  {/*<LogInForm />*/}
  <SignUpForm />
</main> 
  );
}

