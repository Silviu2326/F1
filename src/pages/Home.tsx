import React from 'react';
import { motion } from 'framer-motion';
import NextRace from '../components/home/NextRace';
import ChampionshipLeaders from '../components/home/ChampionshipLeaders';
import FeatureCard from '../components/home/FeatureCard';

const nextRaceData = {
  name: "Gran Premio de Australia",
  date: "2024-03-24",
  time: "05:00 GMT",
  circuit: {
    name: "Circuito de Albert Park",
    location: "Melbourne",
    country: "Australia",
    year: 2024
  },
  imageUrl: "https://phantom-marca-mx.unidadeditorial.es/693ec37071321fc55c08821e9e17faf8/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/03/26/16798608994348.jpg"
};

const driversData = [
  {
    position: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    points: 575,
    imageUrl: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1677069646195.jpg",
    teamLogoUrl: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg",
    nationality: "nl",
    lastRaceResult: 1,
    wins: 19
  },
  {
    position: 2,
    name: "Sergio Pérez",
    team: "Red Bull Racing",
    points: 285,
    imageUrl: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg",
    teamLogoUrl: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg",
    nationality: "mx",
    lastRaceResult: 2,
    wins: 2
  },
  {
    position: 3,
    name: "Lewis Hamilton",
    team: "Mercedes",
    points: 234,
    imageUrl: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg",
    teamLogoUrl: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg",
    nationality: "gb",
    lastRaceResult: 3,
    wins: 1
  }
];

const constructorsData = [
  {
    position: 1,
    name: "Red Bull Racing",
    points: 860,
    teamLogoUrl: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg",
    lastRaceResult: 1,
    wins: 21
  },
  {
    position: 2,
    name: "Mercedes",
    points: 409,
    teamLogoUrl: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg",
    lastRaceResult: 2,
    wins: 0
  },
  {
    position: 3,
    name: "Ferrari",
    points: 406,
    teamLogoUrl: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari.jpg",
    lastRaceResult: 3,
    wins: 1
  }
];

const featuredContent = [
  {
    title: "Previo Temporada F1 2024",
    description: "Prepárate para una emocionante temporada 2024 con nuevas regulaciones y cambios en los equipos.",
    imageUrl: "https://media.formula1.com/image/upload/f_auto/q_auto/v1708005760/fom-website/2024/Launches/AT_VCARB01_2024_6.jpg",
    link: "https://www.formula1.com/en/latest/article.first-look-visb-racing-reveal-striking-new-identity-and-2024-challenger-in.3lRzVYHxqPJm0Ib5Oo5uYN.html"
  },
  {
    title: "Presentación Red Bull RB20",
    description: "Red Bull Racing revela su nuevo monoplaza para la temporada 2024 de Fórmula 1.",
    imageUrl: "https://media.formula1.com/image/upload/f_auto/q_auto/v1707997331/fom-website/2024/Launches/RB_RB20_2024_1.jpg",
    link: "https://www.formula1.com/en/latest/article.red-bull-reveal-striking-new-rb20-as-they-bid-to-defend-both-world.6f9zOvhfYZVhcl0GzKFz9g.html"
  }
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 space-y-12"
    >
      {/* Próxima carrera */}
      <section>
        <h2 className="text-2xl font-bold text-[#e10600] mb-6">Próxima Carrera</h2>
        <NextRace race={nextRaceData} />
      </section>

      {/* Líderes del campeonato */}
      <section>
        <h2 className="text-2xl font-bold text-[#e10600] mb-6">Clasificación del Campeonato</h2>
        <ChampionshipLeaders
          drivers={driversData}
          constructors={constructorsData}
        />
      </section>

      {/* Noticias destacadas */}
      <section>
        <h2 className="text-2xl font-bold text-[#e10600] mb-6">Últimas Noticias</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredContent.map((content, index) => (
            <FeatureCard
              key={index}
              {...content}
            />
          ))}
        </div>
      </section>

      {/* Guía Rápida */}
      <section className="bg-gray-900 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#e10600] mb-4">Guía Rápida</h2>
        <div className="space-y-4 text-gray-300">
          <p>¡Bienvenido a F1 Fantasy 2024! Aquí te explicamos cómo empezar:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Crea tu equipo seleccionando pilotos y constructores</li>
            <li>Únete o crea una liga para competir con amigos</li>
            <li>Realiza sustituciones estratégicas antes de cada carrera</li>
            <li>Sigue tu rendimiento en la clasificación</li>
          </ol>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;