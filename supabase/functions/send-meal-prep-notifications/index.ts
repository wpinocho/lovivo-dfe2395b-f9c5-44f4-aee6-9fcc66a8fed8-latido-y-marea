import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = 'Latido y Marea <onboarding@resend.dev>'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { calendar, volunteer } = await req.json()

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no configurado')
    }

    const fechaComida = new Date(volunteer.fecha_comida).toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    // Email al voluntario
    await fetch('https://api.resend.com/emails', {
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
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #e8a77c; color: white; padding: 20px; text-align: center;">
              <h1>¡Gracias por tu apoyo! 🎉</h1>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
              <p>Hola <strong>${volunteer.volunteer_name}</strong>,</p>
              <p>Confirmamos tu registro para llevar comida a <strong>${calendar.nombre}</strong>.</p>
              <div style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #e8a77c;">
                <h2 style="color: #e8a77c; margin-top: 0;">📅 Detalles de tu día:</h2>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 10px;">📆 <strong>Fecha:</strong> ${fechaComida}</li>
                  <li style="margin-bottom: 10px;">👤 <strong>Para:</strong> ${calendar.nombre}</li>
                  <li style="margin-bottom: 10px;">👥 <strong>Personas en casa:</strong> ${calendar.personas}</li>
                  <li style="margin-bottom: 10px;">🍽️ <strong>Preferencias:</strong> ${calendar.preferencias}</li>
                  ${calendar.alergias ? `<li style="margin-bottom: 10px;">⚠️ <strong>Alergias/Restricciones:</strong> ${calendar.alergias}</li>` : ''}
                </ul>
              </div>
              ${volunteer.mensaje ? `<div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Tu mensaje:</strong></p>
                <p style="margin: 10px 0 0 0; font-style: italic;">"${volunteer.mensaje}"</p>
              </div>` : ''}
              <p style="margin-top: 30px;">Tu apoyo es invaluable en esta etapa tan importante. ¡Gracias por ser parte de esta red de cuidado!</p>
              <p>Con cariño,<br><strong>Equipo Latido y Marea</strong></p>
            </div>
            <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666;">
              <p>Si tienes alguna pregunta, contáctanos en: <a href="mailto:contacto@latidoymarea.com">contacto@latidoymarea.com</a></p>
            </div>
          </div>
        `
      })
    })

    // Email a la creadora del calendario
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: calendar.user_email,
        subject: `¡${volunteer.volunteer_name} llevará comida el ${fechaComida}!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #b8a8c4; color: white; padding: 20px; text-align: center;">
              <h1>¡Alguien más se sumó a tu red de apoyo! 💜</h1>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
              <p>Hola <strong>${calendar.nombre}</strong>,</p>
              <p>Una persona más se registró para llevarte comida:</p>
              <div style="background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #b8a8c4;">
                <h2 style="color: #b8a8c4; margin-top: 0;">👤 Información del voluntari@:</h2>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 10px;">👤 <strong>Nombre:</strong> ${volunteer.volunteer_name}</li>
                  <li style="margin-bottom: 10px;">📧 <strong>Email:</strong> ${volunteer.volunteer_email}</li>
                  ${volunteer.volunteer_phone ? `<li style="margin-bottom: 10px;">📱 <strong>Teléfono:</strong> ${volunteer.volunteer_phone}</li>` : ''}
                  <li style="margin-bottom: 10px;">📆 <strong>Fecha que llevará comida:</strong> ${fechaComida}</li>
                </ul>
              </div>
              ${volunteer.mensaje ? `<div style="background: #f3e5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Mensaje para ti:</strong></p>
                <p style="margin: 10px 0 0 0; font-style: italic;">"${volunteer.mensaje}"</p>
              </div>` : ''}
              <p style="margin-top: 30px;">¡Tu comunidad te está acompañando! 💜</p>
              <p>Con amor,<br><strong>Equipo Latido y Marea</strong></p>
            </div>
          </div>
        `
      })
    })

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error) {
    console.error('Error enviando emails:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})