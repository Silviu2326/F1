import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const SeasonHighlight = () => {
  const highlights = {
    championshipLeader: {
      name: "Max Verstappen",
      team: "Red Bull Racing",
      points: 51
    },
    constructorsLeader: {
      name: "Red Bull Racing",
      points: 87,
      wins: 2
    },
    lastRace: {
      name: "Gran Premio de Arabia Saudí",
      winner: "Max Verstappen",
      fastestLap: "Charles Leclerc"
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Destacados Temporada 2024</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3">
          <Trophy className="w-6 h-6 text-[#e10600] flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Líder del Campeonato</h3>
            <p className="text-lg font-bold">{highlights.championshipLeader.name}</p>
            <p className="text-sm text-gray-600">{highlights.championshipLeader.team}</p>
            <p className="text-sm font-semibold">{highlights.championshipLeader.points} puntos</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Award className="w-6 h-6 text-[#e10600] flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Líder Constructores</h3>
            <p className="text-lg font-bold">{highlights.constructorsLeader.name}</p>
            <p className="text-sm text-gray-600">{highlights.constructorsLeader.wins} victorias esta temporada</p>
            <p className="text-sm font-semibold">{highlights.constructorsLeader.points} puntos</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Star className="w-6 h-6 text-[#e10600] flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Última Carrera</h3>
            <p className="text-lg font-bold">{highlights.lastRace.name}</p>
            <p className="text-sm text-gray-600">Ganador: {highlights.lastRace.winner}</p>
            <p className="text-sm text-gray-600">Vuelta Rápida: {highlights.lastRace.fastestLap}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonHighlight;