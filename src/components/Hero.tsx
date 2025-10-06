import { Heart } from "lucide-react";
import heroImage from "@/assets/wedding-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Celebración de boda elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Heart className="absolute top-20 left-[10%] text-wedding-gold opacity-30 w-8 h-8 animate-float" style={{ animationDelay: "0s" }} />
        <Heart className="absolute top-40 right-[15%] text-wedding-gold opacity-20 w-6 h-6 animate-float" style={{ animationDelay: "1s" }} />
        <Heart className="absolute bottom-32 left-[20%] text-wedding-gold opacity-25 w-7 h-7 animate-float" style={{ animationDelay: "2s" }} />
        <Heart className="absolute bottom-20 right-[25%] text-wedding-gold opacity-30 w-5 h-5 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 py-20 animate-fade-in">
        <div className="mb-8">
          <Heart className="w-16 h-16 mx-auto text-wedding-gold mb-6 animate-scale-in" />
        </div>
        
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-wedding mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Ana & Carlos
        </h1>
        
        <div className="w-32 h-1 gradient-gold mx-auto mb-8 animate-scale-in" style={{ animationDelay: "0.4s" }} />
        
        <p className="font-serif text-2xl md:text-3xl text-wedding-light mb-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          ¡Nos Casamos!
        </p>
        
        <p className="text-xl md:text-2xl text-wedding-light font-light animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          15 de Junio, 2025
        </p>
        
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <p className="text-lg md:text-xl text-wedding-light mb-6 max-w-2xl mx-auto">
            Con la bendición de Dios y nuestras familias, te invitamos a compartir este día tan especial
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-wedding-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-wedding-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
