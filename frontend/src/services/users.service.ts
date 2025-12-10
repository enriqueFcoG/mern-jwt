"use server"

import { cookies } from "next/headers";

export const  getUsers = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("access_token")?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  const users = await res.json();

  return users
}
export const getCurrentUser = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("access_token")?.value;

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
}
export const getUser = async (id: number) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("access_token")?.value;

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
}

export const updateUser = async (id: number) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("access_token")?.value;

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  
  if (!res.ok) return null;

  const users = await res.json();

  return users
}