import { useState } from "react";
import { Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attendance: "",
    dietaryRestrictions: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.attendance) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Aquí iría la lógica para enviar los datos
    toast({
      title: "¡Gracias por confirmar!",
      description: "Hemos recibido tu confirmación de asistencia",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      guests: "1",
      attendance: "",
      dietaryRestrictions: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-4 bg-wedding-rose">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <Heart className="w-12 h-12 mx-auto text-wedding-gold mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding mb-4">
            Confirma tu Asistencia
          </h2>
          <p className="text-lg text-wedding-light">
            Tu presencia es el mejor regalo. Por favor confirma antes del 1 de Junio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-elegant animate-fade-in-up">
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-wedding mb-2 block">
                Nombre Completo *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
                required
                className="border-wedding-gold/30 focus:border-wedding-gold"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-wedding mb-2 block">
                Correo Electrónico *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                required
                className="border-wedding-gold/30 focus:border-wedding-gold"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="guests" className="text-wedding mb-2 block">
                  Número de Invitados
                </Label>
                <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                  <SelectTrigger className="border-wedding-gold/30 focus:border-wedding-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 persona</SelectItem>
                    <SelectItem value="2">2 personas</SelectItem>
                    <SelectItem value="3">3 personas</SelectItem>
                    <SelectItem value="4">4 personas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="attendance" className="text-wedding mb-2 block">
                  ¿Asistirás? *
                </Label>
                <Select value={formData.attendance} onValueChange={(value) => setFormData({ ...formData, attendance: value })}>
                  <SelectTrigger className="border-wedding-gold/30 focus:border-wedding-gold">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">¡Sí, asistiré!</SelectItem>
                    <SelectItem value="no">No podré asistir</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="dietary" className="text-wedding mb-2 block">
                Restricciones Alimentarias
              </Label>
              <Input
                id="dietary"
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                placeholder="Vegetariano, alergias, etc."
                className="border-wedding-gold/30 focus:border-wedding-gold"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-wedding mb-2 block">
                Mensaje para los Novios
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Comparte tus buenos deseos..."
                rows={4}
                className="border-wedding-gold/30 focus:border-wedding-gold resize-none"
              />
            </div>

            <Button type="submit" variant="wedding" size="lg" className="w-full">
              <Send className="w-5 h-5" />
              Confirmar Asistencia
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
