import React from 'react';
import { Search, UserPlus, Users, Trophy, Flag, Map } from 'lucide-react';
import { League } from '../../types';
import { motion } from 'framer-motion';

interface LeagueCardProps {
  league: League;
  onJoin: (leagueId: number) => void;
  onExplore: (leagueId: number) => void;
}

const LeagueCard: React.FC<LeagueCardProps> = ({ league, onJoin, onExplore }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
      role="article"
      aria-label={`Liga ${league.name}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img
            src={league.iconUrl}
            alt={`${league.name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{league.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{league.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {league.members.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-700">
                Pos. Media: {league.averagePosition.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-700">
                Pts. Medios: {league.averagePoints.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{league.region}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onExplore(league.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
                aria-label={`Explorar ${league.name}`}
              >
                <Search className="w-4 h-4" />
                Explorar
              </button>
              {!league.isJoined && (
                <button
                  onClick={() => onJoin(league.id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#e10600] rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                  aria-label={`Unirme a ${league.name}`}
                >
                  <UserPlus className="w-4 h-4" />
                  Unirme
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeagueCard;
