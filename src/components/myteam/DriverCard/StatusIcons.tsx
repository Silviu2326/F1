import React from 'react';
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';

interface StatusIconsProps {
  position: number;
  trend: 'up' | 'down' | 'stable';
}

const StatusIcons = ({ position, trend }: StatusIconsProps) => {
  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return null;
  };

  return (
    <div className="absolute top-4 right-4 flex items-center space-x-2">
      {position <= 3 && (
        <Trophy className={`w-5 h-5 ${
          position === 1 ? 'text-yellow-500' : 
          position === 2 ? 'text-gray-400' : 'text-amber-700'
        }`} />
      )}
      {getTrendIcon()}
    </div>
  );
};

export default StatusIcons;