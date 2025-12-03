// src/components/ProductDisplay/ProductDisplay.tsx
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Edit%20Profile-,ProductDisplay%20Example,-const%20product%20%3D
// Component to display core product information
import React from "react";
import { ProductDisplayProps } from "../../types";

// ProductDisplay component definition
export const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="border rounded-md p-4">
      {/* only work if product.imageUrl is provided */}
      {product.imageUrl && (
        <img
          
        src={product.imageUrl}
          
          alt={product.name}
        
          className="w-full h-40 object-cover mb-3"
        />
      )}

      <h3 className="text-lg font-semibold">{product.name}</h3>
      
      <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>

      <p className="text-sm text-gray-700 mt-1">{product.description}</p>

      <p className="text-sm mt-1">
        
      {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};
