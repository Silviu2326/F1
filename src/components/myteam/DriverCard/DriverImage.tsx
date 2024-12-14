import React from 'react';

interface DriverImageProps {
  imageUrl: string;
  name: string;
  nationality: string;
}

const DriverImage = ({ imageUrl, name, nationality }: DriverImageProps) => {
  return (
    <div className="relative">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-24 h-24 rounded-lg object-cover shadow-md"
      />
      <img
        src={`https://flagcdn.com/w40/${nationality?.toLowerCase()}.png`}
        alt={`Bandera de ${nationality}`}
        className="absolute -bottom-2 -right-2 w-8 h-6 rounded shadow-sm"
      />
    </div>
  );
};

export default DriverImage;