import { redirect } from "next/navigation";
import { LoginState, SigninFormSchema } from "../../app/lib/definitions";
import { authenticateUser } from "../../services/auth.service";

export async function signin(prevState: LoginState , formData: FormData): Promise<LoginState> {
    //using zod to validate form data
    const validatedFields = SigninFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })
 
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const user = await authenticateUser(validatedFields.data)

    if (!user) {
        //due security we are showing one error message
        return { errors:  "Invalid Email or Password", message: "Invalid Email or Password" }
    }

    redirect('/profile') 
}