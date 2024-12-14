import React, { useState, useMemo } from 'react';
import { Trophy, Search } from 'lucide-react';
import Card from '../components/shared/Card';
import TrendIndicator from '../components/standings/TrendIndicator';
import SortHeader from '../components/standings/SortHeader';
import { managers } from '../data/standings';
import { StandingsSort, Manager } from '../types';

const Standings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState<StandingsSort>({
    field: 'currentPosition',
    direction: 'asc',
  });

  const handleSort = (field: StandingsSort['field']) => {
    setSort(prev => ({
      field,
      direction:
        prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const sortedAndFilteredManagers = useMemo(() => {
    let filtered = managers.filter(
      manager =>
        manager.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        manager.teamName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const modifier = sort.direction === 'asc' ? 1 : -1;
      
      if (sort.field === 'currentPosition') {
        return (a[sort.field] - b[sort.field]) * modifier;
      }
      
      if (sort.field === 'lastRacePoints' || sort.field === 'totalPoints') {
        return (b[sort.field] - a[sort.field]) * modifier;
      }
      
      return a[sort.field].localeCompare(b[sort.field]) * modifier;
    });
  }, [managers, sort, searchQuery]);

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

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return '🏆';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return position;
    }
  };

  return (
    <div className="space-y-8">
      <Card title="Clasificación" icon={Trophy}>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nombre o equipo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              aria-label="Buscar manager"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full" role="table">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left">Pos</th>
                <th className="px-4 py-3 text-left">
                  <SortHeader
                    label="Manager"
                    field="name"
                    currentSort={sort}
                    onSort={handleSort}
                  />
                </th>
                <th className="px-4 py-3 text-left">País</th>
                <th className="px-4 py-3 text-left">
                  <SortHeader
                    label="Equipo"
                    field="teamName"
                    currentSort={sort}
                    onSort={handleSort}
                  />
                </th>
                <th className="px-4 py-3 text-right">
                  <SortHeader
                    label="Última Carrera"
                    field="lastRacePoints"
                    currentSort={sort}
                    onSort={handleSort}
                  />
                </th>
                <th className="px-4 py-3 text-right">
                  <SortHeader
                    label="Total"
                    field="totalPoints"
                    currentSort={sort}
                    onSort={handleSort}
                  />
                </th>
                <th className="px-4 py-3 text-center">Tendencia</th>
              </tr>
            </thead>
            <tbody>
              {sortedAndFilteredManagers.map((manager) => (
                <tr
                  key={manager.id}
                  className={`${getPositionStyle(manager.currentPosition)} ${
                    manager.isCurrentUser ? 'font-medium' : ''
                  }`}
                >
                  <td className="px-4 py-4 text-left">
                    <span className="inline-block min-w-[24px]">
                      {getPositionIcon(manager.currentPosition)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={manager.avatarUrl || '/avatars/default.png'}
                          alt={`${manager.name} avatar`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{manager.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <img
                      src={`/flags/${manager.countryCode.toLowerCase()}.svg`}
                      alt={manager.country}
                      className="w-6 h-4"
                      title={manager.country}
                    />
                  </td>
                  <td className="px-4 py-4">{manager.teamName}</td>
                  <td className="px-4 py-4 text-right">
                    {manager.lastRacePoints.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-right font-medium">
                    {manager.totalPoints.toLocaleString()}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <TrendIndicator
                        trend={manager.trend}
                        previousPosition={manager.previousPosition}
                        currentPosition={manager.currentPosition}
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

export default Standings;