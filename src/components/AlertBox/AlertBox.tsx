// src/components/AlertBox/AlertBox.tsx
// copied from lesson component-library
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=handling%20or%20requirements.-,Example%20Implementation,-Here%E2%80%99s%20a%20starting
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Here%20are%20examples%20of%20how%20to%20use%20each%20component%2C%20and%20an%20example%20of%20the%20result%3A
import React from "react";

export interface AlertBoxProps {
  type: "success" | "error" | "warning" | "info";
  message: string;

}

export const AlertBox: React.FC<AlertBoxProps> = ({ type, message }) => {

  const alertStyles = {

    success: "bg-green-100 border-green-500 text-green-800",
    
    error: "bg-red-100 border-red-500 text-red-800",
    
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
  
  <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
  
      <p>{message}</p>
  
    </div>
  );
};
