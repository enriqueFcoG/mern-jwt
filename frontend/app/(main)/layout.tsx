import Link from "next/link";
import Image from "next/image";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Link
            href="/logout"
            className="block mt-6 bg-secondary-light hover:bg-red-700 px-3 py-2 rounded-md text-center transition"
          >
            Log out
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
