export interface Driver {
  id: number;
  name: string;
  team: string;
  teamLogoUrl: string;
  cost: number;
  points: number;
  poles: number;
  dnfs: number;
  averageFantasyPoints: number;
  imageUrl: string;
  nationality: string;
  countryCode: string;
  position: number;
  previousPosition: number;
  popularity: number;
  trend: 'up' | 'down' | 'stable';
  averageFinishPosition: number;
  pointsPerRace: number;
  positionsGainedAtStart: number;
  podiums: number;
  lastThreeRaces: number[];
}

export interface Team {
  id: number;
  name: string;
  cost: number;
  points: number;
  imageUrl: string;
  position: number;
  wins: number;
  trend: 'up' | 'down' | 'stable';
}

export interface League {
  id: number;
  name: string;
  members: number;
  type: 'public' | 'private';
  iconUrl?: string;
  averagePoints: number;
  averagePosition: number;
  region: string;
  description: string;
  isJoined?: boolean;
}

export interface News {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
}

export interface Manager {
  id: number;
  name: string;
  avatarUrl?: string;
  teamName: string;
  country: string;
  countryCode: string;
  currentPosition: number;
  previousPosition: number;
  lastRacePoints: number;
  totalPoints: number;
  trend: 'up' | 'down' | 'stable';
  isCurrentUser?: boolean;
}

export interface StandingsSort {
  field: 'currentPosition' | 'lastRacePoints' | 'totalPoints' | 'name' | 'teamName';
  direction: 'asc' | 'desc';
}