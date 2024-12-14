import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, TrendingUp } from 'lucide-react';

interface Leader {
  position: number;
  name: string;
  team: string;
  points: number;
  imageUrl: string;
  teamLogoUrl: string;
  nationality: string;
  lastRaceResult: number;
  wins: number;
}

interface ChampionshipLeadersProps {
  drivers: Leader[];
  constructors: Leader[];
}

const ChampionshipLeaders: React.FC<ChampionshipLeadersProps> = ({ drivers, constructors }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Drivers Championship */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#e10600] flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#e10600]" />
          Clasificación de Pilotos
        </h3>
        <div className="grid gap-4">
          {drivers.slice(0, 3).map((driver, index) => (
            <motion.div
              key={driver.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-gray-900 rounded-lg p-4 relative overflow-hidden group"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <img
                    src={driver.imageUrl}
                    alt={driver.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#e10600] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {driver.position}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/24x18/${driver.nationality.toLowerCase()}.png`}
                      alt={`${driver.nationality} flag`}
                      className="w-6"
                    />
                    <h4 className="font-bold text-white">{driver.name}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <img
                      src={driver.teamLogoUrl}
                      alt={driver.team}
                      className="h-4"
                    />
                    <span>{driver.team}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{driver.points}</div>
                  <div className="text-sm text-gray-400">points</div>
                </div>
              </div>
              
              {/* Stats overlay on hover */}
              <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-[#e10600] font-bold text-xl">{driver.wins}</div>
                    <div className="text-gray-400 text-sm">Wins</div>
                  </div>
                  <div>
                    <div className="text-[#e10600] font-bold text-xl">{driver.lastRaceResult}</div>
                    <div className="text-gray-400 text-sm">Last Race</div>
                  </div>
                  <div>
                    <div className="text-[#e10600] font-bold text-xl">{driver.points}</div>
                    <div className="text-gray-400 text-sm">Points</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Constructors Championship */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[#e10600] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#e10600]" />
          Clasificación de Constructores
        </h3>
        <div className="grid gap-4">
          {constructors.slice(0, 3).map((constructor, index) => (
            <motion.div
              key={constructor.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-gray-900 rounded-lg p-4 relative overflow-hidden group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={constructor.teamLogoUrl}
                    alt={constructor.name}
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-white">{constructor.name}</h4>
                  <div className="flex items-center gap-2 text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>P{constructor.position} in championship</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{constructor.points}</div>
                  <div className="text-sm text-gray-400">points</div>
                </div>
              </div>

              {/* Stats overlay on hover */}
              <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-[#e10600] font-bold text-xl">{constructor.wins}</div>
                    <div className="text-gray-400 text-sm">Wins</div>
                  </div>
                  <div>
                    <div className="text-[#e10600] font-bold text-xl">{constructor.lastRaceResult}</div>
                    <div className="text-gray-400 text-sm">Last Race</div>
                  </div>
                  <div>
                    <div className="text-[#e10600] font-bold text-xl">{constructor.points}</div>
                    <div className="text-gray-400 text-sm">Points</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionshipLeaders;
