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
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&h=900&fit=crop"
            alt="Acompañamiento de parto con doula"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/60 to-transparent"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-display font-bold mb-6 leading-tight">
              Acompañamiento con presencia y amor
            </h1>
            <p className="text-2xl mb-8 font-light">
              Doulas y educadoras menstruales dedicadas a tu ciclo, embarazo y postparto
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
              <a href="/contacto">Conoce nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-foreground mb-6">
              Sobre Latido y Marea
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos doulas y educadoras menstruales dedicadas a acompañar a mujeres y personas gestantes 
              en sus ciclos, embarazo y postparto con presencia, información clara y contención amorosa. 
              Facilitamos procesos de autoconocimiento a través de la educación menstrual, y en el parto 
              ofrecemos soporte emocional, físico y práctico para que cada experiencia se viva con seguridad, 
              autonomía y profundo respeto por el cuerpo cíclico.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Presencia</h3>
              <p className="text-muted-foreground text-lg">
                Acompañamiento consciente en cada etapa de tu proceso
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Autoconocimiento</h3>
              <p className="text-muted-foreground text-lg">
                Educación menstrual para conectar con tu cuerpo cíclico
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Respeto</h3>
              <p className="text-muted-foreground text-lg">
                Honramos tu autonomía y sabiduría corporal
              </p>
            </div>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <h2 className="text-5xl font-display font-bold text-center mb-16">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Miembro 1 */}
              <div className="text-center group">
                <div className="mb-6 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop&crop=faces"
                    alt="Renata - Doula y Educadora Menstrual"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">Renata</h3>
                <p className="text-primary font-semibold text-lg mb-4">Doula & Educadora Menstrual y Perinatal</p>
                <div className="text-left bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/20">
                  <p className="text-foreground/80 leading-relaxed text-lg">
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
              <div className="text-center group">
                <div className="mb-6 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&crop=faces"
                    alt="Alejandra - Psicóloga y Doula"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">Alejandra</h3>
                <p className="text-secondary font-semibold text-lg mb-4">Psicóloga & Doula</p>
                <div className="text-left bg-gradient-to-br from-secondary/5 to-accent/5 p-8 rounded-2xl border border-secondary/20">
                  <p className="text-foreground/80 leading-relaxed text-lg">
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
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            ¿Lista para comenzar tu acompañamiento?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Estamos aquí para acompañarte con presencia, información clara y contención amorosa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="/contacto">Contáctanos</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-primary hover:text-white transition-all" asChild>
              <a href="/servicios">Nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};