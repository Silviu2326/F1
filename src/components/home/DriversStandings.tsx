import React from 'react';
import { Trophy, Medal } from 'lucide-react';

interface Driver {
  position: number;
  name: string;
  team: string;
  points: number;
  nationality: string;
  teamColor: string;
  imageUrl: string;
}

const drivers: Driver[] = [
  {
    position: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    points: 51,
    nationality: "HOL",
    teamColor: "#0600EF",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  },
  {
    position: 2,
    name: "Sergio Pérez",
    team: "Red Bull Racing",
    points: 36,
    nationality: "MEX",
    teamColor: "#0600EF",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  },
  {
    position: 3,
    name: "Charles Leclerc",
    team: "Ferrari",
    points: 28,
    nationality: "MON",
    teamColor: "#DC0000",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  },
  {
    position: 4,
    name: "George Russell",
    team: "Mercedes",
    points: 18,
    nationality: "GBR",
    teamColor: "#00D2BE",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  },
  {
    position: 5,
    name: "Carlos Sainz",
    team: "Ferrari",
    points: 15,
    nationality: "ESP",
    teamColor: "#DC0000",
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f"
  }
];

const DriversStandings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="w-6 h-6 text-[#e10600]" />
        <h2 className="text-2xl font-bold">Campeonato de Pilotos</h2>
      </div>
      
      <div className="space-y-4">
        {drivers.map((driver) => (
          <div 
            key={driver.position}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-center w-8">
              {driver.position === 1 ? (
                <Trophy className="w-6 h-6 text-yellow-500" />
              ) : driver.position === 2 ? (
                <Medal className="w-6 h-6 text-gray-400" />
              ) : driver.position === 3 ? (
                <Medal className="w-6 h-6 text-amber-700" />
              ) : (
                <span className="text-lg font-semibold text-gray-600">{driver.position}</span>
              )}
            </div>
            
            <div className="flex-shrink-0">
              <img
                src={driver.imageUrl}
                alt={`Casco de ${driver.name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{driver.name}</span>
                <span className="text-sm text-gray-500">{driver.nationality}</span>
              </div>
              <div 
                className="text-sm" 
                style={{ color: driver.teamColor }}
              >
                {driver.team}
              </div>
            </div>
            
            <div className="text-right">
              <span className="font-bold text-lg">{driver.points}</span>
              <span className="text-sm text-gray-500 ml-1">PTS</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriversStandings;