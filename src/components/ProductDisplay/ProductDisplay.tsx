// src/components/ProductDisplay/ProductDisplay.tsx
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Edit%20Profile-,ProductDisplay%20Example,-const%20product%20%3D
// Component to display core product information
import React from "react";

export interface ProductDisplayProps {
  product: {
    name: string;
    price: number;
    description: string;
    inStock: boolean;
  };
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="border rounded-md p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-green-600 font-bold">
        ${product.price.toFixed(2)}
      </p>

      <p className="text-sm mt-1">{product.description}</p>

      <p className="text-sm mt-1">
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};
