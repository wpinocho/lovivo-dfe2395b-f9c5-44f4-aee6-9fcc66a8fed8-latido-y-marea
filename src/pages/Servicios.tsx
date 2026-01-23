import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Moon, Sun, Baby, Brain, Sparkles } from 'lucide-react';
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
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768841296127-b31xgo8m8gb.png',
    whatsappMensaje: 'Hola 💜 Me gustaría conocer más sobre *Educación Menstrual*. Estoy interesada en reconectar con mi ciclo y aprender herramientas de autoconocimiento. ¿Me pueden compartir información sobre las sesiones?'
  },
  {
    icono: Baby,
    titulo: 'Acompañamiento Prenatal',
    descripcion: 'Preparación integral para tu embarazo y parto',
    incluye: [
      'Información clara sobre el proceso',
      'Plan de parto personalizado',
      'Técnicas para manejo del dolor',
      'Apoyo emocional continuo',
      'Visitas prenatales'
    ],
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768858670578-dkq6uaju8k.png',
    whatsappMensaje: 'Hola 🤰 Me encantaría saber más sobre el *Acompañamiento Prenatal*. Quiero prepararme para mi parto de manera integral y sentirme segura. ¿Me pueden contar cómo funciona?'
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
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768836360979-e1ujhdhn2kl.png',
    whatsappMensaje: 'Hola 💖 Me interesa mucho el *Acompañamiento en el Parto*. Me gustaría vivir mi parto con presencia amorosa y apoyo continuo. ¿Cuándo podemos agendar una consulta?'
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
      'Red de apoyo y recursos',
      'Orientación para la organización de actividades, tareas, quehaceres y gestión de apoyos'
    ],
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768845283480-wzh6om1bf5h.png',
    whatsappMensaje: 'Hola 🌅 Quisiera información sobre el *Acompañamiento Postparto*. Siento que necesito contención y apoyo en esta etapa. ¿Me cuentan más sobre las visitas y el apoyo emocional?'
  },
  {
    icono: Brain,
    titulo: 'Sesiones Psicológicas Perinatales',
    descripcion: 'Acompañamiento emocional especializado con Alejandra',
    incluye: [
      'Espacio seguro de escucha',
      'Depresión prenatal y postparto',
      'Ansiedad y miedos en el embarazo',
      'Duelo gestacional y perinatal',
      'Apoyo en el vínculo con tu bebé',
      'Transición a la maternidad'
    ],
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768859200681-9eudy877ys.png',
    whatsappMensaje: 'Hola 💜 Me gustaría saber más sobre las *Sesiones Psicológicas Perinatales* con Alejandra. Necesito un espacio seguro para procesar mis emociones en esta etapa. ¿Me pueden dar más información?'
  },
  {
    icono: Sparkles,
    titulo: 'Baño Postparto y Cierre de Cadera',
    descripcion: 'Ritual ancestral de sanación y celebración',
    incluye: [
      'Baño ceremonial con hierbas',
      'Cierre de cadera con rebozo',
      'Masaje relajante postparto',
      'Momento de conexión y honra',
      'Espacio de descanso y cuidado',
      'Ritual personalizado'
    ],
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768859200680-x4wy01kgj2g.png',
    whatsappMensaje: 'Hola ✨ Me llama mucho el *Baño Postparto y Cierre de Cadera*. Quiero honrar mi cuerpo y vivir este ritual de sanación. ¿Me explican cómo se realiza?'
  },
  {
    icono: Sparkles,
    titulo: 'Terapia Placentaria',
    descripcion: 'Encapsulación de placenta para tu bienestar postparto',
    incluye: [
      'Cápsulas',
      'Tintura',
      'Cordón disecado',
      'Membranas disecadas',
      'Impresión',
      'Instrucciones de consumo personalizadas'
    ],
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768947102460-ozt4li5q40r.png',
    whatsappMensaje: 'Hola 🌸 Quisiera saber más sobre la *Terapia Placentaria*. Me interesa aprovechar los beneficios de mi placenta en el postparto. ¿Cómo funciona el proceso de encapsulación?'
  },
  {
    icono: Heart,
    titulo: 'Ceremonia de Baby Blessing',
    descripcion: 'Ritual de bienvenida y bendición para tu bebé',
    incluye: [
      'Ceremonia personalizada',
      'Espacio íntimo con tus seres queridos',
      'Rituales de bienvenida y protección',
      'Momento de conexión familiar',
      'Celebración del nacimiento',
      'Creación de recuerdos significativos'
    ],
    imagen: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768947102464-0mi1ic77qk4.jpg',
    whatsappMensaje: 'Hola 💕 Me encantaría conocer más sobre la *Ceremonia de Baby Blessing*. Quiero dar la bienvenida a mi bebé con un ritual significativo. ¿Me cuentan cómo lo diseñan?'
  }
];

const Servicios = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative bg-white py-24 border-b border-gray-200">
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4 sm:mb-6 tracking-wide">
            Nuestros Servicios
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Acompañamiento personalizado en cada etapa de tu proceso
          </p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 bg-white">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, idx) => {
              const Icono = servicio.icono;
              return (
                <Card key={idx} className="overflow-hidden border border-gray-200 hover:border-primary transition-all">
                  <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img 
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary">
                        <Icono className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-semibold text-black break-words">
                        {servicio.titulo}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {servicio.descripcion}
                    </p>
                    <div className="space-y-2 mb-6">
                      <p className="font-medium text-black mb-3">Incluye:</p>
                      {servicio.incluye.map((item, i) => (
                        <p key={i} className="text-gray-700 flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                    <Button asChild className="w-full">
                      <a 
                        href={`https://wa.me/525559652494?text=${encodeURIComponent(servicio.whatsappMensaje)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Más información
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-white" style={{ backgroundColor: '#b8a8c4' }}>
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            ¿Interesada en nuestros servicios?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contáctanos para una consulta gratuita
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <a href="/contacto">Contáctanos</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default Servicios;