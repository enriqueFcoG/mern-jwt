import { redirect } from "next/navigation";

export async function logout() {
    //call backend api to logout user
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });

    redirect('/login')
}