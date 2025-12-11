
export const  authenticateUser = async ({ email, password }: {email:string, password:string}) => {
  if (process.env.NODE_ENV === "development") {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) return null;

  const user = await res.json();
  console.log("RESPONSE LOGIN ", res)
  return user.message;
  
}