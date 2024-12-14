import { Driver, Team, League, News } from '../types';
import { leagues } from './leagues';

const drivers: Driver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    teamLogoUrl: "/team-logos/red-bull.svg",
    cost: 30.5,
    points: 458,
    poles: 12,
    dnfs: 1,
    averageFantasyPoints: 45.8,
    imageUrl: "/drivers/verstappen.jpg",
    nationality: "Holandés",
    countryCode: "NL",
    position: 1,
    previousPosition: 1,
    popularity: 5,
    trend: "stable",
    averageFinishPosition: 1.2,
    pointsPerRace: 25.4,
    positionsGainedAtStart: 2.3,
    podiums: 19,
    lastThreeRaces: [25, 26, 25]
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Mercedes",
    teamLogoUrl: "/team-logos/mercedes.svg",
    cost: 28.5,
    points: 342,
    poles: 8,
    dnfs: 2,
    averageFantasyPoints: 34.2,
    imageUrl: "/drivers/hamilton.jpg",
    nationality: "Británico",
    countryCode: "GB",
    position: 3,
    previousPosition: 4,
    popularity: 5,
    trend: "up",
    averageFinishPosition: 2.8,
    pointsPerRace: 19.0,
    positionsGainedAtStart: 1.8,
    podiums: 15,
    lastThreeRaces: [18, 22, 15]
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "Ferrari",
    teamLogoUrl: "/team-logos/ferrari.svg",
    cost: 25.5,
    points: 328,
    poles: 6,
    dnfs: 3,
    averageFantasyPoints: 32.8,
    imageUrl: "/drivers/leclerc.jpg",
    nationality: "Monegasco",
    countryCode: "MC",
    position: 4,
    previousPosition: 3,
    popularity: 4,
    trend: "down",
    averageFinishPosition: 3.5,
    pointsPerRace: 18.2,
    positionsGainedAtStart: 0.5,
    podiums: 12,
    lastThreeRaces: [12, 18, 15]
  }
];

const teams: Team[] = [
  {
    id: 1,
    name: "Red Bull Racing",
    cost: 35.0,
    points: 860,
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f",
    position: 1,
    wins: 21,
    trend: "up"
  },
  {
    id: 2,
    name: "Mercedes",
    cost: 32.0,
    points: 720,
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f",
    position: 2,
    wins: 13,
    trend: "stable"
  },
  {
    id: 3,
    name: "Ferrari",
    cost: 30.0,
    points: 650,
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f",
    position: 3,
    wins: 8,
    trend: "down"
  }
];

export { leagues, drivers, teams };