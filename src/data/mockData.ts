import { TeamMember, MetricData, ResearchLine, ProjectItem } from '../types';

export const OFFICIAL_SEMILLERO_INFO = {
  name: 'Grupo Software Libre Neiva (GRUSLIN)',
  acronym: 'GRUSLIN',
  code: '1513',
  leader: 'Jaime Rubiano Llorente',
  creationDate: '22/11/2017',
  campus: 'Escuela de Ciencias Básicas, Tecnología e Ingeniería (ECBTI) - Zona Sur (ZSUR)',
  school: 'ECBTI - CEAD Neiva',
  status: 'ACTIVO',
  generalObjective: 'Generar un entorno de crecimiento académico que propicie el desarrollo de proyectos que tengan un impacto social y regional entre diferentes actores generadores de conocimiento.',
  specificObjectives: [
    'Promover la formación de estudiantes en desarrollo de software libre e investigación formativa.',
    'Impulsar proyectos tecnológicos con impacto social, ambiental y desarrollo regional sostenible.'
  ],
  mission: 'Promover la capacidad investigativa mediante innovación, software libre y metodologías avanzadas enfocadas en desarrollo social y sostenible.',
  vision: 'Ser referente en investigación, desarrollo sostenible y uso de TIC mediante redes de conocimiento participativo.'
};

// Exact Community Structure
export const COMMUNITY_STRUCTURE = [
  { role: 'Estudiantes Semilla', count: 9, percentage: '40.9%', description: 'Estudiantes de pregrado en formación I+D', color: '#38BDF8' },
  { role: 'Docentes Articuladores', count: 8, percentage: '36.4%', description: 'Líderes docentes articuladores UNAD', color: '#F0B429' },
  { role: 'Egresados Semilla', count: 3, percentage: '13.6%', description: 'Graduados vinculados al semillero', color: '#10B981' },
  { role: 'Dinamizador', count: 1, percentage: '4.5%', description: 'Gestión y dinamización de proyectos', color: '#A855F7' },
  { role: 'Líder del Semillero', count: 1, percentage: '4.5%', description: 'Jaime Rubiano Llorente', color: '#EC4899' },
];

// Exact CTeI Product Metrics
export const CTEI_PRODUCTS_DATA = [
  { name: 'Divulgación Pública de la Ciencia', count: 8, percentage: 66.7, color: '#F0B429' },
  { name: 'Nuevo Conocimiento', count: 2, percentage: 16.7, color: '#003366' },
  { name: 'Formación de Talento Humano', count: 2, percentage: 16.7, color: '#38BDF8' },
];

// Software Projects developed by GRUSLIN (Exactly 2 independent production projects)
export const SOFTWARE_PROJECTS: ProjectItem[] = [
  {
    id: 'samp',
    title: 'SAMP - Sistema Académico de Maratones de Programación',
    category: 'EDUCATION & AI',
    type: 'EDUCATION & AI',
    description: 'Plataforma integral para la organización, gestión y ejecución de hackathones y olimpiadas de programación en la UNAD. Cuenta con métricas de rendimiento, tableros de puntuación automatizados y soporte asistido por IA para evaluación formativa.',
    url: 'https://samp.gruslin.tech/',
    ctaText: 'Ir a SAMP',
    status: 'En Producción · Live',
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
    category: 'E-LEARNING & CODE RUNNER',
    type: 'E-LEARNING & CODE RUNNER',
    description: 'Entorno interactivo de ejecución de código y diagnóstico automatizado diseñado para el curso de Fundamentos de Programación (Ingeniería de Sistemas UNAD).',
    url: 'https://simuladorunad.vercel.app/',
    ctaText: 'Abrir Simulador',
    status: 'En Producción · Live',
    features: [
      'Entorno IDE & Evaluador PythonLab UNAD (FASES 2, 3 Y 4 ACTIVAS).',
      'Los estudiantes presentan retos con diagnóstico asistido, explicaciones guiadas y ejecución de código en tiempo real.',
      'Generación de Insignias Digitales con verificación QR al aprobar los ejercicios.'
    ],
    tags: ['#PythonLab', '#UNAD', '#IDE_Web', '#FeedbackIA', '#ProyectosUNAD'],
    tech: ['PythonLab', 'UNAD', 'IDE_Web', 'FeedbackIA', 'ProyectosUNAD'],
  },
];

// TEAM MEMBERS matching exact captures from Microsoft Teams / UNAD
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pablo-hernandez',
    name: 'Pablo Francisco Hernandez Lugo',
    role: 'Director de Curso e Investigador • CCAV Neiva',
    contactRole: 'Role /iso Contactor',
    status: 'away', // Yellow clock status from capture
    avatarUrl: '/avatars/pablo-hernandez.png',
    initials: 'PH',
    unadBadge: 'Director de Curso e Investigador - CCAV Neiva',
    bio: 'Docente universitario e investigador. Encargado de la articulación académica, divulgación científica y ponencias I+D del semillero.',
    email: 'pfhernandez@unadvirtual.edu.co',
    skills: ['Docente UNAD', 'Divulgación CTeI', 'GitLab', 'Latex'],
    projectsCount: 9,
  },
  {
    id: 'angel-vargas',
    name: 'ANGEL FELIPE VARGAS',
    role: 'Estudiante Ingeniería de Sistemas - UNAD',
    contactRole: 'Role /iso Contactor',
    status: 'away', // Yellow clock status from capture
    avatarUrl: '/avatars/angel-vargas.png',
    initials: 'AV',
    unadBadge: 'Estudiante Semilla (Pregrado)',
    bio: 'Ingeniero backend especializado en el diseño e implementación de sistemas basados en agentes inteligentes y flujos de automatización avanzada. Con experiencia en la gestión y participación en eventos tecnológicos internacionales, integrando arquitecturas escalables y soluciones de código abierto orientadas a la investigación aplicada.',
    email: 'afvargasp@unadvirtual.edu.co',
    skills: ['Backend', 'AI_Agents', 'Automation', 'InternationalEvents', 'OpenSource', 'APIs'],
    projectsCount: 14,
  },
  {
    id: 'emmanuel-palacios',
    name: 'Emmanuel Palacios Gaviria',
    role: 'Estudiante Ingeniería de Sistemas - UNAD',
    contactRole: 'Role /iso Contactor',
    status: 'busy', // Red dot status from capture
    avatarUrl: '/avatars/emmanuel-palacios.png',
    initials: 'EP',
    unadBadge: 'Estudiante Semilla (Pregrado)',
    bio: 'Apasionado por la integración de sistemas operativos GNU/Linux, arquitecturas distribuidas y software de código abierto.',
    email: 'epalacios@unadvirtual.edu.co',
    skills: ['GNU/Linux', 'Rust', 'Python', 'Docker'],
    projectsCount: 18,
  },
  {
    id: 'jhon-zapata',
    name: 'Jhon Rafael Zapata Lizcano',
    role: 'Estudiante Ingeniería de Sistemas - UNAD',
    contactRole: 'Role /iso Contactor',
    status: 'busy', // Red dot with bar status from capture
    avatarUrl: '/avatars/jhon-zapata.png',
    initials: 'JZ',
    unadBadge: 'Estudiante Semilla (Pregrado)',
    bio: 'Desarrollador Web Full Stack. Orientado a la transferencia tecnológica, desarrollo de proyectos de software libre e investigación en la UNAD.',
    email: 'jrzapatal@unadvirtual.edu.co',
    skills: ['Gestión I+D+i', 'Fullstack', 'Cloud Architecture', 'IA'],
    projectsCount: 22,
  },
  {
    id: 'jose-rivas',
    name: 'Jose Antonio Rivera (Rivas)',
    role: 'Estudiante Ingeniería de Sistemas - UNAD',
    contactRole: 'Role /iso Contactor',
    status: 'busy', // Red dot status from capture
    avatarUrl: '/avatars/jose-rivera.png',
    initials: 'JR',
    unadBadge: 'Estudiante - Ingeniería de Sistemas',
    bio: 'Desarrollador Web Full Stack. Especialista en desarrollo de APIs REST, bases de datos relacionales y servicios en la nube para el semillero.',
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
    title: 'Desarrollo de Software Libre',
    subtitle: 'Aplicaciones Web, Móviles & Sistemas Distribuidos',
    description: 'Diseño e implementación de plataformas web y sistemas de software de código abierto bajo licencias libres.',
    iconName: 'Code2',
    tags: ['React', 'TypeScript', 'Node.js', 'GNU/Linux'],
    metricsCount: '4 Proyectos Activos',
    accentColor: '#F0B429',
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
    accentColor: '#10B981',
  },
  {
    id: 'formacion-talento',
    title: 'Formación de Talento Humano',
    subtitle: 'Redes de Conocimiento & Capacidad Investigativa',
    description: 'Capacitación de estudiantes de pregrado y docentes articuladores en metodologías avanzadas de I+D+i.',
    iconName: 'Users',
    tags: ['9 Estudiantes', '8 Docentes', '3 Egresados', 'CEAD Neiva'],
    metricsCount: 'Semillero UNAD',
    accentColor: '#A855F7',
  },
];
