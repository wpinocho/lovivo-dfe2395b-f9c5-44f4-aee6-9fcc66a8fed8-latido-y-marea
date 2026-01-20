import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Leaf, Heart } from 'lucide-react';

const planes = [
  {
    nombre: 'Plan Básico',
    precio: '$299',
    periodo: '/semana',
    descripcion: 'Perfecto para empezar tu post parto',
    caracteristicas: [
      '5 comidas completas',
      'Menú estándar balanceado',
      'Entrega 2 veces por semana',
      'Envases retornables',
      'Instrucciones de calentado'
    ],
    destacado: false
  },
  {
    nombre: 'Plan Premium',
    precio: '$499',
    periodo: '/semana',
    descripcion: 'El más popular entre nuestras mamás',
    caracteristicas: [
      '7 comidas completas',
      'Menú personalizado',
      'Entrega 3 veces por semana',
      'Snacks saludables incluidos',
      'Asesoría nutricional mensual',
      'Recetas para lactancia',
      'Envases retornables'
    ],
    destacado: true
  },
  {
    nombre: 'Plan Familiar',
    precio: '$799',
    periodo: '/semana',
    descripcion: 'Para toda la familia',
    caracteristicas: [
      '14 comidas completas (2 personas)',
      'Menú familiar adaptado',
      'Entrega 3 veces por semana',
      'Porciones para niños disponibles',
      'Snacks y postres saludables',
      'Asesoría nutricional quincenal',
      'Envases retornables'
    ],
    destacado: false
  }
];

const PideTuComida = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            Pide tu Comida
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para ti y comienza a recibir comidas nutritivas 
            preparadas con amor
          </p>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {planes.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.destacado ? 'border-primary border-2 shadow-xl scale-105' : ''}`}
              >
                {plan.destacado && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                  <p className="text-muted-foreground mb-6">{plan.descripcion}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.precio}</span>
                    <span className="text-muted-foreground">{plan.periodo}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.caracteristicas.map((caracteristica, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.destacado ? "default" : "outline"}
                    size="lg"
                  >
                    Elegir Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">¿Cómo funciona?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Elige tu plan</h3>
              <p className="text-sm text-muted-foreground">
                Selecciona el que mejor se adapte a tus necesidades
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Personaliza</h3>
              <p className="text-sm text-muted-foreground">
                Cuéntanos tus preferencias y restricciones
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Preparamos</h3>
              <p className="text-sm text-muted-foreground">
                Cocinamos tus comidas con ingredientes frescos
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Recibe y disfruta</h3>
              <p className="text-sm text-muted-foreground">
                Te entregamos en tu puerta, listo para calentar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">¿Por qué elegirnos?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Hecho con amor</h3>
                <p className="text-sm text-muted-foreground">
                  Cada comida preparada pensando en tu bienestar
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ingredientes frescos</h3>
                <p className="text-sm text-muted-foreground">
                  Seleccionamos lo mejor para tu nutrición
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ahorra tiempo</h3>
                <p className="text-sm text-muted-foreground">
                  Sin compras ni cocina, más tiempo con tu bebé
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Check className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Nutrición experta</h3>
                <p className="text-sm text-muted-foreground">
                  Diseñado por nutricionistas especializadas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#b8a8c4' }}>
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white tracking-wide">
            ¿Prefieres un plan personalizado?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Agenda una consulta gratuita y diseñamos el plan perfecto para ti
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full text-lg px-12 py-7 bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" style={{ color: '#b8a8c4' }} asChild>
              <a href="/contacto">Contáctanos</a>
            </Button>
            <Button size="lg" className="rounded-full text-lg px-12 py-7 bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" style={{ color: '#b8a8c4' }} asChild>
              <a href="/arma-tu-meal-prep">Ver Meal Prep</a>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default PideTuComida;