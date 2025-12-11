"use client"
import { displayDate } from "@/shared/helpers";
import { User } from "@/shared/types";

interface UserProfileCardProps {
  user: User;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className=" flex max-w-full mx-full w-full p-6 white shadow-md rounded-xl border border-gray-200">
      <div className="text-center">
        {/* Avatar Placeholder */}
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-primary-light to-primary-dark flex items-center justify-center text-white text-3xl font-bold shadow-sm">
          {user.firstName.charAt(0)}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          {user.firstName} {user.lastName}
        </h2>

        <p className="text-gray-600">{user.email}</p>

        <p className="mt-2 text-sm text-gray-500">
          Joined on { displayDate(user.createdAt.toLocaleString()) }
        </p>
      </div>

      <hr className="my-6" />

      <div className="space-y-3 pl-6">
        <div>
          <p className="text-gray-500 text-sm">First Name</p>
          <p className="text-gray-900 font-medium">{user.firstName}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Last Name</p>
          <p className="text-gray-900 font-medium">{user.lastName}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="text-gray-900 font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Created At</p>
          <p className="text-gray-900 font-medium">
            { displayDate(user.createdAt.toString()) }
          </p>
        </div>
      </div>
    </div>
  );
}
