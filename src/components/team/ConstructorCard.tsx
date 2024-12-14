import React from 'react';
import { motion } from 'framer-motion';
import { Plus, X, TrendingUp, TrendingDown, Award } from 'lucide-react';

interface ConstructorCardProps {
  constructor: {
    id: string;
    name: string;
    price: number;
    logoUrl: string;
    carImageUrl: string;
    popularity: 'rising' | 'falling' | 'stable';
    championships: number;
    lastRacePosition: number;
  };
  isSelected?: boolean;
  onSelect?: () => void;
  onRemove?: () => void;
}

const ConstructorCard: React.FC<ConstructorCardProps> = ({
  constructor,
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
    switch (constructor.popularity) {
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
          src={constructor.carImageUrl}
          alt={`${constructor.name} car`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {constructor.championships > 0 && (
          <div className="absolute top-2 right-2 bg-[#e10600] rounded-full p-1">
            <Award className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={constructor.logoUrl}
              alt={constructor.name}
              className="h-6"
            />
            <h3 className="font-bold text-white">{constructor.name}</h3>
          </div>
          {getTrendIcon()}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-[#e10600] font-bold">{constructor.price}M €</span>
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

        <div className="text-sm text-gray-400">
          Última carrera: P{constructor.lastRacePosition}
        </div>
      </div>
    </motion.div>
  );
};

export default ConstructorCard;