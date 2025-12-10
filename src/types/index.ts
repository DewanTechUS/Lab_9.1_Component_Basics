// src/types/index.ts
// copied from lesson component-library
// This file contains TypeScript interfaces and types for various components in the component library.
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Component%20Implementation%3A
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Create%20a%20new%20React%20TypeScript%20project%20using%20Vite%3A
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=index.ts-,Component%20Requirements,-1.%20AlertBox%20Component
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Component%20Requirements-,1.%20AlertBox%20Component,-Create%20an%20AlertBox
// Type definitions for AlertBox component

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
  type: AlertType;
  message: string;
}

// UserProfileCard -------------
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface UserProfileCardProps {
  user: User;
}

// ProductDisplay --------------
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
}
