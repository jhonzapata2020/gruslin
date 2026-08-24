import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { SiteContent } from '../types';
import { BLOG_POSTS, DEMO_PROJECTS, LEARNING_PATHS, RECORDINGS, SOFTWARE_PROJECTS, TEAM_MEMBERS } from '../data/mockData';

const STORAGE_KEY = 'gruslin-content-v1';

export const DEFAULT_CONTENT: SiteContent = {
  team: TEAM_MEMBERS,
  projects: [...SOFTWARE_PROJECTS, ...DEMO_PROJECTS],
  learningPaths: LEARNING_PATHS,
  recordings: RECORDINGS,
  posts: BLOG_POSTS,
};

interface ContentContextValue {
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  resetContent: () => void;
  exportContent: () => void;
  importContent: (raw: string) => { ok: boolean; message: string };
  storageStatus: 'saved' | 'saving' | 'error';
  storageMessage: string;
  retryStorage: () => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

const loadContent = (): { content: SiteContent; error?: string } => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return { content: DEFAULT_CONTENT };
    const parsed = JSON.parse(saved) as Partial<SiteContent>;
    return { content: {
      team: parsed.team ?? DEFAULT_CONTENT.team,
      projects: parsed.projects ?? DEFAULT_CONTENT.projects,
      learningPaths: parsed.learningPaths ?? DEFAULT_CONTENT.learningPaths,
      recordings: parsed.recordings ?? DEFAULT_CONTENT.recordings,
      posts: parsed.posts ?? DEFAULT_CONTENT.posts,
    } };
  } catch {
    return { content: DEFAULT_CONTENT, error: 'No fue posible leer el almacenamiento local. Se cargó el contenido inicial.' };
  }
};

export const ContentProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [initial] = useState(loadContent);
  const [content, setContent] = useState<SiteContent>(initial.content);
  const [storageStatus, setStorageStatus] = useState<'saved' | 'saving' | 'error'>(initial.error ? 'error' : 'saved');
  const [storageMessage, setStorageMessage] = useState(initial.error ?? 'Cambios guardados en este navegador.');

  const persist = (nextContent: SiteContent) => {
    setStorageStatus('saving');
    setStorageMessage('Guardando cambios…');
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContent));
      setStorageStatus('saved');
      setStorageMessage('Cambios guardados en este navegador.');
    } catch {
      setStorageStatus('error');
      setStorageMessage('No se pudieron guardar los cambios. Exporta una copia o libera espacio e inténtalo de nuevo.');
    }
  };

  useEffect(() => {
    persist(content);
  }, [content]);

  const value = useMemo<ContentContextValue>(() => ({
    content,
    setContent,
    storageStatus,
    storageMessage,
    retryStorage: () => persist(content),
    resetContent: () => {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        setStorageStatus('error');
        setStorageMessage('No se pudo limpiar el almacenamiento local; el contenido visible sí fue restaurado.');
      }
      setContent(DEFAULT_CONTENT);
    },
    exportContent: () => {
      const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `gruslin-contenido-${new Date().toISOString().slice(0, 10)}.json`;
      anchor.click();
      URL.revokeObjectURL(url);
    },
    importContent: (raw: string) => {
      try {
        const parsed = JSON.parse(raw) as SiteContent;
        if (!Array.isArray(parsed.team) || !Array.isArray(parsed.projects) || !Array.isArray(parsed.recordings) || !Array.isArray(parsed.posts)) {
          return { ok: false, message: 'El archivo no contiene todas las colecciones requeridas.' };
        }
        setContent({ ...DEFAULT_CONTENT, ...parsed });
        return { ok: true, message: 'Contenido importado correctamente.' };
      } catch {
        return { ok: false, message: 'No fue posible leer el archivo JSON.' };
      }
    },
  }), [content, storageMessage, storageStatus]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used inside ContentProvider');
  return context;
};
