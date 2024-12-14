import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';
import Card from '../components/shared/Card';
import { leagues } from '../data/leagues';
import LeagueCard from '../components/leagues/LeagueCard';

const Leagues = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLeagues = leagues.filter(league =>
    league.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    league.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    league.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleJoinLeague = (leagueId: number) => {
    // TODO: Implementar lógica para unirse a una liga
    console.log('Unirse a la liga:', leagueId);
  };

  const handleExploreLeague = (leagueId: number) => {
    // TODO: Implementar lógica para explorar una liga
    console.log('Explorar liga:', leagueId);
  };

  return (
    <div className="space-y-8">
      <Card title="Ligas Públicas" icon={Users}>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar ligas por nombre, descripción o región..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              aria-label="Buscar ligas"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredLeagues.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No se encontraron ligas que coincidan con tu búsqueda
            </p>
          ) : (
            filteredLeagues.map(league => (
              <LeagueCard
                key={league.id}
                league={league}
                onJoin={handleJoinLeague}
                onExplore={handleExploreLeague}
              />
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default Leagues;