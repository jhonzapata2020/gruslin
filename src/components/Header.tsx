import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps { onOpenJoinModal?: () => void; }

const links = [
  { href: '#inicio', label: 'Nodo' },
  { href: '#lineas', label: 'Líneas' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#blog', label: 'Blog' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenJoinModal }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-[#00142f]/95 backdrop-blur-md">
      <div className="container-wide flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" onClick={close}>
          <span className="rounded-lg bg-white p-1.5"><img src="/unad-official-logo.png" alt="Universidad Nacional Abierta y a Distancia" className="h-8 w-auto" /></span>
          <span className="min-w-0">
            <span className="block font-['Barlow_Condensed'] text-lg font-semibold uppercase tracking-[0.08em] text-[#f4f1e9]">GRUSLIN</span>
            <span className="route-label block truncate text-[#38bdf8]">Nodo Neiva · UNAD</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#b9c8d8] transition-colors hover:text-white">
              <span className={`h-2 w-2 rounded-full ${index === 2 ? 'bg-[#f0b429]' : index === 4 ? 'bg-[#25a866]' : 'bg-[#38bdf8]'}`} />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="route-label hidden text-[#b9c8d8] xl:block">SIGIIP 1513 · Activo</span>
          <button onClick={onOpenJoinModal} className="route-button route-button--gold">
            Conectar con el nodo <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-xl border border-white/25 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/15 bg-[#00142f] px-4 pb-5 pt-3 lg:hidden">
          <nav className="mx-auto grid max-w-lg gap-1" aria-label="Navegación móvil">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="flex items-center justify-between border-b border-white/10 px-2 py-3 text-base text-[#f4f1e9]">
                {link.label}<span aria-hidden="true">→</span>
              </a>
            ))}
            <button onClick={() => { close(); onOpenJoinModal?.(); }} className="route-button route-button--gold mt-3 w-full">Conectar con el nodo</button>
          </nav>
        </div>
      )}
    </header>
  );
};
