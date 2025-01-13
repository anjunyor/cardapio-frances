import React, { useState } from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow">
          <h3 className="font-serif text-xl mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-2 leading-relaxed">{description}</p>
          <p className="font-semibold">R$ {price}</p>
        </div>
        {isHovered && (
          <div className="absolute right-6 top-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg transition-opacity duration-300">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;