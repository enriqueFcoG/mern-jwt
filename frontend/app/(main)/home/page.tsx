"use client"
import UserProfileCard from "@/components/UserProfileCard"
import UserTable from "@/components/UserTable"
import { getCurrentUser, getUsers } from "@/services/users.service"
import { User } from "@/shared/types"
import { useEffect, useState } from "react"

const Home = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchData() {
      const [usersData, currentUserData] = await Promise.all([getUsers(), getCurrentUser()]);
      setUsers(usersData);
      setCurrentUser(currentUserData);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {currentUser && <UserProfileCard user={currentUser} />}
      <UserTable users={users ?? []} />
    </div>
  )
}

export default Home