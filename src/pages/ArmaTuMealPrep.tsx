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
    console.log('Solicitud de meal prep:', formData);
    alert('¡Gracias! Te contactaremos pronto para organizar tu plan de comidas.');
  };

  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Arma tu Meal Prep
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organiza tu calendario de comidas post parto. Nosotros nos encargamos de todo, 
            tú solo disfruta de tu bebé.
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Completa el formulario</h3>
              <p className="text-muted-foreground">Cuéntanos sobre tus necesidades y preferencias</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Creamos tu plan</h3>
              <p className="text-muted-foreground">Diseñamos un menú personalizado para ti</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Organizamos entregas</h3>
              <p className="text-muted-foreground">Coordinamos tu calendario de comidas</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">¡Disfruta!</h3>
              <p className="text-muted-foreground">Recibe comidas nutritivas en tu puerta</p>
            </div>
          </div>

          {/* Formulario */}
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Solicita tu Plan Personalizado</h3>
              
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
                  Solicitar mi Plan Personalizado
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
                <h3 className="font-semibold mb-2">Comida Casera</h3>
                <p className="text-sm text-muted-foreground">
                  Preparada con amor e ingredientes frescos
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
                <h3 className="font-semibold mb-2">Apoyo Comunitario</h3>
                <p className="text-sm text-muted-foreground">
                  Conecta con otras mamás en tu misma etapa
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