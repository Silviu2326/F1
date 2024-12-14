import React from 'react';

const RaceCountdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeLabels = {
    days: 'días',
    hours: 'horas',
    minutes: 'minutos',
    seconds: 'segundos'
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-4" role="timer">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <span className="text-2xl font-bold text-[#e10600]">{value}</span>
          </div>
          <span className="text-sm text-gray-600">{timeLabels[unit as keyof typeof timeLabels]}</span>
        </div>
      ))}
    </div>
  );
};

export default RaceCountdown;