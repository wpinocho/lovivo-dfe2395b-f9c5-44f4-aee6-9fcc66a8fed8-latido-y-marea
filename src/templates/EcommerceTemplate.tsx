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
    <div className={`py-2 border-b border-white/20 ${headerClassName}`} style={{ backgroundColor: '#e8a77c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-white/80 transition-colors font-medium relative group"
              >
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                to="/servicios" 
                className="text-white hover:text-white/80 transition-colors font-medium relative group"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                to="/acompanamiento-parto" 
                className="text-white hover:text-white/80 transition-colors font-medium relative group"
              >
                Acompañamiento
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                to="/educacion-menstrual" 
                className="text-white hover:text-white/80 transition-colors font-medium relative group"
              >
                Educación Menstrual
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                to="/arma-tu-meal-prep" 
                className="text-white hover:text-white/80 transition-colors font-medium relative group"
              >
                Meal Prep
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link 
                to="/contacto" 
                className="text-white hover:text-white/80 transition-colors font-medium relative group"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
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
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors font-medium py-2"
              >
                Nosotros
              </Link>
              <Link 
                to="/servicios" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors font-medium py-2"
              >
                Servicios
              </Link>
              <Link 
                to="/acompanamiento-parto" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors font-medium py-2"
              >
                Acompañamiento de Parto
              </Link>
              <Link 
                to="/educacion-menstrual" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors font-medium py-2"
              >
                Educación Menstrual
              </Link>
              <Link 
                to="/arma-tu-meal-prep" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors font-medium py-2"
              >
                Arma tu Meal Prep
              </Link>
              <Link 
                to="/contacto" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors font-medium py-2"
              >
                Contáctanos
              </Link>
            </nav>
          </div>
        )}

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-white">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`text-white py-16 ${footerClassName}`} style={{ backgroundColor: '#e8a77c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/8fd9d699-54b2-4e17-ace8-1d402755d17f/1768844927811-aug74f9tpbw.jpg"
                alt="Latido y Marea"
                className="h-16 w-16 object-contain"
              />
              <span className="text-xl font-semibold">Latido y Marea</span>
            </div>
            <p className="text-white/80 mb-6">
              Doulas y educadoras dedicadas a acompañar tu ciclo, embarazo y 
              postparto con presencia, información clara y contención amorosa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Navegación</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                to="/servicios" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Servicios
              </Link>
              <Link 
                to="/acompanamiento-parto" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Acompañamiento de Parto
              </Link>
              <Link 
                to="/educacion-menstrual" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Educación Menstrual
              </Link>
              <Link 
                to="/arma-tu-meal-prep" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Arma tu Meal Prep
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Contacto</h3>
            <div className="space-y-3 text-white/80">
              <Link 
                to="/contacto" 
                className="block hover:text-white transition-colors"
              >
                Contáctanos
              </Link>
              <p>contacto@latidoymarea.com</p>
              <p>+52 55 5965 2494</p>
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
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