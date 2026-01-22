import { supabase } from './supabase';
import { callEdge } from './edge';

export interface MealPrepCalendar {
  id: string;
  user_id: string;
  nombre: string;
  fecha_inicio: string;
  personas: number;
  semanas: number;
  preferencias: string;
  alergias: string;
  slug: string;
  created_at: string;
  user_email?: string;
}

export interface MealPrepVolunteer {
  id: string;
  calendar_id: string;
  day_index: number;
  volunteer_name: string;
  volunteer_email: string;
  volunteer_phone?: string;
  mensaje?: string;
  fecha_comida: string;
  created_at: string;
}

/**
 * Crear un calendario de meal prep
 */
export const createMealPrepCalendar = async (data: {
  user_id: string;
  nombre: string;
  fecha_inicio: string;
  personas: number;
  semanas: number;
  preferencias: string;
  alergias: string;
  user_email: string;
}) => {
  // Generar slug único basado en nombre + timestamp
  const slug = `${data.nombre.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;

  const { data: calendar, error } = await supabase
    .from('meal_prep_calendars')
    .insert([
      {
        user_id: data.user_id,
        nombre: data.nombre,
        fecha_inicio: data.fecha_inicio,
        personas: data.personas,
        semanas: data.semanas,
        preferencias: data.preferencias,
        alergias: data.alergias,
        slug: slug,
        user_email: data.user_email
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error creating meal prep calendar:', error);
    throw error;
  }

  return calendar as MealPrepCalendar;
};

/**
 * Obtener calendario por slug
 */
export const getMealPrepCalendar = async (slug: string) => {
  const { data, error } = await supabase
    .from('meal_prep_calendars')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching calendar:', error);
    return null;
  }

  return data as MealPrepCalendar;
};

/**
 * Actualizar calendario (solo dueña)
 */
export const updateMealPrepCalendar = async (
  id: string,
  user_id: string,
  updates: Partial<MealPrepCalendar>
) => {
  const { data, error } = await supabase
    .from('meal_prep_calendars')
    .update(updates)
    .eq('id', id)
    .eq('user_id', user_id) // Asegurar que solo la dueña pueda editar
    .select()
    .single();

  if (error) {
    console.error('Error updating calendar:', error);
    throw error;
  }

  return data;
};

/**
 * Registrar voluntario para un día
 */
export const registerVolunteer = async (data: {
  calendar_id: string;
  day_index: number;
  volunteer_name: string;
  volunteer_email: string;
  volunteer_phone?: string;
  mensaje?: string;
  fecha_comida: string;
}) => {
  const { data: volunteer, error } = await supabase
    .from('meal_prep_volunteers')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error registering volunteer:', error);
    throw error;
  }

  return volunteer as MealPrepVolunteer;
};

/**
 * Obtener todos los voluntarios de un calendario
 */
export const getCalendarVolunteers = async (calendar_id: string) => {
  const { data, error } = await supabase
    .from('meal_prep_volunteers')
    .select('*')
    .eq('calendar_id', calendar_id)
    .order('day_index', { ascending: true });

  if (error) {
    console.error('Error fetching volunteers:', error);
    return [];
  }

  return data as MealPrepVolunteer[];
};

/**
 * Enviar emails de notificación (confirmación y notificación a creadora)
 */
export const sendVolunteerEmails = async (params: {
  calendar: MealPrepCalendar;
  volunteer: MealPrepVolunteer;
}) => {
  try {
    await callEdge('send-meal-prep-notifications', {
      calendar: params.calendar,
      volunteer: params.volunteer
    });
  } catch (error) {
    console.error('Error sending volunteer emails:', error);
    // No lanzar error para no bloquear el registro
  }
};

/**
 * Obtener calendarios del usuario autenticado
 */
export const getUserCalendars = async (userId: string) => {
  const { data, error } = await supabase
    .from('meal_prep_calendars')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching user calendars:', error);
    return [];
  }

  return data as MealPrepCalendar[];
};

/**
 * Eliminar calendario (solo dueña)
 */
export const deleteMealPrepCalendar = async (
  id: string,
  user_id: string
) => {
  // Primero eliminar todos los voluntarios asociados
  const { error: volunteersError } = await supabase
    .from('meal_prep_volunteers')
    .delete()
    .eq('calendar_id', id);

  if (volunteersError) {
    console.error('Error deleting volunteers:', volunteersError);
    throw volunteersError;
  }

  // Luego eliminar el calendario
  const { error } = await supabase
    .from('meal_prep_calendars')
    .delete()
    .eq('id', id)
    .eq('user_id', user_id); // Asegurar que solo la dueña pueda eliminar

  if (error) {
    console.error('Error deleting calendar:', error);
    throw error;
  }

  return { success: true };
};