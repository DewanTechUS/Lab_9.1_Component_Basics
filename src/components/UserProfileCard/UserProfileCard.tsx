// src/components/UserProfileCard/UserProfileCard.tsx
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Edit%20Profile-,ProductDisplay%20Example,-const%20product%20%3D
import React from "react";
// Alternative 1: Inline type definition
interface UserProfileCardProps {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {

  return (
    <div className="border rounded-md p-4">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-700">{user.email}</p>
      <p className="text-sm text-gray-500">{user.role}</p>
    </div>
  );
};
