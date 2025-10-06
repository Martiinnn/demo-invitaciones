import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Invitation } from '@/models/invitation';
import { getAllInvitations, addInvitation, updateInvitation, deleteInvitation } from '@/services/invitationService';
import { PlusCircle, Trash2, Edit, Eye } from 'lucide-react';
import AdminLogin from '@/components/AdminLogin';

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [activeTab, setActiveTab] = useState('create');
  const [formData, setFormData] = useState<Omit<Invitation, 'id' | 'createdAt'>>({  
    title: '',
    message: '',
    recipientName: '',
    buttonText: 'Confirmar asistencia',
    active: true,
    imageUrl: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Verificar autenticación y cargar invitaciones al iniciar
  useEffect(() => {
    const authenticated = localStorage.getItem('adminAuthenticated') === 'true';
    setIsAuthenticated(authenticated);
    
    if (authenticated) {
      loadInvitations();
    }
  }, []);

  const loadInvitations = () => {
    const data = getAllInvitations();
    setInvitations(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, active: checked }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      message: '',
      recipientName: '',
      buttonText: 'Confirmar asistencia',
      active: true,
      imageUrl: '',
    });
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.message || !formData.recipientName) {
      toast({
        title: 'Campos incompletos',
        description: 'Por favor completa todos los campos obligatorios',
        variant: 'destructive',
      });
      return;
    }

    try {
      if (editingId) {
        updateInvitation(editingId, formData);
        toast({
          title: 'Invitación actualizada',
          description: 'La invitación ha sido actualizada correctamente',
        });
      } else {
        addInvitation(formData);
        toast({
          title: 'Invitación creada',
          description: 'La invitación ha sido creada correctamente',
        });
      }
      
      resetForm();
      loadInvitations();
      // Cambiar a la pestaña de lista después de guardar
      setActiveTab('list');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ha ocurrido un error al guardar la invitación',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (invitation: Invitation) => {
    setFormData({
      title: invitation.title,
      message: invitation.message,
      recipientName: invitation.recipientName,
      buttonText: invitation.buttonText,
      active: invitation.active,
      imageUrl: invitation.imageUrl || '',
    });
    setEditingId(invitation.id);
    
    // Cambiar a la pestaña de creación/edición
    setActiveTab('create');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta invitación?')) {
      deleteInvitation(id);
      loadInvitations();
      toast({
        title: 'Invitación eliminada',
        description: 'La invitación ha sido eliminada correctamente',
      });
    }
  };

  const handlePreview = (invitation: Invitation) => {
    // Construir la URL con el parámetro de invitación
    const previewUrl = `/?invitation=${invitation.id}`;
    window.open(previewUrl, '_blank');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    loadInvitations();
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center">Panel de Administración</h1>
        <Button variant="outline" onClick={handleLogout}>Cerrar sesión</Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="create">{editingId ? 'Editar Invitación' : 'Crear Invitación'}</TabsTrigger>
          <TabsTrigger value="list">Lista de Invitaciones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? 'Editar Invitación' : 'Crear Nueva Invitación'}</CardTitle>
              <CardDescription>
                Completa el formulario para {editingId ? 'actualizar la' : 'crear una nueva'} invitación personalizada.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título *</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Invitación especial para ti" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="recipientName">Nombre del destinatario *</Label>
                  <Input 
                    id="recipientName" 
                    name="recipientName" 
                    value={formData.recipientName} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Juan y María" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Escribe un mensaje personalizado para la invitación" 
                    rows={4} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="buttonText">Texto del botón *</Label>
                  <Input 
                    id="buttonText" 
                    name="buttonText" 
                    value={formData.buttonText} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Confirmar asistencia" 
                    required 
                  />
                </div>
                

                
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">URL de imagen (opcional)</Label>
                  <Input 
                    id="imageUrl" 
                    name="imageUrl" 
                    value={formData.imageUrl || ''} 
                    onChange={handleInputChange} 
                    placeholder="Ej: https://ejemplo.com/imagen.jpg" 
                  />
                </div>
                

                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="active" 
                    checked={formData.active} 
                    onCheckedChange={handleSwitchChange} 
                  />
                  <Label htmlFor="active">Invitación activa</Label>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingId ? 'Actualizar' : 'Crear'} Invitación
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Invitaciones Creadas</CardTitle>
              <CardDescription>
                Gestiona las invitaciones personalizadas que has creado.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {invitations.length === 0 ? (
                <p className="text-center py-4 text-muted-foreground">
                  No hay invitaciones creadas. Crea una nueva invitación para comenzar.
                </p>
              ) : (
                <div className="space-y-4">
                  {invitations.map(invitation => (
                    <Card key={invitation.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{invitation.title}</CardTitle>
                          <div className="flex space-x-2">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handlePreview(invitation)}
                              title="Vista previa"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleEdit(invitation)}
                              title="Editar"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleDelete(invitation.id)}
                              title="Eliminar"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardDescription>
                          Para: {invitation.recipientName}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">{invitation.message}</p>
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                          <span>Creada: {new Date(invitation.createdAt).toLocaleDateString()}</span>
                          <span className={invitation.active ? 'text-green-600' : 'text-red-600'}>
                            {invitation.active ? 'Activa' : 'Inactiva'}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <div className="text-xs text-muted-foreground">
                          URL: <code className="bg-muted px-1 py-0.5 rounded">/?invitation={invitation.id}</code>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;