import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const ceremonyLocation = {
    name: "Iglesia San Francisco de Asís",
    address: "Calle Principal #123, Centro Histórico",
    mapsUrl: "https://maps.google.com/?q=Iglesia+San+Francisco",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8817494678804!2d-99.16560548507988!3d19.432607986886617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sCatedral%20Metropolitana%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1sen!2smx!4v1635789012345!5m2!1sen!2smx",
  };

  const receptionLocation = {
    name: "Jardín de Eventos La Rosaleda",
    address: "Av. de los Jardines #456, Zona Residencial",
    mapsUrl: "https://maps.google.com/?q=Jardín+La+Rosaleda",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9875494678804!2d-99.17560548507988!3d19.422607986886617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff8!2sJardin!5e0!3m2!1sen!2smx!4v1635789012346!5m2!1sen!2smx",
  };

  const LocationCard = ({ location, title }: { location: typeof ceremonyLocation; title: string }) => (
    <div className="bg-card rounded-2xl shadow-elegant overflow-hidden hover:shadow-gold transition-all duration-300">
      <div className="relative h-64 md:h-80">
        <iframe
          src={location.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${location.name}`}
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-wedding mb-2">
          {title}
        </h3>
        <p className="font-semibold text-lg text-wedding mb-2">
          {location.name}
        </p>
        <p className="text-wedding-light mb-6 flex items-start gap-2">
          <MapPin className="w-5 h-5 text-wedding-gold flex-shrink-0 mt-1" />
          <span>{location.address}</span>
        </p>
        <Button
          variant="wedding"
          size="lg"
          className="w-full"
          onClick={() => window.open(location.mapsUrl, "_blank")}
        >
          <Navigation className="w-5 h-5" />
          Cómo Llegar
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-wedding-rose">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <MapPin className="w-12 h-12 mx-auto text-wedding-gold mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding mb-4">
            Ubicaciones
          </h2>
          <p className="text-lg text-wedding-light max-w-2xl mx-auto">
            Encuentra fácilmente los lugares donde celebraremos nuestro amor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <LocationCard location={ceremonyLocation} title="Ceremonia" />
          <LocationCard location={receptionLocation} title="Recepción" />
        </div>
      </div>
    </section>
  );
};

export default Location;
