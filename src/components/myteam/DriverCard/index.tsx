import React from 'react';
import { Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import DriverImage from './DriverImage';
import DriverStats from './DriverStats';
import StatusIcons from './StatusIcons';

interface Driver {
  id: string;
  name: string;
  team: string;
  price: number;
  imageUrl: string;
  teamLogoUrl: string;
  nationality: string;
  popularity: 'rising' | 'stable' | 'falling';
  lastRacePosition: number;
  championships: number;
}

interface DriverCardProps {
  driver: Driver;
  isSelected?: boolean;
  onSelect?: (driver: Driver) => void;
  disabled?: boolean;
}

const DriverCard = ({ driver, isSelected, onSelect, disabled }: DriverCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative p-6 rounded-xl border-2 transition-all ${
        isSelected 
          ? 'border-[#e10600] bg-red-50' 
          : 'border-gray-200 hover:border-gray-300 bg-white'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => !disabled && onSelect?.(driver)}
    >
      <StatusIcons position={driver.lastRacePosition} trend={driver.popularity} />

      <div className="flex items-start space-x-6">
        <DriverImage
          imageUrl={driver.imageUrl}
          name={driver.name}
          nationality={driver.nationality}
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">{driver.name}</h3>
              <p className="text-gray-600">{driver.team}</p>
            </div>
          </div>

          <DriverStats
            points={driver.lastRacePosition}
            popularity={driver.popularity}
            cost={driver.price}
          />
        </div>

        <button
          className={`absolute bottom-4 right-4 ${
            isSelected
              ? 'text-red-600 hover:text-red-700'
              : 'bg-[#e10600] text-white px-4 py-2 rounded-md hover:bg-red-700'
          } transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            !disabled && onSelect?.(driver);
          }}
          disabled={disabled}
        >
          {isSelected ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="flex items-center space-x-1">
              <Plus className="w-4 h-4" />
              <span>Añadir</span>
            </div>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default DriverCard;