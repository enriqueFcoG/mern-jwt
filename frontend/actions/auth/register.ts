import { FormState, SignupFormSchema } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
    //using zod to validate form data
    const validatedFields = SignupFormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
    })
 
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { firstName, lastName , email, password } = validatedFields.data

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if(res.status === 409) {
        return {
            errors: {
                email: ["User already exist"]
            } 
        }
    }
    const data = await res.json();
 
    const user = data

    if (!user) {
        return {
            message: 'An error occurred while creating your account.',
        }
    }

    redirect('/profile')
 
}