import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const Countdown = () => {
  const weddingDate = new Date("2026-01-15T16:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-4 md:p-6 bg-card rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105">
      <span className="text-4xl md:text-6xl font-serif font-bold text-wedding-gold mb-2">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm md:text-base text-wedding-light uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-wedding-rose">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Clock className="w-12 h-12 mx-auto text-wedding-gold mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding mb-4">
            Cuenta Regresiva
          </h2>
          <p className="text-lg text-wedding-light max-w-2xl mx-auto">
            Faltan solo unos momentos para nuestro día especial
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up">
          <TimeUnit value={timeLeft.days} label="Días" />
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
