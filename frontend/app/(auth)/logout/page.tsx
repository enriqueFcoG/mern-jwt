"use client"
import { logout } from "@/actions/auth/logout"
import { useEffect } from "react"
export default function Logout() {
    // here we only need to call the logout endpoint to redirect to login again
    useEffect(() => {
        logout()
    }, [])
}