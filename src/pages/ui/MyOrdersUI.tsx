/**
 * EDITABLE UI COMPONENT - MyOrdersUI
 * TIPO B - El agente de IA puede editar libremente este componente
 */

import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeadlessMyOrders } from '@/components/headless/HeadlessMyOrders'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { AuthDialog } from '@/components/AuthDialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Package, Calendar, DollarSign, RefreshCw, ShoppingBag, AlertCircle, LogIn, Utensils, ExternalLink, Trash2 } from 'lucide-react'
import { formatMoney } from '@/lib/money'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'
import { getUserCalendars, deleteMealPrepCalendar, type MealPrepCalendar } from '@/lib/mealPrepDb'
import { useToast } from '@/hooks/use-toast'

interface MyOrdersUIProps {
  user: User | null
  authLoading: boolean
}

export default function MyOrdersUI({ user, authLoading }: MyOrdersUIProps) {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [mealPrepCalendars, setMealPrepCalendars] = useState<MealPrepCalendar[]>([])
  const [loadingCalendars, setLoadingCalendars] = useState(true)
  const [calendarToDelete, setCalendarToDelete] = useState<MealPrepCalendar | null>(null)
  const [deletingCalendar, setDeletingCalendar] = useState(false)

  useEffect(() => {
    const loadCalendars = async () => {
      if (user) {
        setLoadingCalendars(true)
        const calendars = await getUserCalendars(user.id)
        setMealPrepCalendars(calendars)
        setLoadingCalendars(false)
      } else {
        setMealPrepCalendars([])
        setLoadingCalendars(false)
      }
    }

    loadCalendars()
  }, [user])

  const handleDeleteCalendar = async () => {
    if (!calendarToDelete || !user) return

    setDeletingCalendar(true)
    try {
      await deleteMealPrepCalendar(calendarToDelete.id, user.id)
      
      // Actualizar lista de calendarios
      setMealPrepCalendars(prev => prev.filter(c => c.id !== calendarToDelete.id))
      
      toast({
        title: 'Calendario eliminado',
        description: 'El calendario se eliminó correctamente',
      })
    } catch (error) {
      console.error('Error deleting calendar:', error)
      toast({
        title: 'Error',
        description: 'No se pudo eliminar el calendario. Intenta de nuevo.',
        variant: 'destructive'
      })
    } finally {
      setDeletingCalendar(false)
      setCalendarToDelete(null)
    }
  }

  return (
    <EcommerceTemplate layout="centered">
      <div className="py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Mis Pedidos</h1>
          <p className="text-muted-foreground mt-2">
            Aquí puedes ver el historial de todos tus pedidos
          </p>
        </div>

        {/* Sección de Meal Prep Calendar */}
        {user && !loadingCalendars && mealPrepCalendars.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-primary" />
              Mi Calendario de Meal Prep
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {mealPrepCalendars.map((calendar) => (
                <Card key={calendar.id} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#b8a8c4' }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{calendar.nombre}</CardTitle>
                        <CardDescription className="mt-2">
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Inicio: {format(new Date(calendar.fecha_inicio + 'T00:00:00'), "d 'de' MMMM, yyyy", { locale: es })}
                            </span>
                            <span>Duración: {calendar.semanas} semanas</span>
                          </div>
                        </CardDescription>
                      </div>
                      <Badge style={{ backgroundColor: '#b8a8c4', color: 'white' }}>
                        Activo
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => navigate(`/arma-tu-meal-prep/${calendar.slug}`)}
                        className="flex-1"
                        style={{ backgroundColor: '#b8a8c4' }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver calendario
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCalendarToDelete(calendar)}
                        className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/arma-tu-meal-prep')}
                className="w-full md:w-auto"
              >
                <Utensils className="h-4 w-4 mr-2" />
                Crear otro calendario
              </Button>
            </div>
          </div>
        )}

        {/* Separador visual */}
        {user && !loadingCalendars && mealPrepCalendars.length > 0 && (
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">Historial de Compras</span>
              </div>
            </div>
          </div>
        )}

        {authLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-1/4 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : !user ? (
          <Card className="border-dashed">
            <CardContent className="pt-12 pb-12">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="rounded-full bg-muted p-6">
                    <LogIn className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">Inicio de sesión requerido</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Necesitas iniciar sesión en tu cuenta para ver tu historial de pedidos.
                  </p>
                </div>
                <Button 
                  size="lg"
                  onClick={() => setShowAuthDialog(true)}
                  className="mt-4"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Iniciar Sesión
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <HeadlessMyOrders>
            {({ orders, loading, error, refetch }) => {
              if (loading) {
              return (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <Skeleton className="h-6 w-1/3" />
                        <Skeleton className="h-4 w-1/4 mt-2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-20 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )
            }

            if (error) {
              const isColumnError = error.includes('column') || error.includes('does not exist')
              
              return (
                <Card className="border-destructive/50 bg-destructive/5">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <AlertCircle className="h-12 w-12 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">No se pudieron cargar los pedidos</h3>
                        <p className="text-muted-foreground mt-2">
                          {isColumnError 
                            ? "Hay un problema de configuración. Por favor contacta a soporte."
                            : "No pudimos cargar tus pedidos. Por favor intenta de nuevo."}
                        </p>
                      </div>
                      <Button onClick={refetch} variant="outline" size="lg">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Intentar de Nuevo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            }

            if (orders.length === 0) {
              return (
                <Card className="border-dashed">
                  <CardContent className="pt-12 pb-12">
                    <div className="text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-muted p-6">
                          <Package className="h-12 w-12 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl">Aún no hay pedidos</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto">
                          Aún no has realizado ningún pedido. Comienza a comprar y tu historial de pedidos aparecerá aquí.
                        </p>
                      </div>
                      <Button 
                        size="lg"
                        onClick={() => navigate('/')}
                        className="mt-4"
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Comenzar a Comprar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            }

            return (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            Pedido #{order.order_number || order.id.slice(0, 8)}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {format(new Date(order.created_at), "d 'de' MMMM, yyyy", { locale: es })}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {formatMoney(order.total_amount || 0, order.currency_code || 'USD')}
                            </span>
                          </CardDescription>
                        </div>
                        <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                          {order.status === 'completed' ? 'Completado' : order.status === 'pending' ? 'Pendiente' : 'Procesando'}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Estado del pedido:</span>
                          <span className="font-medium capitalize">{order.status === 'completed' ? 'Completado' : order.status === 'pending' ? 'Pendiente' : 'Procesando'}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal:</span>
                          <span className="font-medium">{formatMoney(order.subtotal, order.currency_code)}</span>
                        </div>
                        
                        {order.discount_amount > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Descuento:</span>
                            <span className="font-medium text-green-600">-{formatMoney(order.discount_amount, order.currency_code)}</span>
                          </div>
                        )}

                        {order.shipping_address && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Envío:</span>
                            <span className="font-medium text-right">
                              {typeof order.shipping_address === 'string' 
                                ? order.shipping_address 
                                : `${order.shipping_address.city}, ${order.shipping_address.country}`
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )
            }}
          </HeadlessMyOrders>
        )}
      </div>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
      
      {/* AlertDialog para confirmar eliminación */}
      <AlertDialog open={!!calendarToDelete} onOpenChange={(open) => !open && setCalendarToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar calendario?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción eliminará permanentemente el calendario "{calendarToDelete?.nombre}" y todos los registros de voluntarios asociados.
              <br /><br />
              Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingCalendar}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteCalendar}
              disabled={deletingCalendar}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deletingCalendar ? 'Eliminando...' : 'Eliminar calendario'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </EcommerceTemplate>
  )
}