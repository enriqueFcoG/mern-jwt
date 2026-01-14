"server-only"
import { User } from "@/shared/types";
import { cookies } from "next/headers";

export const  getUsers = async (): Promise<User[] | null > => {
  const cookieStores = await cookies()
  try {
    const res = await fetch(`${process.env.API_URL}/api/users`, {
    method: "GET",
    headers: {
      Cookie: cookieStores.toString(),
    },
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
export const getCurrentUser = async ()=> {
  const cookieStore = await cookies()
  try {
    const res = await fetch(`${process.env.API_URL}/api/users/me`, {
    method: "GET",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const user = await res.json();

  return user
  } catch (error) {
    return null
  }

}
export const getUser = async (id: number): Promise<User | null> => {
  const cookieStore = await cookies()
  const res = await fetch(`${process.env.API_URL}/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    credentials: "include",
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const user = await res.json();

  return user
}

export const updateUser = async (id: string, user: any) => {
  const cookieStore = await cookies()
  const res = await fetch(`${process.env.API_URL}/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    credentials: "include",
    body: JSON.stringify(user),
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
}

export const validateSession = async () => {
const cookieStore = await cookies()
  const res = await fetch(`${process.env.API_URL}/api/users/me`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
};

export const logout = async () => {
  const cookieStore = await cookies()
  const res = await fetch(`${process.env.API_URL}/api/auth/logout`, {
    method: "POST",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
};
