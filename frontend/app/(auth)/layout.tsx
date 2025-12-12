"use client"
import { getCurrentUser } from "@/services/users.service";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
    useEffect(() => {
      const validateSession = async () => {
        const user = await getCurrentUser()
        if(user?.email) {
          redirect("/home") 
        } 
      }
      validateSession()
    })

  return (
    <div className="flex justify-center items-center h-screen">    
      {children}
    </div>
  );
}
