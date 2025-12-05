// src/components/UserProfileCard/UserProfileCard.tsx
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Edit%20Profile-,ProductDisplay%20Example,-const%20product%20%3D
// // https://reactnative.dev/docs/intro-react#:~:text=The%20rest%20of%20this%20introduction%20to%20React%20uses%20cats%20in%20its%20examples%3A%20friendly%2C%20approachable%20creatures%20that%20need%20names%20and%20a%20cafe%20to%20work%20in.%20Here%20is%20your%20very%20first%20Cat%20component%3A
// i will import from userprofilecard folder i am testing diffrent ways to import react
// Testing different React import methods
// Method 1: Named import
// import { FC } from "react";
// Method 2: Namespace import // come back to this for more understanding 
import React from "react";
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
