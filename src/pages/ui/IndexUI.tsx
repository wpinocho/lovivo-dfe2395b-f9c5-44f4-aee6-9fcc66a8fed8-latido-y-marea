import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Heart, Leaf, Users, Sparkles } from 'lucide-react';
import { DecorativeShapes } from '@/components/DecorativeShapes';
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
      <section className="relative min-h-[500px] h-[80vh] overflow-hidden bg-gradient-to-br from-[#fef5f0] to-[#f5f0f8]">
        <DecorativeShapes variant="hero" />
        
        <div className="relative h-full w-full px-8 md:px-12 lg:px-16 grid md:grid-cols-2 gap-8 items-center py-12">
          {/* Left - Text */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="h-4 w-4" style={{ color: '#e8a77c' }} />
              <span className="text-sm font-medium">Acompañamiento respetuoso</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] text-black">
              Con presencia<br/>
              y <span className="italic" style={{ color: '#e8a77c' }}>amor</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-10 text-gray-700 max-w-xl leading-relaxed">
              Doulas y educadoras dedicadas al acompañamiento de tu ciclo, embarazo y postparto
            </p>
            
            <Button 
              size="lg" 
              className="rounded-full text-lg px-10 py-7 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 hover:-rotate-1" 
              style={{ backgroundColor: '#e8a77c' }}
              asChild
            >
              <a href="/servicios">Descubre nuestros servicios</a>
            </Button>
          </div>

          {/* Right - Image */}
          <div className="relative z-10 hidden md:block">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360979-e1ujhdhn2kl.png"
                alt="Acompañamiento de parto con doula"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 bg-white relative overflow-hidden">
        <DecorativeShapes variant="section" />
        
        <div className="w-full px-8 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              Sobre <span className="italic" style={{ color: '#b8a8c4' }}>Latido y Marea</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo de doulas y educadoras dedicadas a acompañar a mujeres y personas gestantes 
              en sus ciclos, embarazo y postparto con presencia, información clara y contención amorosa. 
              Facilitamos procesos de autoconocimiento a través de la educación menstrual, y en el parto 
              ofrecemos soporte emocional, físico y práctico para que cada experiencia se viva con seguridad, 
              autonomía y profundo respeto por el cuerpo cíclico.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300" style={{ backgroundColor: '#b8a8c4' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6 rounded-full shadow-lg">
                <Heart className="h-10 w-10" style={{ color: '#b8a8c4' }} />
              </div>
              <h3 className="font-display text-2xl mb-3 text-white">Presencia</h3>
              <p className="text-white/90 leading-relaxed">
                Acompañamiento consciente en cada etapa de tu proceso
              </p>
            </div>
            <div className="text-center p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300" style={{ backgroundColor: '#e8a77c' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6 rounded-full shadow-lg">
                <Leaf className="h-10 w-10" style={{ color: '#e8a77c' }} />
              </div>
              <h3 className="font-display text-2xl mb-3 text-white">Autoconocimiento</h3>
              <p className="text-white/90 leading-relaxed">
                Educación menstrual para conectar con tu cuerpo cíclico
              </p>
            </div>
            <div className="text-center p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300" style={{ backgroundColor: '#b8a8c4' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6 rounded-full shadow-lg">
                <Users className="h-10 w-10" style={{ color: '#b8a8c4' }} />
              </div>
              <h3 className="font-display text-2xl mb-3 text-white">Respeto</h3>
              <p className="text-white/90 leading-relaxed">
                Honramos tu autonomía y sabiduría corporal
              </p>
            </div>
          </div>

          {/* Video y Foto de Partos */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768942156359-o400uv0u3ym.png"
                  alt="Doula acompañando durante el trabajo de parto"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-[40px] shadow-2xl"
                />
              </div>
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360980-tyqtkdgb67g.png"
                  alt="Familia postparto"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-[40px] shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Nuestro Equipo */}
          <div className="mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center mb-16 text-black">
              Nuestro <span className="italic" style={{ color: '#e8a77c' }}>Equipo</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Renata */}
              <div>
                <div className="mb-6 overflow-hidden rounded-[40px] shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768838781183-2ajqkl4l3ag.png"
                    alt="Renata Martínez - Doula y Educadora Menstrual"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                <div className="text-left bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-[30px] shadow-lg">
                  <h3 className="font-display text-2xl sm:text-3xl mb-3 text-black">Renata Martínez</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium mb-4">Doula, Educadora Menstrual y Perinatal & Maestra de Yoga Prenatal</p>
                  <p className="text-gray-700 leading-relaxed">
                    Doula, educadora menstrual y perinatal, y maestra de yoga prenatal. Acompaño a mujeres y familias en los procesos de gestación, parto, posparto y a lo largo del ciclo menstrual. Ofrezco un acompañamiento amoroso, informado y respetuoso, integrando el cuerpo, la emoción y la conciencia. Mi enfoque es cálido y sin juicios, creando espacios seguros para honrar cada proceso y acompañarlo de forma libre, plena y sostenida.
                  </p>
                </div>
              </div>

              {/* Alejandra */}
              <div>
                <div className="mb-6 overflow-hidden rounded-[40px] shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768838781182-dnolm4ta4vo.png"
                    alt="Alejandra Guevara - Psicóloga y Doula"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                <div className="text-left bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-[30px] shadow-lg">
                  <h3 className="font-display text-2xl sm:text-3xl mb-3 text-black">Alejandra Guevara</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium mb-4">Psicóloga Clínica & Doula</p>
                  <p className="text-gray-700 leading-relaxed">
                    Psicóloga clínica y Doula, experiencia en clínica privada, ejerzo la psicología en ambientes hospitalarios y acompañamiento de parto en casa. Te puedo ofrecer un acompañamiento profesional, cálido, sin juicios, abierto a tus deseos y cuidando honrar tu proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#b8a8c4' }}>
        <DecorativeShapes variant="subtle" />
        
        <div className="w-full px-8 md:px-12 lg:px-16 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6 text-white leading-tight">
            ¿Lista para comenzar tu <span className="italic">acompañamiento?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Estamos aquí para acompañarte con presencia, información clara y contención amorosa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="rounded-full text-lg px-12 py-7 bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 hover:rotate-1" 
              style={{ color: '#b8a8c4' }}
              asChild
            >
              <a href="/contacto">Contáctanos</a>
            </Button>
            <Button 
              size="lg" 
              className="rounded-full text-lg px-12 py-7 bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 hover:-rotate-1" 
              style={{ color: '#b8a8c4' }}
              asChild
            >
              <a href="/servicios">Nuestros servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Espacio Seguro */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <h2 className="font-display text-xl sm:text-2xl text-black italic">
              Espacio Seguro 🏳️‍🌈
            </h2>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};