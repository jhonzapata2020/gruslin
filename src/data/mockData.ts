import { TeamMember, MetricData, ResearchLine } from '../types';

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

// Software Projects developed by GRUSLIN
export const SOFTWARE_PROJECTS = [
  {
    title: 'Plataforma Web Open Source UNAD',
    type: 'Desarrollo Web & Cloud',
    description: 'Sistema web distribuido desarrollado con React, TypeScript y backend libre para la gestión comunitaria.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'En Producción',
  },
  {
    title: 'Suite de Telemetría & IoT Ambiental',
    type: 'Prototipado IoT',
    description: 'Sistema de monitoreo con sensores IoT para medición ambiental y desarrollo sostenible en la Región Sur.',
    tech: ['Python', 'Arduino/ESP32', 'MQTT', 'Docker'],
    status: 'Desarrollo Activo',
  },
  {
    title: 'Asistente de Código & IA Aplicada',
    type: 'Inteligencia Artificial',
    description: 'Modelos abiertos de procesamiento de lenguaje natural y asistencia para investigación formativa.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'Linux'],
    status: 'Fase de Pruebas',
  },
  {
    title: 'Repositorios Libres de Divulgación',
    type: 'Software Libre',
    description: 'Publicación de código abierto bajo licencias MIT y GPL para la comunidad académica internacional.',
    tech: ['GitLab', 'GNU/Linux', 'Shell Script', 'Markdown'],
    status: 'Publicado MIT',
  },
];

// TEAM MEMBERS matching exact captures from Microsoft Teams / UNAD
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'angel-vargas',
    name: 'Angel Felipe Vargas',
    role: 'Desarrollador Frontend & Prototipado',
    contactRole: 'Role /iso Contactor',
    status: 'away', // Yellow clock status from capture
    avatarUrl: '/avatars/angel-vargas.png',
    initials: 'AV',
    unadBadge: 'Estudiante Semilla (Pregrado)',
    bio: 'Desarrollador enfocado en arquitecturas frontend modernas con React, Tailwind CSS y componentes interactivos de software libre.',
    email: 'afvargasp@unadvirtual.edu.co',
    skills: ['React', 'TypeScript', 'Tailwind', 'Git'],
    projectsCount: 14,
  },
  {
    id: 'emmanuel-palacios',
    name: 'Emmanuel Palacios Gaviria',
    role: 'Desarrollador Software Libre Lead',
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
    role: 'Líder Técnico & Coordinador de Proyectos',
    contactRole: 'Role /iso Contactor',
    status: 'busy', // Red dot with bar status from capture
    avatarUrl: '/avatars/jhon-zapata.png',
    initials: 'JZ',
    unadBadge: 'Estudiante Semilla / Coordinación',
    bio: 'Coordinador técnico de la rama local. Orientado a la transferencia tecnológica, gestión de proyectos de software libre e investigación en la UNAD.',
    email: 'jrzapatal@unadvirtual.edu.co',
    skills: ['Gestión I+D+i', 'Fullstack', 'Cloud Architecture', 'IA'],
    projectsCount: 22,
  },
  {
    id: 'jose-rivas',
    name: 'Jose Antonio Rivera (Rivas)',
    role: 'Estudiante • Ingeniería de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'busy', // Red dot status from capture
    avatarUrl: '/avatars/jose-rivera.png',
    initials: 'JR',
    unadBadge: 'Estudiante - Ingeniería de Sistemas',
    bio: 'Especialista en desarrollo de APIs REST, bases de datos relacionales y servicios en la nube para el semillero.',
    email: 'jarivas@unadvirtual.edu.co',
    skills: ['Node.js', 'PostgreSQL', 'Python API', 'Docker'],
    projectsCount: 11,
  },
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
