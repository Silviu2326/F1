import { Manager } from '../types';

export const managers: Manager[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    avatarUrl: "/avatars/user1.jpg",
    teamName: "Red Bull Warriors",
    country: "España",
    countryCode: "ES",
    currentPosition: 1,
    previousPosition: 1,
    lastRacePoints: 185,
    totalPoints: 1250,
    trend: "stable",
    isCurrentUser: false
  },
  {
    id: 2,
    name: "María González",
    avatarUrl: "/avatars/user2.jpg",
    teamName: "Ferrari Dreams",
    country: "México",
    countryCode: "MX",
    currentPosition: 2,
    previousPosition: 3,
    lastRacePoints: 165,
    totalPoints: 1180,
    trend: "up",
    isCurrentUser: true
  },
  {
    id: 3,
    name: "John Smith",
    avatarUrl: "/avatars/user3.jpg",
    teamName: "McLaren Masters",
    country: "Reino Unido",
    countryCode: "GB",
    currentPosition: 3,
    previousPosition: 2,
    lastRacePoints: 145,
    totalPoints: 1150,
    trend: "down",
    isCurrentUser: false
  },
  {
    id: 4,
    name: "Laura Martínez",
    avatarUrl: "/avatars/user4.jpg",
    teamName: "Mercedes Power",
    country: "Argentina",
    countryCode: "AR",
    currentPosition: 4,
    previousPosition: 4,
    lastRacePoints: 142,
    totalPoints: 1080,
    trend: "stable",
    isCurrentUser: false
  },
  {
    id: 5,
    name: "Alessandro Rossi",
    avatarUrl: "/avatars/user5.jpg",
    teamName: "Alfa Romeo Racing",
    country: "Italia",
    countryCode: "IT",
    currentPosition: 5,
    previousPosition: 6,
    lastRacePoints: 138,
    totalPoints: 1020,
    trend: "up",
    isCurrentUser: false
  }
];
