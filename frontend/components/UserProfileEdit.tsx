"use client"

import { useState, useTransition} from "react";
import { User } from "@/shared/types";
import { updateUserAction } from "@/actions/user/update";

interface UserProfileEditProps {
  user: User;
}

export default function UserProfileEdit({ user }: UserProfileEditProps) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');


  const action = async (userData: FormData) => {
    setStatus('idle');
    startTransition(async () => {
      try {
        await updateUserAction(userData)
        setStatus('success');
      } catch {
        setStatus('error');
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl border border-gray-200">
      <div className="text-center mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-primary-light to-primary-dark flex items-center justify-center text-white text-3xl font-bold shadow-sm">
          {user.firstName.charAt(0)}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          {user.firstName} {user.lastName}
        </h2>

        <p className="text-gray-600">{user.email}</p>
      </div>

      <form
        action={action}
        className="space-y-4"
      >
        <input type="hidden" name="id" value={user.id} />

        <label className="block text-gray-500 text-sm mb-1">First Name</label>
        <input
          name="firstName"
          defaultValue={user.firstName}
          placeholder="First Name"
          className="w-full text-secondary-light border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
        />

        <div>
          <label className="block text-gray-500 text-sm mb-1">Last Name</label>
          <input
             name="lastName"
             defaultValue={user.lastName}
              placeholder="Last Name"
             className="w-full text-secondary-light border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
        </div>

        <label className="block text-gray-500 text-sm mb-1">Email</label>
        <input
          name="email"
          defaultValue={user.email}
          placeholder="Email"
          className="w-full text-secondary-light border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
        />

        <button 
          disabled={pending}
          className="w-full bg-primary-light text-white p-2 rounded-md hover:bg-primary-light transition-colors"
        >
          {pending ? "Saving..." : "Save Changes"}
        </button>
      </form>
    {status === "success" && <p className="text-green-600 text-sm">User updated successfully!</p>}
    {status === "error" && <p className="text-red-600 text-sm">Failed to update user.</p>}
    </div>
  );
}
