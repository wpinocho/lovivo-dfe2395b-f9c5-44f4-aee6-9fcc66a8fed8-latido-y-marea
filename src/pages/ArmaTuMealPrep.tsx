import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users, ChefHat } from 'lucide-react';
import { useState } from 'react';

const ArmaTuMealPrep = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaParto: '',
    numeroPersonas: '2',
    preferencias: '',
    alergias: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitud de calendario comunitario:', formData);
    alert('¡Gracias! Te enviaremos un enlace único que podrás compartir con tu comunidad para que se organicen y te lleven comida casera en tu postparto.');
  };

  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&h=900&fit=crop"
            alt="Meal Prep Comunitario"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-primary/70 to-secondary/60"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-white text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Arma tu Meal Prep
            </h1>
            <p className="text-2xl font-light">
              Organiza un calendario comunitario para que tus amigas, familiares y seres queridos 
              se turnen para llevarte comida casera en tu postparto. Para que nunca te olvides de comer.
            </p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">¿Cómo funciona?</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Crea tu calendario</h3>
              <p className="text-muted-foreground">Comparte tu fecha de parto y preferencias alimenticias</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Comparte el enlace</h3>
              <p className="text-muted-foreground">Envía el calendario a tu comunidad (familia, amigas, vecinas)</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Ellas se organizan</h3>
              <p className="text-muted-foreground">Cada persona elige un día para llevarte comida casera</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">¡Disfruta!</h3>
              <p className="text-muted-foreground">Recibe amor en forma de comida sin preocuparte</p>
            </div>
          </div>

          {/* Formulario */}
          <Card className="max-w-3xl mx-auto shadow-2xl border-2 hover:border-primary/30 transition-all">
            <CardContent className="p-10">
              <h3 className="text-3xl font-display font-bold mb-6">Crea tu Calendario Comunitario</h3>
              <p className="text-muted-foreground mb-6">
                Completa este formulario y te enviaremos un enlace único que podrás compartir 
                con tu comunidad para que se organicen y te apoyen con comida casera.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input 
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="fechaParto">Fecha aproximada de parto *</Label>
                    <Input 
                      id="fechaParto"
                      type="date"
                      value={formData.fechaParto}
                      onChange={(e) => setFormData({...formData, fechaParto: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="numeroPersonas">¿Para cuántas personas? *</Label>
                  <select 
                    id="numeroPersonas"
                    value={formData.numeroPersonas}
                    onChange={(e) => setFormData({...formData, numeroPersonas: e.target.value})}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    required
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5+">5+ personas</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="preferencias">Preferencias alimenticias</Label>
                  <Textarea 
                    id="preferencias"
                    value={formData.preferencias}
                    onChange={(e) => setFormData({...formData, preferencias: e.target.value})}
                    placeholder="Ej: vegetariana, sin lácteos, etc."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="alergias">Alergias o restricciones</Label>
                  <Textarea 
                    id="alergias"
                    value={formData.alergias}
                    onChange={(e) => setFormData({...formData, alergias: e.target.value})}
                    placeholder="Cuéntanos sobre alergias o restricciones alimenticias importantes"
                    rows={3}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Crear mi Calendario
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios de tu Meal Prep</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Planificación Total</h3>
                <p className="text-sm text-muted-foreground">
                  Calendario organizado para todo tu post parto
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Comida con Amor</h3>
                <p className="text-sm text-muted-foreground">
                  Recibe comida casera hecha por quienes te quieren
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ahorra Tiempo</h3>
                <p className="text-sm text-muted-foreground">
                  Dedica tu tiempo a lo que importa: tu bebé
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Red de Apoyo</h3>
                <p className="text-sm text-muted-foreground">
                  Tu comunidad organizada para cuidarte
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default ArmaTuMealPrep;