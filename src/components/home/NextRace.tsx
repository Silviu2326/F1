import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Flag } from 'lucide-react';

interface NextRaceProps {
  race: {
    name: string;
    circuit: {
      name: string;
      location: string;
      country: string;
      year: number;
    };
    date: string;
    time: string;
    imageUrl: string;
  };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const NextRace: React.FC<NextRaceProps> = ({ race }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const raceDate = new Date(`${race.date}T${race.time}`);
      const difference = +raceDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [race]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-gray-900 rounded-lg overflow-hidden shadow-xl"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src={race.imageUrl}
          alt={race.circuit.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative p-6 space-y-6">
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold text-white">{race.name}</h2>
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>{race.circuit.name}, {race.circuit.country}</span>
          </div>
        </motion.div>

        {/* Contador regresivo */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-4 gap-4 text-center"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-black/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white flip-number">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 capitalize">{unit}</div>
            </div>
          ))}
        </motion.div>

        {/* Detalles adicionales */}
        <motion.div variants={itemVariants} className="flex items-center space-x-6 text-gray-300">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{race.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{race.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Flag className="w-5 h-5" />
            <span>{race.circuit.year} Season</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NextRace;