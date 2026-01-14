import { getCurrentUser, validateSession } from "@/services/users.service";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("rendering auth layout")
  const user = await validateSession();

  if (user?.email) {
    redirect("/home");
  }

  return (
    <div className="flex justify-center items-center h-screen">    
      {children}
    </div>
  );
}
