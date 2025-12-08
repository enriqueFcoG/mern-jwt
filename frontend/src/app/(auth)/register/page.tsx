"use client";
import { signup } from "@/app/actions/auth";
import { useActionState } from "react";

const Register = () => {
  const [state, action, pending] = useActionState(signup, undefined)
  
  return <form action={action}>
      {pending && <p>Creating your account...</p>}
      <div>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" placeholder="First Name" />
      </div>
      {state?.errors?.firstName && <p>{state.errors.firstName}</p>}

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" placeholder="Last Name" />
      </div>
      {state?.errors?.lastName && <p>{state.errors.lastName}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button type="submit">Sign Up</button>
    </form>;
};

export default Register;