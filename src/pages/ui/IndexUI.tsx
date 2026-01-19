import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Heart, Leaf, Users } from 'lucide-react';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI (Página Nosotros)
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-doula.jpg"
            alt="Acompañamiento de parto con doula"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Acompañamiento con presencia y amor
            </h1>
            <p className="text-xl mb-8">
              Doulas y educadoras menstruales dedicadas a tu ciclo, embarazo y postparto
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/contacto">Conoce nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Sobre Latido y Marea
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Somos doulas y educadoras menstruales dedicadas a acompañar a mujeres y personas gestantes 
              en sus ciclos, embarazo y postparto con presencia, información clara y contención amorosa. 
              Facilitamos procesos de autoconocimiento a través de la educación menstrual, y en el parto 
              ofrecemos soporte emocional, físico y práctico para que cada experiencia se viva con seguridad, 
              autonomía y profundo respeto por el cuerpo cíclico.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Presencia</h3>
              <p className="text-muted-foreground">
                Acompañamiento consciente en cada etapa de tu proceso
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autoconocimiento</h3>
              <p className="text-muted-foreground">
                Educación menstrual para conectar con tu cuerpo cíclico
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Respeto</h3>
              <p className="text-muted-foreground">
                Honramos tu autonomía y sabiduría corporal
              </p>
            </div>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Miembro 1 */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="/renata-profile.jpg"
                    alt="Renata - Doula y Educadora Menstrual"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Renata</h3>
                <p className="text-primary font-medium mb-4">Doula & Educadora Menstrual y Perinatal</p>
                <div className="text-left bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground">
                    Doula y educadora menstrual y perinatal dedicada a acompañar a mujeres en sus ciclos, 
                    gestación y postparto con presencia, información clara y contención amorosa. Facilita 
                    procesos de autoconocimiento a través de la educación menstrual, y en el parto ofrece 
                    soporte emocional, físico y práctico para que cada mujer viva su experiencia desde la 
                    seguridad, la autonomía y el respeto. Su enfoque integra escucha, rituales y una visión 
                    profunda del cuerpo cíclico.
                  </p>
                </div>
              </div>

              {/* Miembro 2 - Alejandra */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="/alejandra-profile.jpg"
                    alt="Alejandra - Psicóloga y Doula"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Alejandra</h3>
                <p className="text-primary font-medium mb-4">Psicóloga & Doula</p>
                <div className="text-left bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground">
                    Psicóloga y doula certificada. Ofrece acompañamiento emocional especializado 
                    en procesos perinatales. (Más información próximamente)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Lista para comenzar tu acompañamiento?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Estamos aquí para acompañarte con presencia, información clara y contención amorosa
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contacto">Contáctanos</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/servicios">Nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};