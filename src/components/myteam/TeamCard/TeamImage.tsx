import React from 'react';

interface TeamImageProps {
  imageUrl: string;
  name: string;
}

const TeamImage = ({ imageUrl, name }: TeamImageProps) => {
  return (
    <img 
      src={imageUrl} 
      alt={name}
      className="w-24 h-24 rounded-lg object-contain bg-gray-100 p-2"
    />
  );
};

export default TeamImage;