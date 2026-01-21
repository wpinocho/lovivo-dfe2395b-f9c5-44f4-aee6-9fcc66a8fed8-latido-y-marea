# 🍽️ Meal Prep - Guía de Configuración Completa

## ✅ Lo que está implementado en el código:

1. ✅ **Login obligatorio** para crear calendarios
2. ✅ **Links personalizados** únicos por usuario
3. ✅ **Detección automática** de dueña vs visitante
4. ✅ **"Ajustar Calendario"** solo visible para la dueña
5. ✅ **Registro de voluntarios** con formulario completo
6. ✅ **Sistema de notificaciones** por email (requiere configuración)

---

## 🚀 Pasos para activar el sistema completo

### **PASO 1: Crear las tablas en Supabase** ⚡ OBLIGATORIO

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
2. En el menú lateral, ve a **SQL Editor**
3. Haz clic en **"New query"**
4. Copia TODO el contenido del archivo `supabase-meal-prep-setup.sql`
5. Pégalo en el editor
6. Haz clic en **"Run"**
7. Verifica que aparezca: **"Success. No rows returned"**

✅ **Verificación**: Ve a **Table Editor** y confirma que existan las tablas:
- `meal_prep_calendars`
- `meal_prep_volunteers`

---

### **PASO 2: Configurar emails automáticos** 📧 RECOMENDADO

Para que los voluntarios y las creadoras reciban emails automáticos:

#### Opción A: Usar Resend (RECOMENDADO - Gratis hasta 3,000 emails/mes)

1. **Crear cuenta en Resend:**
   - Ve a [resend.com](https://resend.com)
   - Regístrate gratis
   - Verifica tu dominio (o usa el dominio de prueba)

2. **Obtener API Key:**
   - En el dashboard de Resend, ve a **API Keys**
   - Crea una nueva API key
   - Copia la key (empieza con `re_...`)

3. **Configurar en Supabase:**
   - Ve a tu proyecto en Supabase
   - Menú lateral: **Project Settings** → **Edge Functions** → **Secrets**
   - Añadir nuevo secret:
     - Name: `RESEND_API_KEY`
     - Value: `re_tu_api_key_aqui`
   - Guardar

4. **Crear Edge Function:**
   - En Supabase Dashboard, ve a **Edge Functions**
   - Clic en **"Deploy new function"**
   - Name: `send-meal-prep-notifications`
   - Copia TODO el código del archivo `supabase-edge-function-emails.ts`
   - Pégalo y haz clic en **Deploy**

5. **Actualizar el email remitente:**
   - En el archivo `supabase-edge-function-emails.ts`, línea 22
   - Cambia `notificaciones@latidoymarea.com` por tu email verificado en Resend
   - Re-deploy la función

✅ **Verificación**: Prueba creando un calendario y registrando un voluntario. Deberían llegar 2 emails.

#### Opción B: Sin emails (BÁSICO)

Si no quieres configurar emails ahora:
- El sistema funcionará normalmente
- Los voluntarios se registran en la base de datos
- Solo no recibirán confirmaciones por email
- Puedes configurarlo después sin problemas

---

### **PASO 3: (OPCIONAL) Configurar recordatorios automáticos** 🔔

Para enviar recordatorios 3 días antes a los voluntarios:

1. Crea otra Edge Function llamada `send-meal-prep-reminders`
2. Configura un Cron Job en Supabase:
   - Ve a **Database** → **Cron Jobs**
   - Crear nuevo job que ejecute diariamente:
   ```sql
   SELECT send_meal_prep_reminders();
   ```
3. La función enviará recordatorios automáticamente

---

## 🎯 Cómo funciona el sistema (para usuarios)

### Para la Mamá (Creadora del calendario):

1. **Ir a la página:** `/arma-tu-meal-prep`
2. **Llenar el formulario** con sus datos
3. Al hacer clic en "Crear mi calendario":
   - Si no tiene cuenta → Se abre modal de login
   - Ingresa email → Recibe código
   - Verifica código → Cuenta creada
   - Se crea el calendario automáticamente
4. **Recibe un link único** como:
   ```
   https://tudominio.com/arma-tu-meal-prep/maria-lopez-1234567890
   ```
5. **Comparte ese link** con familia y amigas
6. **Recibe emails** cada vez que alguien se registra
7. **Puede ajustar el calendario** (cambiar fechas, semanas) en cualquier momento

### Para Voluntarias (Visitantes del link):

1. **Reciben el link** compartido por WhatsApp/email
2. **Ven el calendario** con todos los días
3. **Eligen un día disponible** (verde)
4. **Hacen clic en "Yo llevo comida este día"**
5. **Llenan formulario** (nombre, email, teléfono, mensaje)
6. **Confirman registro**
7. **Reciben email de confirmación** con detalles
8. **3 días antes** reciben recordatorio automático (si configuraste el PASO 3)

---

## 🛡️ Seguridad implementada

- ✅ **Row Level Security (RLS)** activado
- ✅ Solo la dueña puede editar su calendario
- ✅ Cualquiera con el link puede ver el calendario (necesario para compartir)
- ✅ Cualquiera puede registrarse como voluntario (necesario para el sistema)
- ✅ Solo la dueña puede eliminar voluntarios
- ✅ Autenticación con OTP (código por email)

---

## 📊 Base de datos

### Tabla: `meal_prep_calendars`
Almacena los calendarios creados:
- `id` - UUID único
- `user_id` - Usuario propietario
- `nombre` - Nombre de la mamá
- `fecha_inicio` - Fecha de inicio del calendario
- `personas` - Número de personas en casa
- `semanas` - Duración en semanas
- `preferencias` - Preferencias alimenticias
- `alergias` - Alergias/restricciones
- `slug` - Link único personalizado
- `user_email` - Email de la dueña

### Tabla: `meal_prep_volunteers`
Almacena voluntarios registrados:
- `id` - UUID único
- `calendar_id` - Referencia al calendario
- `day_index` - Índice del día (0, 1, 2...)
- `volunteer_name` - Nombre del voluntario
- `volunteer_email` - Email del voluntario
- `volunteer_phone` - Teléfono (opcional)
- `mensaje` - Mensaje de apoyo (opcional)
- `fecha_comida` - Fecha específica de entrega
- **CONSTRAINT**: Un solo voluntario por día

---

## 🐛 Troubleshooting

### "Error creating calendar"
- ✅ Verifica que ejecutaste el SQL del PASO 1
- ✅ Verifica que las tablas existan en Supabase

### "No se envían emails"
- ✅ Verifica que configuraste `RESEND_API_KEY` en Supabase Secrets
- ✅ Verifica que el dominio esté verificado en Resend
- ✅ Revisa los logs de la Edge Function en Supabase

### "Calendario no encontrado"
- ✅ El slug debe ser único
- ✅ Verifica que el link esté completo

### Los voluntarios no aparecen
- ✅ Recarga la página
- ✅ Verifica en Supabase Table Editor que se guardaron

---

## 📞 Soporte

Si tienes problemas:
1. Revisa esta guía paso por paso
2. Verifica los logs en Supabase Dashboard
3. Revisa la consola del navegador (F12)

---

## ✨ Próximas mejoras opcionales

- [ ] Dashboard para la dueña (ver todos sus calendarios)
- [ ] Editar/eliminar voluntarios
- [ ] Exportar calendario a PDF
- [ ] Integración con Google Calendar
- [ ] Sistema de mensajes entre voluntarios y dueña
- [ ] Recordatorios por WhatsApp (además de email)

---

**¡Listo!** El sistema está completamente funcional siguiendo estos pasos. 🎉