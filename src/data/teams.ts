import { Team } from '../types';

export const teams: Team[] = [
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