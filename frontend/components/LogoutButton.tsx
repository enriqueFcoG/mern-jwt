"use client"

const LogoutButton = () => {

    const logout = async () => {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      window.location.href = "/login";
    };

    return (
        <button className="block mt-6 bg-secondary-light hover:bg-red-700 px-3 py-2 rounded-md text-center transition" onClick={logout}>Logout</button>
    )
}

export default LogoutButton