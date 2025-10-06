// Servicio para gestionar las invitaciones
import { Invitation, createInvitation } from '@/models/invitation';

const STORAGE_KEY = 'heart-flutter-invitations';

// Obtener todas las invitaciones
export const getAllInvitations = (): Invitation[] => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) return [];
  
  try {
    return JSON.parse(storedData) as Invitation[];
  } catch (error) {
    console.error('Error parsing invitations from localStorage:', error);
    return [];
  }
};

// Guardar todas las invitaciones
const saveInvitations = (invitations: Invitation[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invitations));
};

// Obtener una invitación por ID
export const getInvitationById = (id: string): Invitation | undefined => {
  const invitations = getAllInvitations();
  return invitations.find(invitation => invitation.id === id);
};

// Añadir una nueva invitación
export const addInvitation = (data: Omit<Invitation, 'id' | 'createdAt'>): Invitation => {
  const newInvitation = createInvitation(data);
  const invitations = getAllInvitations();
  
  invitations.push(newInvitation);
  saveInvitations(invitations);
  
  return newInvitation;
};

// Actualizar una invitación existente
export const updateInvitation = (id: string, data: Partial<Invitation>): Invitation | null => {
  const invitations = getAllInvitations();
  const index = invitations.findIndex(invitation => invitation.id === id);
  
  if (index === -1) return null;
  
  const updatedInvitation = { ...invitations[index], ...data };
  invitations[index] = updatedInvitation;
  
  saveInvitations(invitations);
  return updatedInvitation;
};

// Eliminar una invitación
export const deleteInvitation = (id: string): boolean => {
  const invitations = getAllInvitations();
  const filteredInvitations = invitations.filter(invitation => invitation.id !== id);
  
  if (filteredInvitations.length === invitations.length) return false;
  
  saveInvitations(filteredInvitations);
  return true;
};