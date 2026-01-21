-- =====================================================
-- SUPABASE MEAL PREP SETUP
-- =====================================================
-- Este archivo contiene las migraciones SQL necesarias 
-- para el sistema de Meal Prep.
-- 
-- INSTRUCCIONES:
-- 1. Ve a tu proyecto en Supabase Dashboard
-- 2. Navega a SQL Editor
-- 3. Copia y ejecuta estas queries
-- =====================================================

-- Tabla: meal_prep_calendars
-- Almacena los calendarios de meal prep creados por las usuarias
CREATE TABLE IF NOT EXISTS meal_prep_calendars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  fecha_inicio DATE NOT NULL,
  personas INTEGER NOT NULL,
  semanas INTEGER NOT NULL DEFAULT 2,
  preferencias TEXT,
  alergias TEXT,
  slug TEXT NOT NULL UNIQUE,
  user_email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para meal_prep_calendars
CREATE INDEX IF NOT EXISTS idx_meal_prep_calendars_user_id ON meal_prep_calendars(user_id);
CREATE INDEX IF NOT EXISTS idx_meal_prep_calendars_slug ON meal_prep_calendars(slug);

-- Tabla: meal_prep_volunteers
-- Almacena los voluntarios registrados para cada día del calendario
CREATE TABLE IF NOT EXISTS meal_prep_volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  calendar_id UUID NOT NULL REFERENCES meal_prep_calendars(id) ON DELETE CASCADE,
  day_index INTEGER NOT NULL,
  volunteer_name TEXT NOT NULL,
  volunteer_email TEXT NOT NULL,
  volunteer_phone TEXT,
  mensaje TEXT,
  fecha_comida DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraint: un solo voluntario por día
  UNIQUE(calendar_id, day_index)
);

-- Índices para meal_prep_volunteers
CREATE INDEX IF NOT EXISTS idx_meal_prep_volunteers_calendar_id ON meal_prep_volunteers(calendar_id);
CREATE INDEX IF NOT EXISTS idx_meal_prep_volunteers_fecha_comida ON meal_prep_volunteers(fecha_comida);

-- Row Level Security (RLS) Policies
-- =====================================================

-- Habilitar RLS
ALTER TABLE meal_prep_calendars ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_prep_volunteers ENABLE ROW LEVEL SECURITY;

-- Políticas para meal_prep_calendars
-- Cualquiera puede leer calendarios (para compartir links)
CREATE POLICY "Cualquiera puede ver calendarios"
  ON meal_prep_calendars FOR SELECT
  USING (true);

-- Solo usuarios autenticados pueden crear calendarios
CREATE POLICY "Usuarios autenticados pueden crear calendarios"
  ON meal_prep_calendars FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Solo el dueño puede actualizar su calendario
CREATE POLICY "Dueños pueden actualizar sus calendarios"
  ON meal_prep_calendars FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Solo el dueño puede eliminar su calendario
CREATE POLICY "Dueños pueden eliminar sus calendarios"
  ON meal_prep_calendars FOR DELETE
  USING (auth.uid() = user_id);

-- Políticas para meal_prep_volunteers
-- Cualquiera puede leer voluntarios (para ver calendario)
CREATE POLICY "Cualquiera puede ver voluntarios"
  ON meal_prep_volunteers FOR SELECT
  USING (true);

-- Cualquiera puede registrarse como voluntario
CREATE POLICY "Cualquiera puede registrarse como voluntario"
  ON meal_prep_volunteers FOR INSERT
  WITH CHECK (true);

-- Solo el dueño del calendario puede eliminar voluntarios
CREATE POLICY "Dueños de calendario pueden eliminar voluntarios"
  ON meal_prep_volunteers FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM meal_prep_calendars 
      WHERE meal_prep_calendars.id = meal_prep_volunteers.calendar_id 
      AND meal_prep_calendars.user_id = auth.uid()
    )
  );

-- =====================================================
-- FUNCIÓN: Enviar recordatorios automáticos (OPCIONAL)
-- =====================================================
-- Esta función se puede usar con un cron job de Supabase
-- para enviar recordatorios 3 días antes de la fecha de comida

CREATE OR REPLACE FUNCTION send_meal_prep_reminders()
RETURNS void AS $$
DECLARE
  volunteer_record RECORD;
BEGIN
  -- Buscar voluntarios con fechas en 3 días
  FOR volunteer_record IN
    SELECT 
      v.*,
      c.nombre as calendar_nombre,
      c.user_email as calendar_owner_email
    FROM meal_prep_volunteers v
    JOIN meal_prep_calendars c ON v.calendar_id = c.id
    WHERE v.fecha_comida = CURRENT_DATE + INTERVAL '3 days'
  LOOP
    -- Aquí llamarías a la edge function para enviar el email
    -- Por ahora solo registramos en logs
    RAISE NOTICE 'Recordatorio para: % (%) - Fecha: %', 
      volunteer_record.volunteer_name, 
      volunteer_record.volunteer_email,
      volunteer_record.fecha_comida;
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- ÉXITO: Tablas y políticas creadas correctamente
-- =====================================================
-- Siguiente paso: Crear la Edge Function para emails
-- Ver archivo: supabase-edge-function-emails.ts
-- =====================================================