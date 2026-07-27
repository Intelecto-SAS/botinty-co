/**
 * ARCHIVO CENTRAL DE CONTENIDO — Bot Inty
 * ---------------------------------------------------------------
 * Todo el texto, cifras, clientes, integraciones y datos de contacto
 * de la landing se editan desde aquí.
 *
 * NOTA INTERNA: las cifras marcadas con `porValidar: true` provienen del
 * sitio actual (botinty.co) y deben validarse con el equipo comercial
 * antes de publicar. Ninguna capacidad técnica no confirmada debe
 * afirmarse como disponible.
 */

export const brand = {
  nombre: "Bot Inty",
  empresaResponsable: "Intelecto",
  tagline: "IA conversacional para empresas",
  descripcionCorta:
    "El asistente inteligente que conecta a tus colaboradores con todo lo que necesitan.",
};

export const nav = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Resultados", href: "#resultados" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

export const hero = {
  etiqueta: "IA conversacional para empresas",
  titulo: ["Todo lo que tus colaboradores necesitan,", "en una sola conversación."],
  tituloDestacado: "en una sola conversación.",
  // Alternativa aprobada: "La forma más inteligente de atender a tus empleados."
  apoyo:
    "Bot Inty conecta a tus colaboradores con la información, los documentos y los procesos internos de tu empresa. Resuelve solicitudes, automatiza tareas y entrega respuestas inmediatas mediante inteligencia artificial.",
  ctaPrimario: { label: "Solicitar una demo", href: "#demo" },
  ctaSecundario: { label: "Ver cómo funciona", href: "#como-funciona" },
  nota: "Menos tareas repetitivas. Más tiempo para crear valor.",
  chips: ["Nómina", "Talento humano", "Soporte", "Documentos", "Procesos"],
};

export type Mensaje = {
  autor: "empleado" | "bot";
  texto: string;
  adjunto?: string;
  buscando?: string;
};

export type Conversacion = {
  id: string;
  area: string;
  resumen: string;
  mensajes: Mensaje[];
};

export const conversacionHero: Conversacion[] = [
  {
    id: "certificado",
    area: "Certificado laboral",
    resumen: "Documento entregado en la conversación",
    mensajes: [
      { autor: "empleado", texto: "Necesito mi certificado laboral" },
      { autor: "bot", buscando: "Consultando el sistema de talento humano", texto: "" },
      {
        autor: "bot",
        texto: "Tu certificado laboral está listo con la información vigente de tu contrato.",
        adjunto: "Certificado_laboral.pdf",
      },
    ],
  },
  {
    id: "nomina",
    area: "Nómina",
    resumen: "Desprendible del último periodo",
    mensajes: [
      { autor: "empleado", texto: "¿Puedes enviarme mi último desprendible de nómina?" },
      { autor: "bot", buscando: "Buscando en el sistema de nómina", texto: "" },
      {
        autor: "bot",
        texto:
          "Claro. Encontré el documento correspondiente al último periodo. Puedes descargarlo aquí.",
        adjunto: "Desprendible_nomina.pdf",
      },
    ],
  },
  {
    id: "soporte",
    area: "Soporte interno",
    resumen: "Caso creado y en seguimiento",
    mensajes: [
      { autor: "empleado", texto: "No puedo ingresar a una plataforma." },
      { autor: "bot", buscando: "Validando tu usuario corporativo", texto: "" },
      {
        autor: "bot",
        texto:
          "Voy a ayudarte. Primero validemos tu usuario y, si es necesario, crearé una solicitud de soporte.",
      },
    ],
  },
];

export const clientes = {
  titulo: "Empresas que están transformando su atención interna con Bot Inty",
  // Marcadores editables: reemplazar `nombre` y, cuando exista, agregar `logo`.
  logos: [
    { nombre: "Eficacia" },
    { nombre: "Logo cliente 2" },
    { nombre: "Logo cliente 3" },
    { nombre: "Logo cliente 4" },
    { nombre: "Logo cliente 5" },
    { nombre: "Logo cliente 6" },
  ],
};

export const problema = {
  titulo: "Tus colaboradores no deberían perder tiempo buscando respuestas.",
  antes: [
    "Información distribuida en correos, carpetas y plataformas.",
    "Solicitudes repetitivas atendidas manualmente.",
    "Equipos internos saturados.",
    "Tiempos de respuesta prolongados.",
    "Empleados que no saben dónde iniciar un trámite.",
    "Procesos que dependen de varias personas.",
    "Poca visibilidad sobre las solicitudes internas.",
  ],
  despues: [
    "Una conversación como punto único de entrada.",
    "Solicitudes iniciadas y guiadas automáticamente.",
    "Equipos enfocados en casos que exigen criterio.",
    "Respuestas inmediatas en lenguaje natural.",
    "Trámites con pasos claros desde el primer mensaje.",
    "Procesos conectados de extremo a extremo.",
    "Trazabilidad de cada solicitud interna.",
  ],
  cierre: "Bot Inty convierte procesos complejos en conversaciones simples.",
};

export const demoConversaciones: Conversacion[] = [
  {
    id: "talento-humano",
    area: "Talento humano",
    resumen: "Vacaciones disponibles y solicitud guiada",
    mensajes: [
      { autor: "empleado", texto: "¿Cuántos días de vacaciones tengo disponibles?" },
      { autor: "bot", buscando: "Consultando tu histórico de ausencias", texto: "" },
      {
        autor: "bot",
        texto:
          "Actualmente tienes 8 días disponibles. También puedo ayudarte a iniciar la solicitud.",
      },
    ],
  },
  {
    id: "nomina",
    area: "Nómina",
    resumen: "Desprendible de pago del último periodo",
    mensajes: [
      { autor: "empleado", texto: "¿Puedes enviarme mi último desprendible de nómina?" },
      { autor: "bot", buscando: "Buscando en el sistema de nómina", texto: "" },
      {
        autor: "bot",
        texto:
          "Claro. Encontré el documento correspondiente al último periodo. Puedes descargarlo aquí.",
        adjunto: "Desprendible_nomina.pdf",
      },
    ],
  },
  {
    id: "tecnologia",
    area: "Tecnología",
    resumen: "Recuperación de acceso y creación de caso",
    mensajes: [
      { autor: "empleado", texto: "No puedo ingresar a una plataforma." },
      { autor: "bot", buscando: "Verificando el estado de tu cuenta", texto: "" },
      {
        autor: "bot",
        texto:
          "Voy a ayudarte. Primero validemos tu usuario y, si es necesario, crearé una solicitud de soporte.",
      },
    ],
  },
  {
    id: "operaciones",
    area: "Operaciones",
    resumen: "Procedimiento interno y formato asociado",
    mensajes: [
      { autor: "empleado", texto: "¿Cuál es el procedimiento para solicitar una dotación?" },
      { autor: "bot", buscando: "Consultando procedimientos internos", texto: "" },
      {
        autor: "bot",
        texto:
          "El procedimiento tiene tres pasos y requiere el formato de solicitud. Te comparto el documento y puedo registrar tu solicitud ahora.",
        adjunto: "Formato_solicitud_dotacion.pdf",
      },
    ],
  },
  {
    id: "documentos",
    area: "Documentos",
    resumen: "Acceso a formatos y documentos internos",
    mensajes: [
      { autor: "empleado", texto: "Necesito el formato de incapacidad." },
      { autor: "bot", buscando: "Buscando en la base documental autorizada", texto: "" },
      {
        autor: "bot",
        texto:
          "Este es el formato vigente. Si quieres, te explico cómo diligenciarlo y a quién debe enviarse.",
        adjunto: "Formato_incapacidad.pdf",
      },
    ],
  },
  {
    id: "servicio-empleado",
    area: "Servicio al empleado",
    resumen: "Seguimiento del estado de una solicitud",
    mensajes: [
      { autor: "empleado", texto: "¿En qué va mi solicitud del certificado de ingresos?" },
      { autor: "bot", buscando: "Revisando el estado del caso", texto: "" },
      {
        autor: "bot",
        texto:
          "Tu solicitud está en revisión por el área responsable. Te aviso por este mismo canal cuando cambie de estado.",
      },
    ],
  },
];

export const funcionalidades = [
  {
    titulo: "Respuestas inteligentes",
    texto:
      "Comprende preguntas en lenguaje natural y entrega información según el contexto del empleado.",
    destacada: true,
  },
  {
    titulo: "Automatización de solicitudes",
    texto: "Inicia trámites, registra información y guía al colaborador durante todo el proceso.",
    destacada: true,
  },
  {
    titulo: "Entrega de documentos",
    texto:
      "Facilita la consulta y solicitud de certificados, comprobantes, formatos y documentos internos.",
  },
  {
    titulo: "Conocimiento empresarial",
    texto: "Consulta políticas, procedimientos, manuales y respuestas oficiales de la organización.",
  },
  {
    titulo: "Seguimiento de casos",
    texto: "Permite consultar el estado de una solicitud sin depender de llamadas o correos.",
  },
  {
    titulo: "Atención permanente",
    texto:
      "Ofrece un canal de autoservicio disponible para los colaboradores cuando lo necesitan.",
  },
  {
    titulo: "Integración con sistemas",
    texto: "Puede conectarse con herramientas empresariales y fuentes internas autorizadas.",
  },
  {
    titulo: "Información y métricas",
    texto:
      "Ayuda a identificar consultas frecuentes, tiempos de atención y oportunidades de mejora.",
  },
];

export const comoFunciona = {
  titulo: "De una pregunta a una solución, en segundos.",
  pasos: [
    {
      titulo: "El colaborador pregunta",
      texto: "Escribe su solicitud mediante una conversación natural.",
    },
    {
      titulo: "Bot Inty comprende",
      texto: "Identifica la necesidad, el contexto y la información requerida.",
    },
    {
      titulo: "Consulta y ejecuta",
      texto: "Busca información o activa el proceso correspondiente.",
    },
    {
      titulo: "Entrega una respuesta",
      texto: "Resuelve la solicitud, entrega el documento o informa el siguiente paso.",
    },
  ],
};

export const casosDeUso = [
  {
    id: "talento-humano",
    area: "Talento humano",
    items: [
      "Certificados laborales",
      "Vacaciones y permisos",
      "Beneficios",
      "Procesos de ingreso",
      "Políticas internas",
      "Preguntas frecuentes",
    ],
    conversacion: [
      { autor: "empleado", texto: "¿Cómo solicito mi certificado laboral?" },
      {
        autor: "bot",
        texto: "Puedo generarlo ahora. ¿Lo necesitas con salario o solo con la fecha de ingreso?",
      },
    ] as Mensaje[],
  },
  {
    id: "nomina",
    area: "Nómina",
    items: [
      "Desprendibles de pago",
      "Fechas de nómina",
      "Novedades",
      "Comprobantes",
      "Orientación sobre deducciones",
      "Escalamiento de solicitudes",
    ],
    conversacion: [
      { autor: "empleado", texto: "¿Cuándo se paga la próxima quincena?" },
      {
        autor: "bot",
        texto: "El próximo pago está programado para el 30. Puedo enviarte el calendario completo.",
      },
    ] as Mensaje[],
  },
  {
    id: "tecnologia",
    area: "Tecnología",
    items: [
      "Soporte básico",
      "Recuperación de accesos",
      "Preguntas frecuentes",
      "Creación y consulta de casos",
      "Orientación sobre herramientas",
    ],
    conversacion: [
      { autor: "empleado", texto: "Olvidé mi contraseña corporativa." },
      {
        autor: "bot",
        texto: "Te guío en el restablecimiento y, si falla, creo el caso de soporte por ti.",
      },
    ] as Mensaje[],
  },
  {
    id: "operaciones",
    area: "Operaciones",
    items: [
      "Consulta de procedimientos",
      "Solicitudes internas",
      "Acceso a formatos",
      "Seguimiento de tareas",
      "Información por cargo o área",
    ],
    conversacion: [
      { autor: "empleado", texto: "¿Qué formato uso para reportar una novedad?" },
      {
        autor: "bot",
        texto: "Este es el formato vigente para tu área. También puedo radicarlo por ti.",
      },
    ] as Mensaje[],
  },
  {
    id: "servicio-interno",
    area: "Servicio interno",
    items: [
      "Clasificación de solicitudes",
      "Respuestas automáticas",
      "Seguimiento",
      "Escalamiento",
      "Medición de satisfacción",
    ],
    conversacion: [
      { autor: "empleado", texto: "Mi solicitud lleva varios días sin respuesta." },
      {
        autor: "bot",
        texto: "Revisé el caso y lo escalé al equipo responsable. Te confirmo por este canal.",
      },
    ] as Mensaje[],
  },
];

export const beneficios = {
  titulo: "Más capacidad para tus equipos. Una mejor experiencia para tus empleados.",
  lista: [
    "Menos solicitudes atendidas manualmente.",
    "Respuestas más rápidas.",
    "Reducción de reprocesos.",
    "Mayor disponibilidad de la información.",
    "Mejor experiencia para los colaboradores.",
    "Mayor productividad de las áreas internas.",
    "Procesos más ordenados y medibles.",
    "Mayor capacidad de autoservicio.",
  ],
};

/**
 * CIFRAS — validar con el equipo comercial antes de publicar.
 * `porValidar: true` indica que el dato proviene del sitio actual.
 */
export const cifras = [
  { valor: 4000, sufijo: "+", label: "Usuarios activos", porValidar: true },
  { valor: 6000, sufijo: "+", label: "Casos atendidos al mes", porValidar: true },
  { valor: 100, sufijo: "%", label: "Disponibilidad del canal de autoservicio", porValidar: true },
  { valor: 24, sufijo: "/7", label: "Atención sin depender de horarios", porValidar: true },
];

export const antesDespues = {
  antes: [
    "Correos repetitivos",
    "Formularios dispersos",
    "Respuestas tardías",
    "Procesos manuales",
    "Equipos saturados",
    "Información difícil de encontrar",
  ],
  despues: [
    "Una sola conversación",
    "Respuestas inmediatas",
    "Procesos guiados",
    "Autoservicio",
    "Información centralizada",
    "Atención medible",
  ],
};

/** Cada integración se puede ocultar cambiando `visible` a false. */
export const integraciones = {
  titulo: "Bot Inty se conecta con el ecosistema de tu empresa.",
  nota: "Las integraciones se habilitan según la arquitectura y las autorizaciones de cada organización.",
  items: [
    { nombre: "Microsoft Teams", visible: true },
    { nombre: "SharePoint", visible: true },
    { nombre: "Microsoft 365", visible: true },
    { nombre: "Dynamics 365", visible: true },
    { nombre: "Sistemas de nómina", visible: true },
    { nombre: "Mesas de servicio", visible: true },
    { nombre: "Bases de conocimiento", visible: true },
    { nombre: "Intranets", visible: true },
    { nombre: "APIs empresariales", visible: true },
    { nombre: "Plataformas internas", visible: true },
  ],
};

export const seguridad = {
  titulo: "Inteligencia artificial alineada con las reglas de tu empresa.",
  items: [
    { titulo: "Acceso controlado", texto: "La información disponible depende de los permisos definidos por la organización." },
    { titulo: "Respuestas por perfil", texto: "Cada colaborador recibe información acorde con su rol y su área." },
    { titulo: "Fuentes autorizadas", texto: "Las respuestas se construyen sobre contenidos empresariales aprobados." },
    { titulo: "Registro de solicitudes", texto: "Cada interacción y trámite queda registrado para su seguimiento." },
    { titulo: "Información sensible", texto: "El tratamiento de datos se define junto con las áreas responsables." },
    { titulo: "Integraciones seguras", texto: "Las conexiones se habilitan bajo los mecanismos que autorice la empresa." },
    { titulo: "Control editorial", texto: "La organización decide qué documentos y respuestas puede entregar Bot Inty." },
  ],
};

export const historiaExito = {
  titulo: "Cuando cada segundo cuenta, una conversación puede cambiarlo todo.",
  cliente: "Eficacia",
  logo: null as string | null,
  situacion:
    "Un alto volumen de solicitudes internas repetitivas llegaba por correo y llamadas, saturando a los equipos de talento humano y servicio al empleado.",
  solucion:
    "Se implementó Bot Inty como canal conversacional de autoservicio para consultas frecuentes, entrega de documentos y radicación de solicitudes internas.",
  resultados: [
    { valor: "4.000+", label: "Usuarios activos", porValidar: true },
    { valor: "6.000+", label: "Casos al mes", porValidar: true },
    { valor: "Menor", label: "Tiempo de atención", porValidar: true },
  ],
  frase:
    "Los colaboradores encontraron un solo lugar para resolver sus solicitudes, y los equipos internos recuperaron tiempo para tareas de mayor valor.",
  casoCompleto:
    "Antes de Bot Inty, las solicitudes internas de Eficacia se distribuían entre correos, llamadas y formularios, lo que dificultaba el seguimiento y generaba reprocesos en los equipos de atención. La implementación se realizó por etapas: primero las consultas más frecuentes de talento humano y nómina, luego la entrega de documentos y finalmente la radicación y el seguimiento de casos internos. Hoy los colaboradores resuelven en una conversación lo que antes exigía varios canales, y la organización cuenta con visibilidad sobre los temas más consultados para seguir mejorando sus procesos. Las cifras presentadas corresponden a la información publicada por el cliente y deben validarse antes de cada publicación.",
};

export const faq = [
  {
    q: "¿Qué es Bot Inty?",
    a: "Es un asistente empresarial de inteligencia artificial conversacional que permite a los colaboradores resolver dudas, consultar información y ejecutar procesos internos en lenguaje natural.",
  },
  {
    q: "¿Qué tipo de procesos puede automatizar?",
    a: "Procesos internos con reglas definidas: solicitudes de documentos, consultas de talento humano y nómina, soporte tecnológico básico, radicación y seguimiento de casos, y tareas repetitivas de servicio interno.",
  },
  {
    q: "¿Bot Inty puede entregar documentos a los empleados?",
    a: "Sí, cuando la organización autoriza el acceso a la fuente correspondiente. Los documentos se entregan según el perfil de cada colaborador.",
  },
  {
    q: "¿Puede conectarse con nuestras plataformas actuales?",
    a: "Puede conectarse con herramientas empresariales y fuentes internas autorizadas. El alcance de cada integración se define durante el levantamiento técnico.",
  },
  {
    q: "¿Las respuestas se adaptan a cada empleado?",
    a: "Sí. Las respuestas consideran el perfil, el área y los permisos definidos por la organización.",
  },
  {
    q: "¿Cuánto tiempo tarda una implementación?",
    a: "Depende del número de procesos, las integraciones requeridas y la disponibilidad de la información. Es habitual comenzar con un alcance acotado y ampliarlo por etapas.",
  },
  {
    q: "¿Podemos empezar con un solo proceso?",
    a: "Sí. Recomendamos iniciar con el proceso de mayor volumen para medir resultados rápidamente y luego sumar nuevos casos de uso.",
  },
  {
    q: "¿Cómo se administra la información?",
    a: "La organización define las fuentes autorizadas, los documentos disponibles y las reglas de acceso. El contenido puede actualizarse a medida que cambian las políticas internas.",
  },
  {
    q: "¿Bot Inty reemplaza a los equipos internos?",
    a: "No. Resuelve las solicitudes repetitivas y escala a las personas los casos que requieren criterio, análisis o decisión humana.",
  },
  {
    q: "¿Cómo puedo solicitar una demostración?",
    a: "Completa el formulario comercial de esta página y un especialista te contactará para conocer los procesos que quieres transformar.",
  },
];

export const ctaFinal = {
  titulo: "Transforma cada solicitud interna en una experiencia más simple.",
  texto:
    "Descubre cómo Bot Inty puede reducir tareas repetitivas, mejorar los tiempos de respuesta y entregar a tus colaboradores un canal inteligente de atención.",
  primario: "Solicitar una demo",
  secundario: "Hablar con un especialista",
  chat: {
    empleado: "Hola, quiero conocer Bot Inty.",
    bot: "Perfecto. Empecemos por conocer los procesos que quieres transformar.",
  },
};

export const formulario = {
  titulo: "Solicita una demostración de Bot Inty",
  texto:
    "Cuéntanos qué procesos internos quieres simplificar y te mostraremos cómo Bot Inty puede acompañarlos.",
  boton: "Quiero conocer Bot Inty",
  areas: [
    "Talento humano",
    "Nómina",
    "Tecnología",
    "Operaciones",
    "Servicio interno",
    "Transformación digital",
    "Otra",
  ],
  rangosEmpleados: ["1 - 50", "51 - 200", "201 - 500", "501 - 1.000", "1.001 - 5.000", "Más de 5.000"],
};

export const contacto = {
  correo: "contacto@botinty.co",
  telefono: "+57 (60) 000 0000",
  ciudad: "Colombia",
  redes: [
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X", href: "#" },
  ],
  legales: [
    { label: "Política de privacidad", href: "#" },
    { label: "Tratamiento de datos", href: "#" },
    { label: "Términos de uso", href: "#" },
  ],
};
