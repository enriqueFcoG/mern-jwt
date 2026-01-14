"use client"
import { displayDate } from "@/shared/helpers";
import { User } from "@/shared/types";

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-sm mt-6">
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Joined At
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{user.firstName}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.lastName}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{ displayDate(user.createdAt.toLocaleString()) }</td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center px-6 py-4 text-gray-500 text-sm"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
