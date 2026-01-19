import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Moon, Sun, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicios = [
  {
    icono: Moon,
    titulo: 'Educación Menstrual',
    descripcion: 'Talleres y acompañamiento para reconectar con tu ciclo menstrual',
    incluye: [
      'Conocimiento del ciclo menstrual',
      'Autoconocimiento y registro cíclico',
      'Herramientas de autocuidado',
      'Rituales y prácticas de conexión',
      'Sesiones individuales o grupales'
    ],
    color: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    icono: Baby,
    titulo: 'Acompañamiento Prenatal',
    descripcion: 'Preparación integral para tu embarazo y parto',
    incluye: [
      'Información clara sobre el proceso',
      'Plan de parto personalizado',
      'Técnicas de respiración y relajación',
      'Apoyo emocional continuo',
      'Visitas prenatales'
    ],
    color: 'bg-pink-100 dark:bg-pink-900/20'
  },
  {
    icono: Heart,
    titulo: 'Acompañamiento en el Parto',
    descripcion: 'Presencia continua durante tu trabajo de parto',
    incluye: [
      'Soporte físico (masajes, posturas)',
      'Soporte emocional constante',
      'Técnicas de alivio del dolor',
      'Acompañamiento respetuoso',
      'Conexión con tu pareja/familia'
    ],
    color: 'bg-red-100 dark:bg-red-900/20'
  },
  {
    icono: Sun,
    titulo: 'Acompañamiento Postparto',
    descripcion: 'Contención amorosa en tu cuarentena',
    incluye: [
      'Visitas postparto',
      'Apoyo en lactancia',
      'Escucha y contención emocional',
      'Rituales de cierre',
      'Red de apoyo y recursos'
    ],
    color: 'bg-orange-100 dark:bg-orange-900/20'
  }
];

const Servicios = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompañamiento personalizado en cada etapa de tu proceso
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, idx) => {
              const Icono = servicio.icono;
              return (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${servicio.color} mb-6`}>
                      <Icono className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{servicio.titulo}</h3>
                    <p className="text-muted-foreground mb-6">{servicio.descripcion}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {servicio.incluye.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo trabajamos?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Primera conversación</h3>
              <p className="text-sm text-muted-foreground">
                Nos conocemos y exploramos tus necesidades
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Plan personalizado</h3>
              <p className="text-sm text-muted-foreground">
                Diseñamos juntas el acompañamiento ideal
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Acompañamiento</h3>
              <p className="text-sm text-muted-foreground">
                Presencia continua en tu proceso
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Seguimiento</h3>
              <p className="text-sm text-muted-foreground">
                Estamos contigo después del proceso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Lista para comenzar tu acompañamiento?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Conversemos sobre cómo podemos acompañarte en este momento único de tu vida
          </p>
          <Button size="lg" asChild>
            <a href="/contacto">Contacta con nosotras</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default Servicios;