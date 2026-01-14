
import UserProfileCard from "@/components/UserProfileCard"
import UserTable from "@/components/UserTable"
import { getCurrentUser, getUsers } from "@/services/users.service"

const Home = async () => {
  const [users, currentUser] = await Promise.all([getUsers(), getCurrentUser()]);

  return (
    <div className="p-6 space-y-6">
      {currentUser && <UserProfileCard user={currentUser} />}
      <UserTable users={users ?? []} />
    </div>
  )
}

export default Home