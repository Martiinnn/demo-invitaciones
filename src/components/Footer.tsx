import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 gradient-romantic">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <Heart className="w-12 h-12 mx-auto text-wedding-gold animate-float" />
        </div>
        
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-wedding mb-4">
          Ana & Carlos
        </h3>
        
        <p className="text-wedding-light mb-2">
          15 de Junio, 2025
        </p>
        
        <div className="w-24 h-0.5 gradient-gold mx-auto my-6" />
        
        <p className="text-sm text-wedding-light italic max-w-xl mx-auto">
          "Donde hay amor, hay vida"
        </p>
        
        <p className="text-xs text-wedding-light mt-8">
          © 2025 - Invitación de Boda Interactiva
        </p>
      </div>
    </footer>
  );
};

export default Footer;
