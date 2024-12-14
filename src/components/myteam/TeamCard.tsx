import React from 'react';
import { Team } from '../../types';
import { Trophy, TrendingUp, TrendingDown, Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  team: Team;
  isSelected?: boolean;
  onSelect?: (team: Team) => void;
  disabled?: boolean;
}

const TeamCard = ({ team, isSelected, onSelect, disabled }: TeamCardProps) => {
  const getTrendIcon = () => {
    if (team.trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (team.trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return null;
  };

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
      onClick={() => !disabled && onSelect?.(team)}
    >
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {team.position <= 3 && (
          <Trophy className={`w-5 h-5 ${
            team.position === 1 ? 'text-yellow-500' : 
            team.position === 2 ? 'text-gray-400' : 'text-amber-700'
          }`} />
        )}
        {getTrendIcon()}
      </div>

      <div className="flex items-start space-x-6">
        <img 
          src={team.imageUrl} 
          alt={team.name}
          className="w-24 h-24 rounded-lg object-contain bg-gray-100 p-2"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">{team.name}</h3>
              <p className="text-gray-600">Constructor</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Puntos</p>
              <p className="font-semibold">{team.points}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Victorias</p>
              <p className="font-semibold">{team.wins}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Coste</p>
              <p className="font-bold text-[#e10600]">${team.cost}M</p>
            </div>
          </div>
        </div>

        <button
          className={`absolute bottom-4 right-4 ${
            isSelected
              ? 'text-red-600 hover:text-red-700'
              : 'bg-[#e10600] text-white px-4 py-2 rounded-md hover:bg-red-700'
          } transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            !disabled && onSelect?.(team);
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

export default TeamCard;