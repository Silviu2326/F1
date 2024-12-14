import React from 'react';
import { motion } from 'framer-motion';
import { Plus, X, TrendingUp, TrendingDown, Trophy } from 'lucide-react';

interface DriverCardProps {
  driver: {
    id: string;
    name: string;
    team: string;
    price: number;
    imageUrl: string;
    teamLogoUrl: string;
    nationality: string;
    popularity: 'rising' | 'falling' | 'stable';
    lastRacePosition: number;
    championships: number;
  };
  isSelected?: boolean;
  onSelect?: () => void;
  onRemove?: () => void;
}

const DriverCard: React.FC<DriverCardProps> = ({
  driver,
  isSelected = false,
  onSelect,
  onRemove,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    selected: { scale: 1, boxShadow: "0 0 0 2px #e10600" }
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const getTrendIcon = () => {
    switch (driver.popularity) {
      case 'rising':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'falling':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isSelected ? "selected" : "visible"}
      whileHover="hover"
      className={`bg-gray-900 rounded-lg overflow-hidden ${
        isSelected ? 'border-2 border-[#e10600]' : ''
      }`}
    >
      <div className="relative">
        <img
          src={driver.imageUrl}
          alt={driver.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {driver.championships > 0 && (
          <div className="absolute top-2 right-2 bg-[#e10600] rounded-full p-1">
            <Trophy className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/24x18/${driver.nationality.toLowerCase()}.png`}
              alt={`${driver.nationality} flag`}
              className="w-6"
            />
            <h3 className="font-bold text-white">{driver.name}</h3>
          </div>
          {getTrendIcon()}
        </div>

        <div className="flex items-center gap-2">
          <img
            src={driver.teamLogoUrl}
            alt={driver.team}
            className="h-4"
          />
          <span className="text-gray-400 text-sm">{driver.team}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#e10600] font-bold">{driver.price}M €</span>
          {!isSelected ? (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={onSelect}
              className="bg-[#e10600] text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={onRemove}
              className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DriverCard;
