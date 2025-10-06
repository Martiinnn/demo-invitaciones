import { Image } from "lucide-react";
import ringsImage from "@/assets/rings.jpg";
import bouquetImage from "@/assets/bouquet.jpg";
import coupleImage from "@/assets/couple-sunset.jpg";
import ceremonyImage from "@/assets/ceremony.jpg";
import receptionImage from "@/assets/reception.jpg";

const Gallery = () => {
  const images = [
    { src: ringsImage, alt: "Anillos de boda elegantes", span: "md:col-span-2" },
    { src: bouquetImage, alt: "Hermoso ramo de novia", span: "md:col-span-1" },
    { src: coupleImage, alt: "Pareja al atardecer", span: "md:col-span-1" },
    { src: ceremonyImage, alt: "Ceremonia de boda", span: "md:col-span-1" },
    { src: receptionImage, alt: "Recepción elegante", span: "md:col-span-2" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Image className="w-12 h-12 mx-auto text-wedding-gold mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding mb-4">
            Galería de Momentos
          </h2>
          <p className="text-lg text-wedding-light max-w-2xl mx-auto">
            Una pequeña muestra de lo que será nuestro día especial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 animate-fade-in-up">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wedding-light italic">
            Más fotos serán compartidas después de la celebración
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
