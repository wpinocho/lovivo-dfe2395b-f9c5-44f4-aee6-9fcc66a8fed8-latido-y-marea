import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Heart, Salad, Copy, Check, User, Edit2, Plus } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const ArmaTuMealPrep = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    personas: '',
    preferencias: '',
    alergias: '',
    semanas: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCalendar(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href + '?id=example123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generar días basados en fecha de parto y semanas solicitadas
  const generateDays = () => {
    const days = [];
    const startDate = formData.fecha ? new Date(formData.fecha + 'T00:00:00') : new Date();
    const numWeeks = parseInt(formData.semanas) || 2;
    const totalDays = numWeeks * 7;
    
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push({
        date: date,
        available: i !== 3 && i !== 7, // Algunos días ya ocupados como ejemplo
        volunteer: i === 3 ? 'María G.' : i === 7 ? 'Ana L.' : null
      });
    }
    return days;
  };

  const days = generateDays();

  if (showCalendar) {
    return (
      <EcommerceTemplate showCart={false}>
        {/* Hero del Calendario */}
        <section className="py-16" style={{ backgroundColor: '#e8a77c' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-black">
                ¡Tu calendario está listo! 🎉
              </h1>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                Comparte este enlace con tu comunidad para que se organicen y te lleven comida
              </p>
            </div>

            {/* Enlace para compartir */}
            <Card className="max-w-2xl mx-auto border border-gray-200">
              <CardContent className="p-6">
                <Label className="text-black mb-2 block">Enlace para compartir</Label>
                <div className="flex gap-2">
                  <Input 
                    value="https://latidoymarea.com/meal-prep/maria-lopez"
                    readOnly
                    className="flex-1 border-gray-300"
                  />
                  <Button onClick={handleCopyLink} variant="outline">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Comparte este enlace por WhatsApp, email o redes sociales
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Información del calendario */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="mb-8 border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Información del Calendario</h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="font-semibold text-black">Nombre:</span> {formData.nombre || 'María López'}
                  </div>
                  <div>
                    <span className="font-semibold text-black">Fecha de inicio:</span> {formData.fecha ? new Date(formData.fecha + 'T00:00:00').toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }) : '15 de Marzo, 2025'}
                  </div>
                  <div>
                    <span className="font-semibold text-black">Personas en casa:</span> {formData.personas || '3'}
                  </div>
                  <div>
                    <span className="font-semibold text-black">Duración:</span> {formData.semanas || '2'} semanas
                  </div>
                  <div>
                    <span className="font-semibold text-black">Preferencias:</span> {formData.preferencias || 'Sin gluten, vegetariana'}
                  </div>
                  {(formData.alergias || 'Nueces') && (
                    <div>
                      <span className="font-semibold text-black">Alergias/Restricciones:</span> {formData.alergias || 'Nueces'}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Controles de Edición */}
            <Card className="mb-8 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-black flex items-center gap-2">
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
                <Button className="mt-4 w-full md:w-auto" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Actualizar Calendario
                </Button>
              </CardContent>
            </Card>

            {/* Calendario de días */}
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-black text-center">
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
        <section className="py-16" style={{ backgroundColor: '#e8a77c' }}>
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

        {/* Botón para crear otro */}
        <section className="py-12 bg-white text-center">
          <Button 
            onClick={() => setShowCalendar(false)} 
            variant="outline" 
            size="lg"
          >
            Crear otro calendario
          </Button>
        </section>
      </EcommerceTemplate>
    );
  }

  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/dfe2395b-f9c5-44f4-aee6-9fcc66a8fed8/meal-prep-hero.jpg"
            alt="Comida saludable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
              Arma tu Meal Prep
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Organiza un calendario para que tu comunidad te lleve comida casera en el postparto
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
            ¿Qué es Meal Prep?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Es una herramienta comunitaria que te permite crear un calendario donde familiares, 
            amigas y seres queridos pueden organizarse para llevarte comida casera durante tu postparto. 
            De esta manera, no tienes que preocuparte por cocinar y puedes enfocarte en descansar 
            y cuidar a tu bebé.
          </p>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20" style={{ backgroundColor: '#e8a77c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-black">Crea tu calendario</h3>
                <p className="text-gray-700 text-sm">
                  Completa el formulario con tus datos y preferencias alimenticias
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-black">Comparte el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Envía el enlace a tu familia y amigas
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-black">Se organizan</h3>
                <p className="text-gray-700 text-sm">
                  Cada persona elige un día para llevarte comida
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-black">Disfruta</h3>
                <p className="text-gray-700 text-sm">
                  Recibe comida con amor sin preocuparte por cocinar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
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
                    placeholder="Ej: Vegetariana, sin gluten, alergias, etc." 
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

                <Button type="submit" className="w-full" size="lg">
                  Crear mi calendario
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20" style={{ backgroundColor: '#e8a77c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Planificación</h3>
              <p className="text-gray-700">
                Organiza todo desde antes y ten la tranquilidad de saber que tendrás comida lista
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Comida con amor</h3>
              <p className="text-gray-700">
                Recibe comida casera hecha con cariño por las personas que te aman
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Red de apoyo</h3>
              <p className="text-gray-700">
                Activa tu comunidad y permite que te cuiden en esta etapa tan importante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ backgroundColor: '#e8a77c' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contáctanos si tienes dudas sobre cómo armar tu calendario
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
            <a href="/contacto">Contáctanos</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default ArmaTuMealPrep;