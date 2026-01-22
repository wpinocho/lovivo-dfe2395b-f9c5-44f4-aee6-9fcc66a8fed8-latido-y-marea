import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Heart, Salad, Copy, Check, User, Edit2, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LoginModal } from '@/components/auth/LoginModal';
import { useParams } from 'react-router-dom';
import {
  createMealPrepCalendar,
  getMealPrepCalendar,
  updateMealPrepCalendar,
  registerVolunteer,
  getCalendarVolunteers,
  sendVolunteerEmails,
  type MealPrepCalendar,
  type MealPrepVolunteer
} from '@/lib/mealPrepDb';

const ArmaTuMealPrep = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { slug } = useParams();
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calendar, setCalendar] = useState<MealPrepCalendar | null>(null);
  const [volunteers, setVolunteers] = useState<MealPrepVolunteer[]>([]);
  const [isOwner, setIsOwner] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    personas: '',
    preferencias: '',
    alergias: '',
    semanas: '2'
  });
  
  // Estado para el modal de registro de voluntario
  const [volunteerModal, setVolunteerModal] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [volunteerForm, setVolunteerForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Cargar calendario si hay slug en la URL
  useEffect(() => {
    if (slug) {
      loadCalendar(slug);
    }
  }, [slug]);

  // Verificar si el usuario es dueño del calendario
  useEffect(() => {
    if (calendar && user) {
      setIsOwner(calendar.user_id === user.id);
    }
  }, [calendar, user]);

  const loadCalendar = async (calendarSlug: string) => {
    setLoading(true);
    try {
      const cal = await getMealPrepCalendar(calendarSlug);
      if (cal) {
        setCalendar(cal);
        setFormData({
          nombre: cal.nombre,
          fecha: cal.fecha_inicio,
          personas: cal.personas.toString(),
          preferencias: cal.preferencias,
          alergias: cal.alergias,
          semanas: cal.semanas.toString()
        });
        
        // Cargar voluntarios
        const vols = await getCalendarVolunteers(cal.id);
        setVolunteers(vols);
        setShowCalendar(true);
      } else {
        toast({
          title: 'Calendario no encontrado',
          description: 'El calendario que buscas no existe.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error loading calendar:', error);
      toast({
        title: 'Error',
        description: 'No pudimos cargar el calendario.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar autenticación
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    setLoading(true);
    try {
      const newCalendar = await createMealPrepCalendar({
        user_id: user.id,
        nombre: formData.nombre,
        fecha_inicio: formData.fecha,
        personas: parseInt(formData.personas),
        semanas: parseInt(formData.semanas),
        preferencias: formData.preferencias,
        alergias: formData.alergias,
        user_email: user.email || ''
      });

      setCalendar(newCalendar);
      setIsOwner(true);
      setShowCalendar(true);
      setVolunteers([]);

      toast({
        title: '¡Calendario creado!',
        description: 'Ahora puedes compartir el enlace con tu comunidad.',
      });

      // Actualizar la URL sin recargar
      window.history.pushState({}, '', `/arma-tu-meal-prep/${newCalendar.slug}`);
    } catch (error) {
      console.error('Error creating calendar:', error);
      toast({
        title: 'Error',
        description: 'No pudimos crear el calendario. Intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/arma-tu-meal-prep/${calendar?.slug}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: 'Enlace copiado',
      description: 'Compártelo con tu comunidad'
    });
  };

  const handleVolunteerClick = (dayIndex: number) => {
    setSelectedDayIndex(dayIndex);
    setVolunteerModal(true);
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!volunteerForm.nombre || !volunteerForm.email || !calendar || selectedDayIndex === null) {
      toast({
        title: 'Campos requeridos',
        description: 'Por favor completa nombre y email',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      // Calcular fecha de comida
      const startDate = new Date(calendar.fecha_inicio + 'T00:00:00');
      const fechaComida = new Date(startDate);
      fechaComida.setDate(startDate.getDate() + selectedDayIndex);

      // Registrar voluntario
      const newVolunteer = await registerVolunteer({
        calendar_id: calendar.id,
        day_index: selectedDayIndex,
        volunteer_name: volunteerForm.nombre,
        volunteer_email: volunteerForm.email,
        volunteer_phone: volunteerForm.telefono,
        mensaje: volunteerForm.mensaje,
        fecha_comida: fechaComida.toISOString()
      });

      // Enviar emails (confirmación + notificación a creadora)
      await sendVolunteerEmails({
        calendar: calendar,
        volunteer: newVolunteer
      });

      // Actualizar lista de voluntarios
      setVolunteers([...volunteers, newVolunteer]);
      
      toast({
        title: '¡Registro exitoso!',
        description: `${volunteerForm.nombre}, quedaste registrad@ para llevar comida este día. Recibirás un email de confirmación.`,
        duration: 5000
      });
      
      // Cerrar modal y limpiar formulario
      setVolunteerModal(false);
      setVolunteerForm({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
      setSelectedDayIndex(null);
    } catch (error) {
      console.error('Error registering volunteer:', error);
      toast({
        title: 'Error',
        description: 'No pudimos registrar tu participación. Intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCalendar = async () => {
    if (!calendar || !user || !isOwner) return;

    setLoading(true);
    try {
      await updateMealPrepCalendar(calendar.id, user.id, {
        fecha_inicio: formData.fecha,
        semanas: parseInt(formData.semanas)
      });

      toast({
        title: 'Calendario actualizado',
        description: 'Los cambios se guardaron correctamente.'
      });

      // Recargar calendario
      await loadCalendar(calendar.slug);
    } catch (error) {
      console.error('Error updating calendar:', error);
      toast({
        title: 'Error',
        description: 'No pudimos actualizar el calendario.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  // Generar días basados en fecha de parto y semanas solicitadas
  const generateDays = () => {
    if (!calendar) return [];
    
    const days = [];
    const startDate = new Date(calendar.fecha_inicio + 'T00:00:00');
    const numWeeks = calendar.semanas;
    const totalDays = numWeeks * 7;
    
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      // Buscar si hay voluntario para este día
      const volunteer = volunteers.find(v => v.day_index === i);
      
      days.push({
        date: date,
        available: !volunteer,
        volunteer: volunteer?.volunteer_name || null
      });
    }
    return days;
  };

  const days = generateDays();

  if (loading && !calendar) {
    return (
      <EcommerceTemplate showCart={false}>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg text-gray-600">Cargando...</p>
        </div>
      </EcommerceTemplate>
    );
  }

  if (showCalendar && calendar) {
    return (
      <EcommerceTemplate showCart={false}>
        {/* Hero del Calendario */}
        <section className="py-16" style={{ backgroundColor: '#b8a8c4' }}>
          <div className="w-full px-8 md:px-12 lg:px-16">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-white">
                {isOwner ? '¡Tu calendario está listo! 🎉' : `Calendario de ${calendar.nombre}`}
              </h1>
              <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
                {isOwner 
                  ? 'Comparte este enlace con tu comunidad para que se organicen y te lleven comida'
                  : 'Elige un día disponible para llevar comida y apoyar'
                }
              </p>
            </div>

            {/* Enlace para compartir - solo visible para la dueña */}
            {isOwner && (
              <Card className="max-w-2xl mx-auto border border-gray-200">
                <CardContent className="p-6">
                  <Label className="text-white mb-2 block">Enlace para compartir</Label>
                  <div className="flex gap-2">
                    <Input 
                      value={`${window.location.origin}/arma-tu-meal-prep/${calendar.slug}`}
                      readOnly
                      className="flex-1 border-gray-300"
                    />
                    <Button onClick={handleCopyLink} variant="outline">
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-sm text-white/80 mt-2">
                    Comparte este enlace por WhatsApp, email o redes sociales
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Información del calendario */}
        <section className="py-12 bg-white">
          <div className="w-full px-8 md:px-12 lg:px-16">
            <Card className="mb-8 border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black">Información del Calendario</h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="font-semibold text-black">Nombre:</span> {calendar.nombre}
                  </div>
                  <div>
                    <span className="font-semibold text-black">Fecha de inicio:</span> {new Date(calendar.fecha_inicio + 'T00:00:00').toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div>
                    <span className="font-semibold text-black">Personas en casa:</span> {calendar.personas}
                  </div>
                  <div>
                    <span className="font-semibold text-black">Duración:</span> {calendar.semanas} semanas
                  </div>
                  <div>
                    <span className="font-semibold text-black">Preferencias:</span> {calendar.preferencias}
                  </div>
                  {calendar.alergias && (
                    <div>
                      <span className="font-semibold text-black">Alergias/Restricciones:</span> {calendar.alergias}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Controles de Edición - SOLO VISIBLE PARA LA DUEÑA */}
            {isOwner && (
              <Card className="mb-8 border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-black flex items-center gap-2">
                    <Edit2 className="h-5 w-5" />
                    Ajustar Calendario
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ¿El bebé llegó antes o necesitas más tiempo? Puedes modificar tu calendario aquí.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-black mb-2 block">Nueva fecha de inicio</Label>
                      <Input
                        type="date"
                        value={formData.fecha}
                        onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label className="text-black mb-2 block">Semanas de comida</Label>
                      <Input
                        type="number"
                        min="1"
                        max="8"
                        value={formData.semanas}
                        onChange={(e) => setFormData({...formData, semanas: e.target.value})}
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>
                  <Button 
                    className="mt-4 w-full md:w-auto" 
                    variant="outline"
                    onClick={handleUpdateCalendar}
                    disabled={loading}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {loading ? 'Actualizando...' : 'Actualizar Calendario'}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Calendario de días */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-black text-center">
                Calendario de Comidas
              </h2>
              <p className="text-center text-gray-700 mb-8">
                Cada persona puede elegir un día para llevar comida. Los días en verde están disponibles.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {days.map((day, idx) => (
                  <Card 
                    key={idx}
                    className={`border-2 transition-all ${
                      day.available 
                        ? 'border-green-300 hover:border-primary hover:shadow-md cursor-pointer' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold text-black">
                            {day.date.toLocaleDateString('es-MX', { weekday: 'long' })}
                          </div>
                          <div className="text-sm text-gray-600">
                            {day.date.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}
                          </div>
                        </div>
                        {day.available ? (
                          <Badge className="bg-green-500">Disponible</Badge>
                        ) : (
                          <Badge variant="secondary">Ocupado</Badge>
                        )}
                      </div>
                      
                      {day.volunteer ? (
                        <div className="flex items-center gap-2 text-sm mt-3 p-2 bg-white rounded border border-gray-200">
                          <User className="h-4 w-4 text-primary" />
                          <span className="text-gray-700">{day.volunteer} llevará comida</span>
                        </div>
                      ) : (
                        <Button 
                          className="w-full mt-3" 
                          variant="outline"
                          size="sm"
                          onClick={() => handleVolunteerClick(idx)}
                        >
                          Yo llevo comida este día
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instrucciones */}
        <section className="py-16" style={{ backgroundColor: '#b8a8c4' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center mb-8 text-black">
              ¿Cómo funciona para quienes ayudan?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-3">
                    1
                  </div>
                  <h3 className="font-semibold mb-2 text-black">Elige un día</h3>
                  <p className="text-gray-700 text-sm">
                    Selecciona el día que mejor te convenga para llevar comida
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-3">
                    2
                  </div>
                  <h3 className="font-semibold mb-2 text-black">Prepara la comida</h3>
                  <p className="text-gray-700 text-sm">
                    Cocina considerando las preferencias y alergias mencionadas
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-3">
                    3
                  </div>
                  <h3 className="font-semibold mb-2 text-black">Entrega</h3>
                  <p className="text-gray-700 text-sm">
                    Lleva la comida el día seleccionado (preferible en envases retornables)
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-3">
                    4
                  </div>
                  <h3 className="font-semibold mb-2 text-black">Disfruta ayudar</h3>
                  <p className="text-gray-700 text-sm">
                    Tu apoyo es invaluable en esta etapa tan importante
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Botón para crear otro - solo si es la dueña */}
        {isOwner && (
          <section className="py-12 bg-white text-center">
            <Button 
              onClick={() => {
                setShowCalendar(false);
                setCalendar(null);
                setVolunteers([]);
                setFormData({
                  nombre: '',
                  fecha: '',
                  personas: '',
                  preferencias: '',
                  alergias: '',
                  semanas: '2'
                });
                window.history.pushState({}, '', '/arma-tu-meal-prep');
              }} 
              variant="outline" 
              size="lg"
            >
              Crear otro calendario
            </Button>
          </section>
        )}

        {/* Modal de Registro de Voluntario */}
        <Dialog open={volunteerModal} onOpenChange={setVolunteerModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-black">Registrarme para llevar comida</DialogTitle>
              <DialogDescription>
                {selectedDayIndex !== null && days[selectedDayIndex] && (
                  <span className="text-gray-700">
                    Te registrarás para el día {days[selectedDayIndex].date.toLocaleDateString('es-MX', { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </span>
                )}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <Label htmlFor="volunteer-nombre" className="text-black">Nombre completo *</Label>
                <Input
                  id="volunteer-nombre"
                  value={volunteerForm.nombre}
                  onChange={(e) => setVolunteerForm({...volunteerForm, nombre: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-primary"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <Label htmlFor="volunteer-email" className="text-black">Email *</Label>
                <Input
                  id="volunteer-email"
                  type="email"
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-primary"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="volunteer-telefono" className="text-black">Teléfono</Label>
                <Input
                  id="volunteer-telefono"
                  type="tel"
                  value={volunteerForm.telefono}
                  onChange={(e) => setVolunteerForm({...volunteerForm, telefono: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-primary"
                  placeholder="55 1234 5678"
                />
              </div>

              <div>
                <Label htmlFor="volunteer-mensaje" className="text-black">Mensaje (opcional)</Label>
                <Textarea
                  id="volunteer-mensaje"
                  value={volunteerForm.mensaje}
                  onChange={(e) => setVolunteerForm({...volunteerForm, mensaje: e.target.value})}
                  className="mt-2 border-gray-300 focus:border-primary"
                  placeholder="Mensaje de apoyo para la mamá..."
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setVolunteerModal(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? 'Registrando...' : 'Confirmar registro'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Modal de Login */}
        <LoginModal 
          open={showLoginModal} 
          onOpenChange={setShowLoginModal}
          onSuccess={() => {
            // Después del login, reintenta crear el calendario
            handleSubmit(new Event('submit') as any);
          }}
        />
      </EcommerceTemplate>
    );
  }

  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero */}
      <section className="relative min-h-[400px] h-[450px] sm:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/dfe2395b-f9c5-44f4-aee6-9fcc66a8fed8/meal-prep-hero-new.jpg"
            alt="Comida saludable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-8 sm:py-12">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-6 text-white leading-tight tracking-wide">
              Arma tu Meal Prep
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 leading-relaxed">
              Organiza un calendario para que tu comunidad te lleve comida casera en el postparto
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-black tracking-wide">
            ¿Qué es Meal Prep?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Es una herramienta comunitaria que te permite crear un calendario donde familiares, 
            amigas y seres queridos pueden organizarse para llevarte comida casera durante tu postparto. 
            De esta manera, no tienes que preocuparte por cocinar y puedes enfocarte en descansar 
            y cuidar a tu bebé sin descuidarte a ti.
          </p>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="pb-8 sm:pb-16 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 text-black tracking-wide">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-white">Crea tu calendario</h3>
                <p className="text-white/90 text-sm">
                  Completa el formulario con tus datos y preferencias alimenticias
                </p>
              </CardContent>
            </Card>

            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-white">Comparte el enlace</h3>
                <p className="text-white/90 text-sm">
                  Envía el enlace a tu familia y amigas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-white">Se organizan</h3>
                <p className="text-white/90 text-sm">
                  Cada persona elige un día para llevarte comida
                </p>
              </CardContent>
            </Card>

            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-white">Disfruta</h3>
                <p className="text-white/90 text-sm">
                  Recibe comida con amor sin preocuparte por cocinar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 text-black tracking-wide">
            Crea tu calendario
          </h2>
          <Card className="border border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-black">Nombre completo</Label>
                  <Input 
                    id="nombre" 
                    placeholder="Tu nombre" 
                    className="mt-2 border-gray-300 focus:border-primary"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="fecha" className="text-black">Fecha de inicio del calendario</Label>
                  <Input 
                    id="fecha" 
                    type="date" 
                    className="mt-2 border-gray-300 focus:border-primary"
                    value={formData.fecha}
                    onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                    required
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Puede ser tu fecha probable de parto o cuando quieras comenzar a recibir comida
                  </p>
                </div>

                <div>
                  <Label htmlFor="personas" className="text-black">Número de personas en casa</Label>
                  <Input 
                    id="personas" 
                    type="number" 
                    placeholder="2" 
                    className="mt-2 border-gray-300 focus:border-primary"
                    value={formData.personas}
                    onChange={(e) => setFormData({...formData, personas: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="semanas" className="text-black">¿Cuántas semanas te gustaría recibir comida?</Label>
                  <Input 
                    id="semanas" 
                    type="number" 
                    placeholder="2" 
                    min="1"
                    max="8"
                    className="mt-2 border-gray-300 focus:border-primary"
                    value={formData.semanas}
                    onChange={(e) => setFormData({...formData, semanas: e.target.value})}
                    required
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Recomendamos entre 2-4 semanas para el postparto
                  </p>
                </div>

                <div>
                  <Label htmlFor="preferencias" className="text-black">Preferencias alimenticias</Label>
                  <Textarea 
                    id="preferencias" 
                    placeholder="Ej: Vegetariana, vegana, pescetariana, sin gluten, etc." 
                    className="mt-2 border-gray-300 focus:border-primary"
                    rows={4}
                    value={formData.preferencias}
                    onChange={(e) => setFormData({...formData, preferencias: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="alergias" className="text-black">Alergias o restricciones</Label>
                  <Textarea 
                    id="alergias" 
                    placeholder="Alergias alimentarias o ingredientes a evitar" 
                    className="mt-2 border-gray-300 focus:border-primary"
                    rows={3}
                    value={formData.alergias}
                    onChange={(e) => setFormData({...formData, alergias: e.target.value})}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? 'Creando...' : 'Crear mi calendario'}
                </Button>
                
                {!user && (
                  <p className="text-sm text-gray-600 text-center">
                    Al crear el calendario, te pediremos que inicies sesión o crees una cuenta
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-10 text-black">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8" style={{ color: '#b8a8c4' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Planificación</h3>
                <p className="text-white">
                  Organiza todo desde antes y ten la tranquilidad de saber que tendrás comida lista
                </p>
              </CardContent>
            </Card>

            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8" style={{ color: '#b8a8c4' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Comida con amor</h3>
                <p className="text-white">
                  Recibe comida casera hecha con cariño por las personas que te aman
                </p>
              </CardContent>
            </Card>

            <Card className="border-0" style={{ backgroundColor: '#b8a8c4' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" style={{ color: '#b8a8c4' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Red de apoyo</h3>
                <p className="text-white">
                  Activa tu comunidad y permite que te cuiden en esta etapa tan importante
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-white" style={{ backgroundColor: '#b8a8c4' }}>
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white tracking-wide">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contáctanos si tienes dudas sobre cómo armar tu calendario
          </p>
          <Button size="lg" className="rounded-full text-lg px-12 py-7 bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" style={{ color: '#b8a8c4' }} asChild>
            <a href="/contacto">Contáctanos</a>
          </Button>
        </div>
      </section>

      {/* Modal de Login */}
      <LoginModal 
        open={showLoginModal} 
        onOpenChange={setShowLoginModal}
        onSuccess={() => {
          // Después del login exitoso, reintenta el submit
          const form = document.querySelector('form');
          if (form) {
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          }
        }}
      />
    </EcommerceTemplate>
  );
};

export default ArmaTuMealPrep;