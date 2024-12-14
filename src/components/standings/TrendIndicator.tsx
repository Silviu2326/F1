import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface TrendIndicatorProps {
  trend: 'up' | 'down' | 'stable';
  previousPosition: number;
  currentPosition: number;
}

const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  trend,
  previousPosition,
  currentPosition
}) => {
  const getColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  const getIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="w-4 h-4" />;
      case 'down':
        return <ArrowDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const positionDiff = Math.abs(previousPosition - currentPosition);
  const showDiff = trend !== 'stable' && positionDiff > 0;

  return (
    <div className={`flex items-center gap-1 ${getColor()}`} title={`${showDiff ? `${positionDiff} posición${positionDiff > 1 ? 'es' : ''} ${trend === 'up' ? 'ganada' : 'perdida'}${positionDiff > 1 ? 's' : ''}` : 'Sin cambios'}`}>
      {getIcon()}
      {showDiff && <span className="text-xs">{positionDiff}</span>}
    </div>
  );
};

export default TrendIndicator;
