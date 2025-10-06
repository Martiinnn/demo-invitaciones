// Modelo para las invitaciones personalizadas

export interface Invitation {
  id: string;
  title: string;
  message: string;
  recipientName: string;
  createdAt: string;
  imageUrl?: string;
  buttonText: string;
  active: boolean;
}

// Función para crear una nueva invitación
export const createInvitation = (data: Omit<Invitation, 'id' | 'createdAt'>): Invitation => {
  return {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
};

// Función para validar una invitación
export const validateInvitation = (invitation: Invitation): boolean => {
  if (!invitation.title || !invitation.message || !invitation.recipientName || !invitation.buttonText) {
    return false;
  }
  
  return true;
};