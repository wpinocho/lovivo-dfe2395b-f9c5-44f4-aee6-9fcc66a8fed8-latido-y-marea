import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Sparkles, Baby, Brain } from 'lucide-react';

const AcompanamientoParto = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero */}
      <section className="relative min-h-[450px] h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360980-tyqtkdgb67g.png"
            alt="Acompañamiento de parto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full w-full px-8 md:px-12 lg:px-16 flex items-center py-12">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-white leading-tight tracking-wide">
              Acompañamiento de Parto
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              Presencia, contención y apoyo continuo durante tu trabajo de parto
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="/contacto">Agenda una consulta</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Qué es una Doula */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-black tracking-wide">
            ¿Qué es una Doula?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Una doula es una mujer que acompaña a otras mujeres durante el embarazo, parto y postparto, 
            brindando apoyo emocional, físico e informativo de manera continua y respetuosa.
          </p>
          <p className="text-lg text-gray-700">
            No reemplazamos al personal médico, sino que complementamos su labor ofreciendo 
            presencia amorosa, técnicas de confort, información clara y contención para que 
            vivas tu parto desde la seguridad, el empoderamiento y la confianza en tu cuerpo.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 text-black tracking-wide">
            Beneficios del Acompañamiento de una Doula
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-black">Reduce intervenciones</h3>
              <p className="text-gray-700">Menor probabilidad de cesárea, fórceps o epidural</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-black">Partos más cortos</h3>
              <p className="text-gray-700">El apoyo continuo acorta el tiempo del trabajo de parto</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-black">Mayor satisfacción</h3>
              <p className="text-gray-700">Las mujeres reportan experiencias más positivas</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-lg mb-2 text-black">Empoderamiento</h3>
              <p className="text-gray-700">Te sentirás más segura y en control de tu parto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas del Acompañamiento */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 text-black tracking-wide">
            Etapas del Acompañamiento
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 hover:border-primary transition-all" style={{ backgroundColor: '#b8a8c4' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white mb-6 rounded-full">
                <Baby className="h-8 w-8" style={{ color: '#b8a8c4' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Prenatal</h3>
              <p className="text-white">
                Visitas de preparación donde conversamos sobre tus deseos, miedos y 
                construimos tu plan de parto. Aprenderemos técnicas para manejo del dolor, 
                posiciones y métodos de alivio.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:border-primary transition-all" style={{ backgroundColor: '#b8a8c4' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white mb-6 rounded-full">
                <Heart className="h-8 w-8" style={{ color: '#b8a8c4' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Durante el Parto</h3>
              <p className="text-white">
                Presencia continua desde el trabajo de parto hasta el nacimiento. 
                Apoyo físico con masajes y posturas, apoyo emocional constante y 
                recordatorios de tu poder y sabiduría corporal. Conexión con tu pareja, 
                familia o acompañantes/as que tú elijas. Soporte y atención a tu tribu.
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 hover:border-primary transition-all" style={{ backgroundColor: '#b8a8c4' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white mb-6 rounded-full">
                <Sparkles className="h-8 w-8" style={{ color: '#b8a8c4' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Postparto</h3>
              <p className="text-white">
                Visita postparto para integrar la experiencia del parto, resolver 
                dudas sobre lactancia y cuidados del bebé, ofrecer contención 
                emocional en esta nueva etapa, y orientación para la organización 
                de actividades, tareas, quehaceres y gestión de apoyos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acompañamiento Emocional */}
      <section className="py-20 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-black tracking-wide">
              Acompañamiento Emocional Perinatal
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Sabemos que el camino hacia la maternidad puede traer momentos de vulnerabilidad, 
              dudas y emociones intensas. No estás sola. Ofrecemos un espacio seguro y amoroso 
              para acompañarte en tu salud mental perinatal.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black">
                  Depresión Prenatal y Postparto
                </h3>
                <p className="text-gray-700">
                  Te acompañamos con escucha empática, herramientas de autocuidado y 
                  contención emocional durante momentos de tristeza, desesperanza o agotamiento. 
                  Honramos tus emociones y te recordamos que pedir ayuda es un acto de amor.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black">
                  Ansiedad y Miedos en el Embarazo
                </h3>
                <p className="text-gray-700">
                  Si sientes miedo al parto, preocupación constante por tu bebé o ansiedad 
                  sobre tu nueva vida, te ofrecemos un espacio de calma, información clara 
                  y técnicas de regulación emocional para transitar estos momentos con más seguridad.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black">
                  Duelo Gestacional y Perinatal
                </h3>
                <p className="text-gray-700">
                  En momentos de pérdida, te acompañamos con respeto profundo, presencia silenciosa 
                  y contención amorosa. Creamos rituales de despedida, honramos tu dolor y caminamos 
                  a tu lado en este proceso de sanación tan personal.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black">
                  Transición a la Maternidad
                </h3>
                <p className="text-gray-700">
                  El postparto es un tiempo de transformación profunda. Te acompañamos en la 
                  integración de tu nueva identidad como madre, te sostenemos en momentos de 
                  duda y celebramos contigo cada pequeño logro. Tu maternidad es válida tal como es.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-black">
                  Apoyo en el Vínculo con tu Bebé
                </h3>
                <p className="text-gray-700">
                  Si sientes dificultades para conectar con tu bebé, te acompañamos sin juicio, 
                  con ternura y paciencia. El vínculo se construye día a día, y estamos aquí 
                  para facilitar ese encuentro amoroso entre ustedes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-white" style={{ backgroundColor: '#b8a8c4' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            ¿Lista para vivir tu parto acompañada?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Agenda una consulta gratuita para conocernos
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
            <a href="/contacto">Contáctanos</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default AcompanamientoParto;