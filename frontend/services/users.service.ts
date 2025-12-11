import { User } from "@/shared/types";

export const  getUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });
  console.log("RES READING USERS: ", res)
  if (!res.ok) return null;

  const users = await res.json();

  return users

}
export const getCurrentUser = async () => {
  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
  } catch (error) {
    console.error("error...", error)
  }
}
export const getUser = async (id: number) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
}

export const updateUser = async (id: string, user: any) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
}