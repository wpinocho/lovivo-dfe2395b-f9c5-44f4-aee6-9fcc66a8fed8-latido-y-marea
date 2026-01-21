import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageView } from "@/lib/tracking-utils";
import { CartProvider } from "@/contexts/CartContext";
import { CartUIProvider } from "@/components/CartProvider";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { PixelProvider } from "@/contexts/PixelContext";
import { PostHogProvider } from "@/contexts/PostHogContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Servicios from "./pages/Servicios";
import EducacionMenstrual from "./pages/EducacionMenstrual";
import AcompanamientoParto from "./pages/AcompanamientoParto";
import ArmaTuMealPrep from "./pages/ArmaTuMealPrep";
import Contacto from "./pages/Contacto";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";

const queryClient = new QueryClient();

// Component to track page views on route changes AND scroll to top
function PageViewTracker() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView();
  }, [location.pathname]);
  
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SettingsProvider>
      <PixelProvider>
        <PostHogProvider>
          <AuthProvider>
            <CartProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <CartUIProvider>
                    <PageViewTracker />
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/servicios" element={<Servicios />} />
                      <Route path="/educacion-menstrual" element={<EducacionMenstrual />} />
                      <Route path="/acompanamiento-parto" element={<AcompanamientoParto />} />
                      <Route path="/arma-tu-meal-prep" element={<ArmaTuMealPrep />} />
                      <Route path="/arma-tu-meal-prep/:slug" element={<ArmaTuMealPrep />} />
                      <Route path="/contacto" element={<Contacto />} />
                      <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
                      <Route path="/productos/:slug" element={<Product />} />
                      <Route path="/carrito" element={<Cart />} />
                      <Route path="/pagar" element={<Checkout />} />
                      <Route path="/gracias" element={<ThankYou />} />
                      <Route path="/gracias/:orderId" element={<ThankYou />} />
                      <Route path="/mis-pedidos" element={<MyOrders />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      {/* Aquí puedes agregar/modificar rutas */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </CartUIProvider>
                </BrowserRouter>
              </TooltipProvider>
            </CartProvider>
          </AuthProvider>
        </PostHogProvider>
      </PixelProvider>
    </SettingsProvider>
  </QueryClientProvider>
);

export default App;