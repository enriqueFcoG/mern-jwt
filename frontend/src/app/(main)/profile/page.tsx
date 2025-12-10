"use client"
import UserProfileEdit from "@/components/UserProfileEdit"
import { getCurrentUser } from "@/services/users.service"
import { User } from "@/shared/types"
import { useEffect, useState } from "react"
const Profile = () => {
    const [user, setUser] = useState<User>()
    useEffect(() => {
        const getData = async () => {
            const user = await getCurrentUser()
            if(user){
                setUser(user)
            }
        }
        getData()
    }, [])
    return (
        <>
            {user ? <UserProfileEdit user={user} /> : null}
        </>
    )
}

export default Profile;