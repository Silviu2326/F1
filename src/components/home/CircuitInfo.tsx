import React from 'react';
import { MapPin, Timer, Flag } from 'lucide-react';

interface CircuitInfoProps {
  name: string;
  length: string;
  laps: number;
  lapRecord: {
    time: string;
    driver: string;
    year: number;
  };
}

const CircuitInfo: React.FC<CircuitInfoProps> = ({ name, length, laps, lapRecord }) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-[#e10600]" />
        <div>
          <p className="text-sm text-gray-600">Longitud del Circuito</p>
          <p className="font-semibold">{length}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Flag className="w-5 h-5 text-[#e10600]" />
        <div>
          <p className="text-sm text-gray-600">Distancia de Carrera</p>
          <p className="font-semibold">{laps} vueltas</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Timer className="w-5 h-5 text-[#e10600]" />
        <div>
          <p className="text-sm text-gray-600">Vuelta Récord</p>
          <p className="font-semibold">{lapRecord.time}</p>
          <p className="text-xs text-gray-500">{lapRecord.driver} ({lapRecord.year})</p>
        </div>
      </div>
    </div>
  );
};

export default CircuitInfo;