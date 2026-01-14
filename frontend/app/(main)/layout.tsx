import Link from "next/link";
import Image from "next/image";
import { validateSession } from "@/services/users.service";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //we are going to check if we have a stored cookie in order to validate if a user is logged in 
  const user = await validateSession();
  if (!user) {
    redirect("/login");
  }
  
  return (
    <div className="min-h-screen flex">
      <aside className="w-48 bg-primary-light text-gray-200 p-6 flex flex-col">
        <Image 
          src="/logo.svg"
          alt="Aura Logo"
          width={100}
          height={40}
        />

        <nav className="flex flex-col gap-4">
          <Link
            href="/home"
            className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
          >
            Home
          </Link>

          <Link
            href="/profile"
            className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
          >
            Profile
          </Link>

        </nav>

        <div className="mt-auto">
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
