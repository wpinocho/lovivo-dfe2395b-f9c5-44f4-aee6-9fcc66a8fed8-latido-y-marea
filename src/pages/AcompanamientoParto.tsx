import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AcompanamientoParto = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519689373023-dd07c7988002?w=1600&h=900&fit=crop"
            alt="Acompañamiento de Parto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-white text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Acompañamiento de Parto
            </h1>
            <p className="text-2xl font-light">
              Presencia continua, soporte emocional y físico para que vivas tu parto con 
              seguridad, autonomía y profundo respeto
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es una Doula? */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">¿Qué es una Doula?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Una doula es una acompañante profesional de parto que brinda apoyo físico, emocional 
              e informativo continuo antes, durante y después del nacimiento. No somos personal médico, 
              sino que complementamos el equipo de salud con presencia amorosa y herramientas de apoyo.
            </p>
            <p className="text-lg text-muted-foreground">
              Nuestra presencia ha demostrado reducir intervenciones médicas, acortar tiempos de trabajo 
              de parto y aumentar la satisfacción con la experiencia de nacimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Etapas del Acompañamiento */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">Nuestro Acompañamiento</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prenatal</h3>
                <p className="text-muted-foreground mb-4">
                  Conocimiento mutuo y preparación para el gran día
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>2-3 visitas prenatales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Plan de parto personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Información sobre el proceso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Técnicas de respiración y relajación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Disponibilidad on-call desde la semana 38</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Durante el Parto</h3>
                <p className="text-muted-foreground mb-4">
                  Presencia continua en tu trabajo de parto
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Acompañamiento ininterrumpido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Soporte físico (masajes, posturas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Apoyo emocional constante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Técnicas de manejo del dolor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Apoyo a tu pareja/acompañante</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Postparto</h3>
                <p className="text-muted-foreground mb-4">
                  Contención y apoyo en tus primeros días
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>1-2 visitas postparto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Apoyo con lactancia inicial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Procesamiento de la experiencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ritual de cierre (opcional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Recursos y red de apoyo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">Beneficios del Acompañamiento</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Empoderamiento y Autonomía</h3>
                <p className="text-sm text-muted-foreground">
                  Te ayudamos a tomar decisiones informadas y a confiar en tu capacidad innata para parir
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Reducción de Intervenciones</h3>
                <p className="text-sm text-muted-foreground">
                  La presencia continua de una doula reduce significativamente cesáreas, epidurales y partos instrumentados
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Apoyo a la Pareja</h3>
                <p className="text-sm text-muted-foreground">
                  Tu pareja también recibe guía para apoyarte mejor, sin sentirse perdida o abrumada
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Experiencia Positiva</h3>
                <p className="text-sm text-muted-foreground">
                  Mayor satisfacción con la experiencia de parto y mejor transición al postparto
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ¿Lista para tu acompañamiento?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Conversemos sobre cómo podemos acompañarte en este momento sagrado. 
            Ofrecemos una sesión informativa gratuita sin compromiso.
          </p>
          <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="/contacto">Agenda tu sesión informativa</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default AcompanamientoParto;