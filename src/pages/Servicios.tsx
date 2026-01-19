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
    color: 'from-secondary/20 to-secondary/5',
    bgColor: 'bg-secondary',
    imagen: 'https://images.unsplash.com/photo-1616798002516-1a21f8f5f0e2?w=800&h=600&fit=crop'
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
    color: 'from-primary/20 to-primary/5',
    bgColor: 'bg-primary',
    imagen: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop'
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
    color: 'from-accent/20 to-accent/5',
    bgColor: 'bg-accent',
    imagen: 'https://images.unsplash.com/photo-1519689373023-dd07c7988002?w=800&h=600&fit=crop'
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
    color: 'from-primary/20 via-secondary/10 to-accent/5',
    bgColor: 'bg-gradient-to-r from-primary to-secondary',
    imagen: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop&auto=format&q=80'
  }
];

const Servicios = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Acompañamiento personalizado en cada etapa de tu proceso
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, idx) => {
              const Icono = servicio.icono;
              return (
                <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group border-2 hover:border-primary/30">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${servicio.color}`}></div>
                  </div>
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${servicio.bgColor} mb-6 shadow-lg`}>
                      <Icono className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-3">{servicio.titulo}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{servicio.descripcion}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-4">Incluye:</h4>
                      <ul className="space-y-3">
                        {servicio.incluye.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary text-xl mt-0.5">•</span>
                            <span className="text-base">{item}</span>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">¿Cómo trabajamos?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-primary/5 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-3xl font-bold mb-6 shadow-lg">
                1
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Primera conversación</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Nos conocemos y exploramos tus necesidades
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl hover:bg-secondary/5 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent text-white text-3xl font-bold mb-6 shadow-lg">
                2
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Plan personalizado</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Diseñamos juntas el acompañamiento ideal
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl hover:bg-accent/5 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary text-white text-3xl font-bold mb-6 shadow-lg">
                3
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Acompañamiento</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Presencia continua en tu proceso
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl hover:bg-primary/5 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-white text-3xl font-bold mb-6 shadow-lg">
                4
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Seguimiento</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Estamos contigo después del proceso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ¿Lista para comenzar tu acompañamiento?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Conversemos sobre cómo podemos acompañarte en este momento único de tu vida
          </p>
          <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="/contacto">Contacta con nosotras</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default Servicios;