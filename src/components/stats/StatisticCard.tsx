import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatisticCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  tooltip?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  label,
  value,
  icon: Icon,
  color,
  tooltip
}) => {
  return (
    <div 
      className="flex items-center gap-2" 
      title={tooltip}
    >
      <div className={`p-1.5 rounded-md ${color}`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
