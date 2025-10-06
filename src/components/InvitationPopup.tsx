import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Invitation } from '@/models/invitation';
import { getInvitationById } from '@/services/invitationService';

interface InvitationPopupProps {
  invitationId: string;
}

const InvitationPopup = ({ invitationId }: InvitationPopupProps) => {
  const [open, setOpen] = useState(true);
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (invitationId) {
      const invitationData = getInvitationById(invitationId);
      setInvitation(invitationData || null);
      setLoading(false);
    }
  }, [invitationId]);

  const handleClose = () => {
    setOpen(false);
    // Eliminar el parámetro de invitación de la URL sin recargar la página
    navigate('/', { replace: true });
  };

  const handleButtonClick = () => {
    // Simplemente cerramos el diálogo al hacer clic en el botón
    handleClose();
  };

  // No mostrar nada si no hay invitación o está cargando
  if (loading) {
    return null;
  }

  // No mostrar nada si la invitación no existe o no está activa
  if (!invitation || !invitation.active) {
    return null;
  }

  // No hay verificación de expiración ya que se eliminó ese campo

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{invitation.title}</DialogTitle>
          <DialogDescription className="text-center pt-2">
            <span className="block font-medium text-lg mb-2">Para: {invitation.recipientName}</span>
          </DialogDescription>
        </DialogHeader>
        
        {invitation.imageUrl && (
          <div className="flex justify-center my-4">
            <img 
              src={invitation.imageUrl} 
              alt="Imagen de invitación" 
              className="max-h-48 rounded-md object-cover" 
            />
          </div>
        )}
        
        <div className="py-4 text-center">
          <p className="whitespace-pre-line">{invitation.message}</p>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center gap-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleClose}
          >
            Cerrar
          </Button>
          <Button 
            type="button" 
            onClick={handleButtonClick}
          >
            {invitation.buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InvitationPopup;