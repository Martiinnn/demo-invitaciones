import { Church, Utensils, Music, Camera } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      time: "16:00",
      title: "Ceremonia Religiosa",
      description: "Iglesia San Francisco de Asís",
      icon: Church,
    },
    {
      time: "18:00",
      title: "Cóctel de Bienvenida",
      description: "Jardín del salón de eventos",
      icon: Utensils,
    },
    {
      time: "19:30",
      title: "Cena y Celebración",
      description: "Salón principal",
      icon: Utensils,
    },
    {
      time: "22:00",
      title: "Baile y Fiesta",
      description: "¡Hasta que el cuerpo aguante!",
      icon: Music,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Camera className="w-12 h-12 mx-auto text-wedding-gold mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding mb-4">
            Itinerario del Día
          </h2>
          <p className="text-lg text-wedding-light max-w-2xl mx-auto">
            Celebraremos juntos cada momento de este día inolvidable
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-wedding-gold via-wedding-gold to-transparent" />

          {events.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} ml-20 md:ml-0`}>
                    <div className="bg-card p-6 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105">
                      <span className="text-wedding-gold font-serif text-2xl font-bold">
                        {event.time}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-wedding mt-2 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-wedding-light">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 gradient-gold rounded-full flex items-center justify-center shadow-gold z-10">
                    <Icon className="w-8 h-8 text-wedding" />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
