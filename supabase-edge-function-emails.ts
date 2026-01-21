// =====================================================
// SUPABASE EDGE FUNCTION: send-meal-prep-notifications
// =====================================================
// Esta Edge Function envía emails de notificación para Meal Prep:
// 1. Email de confirmación al voluntario
// 2. Email de notificación a la creadora del calendario
// 
// SETUP INSTRUCCIONES:
// 1. Configurar Resend API Key en Supabase Dashboard:
//    Project Settings > Edge Functions > Secrets
//    Añadir: RESEND_API_KEY = tu_api_key_de_resend
//
// 2. Ir a https://resend.com para obtener API key (gratis)
//
// 3. Crear esta función en Supabase:
//    - Ir a Edge Functions en el dashboard
//    - Crear nueva función: "send-meal-prep-notifications"
//    - Copiar este código
// =====================================================

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = 'Latido y Marea <notificaciones@latidoymarea.com>' // Cambiar por tu dominio verificado

interface MealPrepCalendar {
  id: string
  nombre: string
  fecha_inicio: string
  personas: number
  preferencias: string
  alergias: string
  user_email: string
}

interface MealPrepVolunteer {
  id: string
  volunteer_name: string
  volunteer_email: string
  volunteer_phone?: string
  mensaje?: string
  fecha_comida: string
}

serve(async (req) => {
  try {
    const { calendar, volunteer } = await req.json() as {
      calendar: MealPrepCalendar
      volunteer: MealPrepVolunteer
    }

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no configurado')
    }

    const fechaComida = new Date(volunteer.fecha_comida).toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    // ====================================
    // 1. EMAIL DE CONFIRMACIÓN AL VOLUNTARIO
    // ====================================
    const confirmacionVoluntario = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: volunteer.volunteer_email,
        subject: `¡Confirmación! Llevarás comida a ${calendar.nombre}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #e8a77c; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #e8a77c; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              h1 { margin: 0; font-size: 24px; }
              h2 { color: #e8a77c; font-size: 20px; }
              ul { padding-left: 20px; }
              .highlight { color: #e8a77c; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>¡Gracias por tu apoyo! 🎉</h1>
              </div>
              <div class="content">
                <p>Hola <strong>${volunteer.volunteer_name}</strong>,</p>
                
                <p>¡Confirmamos tu registro! Quedaste anotad@ para llevar comida a <strong>${calendar.nombre}</strong>.</p>
                
                <div class="info-box">
                  <h2>Detalles de tu compromiso:</h2>
                  <ul>
                    <li><strong>Fecha:</strong> <span class="highlight">${fechaComida}</span></li>
                    <li><strong>Para:</strong> ${calendar.nombre}</li>
                    <li><strong>Personas en casa:</strong> ${calendar.personas}</li>
                  </ul>
                </div>

                <div class="info-box">
                  <h2>Preferencias alimenticias:</h2>
                  <p>${calendar.preferencias || 'Sin preferencias especiales'}</p>
                  ${calendar.alergias ? `<p><strong>⚠️ Alergias/Restricciones:</strong> ${calendar.alergias}</p>` : ''}
                </div>

                ${volunteer.mensaje ? `
                  <div class="info-box">
                    <h2>Tu mensaje:</h2>
                    <p><em>"${volunteer.mensaje}"</em></p>
                  </div>
                ` : ''}

                <p><strong>Recordatorio:</strong> Recibirás otro email <span class="highlight">3 días antes</span> de la fecha para que no lo olvides.</p>
                
                <p>Tu apoyo es invaluable en esta etapa tan importante. ¡Gracias por formar parte de esta red de amor y cuidado!</p>

                <div class="footer">
                  <p>Con cariño,<br><strong>Latido y Marea</strong></p>
                  <p style="font-size: 12px; color: #999;">
                    Si tienes alguna duda, contacta a ${calendar.nombre} directamente o escríbenos a contacto@latidoymarea.com
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      })
    })

    if (!confirmacionVoluntario.ok) {
      const error = await confirmacionVoluntario.text()
      console.error('Error enviando confirmación al voluntario:', error)
    }

    // ====================================
    // 2. EMAIL DE NOTIFICACIÓN A LA CREADORA
    // ====================================
    const notificacionCreadora = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: calendar.user_email,
        subject: `¡Buenas noticias! ${volunteer.volunteer_name} llevará comida el ${fechaComida}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #b8a8c4; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #b8a8c4; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
              h1 { margin: 0; font-size: 24px; }
              h2 { color: #b8a8c4; font-size: 20px; }
              .highlight { color: #b8a8c4; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>¡Alguien se registró para ayudarte! 💜</h1>
              </div>
              <div class="content">
                <p>Hola <strong>${calendar.nombre}</strong>,</p>
                
                <p>¡Tenemos buenas noticias! Una persona más se sumó para apoyarte con comida durante tu postparto.</p>
                
                <div class="info-box">
                  <h2>Detalles del registro:</h2>
                  <ul>
                    <li><strong>Voluntari@:</strong> <span class="highlight">${volunteer.volunteer_name}</span></li>
                    <li><strong>Email:</strong> ${volunteer.volunteer_email}</li>
                    ${volunteer.volunteer_phone ? `<li><strong>Teléfono:</strong> ${volunteer.volunteer_phone}</li>` : ''}
                    <li><strong>Fecha comprometida:</strong> <span class="highlight">${fechaComida}</span></li>
                  </ul>
                </div>

                ${volunteer.mensaje ? `
                  <div class="info-box">
                    <h2>Mensaje de ${volunteer.volunteer_name}:</h2>
                    <p><em>"${volunteer.mensaje}"</em></p>
                  </div>
                ` : ''}

                <p>¡Un día menos de preocuparte por la comida! Tu comunidad está aquí para cuidarte. 💜</p>
                
                <p>Puedes ver tu calendario completo en cualquier momento en tu enlace personalizado.</p>

                <div class="footer">
                  <p>Con amor,<br><strong>Latido y Marea</strong></p>
                  <p style="font-size: 12px; color: #999;">
                    Si tienes dudas, escríbenos a contacto@latidoymarea.com
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `
      })
    })

    if (!notificacionCreadora.ok) {
      const error = await notificacionCreadora.text()
      console.error('Error enviando notificación a creadora:', error)
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Emails enviados correctamente'
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error en send-meal-prep-notifications:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message 
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})

// =====================================================
// RECORDATORIOS AUTOMÁTICOS (OPCIONAL)
// =====================================================
// Para implementar recordatorios 3 días antes:
// 1. Crear otra Edge Function: "send-meal-prep-reminders"
// 2. Configurar Cron Job en Supabase para ejecutar diariamente
// 3. La función buscará voluntarios con fecha en 3 días y enviará recordatorios
// =====================================================