import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensaje de contacto:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y resolveremos todas tus dudas
          </p>
        </div>
      </section>

      {/* Contacto Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
              <p className="text-muted-foreground mb-8">
                ¿Tienes alguna pregunta? Nos encantaría escucharte. Envíanos un mensaje 
                y te responderemos lo antes posible.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contacto@latidoymarea.com</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respondemos en 24-48 horas
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+52 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lun - Vie: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">
                        Ciudad de México, México
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Entregas en toda la ciudad
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horarios</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                        <p>Sábados: 10:00 AM - 2:00 PM</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input 
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input 
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="asunto">Asunto *</Label>
                      <select 
                        id="asunto"
                        value={formData.asunto}
                        onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                        required
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="meal-prep">Consulta sobre Meal Prep</option>
                        <option value="planes">Información de Planes</option>
                        <option value="recetas">Recetas y Nutrición</option>
                        <option value="entrega">Entregas y Logística</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea 
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Cuánto tiempo antes del parto debo contactarlos?</h3>
                <p className="text-muted-foreground">
                  Recomendamos contactarnos 4-6 semanas antes de tu fecha de parto para organizar 
                  todo con anticipación, aunque también aceptamos solicitudes de último momento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Puedo cambiar mi plan después de contratarlo?</h3>
                <p className="text-muted-foreground">
                  ¡Por supuesto! Entendemos que las necesidades cambian. Puedes modificar tu plan 
                  con 48 horas de anticipación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Atienden alergias alimentarias?</h3>
                <p className="text-muted-foreground">
                  Sí, adaptamos completamente nuestros menús a tus necesidades específicas, 
                  incluyendo alergias, intolerancias y preferencias dietéticas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">¿Cuál es la zona de entrega?</h3>
                <p className="text-muted-foreground">
                  Actualmente entregamos en toda la Ciudad de México. Contáctanos para confirmar 
                  si llegamos a tu zona específica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default Contacto;