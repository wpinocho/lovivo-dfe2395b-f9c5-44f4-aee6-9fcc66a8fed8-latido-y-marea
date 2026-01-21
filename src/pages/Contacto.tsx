import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { callEdge } from '@/lib/edge';
import { STORE_ID } from '@/lib/config';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
      toast({
        title: 'Campos requeridos',
        description: 'Por favor completa nombre, email, teléfono y mensaje',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Construir mensaje de WhatsApp
      const whatsappMessage = `*NUEVO CONTACTO - Latido y Marea*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
${formData.asunto ? `*Asunto:* ${formData.asunto}` : ''}

*Mensaje:*
${formData.mensaje}`;

      // Abrir WhatsApp - usar location.href para mejor compatibilidad
      const whatsappURL = `https://wa.me/525559652494?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Detectar si es móvil o desktop para mejor experiencia
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // En móvil, navegar directamente
        window.location.href = whatsappURL;
      } else {
        // En desktop, abrir en nueva pestaña
        const newWindow = window.open(whatsappURL, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          // Si el pop-up fue bloqueado, usar location.href
          window.location.href = whatsappURL;
        }
      }

      toast({
        title: '¡Redirigiendo a WhatsApp! 📱',
        description: 'Abriendo WhatsApp con tu mensaje pre-llenado...',
        duration: 3000
      });

      // Limpiar formulario después de 1 segundo
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      toast({
        title: 'Error',
        description: 'No se pudo abrir WhatsApp. Por favor contacta directamente al +52 55 5965 2494',
        variant: 'destructive',
        duration: 7000
      });
      setIsSubmitting(false);
    }
  };

  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative bg-white py-20 border-b border-gray-200">
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 sm:mb-6 tracking-wide">
            Contáctanos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y resolveremos todas tus dudas
          </p>
        </div>
      </section>

      {/* Contacto Grid */}
      <section className="py-16 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-black tracking-wide">Información de Contacto</h2>
              <p className="text-gray-700 mb-8">
                ¿Tienes alguna pregunta? Nos encantaría escucharte. Envíanos un mensaje 
                y te responderemos lo antes posible.
              </p>

              <div className="space-y-6">
                <Card className="border border-gray-200 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-black">Email</h3>
                      <p className="text-gray-700">contacto@latidoymarea.com</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Respondemos en 24-48 horas
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-black">Teléfono</h3>
                      <a 
                        href="https://wa.me/525559652494" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary transition-colors underline"
                      >
                        +52 55 5965 2494
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Lun - Vie: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-black">Ubicación</h3>
                      <p className="text-gray-700">
                        Ciudad de México, México
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Atendemos en CDMX y área metropolitana
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:border-primary transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary p-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-black">Horario</h3>
                      <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Sábados: 10:00 AM - 2:00 PM
                      </p>
                      <p className="text-sm text-gray-600 mt-2 italic">
                        *Estamos disponibles 24/7 una vez asegurado el acompañamiento para el parto
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-black tracking-wide">Envíanos un mensaje</h2>
              <Card className="border border-gray-200">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre" className="text-black">Nombre completo</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="mt-2 border-gray-300 focus:border-primary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2 border-gray-300 focus:border-primary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="telefono" className="text-black">Teléfono</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        required
                        className="mt-2 border-gray-300 focus:border-primary"
                      />
                    </div>

                    <div>
                      <Label htmlFor="asunto" className="text-black">Asunto</Label>
                      <Select
                        value={formData.asunto}
                        onValueChange={(value) => setFormData({ ...formData, asunto: value })}
                      >
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-black">
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acompanamiento-parto">Acompañamiento de Parto</SelectItem>
                          <SelectItem value="educacion-menstrual">Educación Menstrual</SelectItem>
                          <SelectItem value="prenatal">Acompañamiento Prenatal</SelectItem>
                          <SelectItem value="postparto">Acompañamiento Postparto</SelectItem>
                          <SelectItem value="meal-prep">Meal Prep</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensaje" className="text-black">Mensaje</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                        rows={5}
                        className="mt-2 border-gray-300 focus:border-primary"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: '#b8a8c4' }}>
        <div className="w-full px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white tracking-wide">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  ¿Cuándo debo contactar a una doula?
                </h3>
                <p className="text-gray-700">
                  Lo ideal es desde el segundo trimestre de embarazo, pero puedes contactarnos 
                  en cualquier momento. Nunca es tarde para recibir acompañamiento.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  ¿Cuánto cuesta el acompañamiento?
                </h3>
                <p className="text-gray-700">
                  Los costos varían según el tipo de acompañamiento. Contáctanos para 
                  una consulta gratuita donde te daremos información detallada.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  ¿Atienden partos en hospital o en casa?
                </h3>
                <p className="text-gray-700">
                  Acompañamos partos en hospitales, casas de parto y partos en casa. 
                  Respetamos tu decisión sobre dónde quieres parir.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">
                  ¿Qué incluye el acompañamiento de parto?
                </h3>
                <p className="text-gray-700 mb-3">
                  El acompañamiento de parto incluye:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Visitas prenatales:</strong> Conocernos, crear tu plan de parto y aprender técnicas para manejo del dolor</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Durante el parto:</strong> Presencia continua, apoyo físico (masajes, posturas), apoyo emocional constante y técnicas de alivio del dolor</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Visita postparto:</strong> Integración de la experiencia, apoyo en lactancia y contención emocional</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span><strong>Disponibilidad:</strong> Contacto durante todo tu embarazo para resolver dudas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default Contacto;