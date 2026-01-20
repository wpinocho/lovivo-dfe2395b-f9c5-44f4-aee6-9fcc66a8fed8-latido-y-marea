import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

const AvisoPrivacidad = () => {
  return (
    <EcommerceTemplate showCart={false}>
      {/* Hero Section */}
      <section className="relative bg-white py-12 border-b border-gray-200">
        <div className="w-full px-8 md:px-12 lg:px-16 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-wide">
            Aviso de Privacidad
          </h1>
          <p className="text-lg text-gray-700">
            Última actualización: Enero 2025
          </p>
        </div>
      </section>

      {/* Contenido del Aviso */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Identidad y Domicilio */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Identidad y Domicilio del Responsable</h2>
              <p className="text-gray-700">
                <strong>Latido y Marea</strong>, con domicilio en Ciudad de México, México, es responsable del uso y protección de sus datos personales, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
              </p>
            </div>

            {/* Datos Personales */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Datos Personales que Recabamos</h2>
              <p className="text-gray-700 mb-3">
                Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de las siguientes formas:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cuando nos los proporciona directamente al solicitar nuestros servicios</li>
                <li>A través de formularios de contacto en nuestra página web</li>
                <li>Cuando realiza una compra en nuestra tienda en línea</li>
                <li>Durante la prestación de nuestros servicios profesionales</li>
              </ul>
              
              <p className="text-gray-700 mt-4 mb-3">
                Los datos personales que podemos recabar incluyen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Datos de identificación:</strong> Nombre completo, fecha de nacimiento, edad</li>
                <li><strong>Datos de contacto:</strong> Correo electrónico, teléfono, dirección postal</li>
                <li><strong>Datos de facturación:</strong> RFC, dirección fiscal (cuando sea aplicable)</li>
                <li><strong>Datos sensibles:</strong> Información sobre su estado de salud, embarazo, ciclo menstrual, situación emocional y psicológica, únicamente cuando sea necesario para la prestación de nuestros servicios de doula, educación menstrual y acompañamiento psicológico perinatal</li>
              </ul>
            </div>

            {/* Finalidades */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Finalidades del Tratamiento de Datos</h2>
              <p className="text-gray-700 mb-3">
                Sus datos personales serán utilizados para las siguientes finalidades principales:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proveer los servicios de acompañamiento de parto (doula)</li>
                <li>Brindar educación menstrual personalizada</li>
                <li>Ofrecer acompañamiento prenatal y postparto</li>
                <li>Proporcionar sesiones psicológicas perinatales</li>
                <li>Realizar servicios de baño postparto y cierre de cadera</li>
                <li>Preparar y entregar meal prep personalizado</li>
                <li>Procesar pagos y generar facturas</li>
                <li>Coordinar entregas y servicios presenciales</li>
                <li>Dar seguimiento a consultas y citas</li>
                <li>Mantener comunicación sobre nuestros servicios</li>
              </ul>

              <p className="text-gray-700 mt-4 mb-3">
                De manera adicional, podremos utilizar su información personal para las siguientes finalidades secundarias:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Enviarle información sobre nuevos servicios y promociones (previa autorización)</li>
                <li>Realizar estudios internos sobre hábitos de consumo</li>
                <li>Mejorar la calidad de nuestros servicios</li>
              </ul>
            </div>

            {/* Datos Sensibles */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Datos Personales Sensibles</h3>
              <p className="text-gray-700">
                Le informamos que para cumplir con las finalidades previstas en este aviso de privacidad, 
                se recabará información considerada como <strong>datos personales sensibles</strong>, tales como 
                información sobre su estado de salud, embarazo, ciclo menstrual y estado emocional. Estos datos 
                son necesarios para brindarle un acompañamiento personalizado y profesional. Al proporcionarnos 
                estos datos, usted consiente expresamente su tratamiento.
              </p>
            </div>

            {/* Opciones y Derechos ARCO */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Derechos ARCO</h2>
              <p className="text-gray-700 mb-3">
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos 
                y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección 
                de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); 
                que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo 
                utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines 
                específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p className="text-gray-700">
                Para el ejercicio de cualquiera de los derechos ARCO, puede enviar una solicitud al correo electrónico: 
                <strong> contacto@latidoymarea.com</strong>
              </p>
            </div>

            {/* Revocación del Consentimiento */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Revocación del Consentimiento</h2>
              <p className="text-gray-700">
                Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus 
                datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos 
                atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación 
                legal requiramos seguir tratando sus datos personales.
              </p>
            </div>

            {/* Limitación de Uso y Divulgación */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Limitación de Uso y Divulgación de Datos</h2>
              <p className="text-gray-700">
                Si desea limitar el uso o divulgación de sus datos personales, puede solicitarlo enviando un correo a 
                <strong> contacto@latidoymarea.com</strong>. En caso de que su solicitud sea procedente, se registrará 
                en el listado de exclusión correspondiente.
              </p>
            </div>

            {/* Transferencias */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Transferencia de Datos Personales</h2>
              <p className="text-gray-700">
                Le informamos que sus datos personales pueden ser compartidos dentro del país con las siguientes personas, 
                empresas, organizaciones o autoridades distintas a nosotros, para los siguientes fines:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                <li>Procesadores de pago para completar transacciones</li>
                <li>Servicios de mensajería para entregas de meal prep</li>
                <li>Autoridades competentes cuando sea requerido por ley</li>
              </ul>
              <p className="text-gray-700 mt-3">
                En estos casos, su información será tratada conforme a la legislación aplicable en materia de protección de datos.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Uso de Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700">
                Le informamos que en nuestra página web utilizamos cookies y otras tecnologías para mejorar su experiencia 
                de navegación, analizar el tráfico del sitio y personalizar el contenido. Puede configurar su navegador 
                para rechazar estas tecnologías, sin embargo, esto podría afectar la funcionalidad del sitio.
              </p>
            </div>

            {/* Cambios al Aviso */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Modificaciones al Aviso de Privacidad</h2>
              <p className="text-gray-700">
                Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente 
                aviso de privacidad. Estas modificaciones estarán disponibles a través de nuestra página web, en la sección 
                de Aviso de Privacidad.
              </p>
            </div>

            {/* Contacto */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-black mb-4 tracking-wide">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene alguna duda o comentario sobre este aviso de privacidad, puede contactarnos a través de:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Email:</strong> contacto@latidoymarea.com</li>
                <li><strong>Teléfono:</strong> +52 55 5965 2494</li>
                <li><strong>Ubicación:</strong> Ciudad de México, México</li>
              </ul>
            </div>

            {/* Consentimiento */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 mt-8">
              <p className="text-gray-700">
                <strong>CONSENTIMIENTO:</strong> Al proporcionar sus datos personales a través de nuestros formularios, 
                página web o durante la prestación de nuestros servicios, usted consiente que Latido y Marea recabe, 
                use y transfiera su información personal de acuerdo con lo establecido en el presente Aviso de Privacidad.
              </p>
            </div>

          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default AvisoPrivacidad;