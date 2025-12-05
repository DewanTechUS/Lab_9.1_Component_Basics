// src/components/ProductDisplay/ProductDisplay.tsx
// https://ps-lms.vercel.app/curriculum/se/415/lab-1#:~:text=Edit%20Profile-,ProductDisplay%20Example,-const%20product%20%3D
// Component to display core product information
// // https://reactnative.dev/docs/intro-react#:~:text=The%20rest%20of%20this%20introduction%20to%20React%20uses%20cats%20in%20its%20examples%3A%20friendly%2C%20approachable%20creatures%20that%20need%20names%20and%20a%20cafe%20to%20work%20in.%20Here%20is%20your%20very%20first%20Cat%20component%3A
// I will export default fuctions from productdisplayprops folder. I am testing diffrent ways to import react 
// Testing different React import methods
// Method 1: Named import (current)
// import { FC } from "react";
// Method 2: Namespace import
// import * as React from "react";
// Method 3: Default import with named imports
// import React, { FC } from "react";
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
