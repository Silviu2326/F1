import { Driver } from '../types';

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    cost: 30.5,
    points: 458,
    poles: 12,
    dnfs: 1,
    averageFantasyPoints: 45.8,
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f",
    nationality: "Holandés",
    countryCode: "NL",
    position: 1,
    popularity: 5,
    trend: "up"
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Mercedes",
    cost: 28.5,
    points: 342,
    poles: 8,
    dnfs: 2,
    averageFantasyPoints: 34.2,
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f",
    nationality: "Británico",
    countryCode: "GB",
    position: 3,
    popularity: 5,
    trend: "stable"
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "Ferrari",
    cost: 25.5,
    points: 328,
    poles: 6,
    dnfs: 3,
    averageFantasyPoints: 32.8,
    imageUrl: "https://images.unsplash.com/photo-1647516262110-41d025a75a5f",
    nationality: "Monegasco",
    countryCode: "MC",
    position: 4,
    popularity: 4,
    trend: "up"
  }
];