import { Gift, Shirt, Music, Camera } from "lucide-react";

const InfoSections = () => {
  const sections = [
    {
      icon: Shirt,
      title: "Código de Vestimenta",
      description: "Formal / Elegante",
      details: "Sugerimos colores claros para la ceremonia. Por favor evita el blanco y negro total.",
    },
    {
      icon: Gift,
      title: "Mesa de Regalos",
      description: "Tu presencia es nuestro mejor regalo",
      details: "Si deseas obsequiarnos algo, tenemos mesa de regalos en Liverpool y Amazon.",
    },
    {
      icon: Camera,
      title: "Fotografías",
      description: "Captura cada momento",
      details: "Usa el hashtag #AnaYCarlos2024 para compartir tus fotos en redes sociales.",
    },
    {
      icon: Music,
      title: "Música",
      description: "Ayúdanos con el playlist",
      details: "¿Tienes una canción especial? Sugiérela en el formulario de confirmación.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding mb-4">
            Información Importante
          </h2>
          <p className="text-lg text-wedding-light max-w-2xl mx-auto">
            Algunos detalles que queremos que conozcas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <Icon className="w-8 h-8 text-wedding" />
                </div>
                <h3 className="font-serif text-xl font-bold text-wedding mb-2">
                  {section.title}
                </h3>
                <p className="text-wedding-gold font-semibold mb-3">
                  {section.description}
                </p>
                <p className="text-sm text-wedding-light">
                  {section.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
