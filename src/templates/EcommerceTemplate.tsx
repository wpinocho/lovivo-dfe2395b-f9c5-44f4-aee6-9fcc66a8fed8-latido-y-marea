import { ReactNode, useState } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { Input } from '@/components/ui/input'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const header = (
    <div className={`py-2 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </Link>
              <Link 
                to="/arma-tu-meal-prep" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Arma tu Meal Prep
              </Link>
              <Link 
                to="/recetas-post-parto" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Recetas Post Parto
              </Link>
              <Link 
                to="/pide-tu-comida" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Pide tu Comida
              </Link>
              <Link 
                to="/contacto" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Contáctanos
              </Link>
            </nav>
          </div>

          {/* Mobile Menu & Profile/Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium py-2"
              >
                Nosotros
              </Link>
              <Link 
                to="/arma-tu-meal-prep" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium py-2"
              >
                Arma tu Meal Prep
              </Link>
              <Link 
                to="/recetas-post-parto" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium py-2"
              >
                Recetas Post Parto
              </Link>
              <Link 
                to="/pide-tu-comida" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium py-2"
              >
                Pide tu Comida
              </Link>
              <Link 
                to="/contacto" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium py-2"
              >
                Contáctanos
              </Link>
            </nav>
          </div>
        )}

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/temp_1768834028649_833a3e6f/1768834028649-1nkanikp0x8.jpg"
                alt="Latido y Marea"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">Latido y Marea</span>
            </div>
            <p className="text-white/70 mb-4">
              Nutrición con amor para tu post parto. Comidas nutritivas diseñadas 
              especialmente para mamás en su etapa más importante.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navegación</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                to="/arma-tu-meal-prep" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Arma tu Meal Prep
              </Link>
              <Link 
                to="/recetas-post-parto" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Recetas Post Parto
              </Link>
              <Link 
                to="/pide-tu-comida" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Pide tu Comida
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-2 text-white/70">
              <Link 
                to="/contacto" 
                className="block hover:text-white transition-colors"
              >
                Contáctanos
              </Link>
              <p>contacto@latidoymarea.com</p>
              <p>+52 (555) 123-4567</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2025 Latido y Marea. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}