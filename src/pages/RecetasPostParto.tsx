import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Flame } from 'lucide-react';

const recetas = [
  {
    id: 1,
    titulo: 'Bowl de Quinoa con Salmón',
    descripcion: 'Rico en omega-3 y proteínas para la recuperación post parto',
    imagen: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
    tiempo: '30 min',
    porciones: '2',
    calorias: '450',
    categoria: 'Almuerzo',
    beneficios: ['Alto en proteína', 'Omega-3', 'Rico en hierro']
  },
  {
    id: 2,
    titulo: 'Sopa de Lentejas con Espinaca',
    descripcion: 'Perfecta para aumentar la producción de leche materna',
    imagen: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
    tiempo: '45 min',
    porciones: '4',
    calorias: '320',
    categoria: 'Cena',
    beneficios: ['Lactancia', 'Hierro', 'Fibra']
  },
  {
    id: 3,
    titulo: 'Batido de Avena y Plátano',
    descripcion: 'Energía rápida para mamás ocupadas',
    imagen: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=600&fit=crop',
    tiempo: '5 min',
    porciones: '1',
    calorias: '280',
    categoria: 'Desayuno',
    beneficios: ['Energía', 'Vitaminas', 'Digestión']
  },
  {
    id: 4,
    titulo: 'Pollo al Horno con Vegetales',
    descripcion: 'Comida completa y balanceada para toda la familia',
    imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop',
    tiempo: '50 min',
    porciones: '4',
    calorias: '380',
    categoria: 'Almuerzo',
    beneficios: ['Proteína', 'Vitaminas', 'Bajo en grasa']
  },
  {
    id: 5,
    titulo: 'Galletas de Lactancia',
    descripcion: 'Snack nutritivo que apoya la producción de leche',
    imagen: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop',
    tiempo: '25 min',
    porciones: '12',
    calorias: '150',
    categoria: 'Snack',
    beneficios: ['Lactancia', 'Avena', 'Energía']
  },
  {
    id: 6,
    titulo: 'Ensalada de Garbanzos',
    descripcion: 'Ligera, nutritiva y llena de proteína vegetal',
    imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    tiempo: '20 min',
    porciones: '2',
    calorias: '340',
    categoria: 'Almuerzo',
    beneficios: ['Proteína vegetal', 'Fibra', 'Hierro']
  }
];

const RecetasPostParto = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
            Recetas Post Parto
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recetas nutritivas diseñadas específicamente para la recuperación post parto 
            y el apoyo a la lactancia
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-background border-b">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
              Todas
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
              Desayuno
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
              Almuerzo
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
              Cena
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
              Snacks
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
              Lactancia
            </Badge>
          </div>
        </div>
      </section>

      {/* Recetas Grid */}
      <section className="py-16 bg-background">
        <div className="w-full px-8 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recetas.map((receta) => (
              <Card key={receta.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={receta.imagen}
                    alt={receta.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{receta.categoria}</Badge>
                  <h3 className="text-xl font-bold mb-2">{receta.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{receta.descripcion}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{receta.tiempo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{receta.porciones} porciones</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      <span>{receta.calorias} cal</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {receta.beneficios.map((beneficio, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {beneficio}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: '#b8a8c4' }}>
        <div className="w-full px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white tracking-wide">
            ¿Quieres recibir estas recetas en tu puerta?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Organiza tu meal prep y recibe comidas preparadas con estas recetas nutritivas
          </p>
          <Button size="lg" className="rounded-full text-lg px-12 py-7 bg-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" style={{ color: '#b8a8c4' }} asChild>
            <a href="/arma-tu-meal-prep">Arma tu plan ahora</a>
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default RecetasPostParto;