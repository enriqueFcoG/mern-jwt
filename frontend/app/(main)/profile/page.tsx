
import UserProfileEdit from "@/components/UserProfileEdit"
import { getCurrentUser } from "@/services/users.service" 
const Profile = async () => {
    
    const user = await getCurrentUser()

    return (
        <>
            {user ? <UserProfileEdit user={user} /> : null}
        </>
    )
}

export default Profile;