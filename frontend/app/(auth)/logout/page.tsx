"use client"
import { logout } from "@/actions/auth/logout"
import { useEffect } from "react"
export default function Logout() {
  useEffect(() => {
    logout()
  }, [])
}