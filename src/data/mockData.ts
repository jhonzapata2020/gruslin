import { TeamMember, MetricData, ResearchLine, ProjectItem, HistoricalPublication } from '../types';

// Information about the Active Branch / Local Node
export const RAMA_INFO = {
  title: 'Rama I+D - Semillero GRUSLIN UNAD',
  badge: 'RAMA DE INVESTIGACIÓN Y DESARROLLO • NODO LOCAL',
  subtitle: 'Línea especializada en desarrollo de software educativo, arquitecturas de IA y herramientas abiertas de aprendizaje, adscrita formalmente al Semillero Grupo Software Libre Neiva (GRUSLIN - ECBTI).',
  teamCount: 5,
  focusAreas: ['Software Educativo & IA', 'Evaluadores de Código (PythonLab)', 'Maratones de Programación (SAMP)', 'Herramientas de Aprendizaje Abierto'],
  activeBadgeText: 'PROYECTO ACTIVO DE LA RAMA',
};

// Information about Parent/Matrix Semillero GRUSLIN (SIGIIP 1513)
export const OFFICIAL_SEMILLERO_INFO = {
  name: 'Grupo Software Libre Neiva (GRUSLIN)',
  acronym: 'GRUSLIN',
  code: '1513',
  leader: 'Jaime Rubiano Llorente',
  creationDate: '22/11/2017',
  campus: 'CCAV Neiva • Zona Sur (ZSUR)',
  school: 'Escuela de Ciencias Básicas, Tecnología e Ingeniería (ECBTI)',
  status: 'ACTIVO',
  institutionalBadgeText: 'REGISTRO INSTITUCIONAL SIGIIP',
  generalObjective: 'Generar un entorno de crecimiento académico que propicie el desarrollo de proyectos que tengan un impacto social y regional entre diferentes actores generadores de conocimiento.',
  specificObjectives: [
    'Promover la formación de estudiantes en desarrollo de software libre e investigación formativa.',
    'Impulsar proyectos tecnológicos con impacto social, ambiental y desarrollo regional sostenible.'
  ],
  mission: 'Promover la capacidad investigativa mediante innovación, software libre y metodologías avanzadas enfocadas en desarrollo social y sostenible.',
  vision: 'Ser referente en investigación, desarrollo sostenible y uso de TIC mediante redes de conocimiento participativo.'
};

// Historical Publications of the Parent Matrix Semillero (SIGIIP 1513) for the Accordion
export const HISTORICAL_PUBLICATIONS_MATRIZ: HistoricalPublication[] = [
  {
    id: 'carepa-antioquia',
    title: 'Desarrollo de Software Libre e Investigación Aplicada en Carepa (Antioquia)',
    category: 'Divulgación CTeI & Transferencia Regional',
    locationYear: 'Carepa, Antioquia • Registro SIGIIP',
    summary: 'Implementación de metodologías participativas y herramientas tecnológicas libres orientadas al fortalecimiento comunitario e investigación social aplicada en la subregión del Urabá antioqueño.',
    impactBadge: 'REGISTRO INSTITUCIONAL SIGIIP',
    highlights: [
      'Modelado de requerimientos técnicos en contexto rural e institucional.',
      'Apropiación de tecnologías abiertas en comunidades de aprendizaje.',
      'Ponencia y documentación en repositorio de investigación UNAD.'
    ],
    tags: ['#CarepaAntioquia', '#SoftwareLibre', '#ImpactoRegional', '#SIGIIP']
  },
  {
    id: 'senues-uraba',
    title: 'Estudio de Tecnologías Apropiadas en la Comunidad Senú (Urabá)',
    category: 'Investigación Etnotecnológica & Desarrollo Sostenible',
    locationYear: 'Subregión del Urabá • Resguardo Senú',
    summary: 'Proyecto de investigación enfocado en el diagnóstico y adopción de TIC y software de código abierto respetando los saberes tradicionales y la estructura socio-pedagógica de la comunidad Senú.',
    impactBadge: 'REGISTRO INSTITUCIONAL SIGIIP',
    highlights: [
      'Diagnóstico etnotecnológico e integración de código abierto.',
      'Transferencia de capacidades digitales respetando la autonomía cultural.',
      'Publicación de resultados en memorias académicas CTeI UNAD.'
    ],
    tags: ['#SenúesUrabá', '#Etnotecnología', '#ComunidadSenú', '#UNAD']
  },
  {
    id: 'modelo-armonizado',
    title: 'Modelo Armonizado de Aprendizaje en la UNAD',
    category: 'Pedagogía Abierta & Innovación Educativa',
    locationYear: 'ECBTI UNAD • Repositorio Institucional',
    summary: 'Marco pedagógico-tecnológico para la integración de herramientas abiertas de evaluación, simulación y entornos colaborativos en los cursos de la Escuela de Ciencias Básicas, Tecnología e Ingeniería.',
    impactBadge: 'REGISTRO INSTITUCIONAL SIGIIP',
    highlights: [
      'Diseño conceptual de entornos virtuales de práctica.',
      'Lineamientos para la adopción de herramientas de código libre en pregrado.',
      'Base metodológica aplicada a proyectos actuales de simulación y evaluación.'
    ],
    tags: ['#ModeloArmonizado', '#PedagogíaUNAD', '#InnovaciónEducativa']
  },
  {
    id: 'expotech-unad',
    title: 'Participación y Muestra Científica en Expotech UNAD',
    category: 'Exposición Tecnológica & Divulgación CTeI',
    locationYear: 'Eventos CTeI UNAD • Zona Sur',
    summary: 'Presentación de prototipos tecnológicos de telemetría IoT, sistemas de evaluación distribuida y aplicaciones en software libre desarrolladas en el marco del semillero matriz.',
    impactBadge: 'REGISTRO INSTITUCIONAL SIGIIP',
    highlights: [
      'Exposición interactiva de prototipos IoT y software libre.',
      'Reconocimiento institucional por divulgación científica de la ciencia.',
      'Red de colaboración entre semilleros de la Zona Sur.'
    ],
    tags: ['#Expotech', '#DivulgaciónCientífica', '#ECBTI', '#ZSUR']
  }
];

// Exact Community Structure of the Matrix Semillero
export const COMMUNITY_STRUCTURE = [
  { role: 'Estudiantes Semilla', count: 9, percentage: '40.9%', description: 'Estudiantes de pregrado en formación I+D', color: '#38BDF8' },
  { role: 'Docentes Articuladores', count: 8, percentage: '36.4%', description: 'Líderes docentes articuladores UNAD', color: '#F0B429' },
  { role: 'Egresados Semilla', count: 3, percentage: '13.6%', description: 'Graduados vinculados al semillero', color: '#10B981' },
  { role: 'Dinamizador', count: 1, percentage: '4.5%', description: 'Gestión y dinamización de proyectos', color: '#A855F7' },
  { role: 'Líder del Semillero Matriz', count: 1, percentage: '4.5%', description: 'Jaime Rubiano Llorente', color: '#EC4899' },
];

// Exact CTeI Product Metrics
export const CTEI_PRODUCTS_DATA = [
  { name: 'Divulgación Pública de la Ciencia', count: 8, percentage: 66.7, color: '#F0B429' },
  { name: 'Nuevo Conocimiento', count: 2, percentage: 16.7, color: '#003366' },
  { name: 'Formación de Talento Humano', count: 2, percentage: 16.7, color: '#38BDF8' },
];

// Software Projects developed exclusively by the Active Branch (Exactly SAMP & Simulador PythonLab)
export const SOFTWARE_PROJECTS: ProjectItem[] = [
  {
    id: 'samp',
    title: 'SAMP - Sistema Académico de Maratones de Programación',
    category: 'SOFTWARE EDUCATIVO & IA',
    type: 'EDUCATION & AI',
    description: 'Plataforma integral desarrollada por la Rama I+D para la organización, gestión y ejecución de hackathones y olimpiadas de programación en la UNAD. Cuenta con métricas de rendimiento, tableros de puntuación automatizados y soporte asistido por IA para evaluación formativa.',
    url: 'https://samp.gruslin.tech/',
    ctaText: 'Ir a SAMP',
    status: 'En Producción · Live',
    badgeType: 'active_branch',
    features: [
      'Gestión de retos, equipos y tablas de posiciones en tiempo real.',
      'Analítica de rendimiento de competidores.',
      'Módulo de premiación e insignias de participación.'
    ],
    tags: ['#Python', '#AI_Integration', '#React', '#FastAPI', '#Education'],
    tech: ['Python', 'AI_Integration', 'React', 'FastAPI', 'Education'],
  },
  {
    id: 'simulador-unad',
    title: 'Simulador UNAD - Entorno Evaluador PythonLab',
    category: 'E-LEARNING & EVALUADOR WEB',
    type: 'E-LEARNING & CODE RUNNER',
    description: 'Entorno interactivo de ejecución de código y diagnóstico automatizado creado por la Rama I+D para el curso de Fundamentos de Programación (Ingeniería de Sistemas UNAD).',
    url: 'https://simuladorunad.vercel.app/',
    ctaText: 'Abrir Simulador',
    status: 'En Producción · Live',
    badgeType: 'active_branch',
    features: [
      'Entorno IDE & Evaluador PythonLab UNAD (FASES 2, 3 Y 4 ACTIVAS).',
      'Los estudiantes presentan retos con diagnóstico asistido, explicaciones guiadas y ejecución de código en tiempo real.',
      'Generación de Insignias Digitales con verificación QR al aprobar los ejercicios.'
    ],
    tags: ['#PythonLab', '#UNAD', '#IDE_Web', '#FeedbackIA', '#ProyectosUNAD'],
    tech: ['PythonLab', 'UNAD', 'IDE_Web', 'FeedbackIA', 'ProyectosUNAD'],
  },
];

// Local Branch Team (5 Members)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pablo-hernandez',
    name: 'Pablo Francisco Hernandez Lugo',
    role: 'Líder / Tutor de la Rama & Investigador • CCAV Neiva',
    contactRole: 'Role /iso Contactor',
    status: 'away',
    avatarUrl: '/avatars/pablo-hernandez.png',
    initials: 'PH',
    unadBadge: 'Líder / Tutor de Rama - CCAV Neiva',
    bio: 'Docente universitario e investigador. Encargado del tutelaje académico, dirección formativa y articulación I+D de la Rama de Desarrollo de Software Libre.',
    email: 'pfhernandez@unadvirtual.edu.co',
    skills: ['Tutor de Rama', 'Docente UNAD', 'Divulgación CTeI', 'Latex'],
    projectsCount: 9,
  },
  {
    id: 'angel-vargas',
    name: 'ANGEL FELIPE VARGAS',
    role: 'Desarrollador de la Rama • Estudiante Ing. de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'away',
    avatarUrl: '/avatars/angel-vargas.png',
    initials: 'AV',
    unadBadge: 'Integrante Rama I+D (Pregrado)',
    bio: 'Ingeniero backend en la Rama I+D especializado en el diseño e implementación de sistemas basados en agentes inteligentes y flujos de automatización avanzada. Con experiencia en eventos tecnológicos internacionales e integración de soluciones abiertas.',
    email: 'afvargasp@unadvirtual.edu.co',
    skills: ['Backend', 'AI_Agents', 'Automation', 'OpenSource', 'APIs'],
    projectsCount: 14,
  },
  {
    id: 'emmanuel-palacios',
    name: 'Emmanuel Palacios Gaviria',
    role: 'Desarrollador de la Rama • Estudiante Ing. de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'busy',
    avatarUrl: '/avatars/emmanuel-palacios.png',
    initials: 'EP',
    unadBadge: 'Integrante Rama I+D (Pregrado)',
    bio: 'Desarrollador de la Rama I+D apasionado por la integración de sistemas operativos GNU/Linux, arquitecturas distribuidas y software de código abierto.',
    email: 'epalacios@unadvirtual.edu.co',
    skills: ['GNU/Linux', 'Rust', 'Python', 'Docker'],
    projectsCount: 18,
  },
  {
    id: 'jhon-zapata',
    name: 'Jhon Rafael Zapata Lizcano',
    role: 'Desarrollador de la Rama • Estudiante Ing. de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'busy',
    avatarUrl: '/avatars/jhon-zapata.png',
    initials: 'JZ',
    unadBadge: 'Integrante Rama I+D (Pregrado)',
    bio: 'Desarrollador Web Full Stack en la Rama I+D. Orientado a la transferencia tecnológica, arquitectura de plataformas libres e investigación en la UNAD.',
    email: 'jrzapatal@unadvirtual.edu.co',
    skills: ['Fullstack', 'Gestión I+D+i', 'Cloud Architecture', 'IA'],
    projectsCount: 22,
  },
  {
    id: 'jose-rivas',
    name: 'Jose Antonio Rivera (Rivas)',
    role: 'Desarrollador de la Rama • Estudiante Ing. de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'busy',
    avatarUrl: '/avatars/jose-rivera.png',
    initials: 'JR',
    unadBadge: 'Integrante Rama I+D (Pregrado)',
    bio: 'Desarrollador Web Full Stack en la Rama I+D. Especialista en desarrollo de APIs REST, bases de datos relacionales y servicios en la nube.',
    email: 'jarivas@unadvirtual.edu.co',
    skills: ['Node.js', 'PostgreSQL', 'Python API', 'Docker'],
    projectsCount: 11,
  },
];

export const RESEARCH_METRICS: MetricData[] = [
  { name: 'Divulgación Pública de la Ciencia (8)', proyectos: 8, productos: 8, meta: 10 },
  { name: 'Nuevo Conocimiento (2)', proyectos: 2, productos: 2, meta: 5 },
  { name: 'Formación de Talento Humano (2)', proyectos: 2, productos: 2, meta: 5 },
];

export const DASHBOARD_STATS = [
  { label: 'Divulgación de Ciencia', value: '66.7%', change: '8 Productos', highlight: true },
  { label: 'Nuevo Conocimiento', value: '16.7%', change: '2 Productos', highlight: false },
  { label: 'Formación de Talento', value: '16.7%', change: '2 Productos', highlight: false },
  { label: 'Estudiantes Semilla', value: '9', change: 'Comunidad Activa', highlight: true },
];

export const RESEARCH_LINES: ResearchLine[] = [
  {
    id: 'desarrollo-software',
    title: 'Desarrollo de Software Libre & IA',
    subtitle: 'Plataformas Educativas, SAMP & PythonLab',
    description: 'Diseño e implementación de plataformas web, evaluadores de código e IA de código abierto bajo licencias libres en la Rama I+D.',
    iconName: 'Code2',
    tags: ['SAMP', 'PythonLab', 'React', 'FastAPI', 'IA'],
    metricsCount: '2 Desarrollos Activos',
    accentColor: '#10B981',
  },
  {
    id: 'prototipado-iot',
    title: 'Prototipado Tecnológico & IoT',
    subtitle: 'Sensores, Telemetría & Sistemas Embebidos',
    description: 'Creación de dispositivos de medición ambiental y prototipos de monitoreo tecnológico para el desarrollo sostenible.',
    iconName: 'Cpu',
    tags: ['IoT', 'Arduino/ESP32', 'Python', 'Sensores'],
    metricsCount: 'ECBTI ZSUR',
    accentColor: '#38BDF8',
  },
  {
    id: 'divulgacion-ctei',
    title: 'Divulgación Pública de la Ciencia',
    subtitle: 'Ponencias, Artículos & Transferencia Tecnológica',
    description: 'Difusión de resultados de investigación, publicaciones abiertas y talleres comunitarios en la Región Sur.',
    iconName: 'Atom',
    tags: ['MinCiencias', 'Ponencias', 'Publicaciones', 'SIGIIP'],
    metricsCount: '66.7% Productos CTeI',
    accentColor: '#F0B429',
  },
  {
    id: 'formacion-talento',
    title: 'Formación de Talento Humano',
    subtitle: 'Redes de Conocimiento & Capacidad Investigativa',
    description: 'Capacitación de estudiantes de pregrado y docentes articuladores en metodologías avanzadas de I+D+i.',
    iconName: 'Users',
    tags: ['Nodo 5 Integrantes', 'Semillero Matriz', 'CEAD Neiva'],
    metricsCount: 'Semillero UNAD',
    accentColor: '#A855F7',
  },
];
