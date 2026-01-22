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
          <h1 className="text-3xl font-bold tracking-tight">Mi Panel</h1>
          <p className="text-muted-foreground mt-2">
            Administra tus calendarios de Meal Prep
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

        {/* Historial de compras - oculto por ahora ya que no hay productos configurados */}
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