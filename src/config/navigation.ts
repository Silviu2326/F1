import { Home, Users, Trophy, BarChart2, UserCircle } from 'lucide-react';

export const navigationLinks = [
  {
    to: '/',
    icon: Home,
    children: 'Inicio'
  },
  {
    to: '/my-team',
    icon: UserCircle,
    children: 'Mi Equipo'
  },
  {
    to: '/leagues',
    icon: Users,
    children: 'Ligas'
  },
  {
    to: '/standings',
    icon: Trophy,
    children: 'Clasificaciones'
  },
  {
    to: '/stats',
    icon: BarChart2,
    children: 'Estadísticas'
  }
];