import React from 'react';
import { Team } from '../../../types';
import { Plus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import TeamImage from './TeamImage';
import TeamStats from './TeamStats';
import StatusIcons from './StatusIcons';

interface TeamCardProps {
  team: Team;
  isSelected?: boolean;
  onSelect?: (team: Team) => void;
  disabled?: boolean;
}

const TeamCard = ({ team, isSelected, onSelect, disabled }: TeamCardProps) => {
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
      <StatusIcons position={team.position} trend={team.trend} />

      <div className="flex items-start space-x-6">
        <TeamImage imageUrl={team.imageUrl} name={team.name} />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">{team.name}</h3>
              <p className="text-gray-600">Constructor</p>
            </div>
          </div>

          <TeamStats
            points={team.points}
            wins={team.wins}
            cost={team.cost}
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