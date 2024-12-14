import { League } from '../types';

export const leagues: League[] = [
  {
    id: 1,
    name: "Global F1 Masters",
    members: 1500,
    type: "public",
    iconUrl: "/icons/trophy.svg",
    averagePoints: 458.5,
    averagePosition: 2.3,
    region: "Global",
    description: "La liga más prestigiosa con los mejores jugadores de todo el mundo",
    isJoined: false
  },
  {
    id: 2,
    name: "Liga Española F1",
    members: 850,
    type: "public",
    iconUrl: "/icons/spain.svg",
    averagePoints: 385.2,
    averagePosition: 3.1,
    region: "España",
    description: "Compite con los mejores managers españoles de F1 Fantasy",
    isJoined: true
  },
  {
    id: 3,
    name: "F1 Pro League",
    members: 2300,
    type: "public",
    iconUrl: "/icons/racing.svg",
    averagePoints: 412.8,
    averagePosition: 2.8,
    region: "Global",
    description: "Liga profesional con los equipos más competitivos",
    isJoined: false
  }
];