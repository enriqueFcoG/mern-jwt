"use client"

import { useState } from "react";
import { User } from "@/shared/types";
import { updateUser } from "@/services/users.service";
// import { updateUser } from "@/services/userService"; // tu service

interface UserProfileEditProps {
  user: User;
}

export default function UserProfileEdit({ user }: UserProfileEditProps) {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    try {
      await updateUser(user.id, formData); // llama al service
      setSuccessMessage("User updated successfully!");
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl border border-gray-200">
      <div className="text-center mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-primary-light to-primary-dark flex items-center justify-center text-white text-3xl font-bold shadow-sm">
          {formData.firstName.charAt(0)}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          {formData.firstName} {formData.lastName}
        </h2>

        <p className="text-gray-600">{formData.email}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-500 text-sm mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
        </div>

        <div>
          <label className="block text-gray-500 text-sm mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
        </div>

        <div>
          <label className="block text-gray-500 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-primary-dark text-white p-2 rounded-md hover:bg-primary-light transition-colors"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

        {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
      </div>
    </div>
  );
}
