export const  authenticateUser = async ({ email, password }: {email:string, password:string}) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) return null;

  const user = await res.json();
  console.log("RESPONSE LOGIN ", res)
  return user.message;
}