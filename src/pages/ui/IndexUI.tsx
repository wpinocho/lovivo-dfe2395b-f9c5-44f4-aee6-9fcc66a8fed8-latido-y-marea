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
      <section className="relative min-h-[500px] h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360979-e1ujhdhn2kl.png"
            alt="Acompañamiento de parto con doula"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-white leading-tight">
              Acompañamiento con presencia y amor
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
              Doulas y educadoras dedicadas al acompañamiento respetuoso de tu ciclo, embarazo y postparto
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
              <a href="/servicios">Conoce nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 sm:mb-6">
              Sobre Latido y Marea
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Somos doulas y educadoras dedicadas a acompañar a mujeres y personas gestantes 
              en sus ciclos, embarazo y postparto con presencia, información clara y contención amorosa. 
              Facilitamos procesos de autoconocimiento a través de la educación menstrual, y en el parto 
              ofrecemos soporte emocional, físico y práctico para que cada experiencia se viva con seguridad, 
              autonomía y profundo respeto por el cuerpo cíclico.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white border border-gray-200 hover:border-primary transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Presencia</h3>
              <p className="text-gray-700">
                Acompañamiento consciente en cada etapa de tu proceso
              </p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 hover:border-primary transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Autoconocimiento</h3>
              <p className="text-gray-700">
                Educación menstrual para conectar con tu cuerpo cíclico
              </p>
            </div>
            <div className="text-center p-8 bg-white border border-gray-200 hover:border-primary transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Respeto</h3>
              <p className="text-gray-700">
                Honramos tu autonomía y sabiduría corporal
              </p>
            </div>
          </div>

          {/* Fotos de Partos */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-4">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360980-wfa31xxksr.png"
                alt="Momento de parto acompañado"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded"
              />
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360980-tyqtkdgb67g.png"
                alt="Familia postparto"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded"
              />
            </div>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 sm:mb-16 text-black">Nuestro Equipo</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Renata */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden">
                  <img 
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768838781183-2ajqkl4l3ag.png"
                    alt="Renata - Doula y Educadora Menstrual"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">Renata</h3>
                <p className="text-sm sm:text-base text-black font-medium mb-4">Doula & Educadora Menstrual y Perinatal</p>
                <div className="text-left bg-white p-4 sm:p-6 md:p-8 border border-gray-200">
                  <p className="text-gray-700">
                    Doula y educadora menstrual y perinatal dedicada a acompañar a mujeres en sus ciclos, 
                    gestación y postparto con presencia, información clara y contención amorosa. Facilita 
                    procesos de autoconocimiento a través de la educación menstrual, y en el parto ofrece 
                    soporte emocional, físico y práctico para que cada mujer viva su experiencia desde la 
                    seguridad, la autonomía y el respeto. Su enfoque integra escucha, rituales y una visión 
                    profunda del cuerpo cíclico.
                  </p>
                </div>
              </div>

              {/* Alejandra */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden">
                  <img 
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768838781182-dnolm4ta4vo.png"
                    alt="Alejandra - Psicóloga y Doula"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">Alejandra</h3>
                <p className="text-sm sm:text-base text-black font-medium mb-4">Psicóloga & Doula</p>
                <div className="text-left bg-white p-4 sm:p-6 md:p-8 border border-gray-200">
                  <p className="text-gray-700">
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
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#e8a77c' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-white">
            ¿Lista para comenzar tu acompañamiento?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10">
            Estamos aquí para acompañarte con presencia, información clara y contención amorosa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-primary hover:bg-gray-100" asChild>
              <a href="/contacto">Contáctanos</a>
            </Button>
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-primary hover:bg-gray-100" asChild>
              <a href="/servicios">Nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Espacio Seguro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Espacio Seguro 🏳️‍🌈
          </h2>
        </div>
      </section>
    </EcommerceTemplate>
  );
};