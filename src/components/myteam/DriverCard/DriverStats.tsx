import React from 'react';
import { Flag } from 'lucide-react';

interface DriverStatsProps {
  points: number;
  popularity: number;
  cost: number;
}

const DriverStats = ({ points, popularity, cost }: DriverStatsProps) => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      <div>
        <p className="text-sm text-gray-500">Puntos</p>
        <p className="font-semibold">{points}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Popularidad</p>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Flag 
              key={i} 
              className={`w-3 h-3 ${
                i < popularity ? 'text-[#e10600]' : 'text-gray-300'
              }`} 
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Coste</p>
        <p className="font-bold text-[#e10600]">${cost}M</p>
      </div>
    </div>
  );
};

export default DriverStats;