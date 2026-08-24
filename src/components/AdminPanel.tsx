import React, { useMemo, useRef, useState } from 'react';
import { ArrowLeft, BookOpen, Download, GraduationCap, LayoutDashboard, Radio, RotateCcw, Upload, UserRound, Workflow, Plus, Trash2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { BlogPost, ProjectItem, Recording, TeamMember } from '../types';

type Tab = 'overview' | 'team' | 'projects' | 'learning' | 'recordings' | 'blog';

const tabs: { id: Tab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'overview', label: 'Resumen', icon: LayoutDashboard },
  { id: 'team', label: 'Integrantes', icon: UserRound },
  { id: 'projects', label: 'Proyectos', icon: Workflow },
  { id: 'learning', label: 'Formación', icon: GraduationCap },
  { id: 'recordings', label: 'Grabaciones', icon: Radio },
  { id: 'blog', label: 'Blog', icon: BookOpen },
];

const fieldClass = 'mt-2 w-full rounded-xl border border-white/20 bg-[#00142f] px-4 py-3 text-sm text-white placeholder:text-[#7f96ac] focus:border-[#f0b429]';
const labelClass = 'block text-sm font-semibold text-[#d7e1eb]';
const split = (value: string) => value.split(',').map((item) => item.trim()).filter(Boolean);

export const AdminPanel: React.FC = () => {
  const { content, setContent, resetContent, exportContent, importContent, storageStatus, storageMessage, retryStorage } = useContent();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [selectedMember, setSelectedMember] = useState(content.team[0]?.id ?? '');
  const [selectedProject, setSelectedProject] = useState(content.projects[0]?.id ?? '');
  const [selectedRecording, setSelectedRecording] = useState(content.recordings[0]?.id ?? '');
  const [selectedPost, setSelectedPost] = useState(content.posts[0]?.id ?? '');
  const [notice, setNotice] = useState('Todos los cambios se guardan automáticamente en este navegador.');
  const importRef = useRef<HTMLInputElement>(null);

  const member = useMemo(() => content.team.find((item) => item.id === selectedMember), [content.team, selectedMember]);
  const project = useMemo(() => content.projects.find((item) => item.id === selectedProject), [content.projects, selectedProject]);
  const recording = useMemo(() => content.recordings.find((item) => item.id === selectedRecording), [content.recordings, selectedRecording]);
  const post = useMemo(() => content.posts.find((item) => item.id === selectedPost), [content.posts, selectedPost]);

  const updateMember = (patch: Partial<TeamMember>) => setContent((current) => ({ ...current, team: current.team.map((item) => item.id === selectedMember ? { ...item, ...patch } : item) }));
  const updateProject = (patch: Partial<ProjectItem>) => setContent((current) => ({ ...current, projects: current.projects.map((item) => item.id === selectedProject ? { ...item, ...patch } : item) }));
  const updateRecording = (patch: Partial<Recording>) => setContent((current) => ({ ...current, recordings: current.recordings.map((item) => item.id === selectedRecording ? { ...item, ...patch } : item) }));
  const updatePost = (patch: Partial<BlogPost>) => setContent((current) => ({ ...current, posts: current.posts.map((item) => item.id === selectedPost ? { ...item, ...patch } : item) }));

  const addProject = () => {
    const id = `project-${Date.now()}`;
    setContent((current) => ({ ...current, projects: [...current.projects, { id, title: 'Nuevo proyecto', category: 'PROYECTO DEL NODO', type: 'OPEN SOURCE', description: 'Describe el propósito, la comunidad a la que sirve y la evidencia disponible.', url: '', ctaText: 'Explorar proyecto', status: 'Borrador', features: ['Capacidad por documentar'], tags: ['#GRUSLIN'], tech: ['Tecnología'], isConcept: true, owner: 'Nodo GRUSLIN Neiva', year: new Date().getFullYear().toString() }] }));
    setSelectedProject(id); setNotice('Proyecto creado como borrador.');
  };

  const addRecording = () => {
    const id = `recording-${Date.now()}`;
    setContent((current) => ({ ...current, recordings: [...current.recordings, { id, title: 'Nueva grabación', level: 'Desde cero', duration: '60 min', date: new Date().toISOString().slice(0, 10), summary: 'Resumen de la sesión.', url: '', published: false, placeholder: true }] }));
    setSelectedRecording(id); setNotice('Grabación creada como borrador.');
  };

  const addPost = () => {
    const id = `post-${Date.now()}`;
    setContent((current) => ({ ...current, posts: [...current.posts, { id, title: 'Nueva entrada', excerpt: 'Resumen breve para la portada del blog.', body: 'Escribe aquí el contenido completo de la publicación.', date: new Date().toISOString().slice(0, 10), author: 'Equipo GRUSLIN Neiva', category: 'Actualidad', published: false }] }));
    setSelectedPost(id); setNotice('Entrada creada como borrador.');
  };

  const removeFrom = (section: 'projects' | 'recordings' | 'posts', id: string) => {
    if (!window.confirm('¿Eliminar este contenido? Esta acción modifica la copia local.')) return;
    setContent((current) => ({ ...current, [section]: current[section].filter((item) => item.id !== id) }));
    if (section === 'projects') setSelectedProject('');
    if (section === 'recordings') setSelectedRecording('');
    if (section === 'posts') setSelectedPost('');
    setNotice('Contenido eliminado.');
  };

  const handleImport = async (file?: File) => {
    if (!file) return;
    const result = importContent(await file.text());
    setNotice(result.message);
  };

  return (
    <div className="admin-shell min-h-screen overflow-x-hidden bg-[#000c20] text-[#f4f1e9]">
      <header className="border-b border-white/15 bg-[#00142f]">
        <div className="container-wide flex min-h-20 flex-col items-start justify-between gap-4 py-3 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4"><span className="shrink-0 rounded-lg bg-white p-1.5"><img src="/unad-official-logo.png" alt="Universidad Nacional Abierta y a Distancia" className="h-9 w-auto" /></span><div className="min-w-0"><strong className="block font-['Barlow_Condensed'] text-xl font-semibold uppercase leading-none tracking-wide sm:text-2xl">Centro editorial GRUSLIN</strong><span className="route-label mt-1 block text-[#38bdf8]">Panel local · Nodo Neiva</span></div></div>
          <a href="/" className="route-button route-button--quiet w-full sm:w-auto"><ArrowLeft className="h-4 w-4" />Volver al sitio</a>
        </div>
      </header>

      <div className="container-wide grid gap-8 py-8 lg:grid-cols-[15rem_1fr] lg:py-12">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" aria-label="Secciones administrativas">
            {tabs.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setActiveTab(id)} className={`flex min-w-0 items-center gap-2 rounded-xl px-3 py-3 text-left text-xs font-semibold transition-colors sm:gap-3 sm:px-4 sm:text-sm ${activeTab === id ? 'bg-[#f0b429] text-[#00142f]' : 'text-[#b9c8d8] hover:bg-white/[.06] hover:text-white'}`}><Icon className="h-4 w-4 shrink-0" /><span className="min-w-0 truncate">{label}</span></button>)}
          </nav>
          <div className="mt-6 border-t border-white/15 pt-6">
            <button onClick={exportContent} className="mb-2 flex w-full items-center gap-3 px-4 py-2 text-sm text-[#b9c8d8] hover:text-white"><Download className="h-4 w-4" />Exportar JSON</button>
            <button onClick={() => importRef.current?.click()} className="mb-2 flex w-full items-center gap-3 px-4 py-2 text-sm text-[#b9c8d8] hover:text-white"><Upload className="h-4 w-4" />Importar JSON</button>
            <input ref={importRef} type="file" accept="application/json" className="hidden" onChange={(event) => handleImport(event.target.files?.[0])} />
            <button onClick={() => { if (window.confirm('¿Restablecer todo el contenido inicial?')) { resetContent(); setNotice('Contenido inicial restaurado.'); } }} className="flex w-full items-center gap-3 px-4 py-2 text-sm text-rose-300 hover:text-rose-200"><RotateCcw className="h-4 w-4" />Restablecer</button>
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-end"><div><h1 className="text-5xl font-semibold uppercase leading-none tracking-wide">{tabs.find((item) => item.id === activeTab)?.label}</h1><p className="mt-3 max-w-[68ch] text-sm text-[#b9c8d8]">{notice}</p></div><div aria-live="polite" className={`max-w-sm text-sm ${storageStatus === 'error' ? 'text-rose-300' : storageStatus === 'saving' ? 'text-[#f7ca5b]' : 'text-[#7ee2ab]'}`}><span className="route-label flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${storageStatus === 'error' ? 'bg-rose-400' : storageStatus === 'saving' ? 'bg-[#f0b429]' : 'bg-[#25a866]'}`} />{storageStatus === 'error' ? 'Error de guardado' : storageStatus === 'saving' ? 'Guardando' : 'Autoguardado listo'}</span><p className="mt-2 leading-5">{storageMessage}</p>{storageStatus === 'error' && <button onClick={retryStorage} className="mt-2 underline underline-offset-4">Reintentar guardado</button>}</div></div>

          {activeTab === 'overview' && <div className="enamel-panel min-w-0 max-w-full overflow-hidden"><div className="map-field border-b border-white/15 px-6 py-7 sm:px-8"><h2 className="text-2xl font-semibold uppercase tracking-wide sm:text-3xl">Estado de la red editorial</h2><p className="mt-3 max-w-[65ch] text-sm leading-6 text-[#b9c8d8]">Cada estación representa una colección pública. Selecciona su ruta en la navegación para editar el contenido.</p></div><div className="relative min-w-0 px-6 py-3 sm:px-8"><div className="absolute bottom-9 left-[2.3rem] top-9 w-1 bg-white/25 sm:left-[2.8rem]" />{[
            ['Integrantes', content.team.length, 'Perfiles públicos'], ['Proyectos', content.projects.length, `${content.projects.filter((item) => item.isConcept).length} demostrativos`], ['Grabaciones', content.recordings.length, `${content.recordings.filter((item) => item.published).length} publicadas`], ['Entradas', content.posts.length, `${content.posts.filter((item) => item.published).length} publicadas`],
          ].map(([label, value, detail], index) => <div key={String(label)} className="relative grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-white/10 py-6 last:border-0 sm:grid-cols-[4rem_1fr_auto]"><span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border-4 border-[#041a38] bg-[#f4f1e9] font-['Barlow_Condensed'] font-semibold text-[#00142f] shadow-[0_0_0_2px_#f4f1e9]">{index + 1}</span><div><h3 className="text-2xl font-semibold uppercase tracking-wide">{label}</h3><p className="mt-1 text-sm text-[#b9c8d8]">{detail}</p></div><strong className="font-['Barlow_Condensed'] text-4xl font-semibold" style={{ color: ['#38bdf8','#f0b429','#25a866','#1577e8'][index] }}>{value}</strong></div>)}</div></div>}

          {activeTab === 'team' && <EditorLayout items={content.team.map((item) => ({ id: item.id, title: item.name, meta: item.headline }))} selected={selectedMember} onSelect={setSelectedMember}>{member && <div className="space-y-5"><Field label="Nombre" value={member.name} onChange={(value) => updateMember({ name: value })} /><Field label="Rol público" value={member.role} onChange={(value) => updateMember({ role: value })} /><Field label="Titular profesional" value={member.headline} onChange={(value) => updateMember({ headline: value })} /><TextArea label="Biografía" value={member.bio} onChange={(value) => updateMember({ bio: value })} /><Field label="LinkedIn" value={member.linkedinUrl ?? ''} onChange={(value) => updateMember({ linkedinUrl: value })} /><Field label="Temas que enseña (separados por comas)" value={member.teaching.join(', ')} onChange={(value) => updateMember({ teaching: split(value) })} /><Field label="Áreas de enfoque (separadas por comas)" value={member.focusAreas.join(', ')} onChange={(value) => updateMember({ focusAreas: split(value) })} /></div>}</EditorLayout>}

          {activeTab === 'projects' && <EditorLayout items={content.projects.map((item) => ({ id: item.id, title: item.title, meta: item.status }))} selected={selectedProject} onSelect={setSelectedProject} action={<button onClick={addProject} className="route-button route-button--gold"><Plus className="h-4 w-4" />Nuevo proyecto</button>}>{project && <div className="space-y-5"><div className="flex justify-end"><button onClick={() => removeFrom('projects', project.id)} className="inline-flex items-center gap-2 text-sm text-rose-300"><Trash2 className="h-4 w-4" />Eliminar</button></div><Field label="Título" value={project.title} onChange={(value) => updateProject({ title: value })} /><TextArea label="Descripción" value={project.description} onChange={(value) => updateProject({ description: value })} /><div className="grid gap-5 sm:grid-cols-2"><Field label="Estado" value={project.status} onChange={(value) => updateProject({ status: value })} /><Field label="URL" value={project.url} onChange={(value) => updateProject({ url: value })} /></div><Field label="Tecnologías (separadas por comas)" value={project.tech.join(', ')} onChange={(value) => updateProject({ tech: split(value) })} /><Check label="Marcar como concepto demostrativo" checked={Boolean(project.isConcept)} onChange={(checked) => updateProject({ isConcept: checked })} /></div>}</EditorLayout>}

          {activeTab === 'learning' && <div className="space-y-6">{content.learningPaths.map((path) => <article key={path.id} className="enamel-panel grid gap-5 p-6 md:grid-cols-[10rem_1fr]"><div><span className="block h-5 w-16" style={{ backgroundColor: path.color }} /><strong className="mt-4 block font-['Barlow_Condensed'] text-2xl uppercase">{path.level}</strong></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Nombre de la ruta" value={path.title} onChange={(value) => setContent((current) => ({ ...current, learningPaths: current.learningPaths.map((item) => item.id === path.id ? { ...item, title: value } : item) }))} /><Field label="Temas (separados por comas)" value={path.topics.join(', ')} onChange={(value) => setContent((current) => ({ ...current, learningPaths: current.learningPaths.map((item) => item.id === path.id ? { ...item, topics: split(value) } : item) }))} /><div className="sm:col-span-2"><TextArea label="Descripción" value={path.description} onChange={(value) => setContent((current) => ({ ...current, learningPaths: current.learningPaths.map((item) => item.id === path.id ? { ...item, description: value } : item) }))} /></div></div></article>)}</div>}

          {activeTab === 'recordings' && <EditorLayout items={content.recordings.map((item) => ({ id: item.id, title: item.title, meta: item.published ? 'Publicada' : 'Borrador' }))} selected={selectedRecording} onSelect={setSelectedRecording} action={<button onClick={addRecording} className="route-button route-button--gold"><Plus className="h-4 w-4" />Nueva grabación</button>}>{recording && <div className="space-y-5"><div className="flex justify-end"><button onClick={() => removeFrom('recordings', recording.id)} className="inline-flex items-center gap-2 text-sm text-rose-300"><Trash2 className="h-4 w-4" />Eliminar</button></div><Field label="Título" value={recording.title} onChange={(value) => updateRecording({ title: value })} /><TextArea label="Resumen" value={recording.summary} onChange={(value) => updateRecording({ summary: value })} /><div className="grid gap-5 sm:grid-cols-3"><Field label="Nivel" value={recording.level} onChange={(value) => updateRecording({ level: value })} /><Field label="Duración" value={recording.duration} onChange={(value) => updateRecording({ duration: value })} /><Field label="Fecha" type="date" value={recording.date} onChange={(value) => updateRecording({ date: value })} /></div><Field label="Enlace a la grabación" value={recording.url} onChange={(value) => updateRecording({ url: value, placeholder: !value })} /><Check label="Publicar en la landing" checked={recording.published} onChange={(checked) => updateRecording({ published: checked })} /></div>}</EditorLayout>}

          {activeTab === 'blog' && <EditorLayout items={content.posts.map((item) => ({ id: item.id, title: item.title, meta: item.published ? 'Publicada' : 'Borrador' }))} selected={selectedPost} onSelect={setSelectedPost} action={<button onClick={addPost} className="route-button route-button--gold"><Plus className="h-4 w-4" />Nueva entrada</button>}>{post && <div className="space-y-5"><div className="flex justify-end"><button onClick={() => removeFrom('posts', post.id)} className="inline-flex items-center gap-2 text-sm text-rose-300"><Trash2 className="h-4 w-4" />Eliminar</button></div><Field label="Título" value={post.title} onChange={(value) => updatePost({ title: value })} /><TextArea label="Resumen" value={post.excerpt} onChange={(value) => updatePost({ excerpt: value })} /><TextArea label="Contenido" rows={8} value={post.body} onChange={(value) => updatePost({ body: value })} /><div className="grid gap-5 sm:grid-cols-3"><Field label="Autor" value={post.author} onChange={(value) => updatePost({ author: value })} /><Field label="Categoría" value={post.category} onChange={(value) => updatePost({ category: value })} /><Field label="Fecha" type="date" value={post.date} onChange={(value) => updatePost({ date: value })} /></div><Check label="Publicar en el blog" checked={post.published} onChange={(checked) => updatePost({ published: checked })} /><Check label="Marcar como contenido de muestra" checked={Boolean(post.isDemo)} onChange={(checked) => updatePost({ isDemo: checked })} /></div>}</EditorLayout>}
        </main>
      </div>
    </div>
  );
};

const EditorLayout: React.FC<React.PropsWithChildren<{ items: { id: string; title: string; meta: string }[]; selected: string; onSelect: (id: string) => void; action?: React.ReactNode }>> = ({ items, selected, onSelect, action, children }) => <div className="grid gap-6 xl:grid-cols-[20rem_1fr]"><div><div className="mb-4">{action}</div><div className="border-y border-white/15">{items.map((item) => <button key={item.id} onClick={() => onSelect(item.id)} className={`block w-full border-b border-white/10 px-3 py-4 text-left last:border-0 ${selected === item.id ? 'bg-white/[.06]' : 'hover:bg-white/[.035]'}`}><strong className="block font-['Barlow_Condensed'] text-xl font-semibold uppercase leading-tight tracking-wide">{item.title}</strong><span className="mt-1 block text-xs text-[#8fa8bf]">{item.meta}</span></button>)}</div></div><div className="enamel-panel p-5 sm:p-8">{children ?? <p className="text-[#b9c8d8]">Selecciona un elemento.</p>}</div></div>;

const Field: React.FC<{ label: string; value: string; type?: string; onChange: (value: string) => void }> = ({ label, value, type = 'text', onChange }) => <label className={labelClass}>{label}<input type={type} value={value} onChange={(event) => onChange(event.target.value)} className={fieldClass} /></label>;
const TextArea: React.FC<{ label: string; value: string; rows?: number; onChange: (value: string) => void }> = ({ label, value, rows = 4, onChange }) => <label className={labelClass}>{label}<textarea rows={rows} value={value} onChange={(event) => onChange(event.target.value)} className={`${fieldClass} resize-y`} /></label>;
const Check: React.FC<{ label: string; checked: boolean; onChange: (checked: boolean) => void }> = ({ label, checked, onChange }) => <label className="flex items-center gap-3 text-sm text-[#d7e1eb]"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-4 w-4 accent-[#f0b429]" />{label}</label>;
