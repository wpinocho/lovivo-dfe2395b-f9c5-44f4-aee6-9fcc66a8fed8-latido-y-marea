import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Moon, Heart, Flower, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EducacionMenstrual = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educación Menstrual
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reconecta con tu ciclo menstrual y descubre la sabiduría de tu cuerpo cíclico
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">¿Qué es la Educación Menstrual?</h2>
            <p className="text-lg text-muted-foreground">
              Es un proceso de autoconocimiento que te permite comprender las fases de tu ciclo, 
              reconocer tus necesidades en cada etapa y honrar tu naturaleza cíclica. A través de 
              la educación menstrual aprendes a escuchar tu cuerpo, registrar tus ciclos y vivir 
              en armonía con tus ritmos naturales.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué aprenderás?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Moon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Las 4 Fases</h3>
                <p className="text-sm text-muted-foreground">
                  Menstruación, fase folicular, ovulación y fase lútea
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Autocuidado</h3>
                <p className="text-sm text-muted-foreground">
                  Herramientas para honrar cada fase de tu ciclo
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Flower className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Rituales</h3>
                <p className="text-sm text-muted-foreground">
                  Prácticas para conectar con tu sabiduría cíclica
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Registro</h3>
                <p className="text-sm text-muted-foreground">
                  Cómo llevar tu diario menstrual
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Modalidades</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4">Individual</Badge>
                <h3 className="text-2xl font-bold mb-3">Sesiones Personalizadas</h3>
                <p className="text-muted-foreground mb-6">
                  Acompañamiento uno a uno, adaptado completamente a tu proceso y necesidades específicas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Atención personalizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Horarios flexibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Material exclusivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Seguimiento continuo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Badge className="mb-4">Grupal</Badge>
                <h3 className="text-2xl font-bold mb-3">Talleres y Círculos</h3>
                <p className="text-muted-foreground mb-6">
                  Espacios de encuentro con otras mujeres para compartir, aprender y crear comunidad.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Círculos de mujeres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Talleres temáticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Red de apoyo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Experiencia colectiva</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comienza tu viaje de autoconocimiento
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agenda una sesión informativa gratuita y descubre cómo la educación menstrual 
            puede transformar tu relación con tu cuerpo
          </p>
          <Button size="lg" asChild>
            <a href="/contacto">Agendar sesión</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default EducacionMenstrual;