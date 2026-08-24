import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const BlogSection: React.FC = () => {
  const { content } = useContent();
  const posts = content.posts.filter((post) => post.published);
  const [expandedId, setExpandedId] = useState('');

  return (
    <section id="blog" className="section-pad border-b border-white/15 bg-[#00142f]">
      <div className="container-wide grid gap-14 lg:grid-cols-[.62fr_1.38fr] lg:gap-20">
        <div>
          <h2 className="max-w-[9ch] text-[clamp(3.8rem,7vw,6.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.025em]">Ideas en circulación</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#b9c8d8]">Notas del nodo sobre aprendizaje, software libre, investigación y las decisiones detrás de nuestros proyectos.</p>
          <a href="/?panel=admin" className="route-button route-button--quiet mt-8"><BookOpen className="h-4 w-4" />Abrir panel editorial</a>
        </div>

        <div className="border-y border-white/20">
          {posts.length === 0 ? <p className="py-10 text-[#b9c8d8]">El blog está preparando su primera publicación.</p> : posts.map((post) => {
            const expanded = expandedId === post.id;
            return <article key={post.id} className="border-b border-white/15 py-7 last:border-0">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#8fa8bf]"><span>{new Date(`${post.date}T12:00:00`).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.author}</span>{post.isDemo && <span className="route-label text-[#f0b429]">Contenido de muestra</span>}</div>
              <h3 className="mt-4 max-w-[22ch] text-4xl font-semibold uppercase leading-[.95] tracking-wide sm:text-5xl">{post.title}</h3>
              <p className="mt-5 max-w-[68ch] leading-7 text-[#b9c8d8]">{expanded ? post.body : post.excerpt}</p>
              <button onClick={() => setExpandedId(expanded ? '' : post.id)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] underline decoration-[#38bdf8]/40 underline-offset-4 hover:text-white">{expanded ? 'Cerrar lectura' : 'Leer la nota'}<ArrowUpRight className="h-4 w-4" /></button>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
};
