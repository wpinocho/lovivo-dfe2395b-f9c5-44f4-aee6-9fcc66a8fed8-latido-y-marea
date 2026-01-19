import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Heart, Salad } from 'lucide-react';

const ArmaTuMealPrep = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&h=900&fit=crop"
            alt="Comida saludable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
              Arma tu Meal Prep
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Organiza un calendario para que tu comunidad te lleve comida casera en el postparto
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
            ¿Qué es Meal Prep?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Es una herramienta comunitaria que te permite crear un calendario donde familiares, 
            amigas y seres queridos pueden organizarse para llevarte comida casera durante tu postparto. 
            De esta manera, no tienes que preocuparte por cocinar y puedes enfocarte en descansar 
            y cuidar a tu bebé.
          </p>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-[#bba9aa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            ¿Cómo funciona?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-black">Crea tu calendario</h3>
                <p className="text-gray-700 text-sm">
                  Completa el formulario con tus datos y preferencias alimenticias
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-black">Comparte el enlace</h3>
                <p className="text-gray-700 text-sm">
                  Envía el enlace a tu familia y amigas
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-black">Se organizan</h3>
                <p className="text-gray-700 text-sm">
                  Cada persona elige un día para llevarte comida
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-black">Disfruta</h3>
                <p className="text-gray-700 text-sm">
                  Recibe comida con amor sin preocuparte por cocinar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            Crea tu calendario
          </h2>
          <Card className="border border-gray-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-black">Nombre completo</Label>
                  <Input 
                    id="nombre" 
                    placeholder="Tu nombre" 
                    className="mt-2 border-gray-300 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="fecha" className="text-black">Fecha probable de parto</Label>
                  <Input 
                    id="fecha" 
                    type="date" 
                    className="mt-2 border-gray-300 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="personas" className="text-black">Número de personas en casa</Label>
                  <Input 
                    id="personas" 
                    type="number" 
                    placeholder="2" 
                    className="mt-2 border-gray-300 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="preferencias" className="text-black">Preferencias alimenticias</Label>
                  <Textarea 
                    id="preferencias" 
                    placeholder="Ej: Vegetariana, sin gluten, alergias, etc." 
                    className="mt-2 border-gray-300 focus:border-primary"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="alergias" className="text-black">Alergias o restricciones</Label>
                  <Textarea 
                    id="alergias" 
                    placeholder="Alergias alimentarias o ingredientes a evitar" 
                    className="mt-2 border-gray-300 focus:border-primary"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Crear mi calendario
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-[#bba9aa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
            Beneficios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Planificación</h3>
              <p className="text-gray-700">
                Organiza todo desde antes y ten la tranquilidad de saber que tendrás comida lista
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Comida con amor</h3>
              <p className="text-gray-700">
                Recibe comida casera hecha con cariño por las personas que te aman
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Red de apoyo</h3>
              <p className="text-gray-700">
                Activa tu comunidad y permite que te cuiden en esta etapa tan importante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#bba9aa] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contáctanos si tienes dudas sobre cómo armar tu calendario
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
            <a href="/contacto">Contáctanos</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default ArmaTuMealPrep;