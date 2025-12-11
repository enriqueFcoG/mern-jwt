import { User } from "@/shared/types";

export const token = document.cookie
  .split('; ')
  .find(row => row.startsWith('access_token='))
  ?.split('=')[1];

export const  getUsers = async (): Promise<User[] | null > => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) return null;

  const users = await res.json();

  return users
  } catch (error) {
    console.error("Error", error)
    return null
  }

}
export const getCurrentUser = async (): Promise<User | null> => {
  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
    method: "GET",
    headers: {
    'Content-Type': 'application/json',
    ...(process.env.NODE_ENV === 'production' && token
      ? { Authorization: `Bearer ${token}` }
      : {}),
  },
    credentials: "include",
    cache: "no-store",
  });
  if (!res.ok) return null;

  const user = await res.json();

  return user
  } catch (error) {
    console.error("error...", error)
    return null
  }

}
export const getUser = async (id: number): Promise<User | null> => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const user = await res.json();

  return user
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