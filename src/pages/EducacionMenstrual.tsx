import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Sunrise, Sun, Sunset } from 'lucide-react';

const fases = [
  {
    icon: Moon,
    fase: 'Menstruación',
    descripcion: 'Fase de introspección y descanso',
    caracteristicas: 'Tiempo de soltar, descansar y reconectar'
  },
  {
    icon: Sunrise,
    fase: 'Preovulatoria',
    descripcion: 'Fase de renovación y energía',
    caracteristicas: 'Momento de iniciar proyectos y socializar'
  },
  {
    icon: Sun,
    fase: 'Ovulación',
    descripcion: 'Fase de plenitud y expresión',
    caracteristicas: 'Máxima energía, creatividad y comunicación'
  },
  {
    icon: Sunset,
    fase: 'Premenstrual',
    descripcion: 'Fase de evaluación y creatividad',
    caracteristicas: 'Momento de organizar y preparar el descanso'
  }
];

const EducacionMenstrual = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1616798002516-1a21f8f5f0e2?w=1600&h=900&fit=crop"
            alt="Educación menstrual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Educación Menstrual
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Conecta con tu ciclo, reconoce tus fases y honra tu cuerpo cíclico
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="/contacto">Agenda tu sesión</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
            ¿Qué es la Educación Menstrual?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            La educación menstrual es un proceso de autoconocimiento que te invita a observar, 
            registrar y comprender tu ciclo menstrual. A través de este acompañamiento, 
            aprenderás a reconocer las 4 fases de tu ciclo y cómo cada una influye en tu 
            energía, emociones, creatividad y necesidades.
          </p>
          <p className="text-lg text-gray-700">
            Con herramientas prácticas como el registro cíclico, rituales y reflexión, 
            podrás tomar decisiones más conscientes, planificar tu vida según tu ritmo natural 
            y honrar tu cuerpo con respeto y amor.
          </p>
        </div>
      </section>

      {/* Fases del Ciclo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            Las 4 Fases del Ciclo Menstrual
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fases.map((fase, idx) => {
              const Icon = fase.icon;
              return (
                <Card key={idx} className="border border-gray-200 hover:border-primary transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">{fase.fase}</h3>
                    <p className="text-gray-700 mb-2 font-medium">{fase.descripcion}</p>
                    <p className="text-gray-600 text-sm">{fase.caracteristicas}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            Modalidades
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-black">Sesiones Individuales</h3>
                <p className="text-gray-700 mb-6">
                  Acompañamiento personalizado donde exploramos tu ciclo, tus patrones 
                  y necesidades específicas. Incluye herramientas y ejercicios adaptados a ti.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Registro cíclico personalizado</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Reconocimiento de patrones</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Rituales y prácticas de conexión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-black">Talleres Grupales</h3>
                <p className="text-gray-700 mb-6">
                  Espacios de aprendizaje colectivo donde compartimos experiencias, 
                  aprendemos sobre el ciclo menstrual y creamos comunidad entre mujeres.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Círculos de mujeres</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Aprendizaje sobre las 4 fases</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Rituales y prácticas grupales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            ¿Lista para reconectar con tu ciclo?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Agenda tu primera sesión o únete a nuestros talleres
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
            <a href="/contacto">Contáctanos</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default EducacionMenstrual;