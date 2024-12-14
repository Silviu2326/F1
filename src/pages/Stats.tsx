import React, { useState, useMemo } from 'react';
import { 
  Trophy, Flag, Ban, TrendingUp, Target, Timer, ArrowUp,
  Sparkles, Medal, Activity
} from 'lucide-react';
import Card from '../components/shared/Card';
import StatisticCard from '../components/stats/StatisticCard';
import PerformanceChart from '../components/stats/PerformanceChart';
import TrendIndicator from '../components/standings/TrendIndicator';
import SortHeader from '../components/standings/SortHeader';
import { drivers } from '../data/mockData';
import { Driver } from '../types';

type SortField = keyof Pick<Driver, 
  'position' | 'points' | 'poles' | 'averageFantasyPoints' | 'pointsPerRace' | 'averageFinishPosition'
>;

interface Sort {
  field: SortField;
  direction: 'asc' | 'desc';
}

const Stats = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState<Sort>({
    field: 'position',
    direction: 'asc',
  });

  const handleSort = (field: SortField) => {
    setSort(prev => ({
      field,
      direction:
        prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedAndFilteredDrivers = useMemo(() => {
    let filtered = drivers.filter(
      driver =>
        driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.team.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const modifier = sort.direction === 'asc' ? 1 : -1;
      return (a[sort.field] - b[sort.field]) * modifier;
    });
  }, [drivers, sort, searchQuery]);

  const getPositionStyle = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-50';
      case 2:
        return 'bg-gray-50';
      case 3:
        return 'bg-orange-50';
      default:
        return position % 2 === 0 ? 'bg-white' : 'bg-gray-50/50';
    }
  };

  const maxLastRacePoints = Math.max(...drivers.flatMap(d => d.lastThreeRaces));

  return (
    <div className="space-y-8">
      <Card title="Estadísticas de Pilotos" icon={Trophy}>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por piloto o equipo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            aria-label="Buscar piloto"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full" role="table">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left">
                  <SortHeader
                    label="Piloto"
                    field="position"
                    currentSort={sort}
                    onSort={handleSort}
                  />
                </th>
                <th className="px-4 py-3 text-left">Equipo</th>
                <th className="px-4 py-3 text-right">
                  <SortHeader
                    label="Puntos"
                    field="points"
                    currentSort={sort}
                    onSort={handleSort}
                  />
                </th>
                <th className="px-4 py-3">Estadísticas</th>
                <th className="px-4 py-3 text-center">Últimas Carreras</th>
                <th className="px-4 py-3 text-center">Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {sortedAndFilteredDrivers.map((driver) => (
                <tr
                  key={driver.id}
                  className={`${getPositionStyle(driver.position)}`}
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={driver.imageUrl}
                          alt={driver.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{driver.name}</span>
                          <img
                            src={`/flags/${driver.countryCode.toLowerCase()}.svg`}
                            alt={driver.nationality}
                            className="w-5 h-3"
                            title={driver.nationality}
                          />
                        </div>
                        <div className="text-sm text-gray-500">
                          Pos. {driver.position}º
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={driver.teamLogoUrl}
                        alt={`Logo de ${driver.team}`}
                        className="w-8 h-8"
                      />
                      <span>{driver.team}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">
                    {driver.points}
                  </td>
                  <td className="px-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <StatisticCard
                        label="Poles"
                        value={driver.poles}
                        icon={Flag}
                        color="bg-yellow-500"
                        tooltip="Número de poles position"
                      />
                      <StatisticCard
                        label="DNFs"
                        value={driver.dnfs}
                        icon={Ban}
                        color="bg-red-500"
                        tooltip="Número de abandonos"
                      />
                      <StatisticCard
                        label="Pos. Media"
                        value={driver.averageFinishPosition.toFixed(1)}
                        icon={Target}
                        color="bg-blue-500"
                        tooltip="Posición media de llegada"
                      />
                      <StatisticCard
                        label="Pts/Carrera"
                        value={driver.pointsPerRace.toFixed(1)}
                        icon={Activity}
                        color="bg-green-500"
                        tooltip="Puntos promedio por carrera"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col items-center gap-1">
                      <PerformanceChart
                        data={driver.lastThreeRaces}
                        maxValue={maxLastRacePoints}
                      />
                      <span className="text-sm text-gray-500">
                        Últimas 3 carreras
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <TrendIndicator
                        trend={driver.trend}
                        previousPosition={driver.previousPosition}
                        currentPosition={driver.position}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Stats;