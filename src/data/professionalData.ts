import { EducationItem, ExperienceItem, RateItem, SiteSettings } from '../types';

export const PROFESSIONAL_IDENTITY = {
  fullName: 'Lizneida Milagro Cordero Valero',
  professionalName: 'Lizneida Cordero',
  clinicName: 'Consultorio Virtual «Aprender a Desaprender»',
  mainHeadline: 'Educación y orientación para volver a avanzar.',
  motto: '«A veces no necesitas empezar de cero; necesitas aprender de otra manera».',
  rolesSubtitle: 'Docencia matemática · Orientación personal · Acompañamiento online y presencial',
  presentationQuote:
    'Un espacio para soltar bloqueos, recuperar confianza y encontrar una forma más amable de avanzar.',
  location: 'Illescas, Toledo, España',
  email: 'lizmicorva@gmail.com',
  whatsappSuggestedMessage:
    'Hola, Lizneida. He visitado tu página web profesional y me gustaría solicitar información sobre tus servicios.',
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Magíster en Ciencias, mención Orientación de la Conducta',
    institution: 'Centro de Investigaciones Psiquiátricas, Psicológicas y Sexológicas de Venezuela (C.I.P.P.S.V.)',
    location: 'Caracas, Venezuela',
    year: '2009',
    details:
      'Especialización de posgrado enfocada en el estudio sistemático del comportamiento humano, desarrollo de habilidades adaptativas, orientación familiar, resolución de conflictos y procesos de acompañamiento para el crecimiento personal.',
  },
  {
    degree: 'Profesora de Matemáticas',
    institution: 'Universidad Pedagógica Experimental Libertador (UPEL), Instituto Pedagógico de Barquisimeto',
    location: 'Barquisimeto, Venezuela',
    year: '1993',
    details:
      'Formación pedagógica superior con sólida base científico-didáctica en enseñanza de las Matemáticas, metodología del aprendizaje constructivo y diseño curricular para educación básica y media.',
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'exp-ve-pedro',
    role: 'Profesora de Matemáticas',
    institution: 'U.E. Pedro Rafael Chacón',
    country: 'Venezuela',
    location: 'Venezuela',
    description:
      'Docencia en la cátedra de Matemáticas en educación primaria y secundaria, diseño de planes didácticos personalizados y acompañamiento académico continuo.',
    highlights: [
      'Enseñanza de Matemáticas orientada a la comprensión lógica y la pérdida del miedo al cálculo.',
      'Acompañamiento individualizado a estudiantes con dificultades de aprendizaje.',
      'Diseño y ejecución de evaluaciones diagnósticas y formativas.',
    ],
  },
  {
    id: 'exp-us-lilangels',
    role: 'Educadora Infantil',
    institution: 'Lil Angels Day Care Center',
    country: 'Estados Unidos',
    location: 'Austin, Texas',
    description:
      'Atención y cuidado infantil, desarrollo de actividades educativas integrales, estimulación del desarrollo temprano y comunicación constante con las familias.',
    highlights: [
      'Estimulación cognitiva, motora y socioafectiva en entornos multiculturales.',
      'Planificación de actividades creativas y estructuración de rutinas.',
      'Alianza constante y transparente con padres y tutores.',
    ],
  },
  {
    id: 'exp-us-inic',
    role: 'Educadora',
    institution: 'INIC (International Nursery & Infant Center)',
    country: 'Estados Unidos',
    location: 'Austin, Texas',
    description:
      'Atención infantil especializada, gestión de rutinas diarias, pautas de alimentación e higiene, y diseño de actividades lúdico-educativas y recreativas.',
    highlights: [
      'Gestión de rutinas de bienestar, autonomía y socialización infantil.',
      'Supervisión y cuidado con altos estándares de seguridad y calidez humana.',
      'Adaptabilidad en equipos pedagógicos de contexto internacional.',
    ],
  },
  {
    id: 'exp-rd-buenpastor',
    role: 'Maestra de Primaria',
    institution: 'Colegio Buen Pastor',
    country: 'República Dominicana',
    location: 'Santo Domingo',
    description:
      'Docencia integral abarcando desde preescolar hasta sexto grado de primaria, elaboración de planificaciones curriculares, seguimiento individual del alumno y estrecha vinculación familiar.',
    highlights: [
      'Instrucción académica interdisciplinar con énfasis en pensamiento matemático y lenguaje.',
      'Coordinación de aula y mediación en la resolución pacífica de desacuerdos.',
      'Informes periódicos de progreso a las familias para un trabajo educativo conjunto.',
    ],
  },
];

export const CORE_SKILLS = [
  { name: 'Enseñanza de Matemáticas', category: 'Docencia' },
  { name: 'Orientación de la conducta', category: 'Orientación' },
  { name: 'Gestión y coordinación educativa', category: 'Gestión' },
  { name: 'Atención y servicio al público', category: 'Interpersonal' },
  { name: 'Comunicación y escucha activa', category: 'Interpersonal' },
  { name: 'Empatía y acompañamiento', category: 'Orientación' },
  { name: 'Organización y responsabilidad', category: 'Gestión' },
  { name: 'Adaptabilidad y trabajo en equipo', category: 'Interpersonal' },
  { name: 'Atención y cuidado de niños', category: 'Docencia' },
];

export const LANGUAGES = [
  { name: 'Español', level: 'Nativo', note: 'Lengua materna, dominio pedagógico y oratorio' },
  { name: 'Inglés', level: 'Básico', note: 'Comprensión funcional en entornos bilingües' },
];

export const DEFAULT_RATES: RateItem[] = [
  {
    id: 'sesion-informativa',
    name: 'Primera conversación informativa',
    duration: '15 minutos',
    price: 0,
    unit: 'sesión',
    description:
      'Espacio inicial sin compromiso para conocernos, comprender tu situación particular y orientarte sobre la mejor alternativa de acompañamiento o docencia.',
    category: 'orientacion',
    featured: true,
  },
  {
    id: 'orientacion-individual-online',
    name: 'Orientación individual online',
    duration: '50 minutos',
    price: 30,
    unit: 'sesión',
    description:
      'Acompañamiento personal y conductual enfocado en desarrollo personal, autoestima, manejo del estrés, toma de decisiones y organización vital.',
    category: 'orientacion',
    featured: true,
  },
  {
    id: 'matematicas-online',
    name: 'Clases particulares de Matemáticas (Online)',
    duration: '60 minutos',
    price: 15,
    unit: 'hora',
    description:
      'Clase individualizada por videollamada interactiva para educación primaria, secundaria o refuerzo específico con resolución paso a paso.',
    category: 'docencia',
  },
  {
    id: 'matematicas-presencial',
    name: 'Clases particulares de Matemáticas (Presencial)',
    duration: '60 minutos',
    price: 18,
    unit: 'hora',
    description:
      'Enseñanza presencial en Illescas (Toledo) y comarca de La Sagra. Atención cercana, cuadernos de trabajo y seguimiento directo. Desplazamientos acordados previamente.',
    category: 'docencia',
  },
  {
    id: 'talleres-centros',
    name: 'Talleres para centros educativos o empresas',
    duration: 'A medida',
    price: 'consultar',
    unit: 'proyecto',
    description:
      'Programas de orientación para familias, docencia colaborativa en academias, coordinación de proyectos educativos y dinamización grupal.',
    category: 'institucional',
  },
];

export const FAQS = [
  {
    question: '¿En qué se diferencia la Orientación de la Conducta de la psicoterapia o la atención clínica?',
    answer:
      'Es una distinción fundamental y ética: la Orientación de la Conducta que ejerzo (Magíster en Ciencias por el C.I.P.P.S.V.) es un proceso pedagógico, socioeducativo y reflexivo de acompañamiento. Su objetivo es potenciar el autoconocimiento, la autoestima, la clarificación de metas, el manejo del estrés habitual y la adquisición de hábitos constructivos. No constituye diagnóstico médico, tratamiento psiquiátrico ni psicoterapia clínica sanitaria.',
  },
  {
    question: '¿Cómo se desarrollan las sesiones de orientación online?',
    answer:
      'Las sesiones se realizan por videollamada segura (Google Meet u otra plataforma de mutuo acuerdo) en un entorno de estricta confidencialidad, tranquilidad y escucha activa. Solo necesitas un dispositivo con conexión a internet y un lugar donde te sientas cómodo/a.',
  },
  {
    question: '¿Dónde y cómo se imparten las clases de Matemáticas?',
    answer:
      'Ofrezco dos modalidades: Online (a través de pizarras interactivas y videollamada para cualquier lugar) y Presencial (en Illescas, Toledo y municipios vecinos de La Sagra). En las clases presenciales, las condiciones y desplazamientos se acuerdan previamente de manera transparente.',
  },
  {
    question: '¿En qué consiste la primera conversación de 15 minutos sin coste?',
    answer:
      'Es un primer contacto breve y cercano para escucharte, resolver tus dudas sobre el servicio y verificar de mutuo acuerdo si lo que necesitas se ajusta a mi marco de trabajo, antes de programar cualquier sesión formal.',
  },
  {
    question: '¿Cómo se gestiona el abono de los servicios?',
    answer:
      'Las tarifas publicadas son orientativas y transparentes. La forma de pago se coordina directamente por transferencia bancaria o Bizum tras confirmar la reserva de horario, sin cobros automáticos imprevistos.',
  },
  {
    question: '¿Está disponible para contrataciones o colaboraciones con colegios y academias?',
    answer:
      'Sí. Estoy abierta y motivada a valorar oportunidades laborales docentes, de coordinación académica o de refuerzo escolar en centros educativos, academias y colegios de Illescas, Toledo, sur de Madrid y zonas aledañas.',
  },
];

export const DEFAULT_SETTINGS: SiteSettings = {
  contactEmail: 'lizmicorva@gmail.com',
  contactPhone: '+34 600 000 000',
  whatsappNumber: '34600000000',
  locationText: 'Illescas, Toledo, España (Online & Presencial)',
  profilePhotoUrl: null, // As requested: reserved space, no fake human face
  rates: DEFAULT_RATES,
};
