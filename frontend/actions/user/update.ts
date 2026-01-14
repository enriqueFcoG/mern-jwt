"use server"
import { updateUser } from "@/services/users.service";

export async function updateUserAction(data: FormData) {
    //TODO: validations using zod
    //...

    const id = data.get('id') as string;

  const userData = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    email: data.get('email'),
  };


    const result = await updateUser(id, userData)
}