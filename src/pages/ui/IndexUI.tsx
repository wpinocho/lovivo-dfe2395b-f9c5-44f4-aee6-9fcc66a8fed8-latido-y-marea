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
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/dfe2395b-f9c5-44f4-aee6-9fcc66a8fed8/hero-meals.jpg"
            alt="Comidas saludables post parto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Nutrición con amor para tu post parto
            </h1>
            <p className="text-xl mb-8">
              Comidas nutritivas diseñadas especialmente para mamás en su etapa más importante
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Conoce nuestros planes
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
              Somos un servicio especializado en nutrición post parto. Creemos que cada mamá merece 
              alimentos que nutran su cuerpo y alma durante esta etapa transformadora. Nuestras comidas 
              están diseñadas con amor, pensando en la recuperación y el bienestar de las mamás.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Con amor</h3>
              <p className="text-muted-foreground">
                Cada comida es preparada con dedicación y cariño
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nutritivo</h3>
              <p className="text-muted-foreground">
                Ingredientes frescos y balanceados para tu recuperación
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
              <p className="text-muted-foreground">
                Construimos una red de apoyo entre mamás
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
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/dfe2395b-f9c5-44f4-aee6-9fcc66a8fed8/team-member-1.jpg"
                    alt="Fundadora"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Tu Nombre</h3>
                <p className="text-primary font-medium mb-4">Cofundadora & Nutricionista</p>
                <div className="text-left bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Formación:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Licenciada en Nutrición</li>
                    <li>• Especialización en Nutrición Maternal</li>
                    <li>• Certificación en Lactancia</li>
                    <li>• 10+ años de experiencia</li>
                  </ul>
                </div>
              </div>

              {/* Miembro 2 - Alejandra */}
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/dfe2395b-f9c5-44f4-aee6-9fcc66a8fed8/team-member-2.jpg"
                    alt="Alejandra"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Alejandra</h3>
                <p className="text-primary font-medium mb-4">Cofundadora & Chef</p>
                <div className="text-left bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Formación:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Chef Profesional</li>
                    <li>• Especialización en Cocina Saludable</li>
                    <li>• Nutrición Holística</li>
                    <li>• 8+ años de experiencia</li>
                  </ul>
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
            ¿Lista para comenzar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Descubre cómo podemos acompañarte en tu post parto con nuestros planes personalizados
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/arma-tu-meal-prep">Arma tu plan</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contacto">Contáctanos</a>
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};