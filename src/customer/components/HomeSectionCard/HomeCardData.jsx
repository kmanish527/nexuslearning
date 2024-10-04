// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function HomeCardData({ product }) {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-4"> {/* Increased horizontal margin */}
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          // eslint-disable-next-line react/prop-types
          src={product.imageUrl}  
          // eslint-disable-next-line react/prop-types
          alt={product.title}  
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>  
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>          
      </div>
    </div>
  );
}
