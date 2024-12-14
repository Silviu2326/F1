import React from 'react';

interface TeamStatsProps {
  points: number;
  wins: number;
  cost: number;
}

const TeamStats = ({ points, wins, cost }: TeamStatsProps) => {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      <div>
        <p className="text-sm text-gray-500">Puntos</p>
        <p className="font-semibold">{points}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Victorias</p>
        <p className="font-semibold">{wins}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Coste</p>
        <p className="font-bold text-[#e10600]">${cost}M</p>
      </div>
    </div>
  );
};

export default TeamStats;