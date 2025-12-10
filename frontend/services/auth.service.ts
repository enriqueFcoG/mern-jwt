export const  authenticateUser = async ({ email, password }: {email:string, password:string}) => {
  try {
    if (process.env.NODE_ENV === "development") {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
    console.log("URL ",process.env.BACKEND_URL )
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
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
    
  } catch (error) {
    console.log("HOLA ", error)
    return null
  }

}