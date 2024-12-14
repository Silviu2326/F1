import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BudgetProgress from '../components/team/BudgetProgress';
import DriverCard from '../components/myteam/DriverCard';
import ConstructorCard from '../components/myteam/ConstructorCard/index';

const MAX_BUDGET = 100;
const MAX_DRIVERS = 2;

const availableDrivers = [
  {
    id: '1',
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
    price: 30.5,
    imageUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1677069646195.jpg',
    teamLogoUrl: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg',
    nationality: 'nl',
    popularity: 'rising' as const,
    lastRacePosition: 1,
    championships: 3
  },
  {
    id: '11',
    name: 'Sergio Pérez',
    team: 'Red Bull Racing',
    price: 25.0,
    imageUrl: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg',
    teamLogoUrl: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg',
    nationality: 'mx',
    popularity: 'stable' as const,
    lastRacePosition: 2,
    championships: 0
  },
  // Añade más pilotos aquí
];

const availableConstructors = [
  {
    id: '1',
    name: 'Red Bull Racing',
    price: 35.0,
    logoUrl: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg',
    carImageUrl: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1707997331/fom-website/2024/Launches/RB_RB20_2024_1.jpg',
    popularity: 'rising' as const,
    championships: 6,
    lastRacePosition: 1
  },
  // Añade más constructores aquí
];

const MyTeam = () => {
  const [selectedDrivers, setSelectedDrivers] = useState<typeof availableDrivers>([]);
  const [selectedConstructor, setSelectedConstructor] = useState<typeof availableConstructors[0] | null>(null);

  const usedBudget = [...selectedDrivers, selectedConstructor].reduce(
    (total, item) => total + (item?.price || 0),
    0
  );

  const handleSelectDriver = (driver: typeof availableDrivers[0]) => {
    if (selectedDrivers.length < MAX_DRIVERS && usedBudget + driver.price <= MAX_BUDGET) {
      setSelectedDrivers([...selectedDrivers, driver]);
    }
  };

  const handleRemoveDriver = (driverId: string) => {
    setSelectedDrivers(selectedDrivers.filter(d => d.id !== driverId));
  };

  const handleSelectConstructor = (constructor: typeof availableConstructors[0]) => {
    if (usedBudget - (selectedConstructor?.price || 0) + constructor.price <= MAX_BUDGET) {
      setSelectedConstructor(constructor);
    }
  };

  const handleRemoveConstructor = () => {
    setSelectedConstructor(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-[#e10600] mb-8">Mi Equipo</h1>

      <BudgetProgress
        total={usedBudget}
        used={usedBudget}
        maxBudget={MAX_BUDGET}
      />

      {/* Equipo Seleccionado */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e10600]">Equipo Seleccionado</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl text-[#e10600]">Pilotos ({selectedDrivers.length}/{MAX_DRIVERS})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {selectedDrivers.map(driver => (
                <motion.div
                  key={driver.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <DriverCard
                    driver={driver}
                    isSelected
                    onSelect={() => handleRemoveDriver(driver.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl text-[#e10600]">Constructor</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {selectedConstructor && (
                <motion.div
                  key={selectedConstructor.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <ConstructorCard
                    constructor={selectedConstructor}
                    isSelected
                    onSelect={handleRemoveConstructor}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Pilotos Disponibles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e10600]">Pilotos Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableDrivers
            .filter(driver => !selectedDrivers.find(d => d.id === driver.id))
            .map((driver, index) => (
              <motion.div
                key={driver.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DriverCard
                  driver={driver}
                  onSelect={() => handleSelectDriver(driver)}
                />
              </motion.div>
            ))}
        </div>
      </section>

      {/* Constructores Disponibles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#e10600]">Constructores Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableConstructors
            .filter(constructor => constructor.id !== selectedConstructor?.id)
            .map((constructor, index) => (
              <motion.div
                key={constructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ConstructorCard
                  constructor={constructor}
                  onSelect={() => handleSelectConstructor(constructor)}
                />
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default MyTeam;