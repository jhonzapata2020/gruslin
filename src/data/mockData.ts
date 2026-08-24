import { TeamMember, MetricData, ResearchLine, ProjectItem, HistoricalPublication, LearningPath, Recording, BlogPost } from '../types';

// Information about the Active Local Node / Development Node
export const RAMA_INFO = {
  title: 'Nodo I+D - Semillero GRUSLIN UNAD',
  badge: 'NODO LOCAL DE INVESTIGACIÓN & DESARROLLO • UNAD',
  subtitle: 'Línea especializada en desarrollo de software educativo, arquitecturas de IA y herramientas abiertas de aprendizaje, adscrita formalmente al Semillero Grupo Software Libre Neiva (GRUSLIN - ECBTI).',
  teamCount: 5,
  focusAreas: ['Software Educativo & IA', 'Evaluadores de Código (PythonLab)', 'Maratones de Programación (SAMP)', 'Herramientas de Aprendizaje Abierto'],
  activeBadgeText: 'PROYECTO ACTIVO DEL NODO',
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
  { role: 'Egresados Semilla', count: 3, percentage: '13.6%', description: 'Graduados vinculados al semillero', color: '#25A866' },
  { role: 'Dinamizador', count: 1, percentage: '4.5%', description: 'Gestión y dinamización de proyectos', color: '#1577E8' },
  { role: 'Líder del Semillero Matriz', count: 1, percentage: '4.5%', description: 'Jaime Rubiano Llorente', color: '#F0B429' },
];

// Exact CTeI Product Metrics
export const CTEI_PRODUCTS_DATA = [
  { name: 'Divulgación Pública de la Ciencia', count: 8, percentage: 66.7, color: '#F0B429' },
  { name: 'Nuevo Conocimiento', count: 2, percentage: 16.7, color: '#1577E8' },
  { name: 'Formación de Talento Humano', count: 2, percentage: 16.7, color: '#38BDF8' },
];

// Software Projects developed exclusively by the Active Local Node (SAMP & Simulador PythonLab)
export const SOFTWARE_PROJECTS: ProjectItem[] = [
  {
    id: 'samp',
    title: 'SAMP - Sistema Académico de Maratones de Programación',
    category: 'SOFTWARE EDUCATIVO & IA',
    type: 'EDUCATION & AI',
    description: 'Plataforma integral desarrollada por el Nodo I+D para la organización, gestión y ejecución de hackathones y olimpiadas de programación en la UNAD. Cuenta con métricas de rendimiento, tableros de puntuación automatizados y soporte asistido por IA para evaluación formativa.',
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
    description: 'Entorno interactivo de ejecución de código y diagnóstico automatizado creado por el Nodo I+D para el curso de Fundamentos de Programación (Ingeniería de Sistemas UNAD).',
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

// Local Node Team (5 Members)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pablo-hernandez',
    name: 'Pablo Francisco Hernandez Lugo',
    role: 'Líder / Tutor del Nodo & Investigador • CCAV Neiva',
    contactRole: 'Role /iso Contactor',
    status: 'away',
    avatarUrl: '/avatars/pablo-hernandez.png',
    initials: 'PH',
    unadBadge: 'Líder / Tutor de Nodo - CCAV Neiva',
    bio: 'Docente universitario e investigador. Encargado del tutelaje académico, dirección formativa y articulación I+D del Nodo de Desarrollo de Software Libre.',
    email: 'pfhernandez@unadvirtual.edu.co',
    skills: ['Tutor del Nodo', 'Docente UNAD', 'Divulgación CTeI', 'Latex'],
    projectsCount: 9,
    headline: 'Líder, tutor e investigador principal del Nodo GRUSLIN Neiva',
    teaching: ['Fundamentos de programación', 'Investigación formativa', 'Divulgación científica'],
    focusAreas: ['Dirección académica', 'Metodología I+D+i', 'Articulación institucional'],
  },
  {
    id: 'angel-vargas',
    name: 'Felipe Vargas',
    role: 'Backend Lead & DevOps Lead • Python y AWS Cloud',
    contactRole: 'Role /iso Contactor',
    status: 'away',
    avatarUrl: '/avatars/angel-vargas.png',
    initials: 'AV',
    unadBadge: 'Integrante Nodo I+D (Pregrado)',
    bio: 'Desarrollador de software especializado en backend con Python, Django, FastAPI y Flask. Actualmente es Backend Lead y DevOps Lead en Au2Bot, donde dirige arquitectura serverless, automatización, servicios cloud en AWS e integración de soluciones de IA. Ha trabajado en plataformas de comercio, sistemas WMS y servicios para la industria aérea; además, participó en los programas de inmersión HPC de SC24 y SC25.',
    email: 'afvargasp@unadvirtual.edu.co',
    skills: ['Python', 'AWS Lambda', 'FastAPI', 'Django', 'DevOps'],
    projectsCount: 14,
    headline: 'Python | AWS Cloud Solutions | Backend Development | Serverless Architect | API Design',
    linkedinUrl: 'https://www.linkedin.com/in/felipevargas-bz/',
    teaching: ['Programación desde cero con Python', 'Diseño de APIs y bases de datos', 'Backend serverless y despliegue en AWS'],
    focusAreas: ['Arquitectura backend', 'AWS serverless', 'Automatización y DevOps'],
  },
  {
    id: 'emmanuel-palacios',
    name: 'Emmanuel Palacio Gaviria',
    role: 'Solutions Architect • IA, Python, AWS y Data Engineering',
    contactRole: 'Role /iso Contactor',
    status: 'busy',
    avatarUrl: '/avatars/emmanuel-palacios.png',
    initials: 'EP',
    unadBadge: 'Integrante Nodo I+D (Pregrado)',
    bio: 'Solutions Architect e ingeniero de software con más de seis años de experiencia en automatización, procesamiento de datos, integraciones backend y servicios cloud. Trabaja en Cobis Topaz construyendo soluciones cloud-native para el sector financiero con Python y AWS. En GRUSLIN participa en SAMP y aporta experiencia en arquitectura escalable, inteligencia artificial aplicada y cultura open source.',
    email: 'epalacios@unadvirtual.edu.co',
    skills: ['Python', 'AWS', 'Docker', 'FastAPI', 'Data Engineering'],
    projectsCount: 18,
    headline: 'Solutions Architect | AI Automation · Python · AWS | Banking Tech · Data Engineering',
    linkedinUrl: 'https://www.linkedin.com/in/emmanuel-palacio/',
    teaching: ['Programación desde cero con C y Python', 'Go y desarrollo backend', 'Linux, Docker y arquitectura cloud'],
    focusAreas: ['Arquitectura de soluciones', 'IA y automatización', 'AWS y sistemas financieros'],
  },
  {
    id: 'jhon-zapata',
    name: 'Jhon Rafael Zapata Lizcano',
    role: 'Desarrollador del Nodo • Estudiante Ing. de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'busy',
    avatarUrl: '/avatars/jhon-zapata.png',
    initials: 'JZ',
    unadBadge: 'Integrante Nodo I+D (Pregrado)',
    bio: 'Desarrollador Web Full Stack en el Nodo I+D. Orientado a la transferencia tecnológica, arquitectura de plataformas libres e investigación en la UNAD.',
    email: 'jrzapatal@unadvirtual.edu.co',
    skills: ['Fullstack', 'Gestión I+D+i', 'Cloud Architecture', 'IA'],
    projectsCount: 22,
    headline: 'Frontend, experiencia de usuario y arquitectura de plataformas',
    teaching: ['Fundamentos web', 'React moderno', 'Arquitectura frontend'],
    focusAreas: ['Frontend', 'Diseño de sistemas', 'Arquitectura cloud'],
  },
  {
    id: 'jose-rivas',
    name: 'Jose Antonio Rivera (Rivas)',
    role: 'Desarrollador del Nodo • Estudiante Ing. de Sistemas',
    contactRole: 'Role /iso Contactor',
    status: 'busy',
    avatarUrl: '/avatars/jose-rivera.png',
    initials: 'JR',
    unadBadge: 'Integrante Nodo I+D (Pregrado)',
    bio: 'Desarrollador Web Full Stack en el Nodo I+D. Especialista en desarrollo de APIs REST, bases de datos relacionales y servicios en la nube.',
    email: 'jarivas@unadvirtual.edu.co',
    skills: ['Node.js', 'PostgreSQL', 'Python API', 'Docker'],
    projectsCount: 11,
    headline: 'Full stack con énfasis en backend, datos y servicios cloud',
    teaching: ['APIs REST', 'Bases de datos', 'Backend con Node.js y Python'],
    focusAreas: ['Backend', 'PostgreSQL', 'Servicios en la nube'],
  },
];

export const DEMO_PROJECTS: ProjectItem[] = [
  {
    id: 'aula-libre',
    title: 'Aula Libre — Laboratorio de Fundamentos de Programación',
    category: 'FORMACIÓN ABIERTA',
    type: 'LEARNING PLATFORM',
    description: 'Propuesta de laboratorio progresivo para acompañar a estudiantes desde pensamiento algorítmico hasta sus primeras aplicaciones web, con rutas guiadas y revisión entre pares.',
    url: '#formacion',
    ctaText: 'Ver ruta formativa',
    status: 'Concepto demostrativo',
    features: ['Rutas diferenciadas por nivel.', 'Ejercicios con contexto regional.', 'Seguimiento de avance y portafolio personal.'],
    tags: ['#Algoritmos', '#JavaScript', '#AprendizajeAbierto'],
    tech: ['React', 'TypeScript', 'PWA'],
    isConcept: true,
    year: '2026',
    owner: 'Nodo GRUSLIN Neiva',
  },
  {
    id: 'observatorio-iot',
    title: 'Observatorio Abierto del Huila',
    category: 'IOT & TERRITORIO',
    type: 'OPEN DATA PROTOTYPE',
    description: 'Concepto de plataforma para recibir telemetría ambiental de prototipos ESP32 y convertirla en datos abiertos útiles para proyectos académicos de la Zona Sur.',
    url: '#formacion',
    ctaText: 'Explorar concepto',
    status: 'Concepto demostrativo',
    features: ['Ingesta de telemetría ambiental.', 'Tableros accesibles para investigación.', 'Exportación de conjuntos de datos abiertos.'],
    tags: ['#IoT', '#OpenData', '#Huila'],
    tech: ['ESP32', 'Python', 'TimescaleDB'],
    isConcept: true,
    year: '2026',
    owner: 'Nodo GRUSLIN Neiva',
  },
];

export const LEARNING_PATHS: LearningPath[] = [
  { id: 'ruta-cero', title: 'Ruta Cero', level: 'Desde cero', description: 'Pensamiento lógico, algoritmos y primeras soluciones sin exigir experiencia previa.', topics: ['Lógica', 'Pseudocódigo', 'Python inicial'], color: '#f0b429' },
  { id: 'web-abierta', title: 'Web abierta', level: 'Fundamentos', description: 'Construcción de interfaces accesibles y aplicaciones web conectadas a problemas reales.', topics: ['HTML y CSS', 'JavaScript', 'Git'], color: '#38bdf8' },
  { id: 'sistemas', title: 'Sistemas conectados', level: 'Intermedio', description: 'Servicios, datos y automatizaciones que permiten que una aplicación opere de extremo a extremo.', topics: ['APIs', 'Bases de datos', 'Docker'], color: '#25a866' },
  { id: 'arquitectura', title: 'Arquitectura abierta', level: 'Avanzado', description: 'Decisiones de arquitectura, IA aplicada y despliegue responsable de plataformas abiertas.', topics: ['Cloud', 'Agentes IA', 'Observabilidad'], color: '#1577e8' },
];

export const RECORDINGS: Recording[] = [
  { id: 'rec-1', title: 'Primeros pasos con Python y pensamiento algorítmico', level: 'Desde cero', duration: '72 min', date: '2026-07-18', summary: 'Sesión introductoria para entender variables, decisiones y ciclos mediante ejercicios guiados.', url: '', published: true, placeholder: true },
  { id: 'rec-2', title: 'De una interfaz a una aplicación React', level: 'Intermedio', duration: '88 min', date: '2026-07-25', summary: 'Recorrido práctico por componentes, estado y composición de una aplicación web.', url: '', published: true, placeholder: true },
  { id: 'rec-3', title: 'APIs abiertas con Python y FastAPI', level: 'Avanzado', duration: '95 min', date: '2026-08-02', summary: 'Diseño de servicios, validación de datos y documentación automática de endpoints.', url: '', published: true, placeholder: true },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 'post-1', title: 'Aprender programación también es aprender a colaborar', excerpt: 'Una ruta de formación abierta no termina cuando el código funciona: empieza cuando podemos explicarlo, compartirlo y mejorarlo con otros.', body: 'En los espacios formativos del nodo trabajamos la programación como una práctica colaborativa. Documentar decisiones, hacer preguntas claras y revisar el trabajo de otros son habilidades tan importantes como dominar una herramienta.', date: '2026-08-12', author: 'Equipo GRUSLIN Neiva', category: 'Formación', published: true, isDemo: true },
  { id: 'post-2', title: 'Software libre para investigar desde el territorio', excerpt: 'Las herramientas abiertas permiten que un prototipo académico pueda ser entendido, adaptado y reutilizado por nuevas comunidades.', body: 'Cuando el código, los datos y la documentación permanecen abiertos, un proyecto deja de ser una entrega aislada y se convierte en infraestructura de aprendizaje para la región.', date: '2026-08-05', author: 'Nodo I+D', category: 'Software libre', published: true, isDemo: true },
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
    description: 'Diseño e implementación de plataformas web, evaluadores de código e IA de código abierto bajo licencias libres en el Nodo I+D.',
    iconName: 'Code2',
    tags: ['SAMP', 'PythonLab', 'React', 'FastAPI', 'IA'],
    metricsCount: '2 Desarrollos Activos',
    accentColor: '#25A866',
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
    accentColor: '#1577E8',
  },
];
