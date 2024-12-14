// src/components/myteam/DriverCard.tsx

import React from 'react';
import { Driver } from '../../types';
import { Trophy, TrendingUp, TrendingDown, Plus, X, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

interface DriverCardProps {
  driver: Driver;
  isSelected?: boolean;
  onSelect?: (driver: Driver) => void;
  disabled?: boolean;
}

const DriverCard: React.FC<DriverCardProps> = ({ driver, isSelected, onSelect, disabled }) => {
  // Debug: Verificar los datos del driver
  console.log('Driver data:', driver);

  // Función para obtener el icono de tendencia
  const getTrendIcon = () => {
    if (driver.trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (driver.trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return null;
  };

  // Obtener la URL de la bandera o una imagen por defecto si countryCode no está disponible
  const flagUrl = driver.countryCode
    ? `https://flagcdn.com/w40/${driver.countryCode.toLowerCase()}.png`
    : 'https://via.placeholder.com/40x30?text=NA'; // Imagen por defecto (NA = No Disponible)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative p-6 rounded-xl border-2 transition-all ${
        isSelected 
          ? 'border-[#e10600] bg-red-50' 
          : 'border-gray-200 hover:border-gray-300 bg-white'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => !disabled && onSelect?.(driver)}
    >
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {driver.position <= 3 && (
          <Trophy className={`w-5 h-5 ${
            driver.position === 1 ? 'text-yellow-500' : 
            driver.position === 2 ? 'text-gray-400' : 'text-amber-700'
          }`} />
        )}
        {getTrendIcon()}
      </div>

      <div className="flex items-start space-x-6">
        <div className="relative">
          {/* Imagen del conductor */}
          {driver.imageUrl ? (
            <img 
              src={driver.imageUrl} 
              alt={driver.name}
              className="w-24 h-24 rounded-lg object-cover shadow-md"
            />
          ) : (
            <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center shadow-md">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {/* Bandera del país */}
          <img
            src={flagUrl}
            alt={`Bandera de ${driver.nationality || 'Desconocido'}`}
            className="absolute -bottom-2 -right-2 w-8 h-6 rounded shadow-sm"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">{driver.name || 'Nombre Desconocido'}</h3>
              <p className="text-gray-600">{driver.team || 'Equipo Desconocido'}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Puntos</p>
              <p className="font-semibold">{driver.points !== undefined ? driver.points : 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Popularidad</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Flag 
                    key={i} 
                    className={`w-3 h-3 ${
                      i < (driver.popularity || 0) ? 'text-[#e10600]' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Coste</p>
              <p className="font-bold text-[#e10600]">
                {driver.cost !== undefined ? `$${driver.cost}M` : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <button
          className={`absolute bottom-4 right-4 ${
            isSelected
              ? 'text-red-600 hover:text-red-700'
              : 'bg-[#e10600] text-white px-4 py-2 rounded-md hover:bg-red-700'
          } transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            !disabled && onSelect?.(driver);
          }}
          disabled={disabled}
        >
          {isSelected ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="flex items-center space-x-1">
              <Plus className="w-4 h-4" />
              <span>Añadir</span>
            </div>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default DriverCard;
