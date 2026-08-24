import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send, X } from 'lucide-react';
import { ApplicationForm } from '../types';

interface JoinModalProps { isOpen: boolean; onClose: () => void; targetMemberName?: string; }

const initialForm: ApplicationForm = {
  fullName: '', unadEmail: '', roleInterest: 'Desarrollador Software Libre', semesterArea: 'CCAV Neiva - Ingeniería de Sistemas', motivation: '', acceptTerms: true,
};

const inputClass = 'mt-2 w-full rounded-xl border border-white/25 bg-[#00142f] px-4 py-3 text-white placeholder:text-[#7f96ac] focus:border-[#f0b429]';

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, targetMemberName }) => {
  const [formData, setFormData] = useState<ApplicationForm>(initialForm);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setEmailError(''); setSubmissionError(''); setSubmissionSuccess(false);
    const previousFocus = document.activeElement as HTMLElement | null;
    const background = Array.from(document.querySelectorAll<HTMLElement>('header, main, footer'));
    background.forEach((element) => { element.inert = true; element.setAttribute('aria-hidden', 'true'); });
    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]') ?? []);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { onClose(); return; }
      if (event.key !== 'Tab') return;
      const elements = focusable();
      if (!elements.length) return;
      const first = elements[0]; const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    window.setTimeout(() => focusable()[0]?.focus(), 0);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
      background.forEach((element) => { element.inert = false; element.removeAttribute('aria-hidden'); });
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateUnadEmail = (email: string) => /^[\w.-]+@(unad\.edu\.co|unadvirtual\.edu\.co)$/i.test(email.trim());

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData({ ...formData, unadEmail: value });
    setEmailError(value && !validateUnadEmail(value) ? 'Usa un correo @unad.edu.co o @unadvirtual.edu.co.' : '');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateUnadEmail(formData.unadEmail)) { setEmailError('Ingresa tu correo institucional UNAD para continuar.'); return; }
    setIsSubmitting(true); setSubmissionError('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '12ea1ee1-697a-459a-8344-5d7ef5fa05c8', subject: 'Nueva Postulación - Nodo de Desarrollo GRUSLIN', from_name: 'Nodo I+D - Portal GRUSLIN UNAD', name: formData.fullName, email: formData.unadEmail, role: formData.roleInterest, campus: formData.semesterArea, preferred_contact: targetMemberName || 'General', message: formData.motivation || 'Sin mensaje adicional',
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message || 'No fue posible enviar la solicitud.');
      setSubmissionSuccess(true); setFormData(initialForm);
      window.setTimeout(onClose, 2500);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'No fue posible conectar. Revisa tu red e inténtalo otra vez.');
    } finally { setIsSubmitting(false); }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#000713]/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="join-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} className="relative my-6 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/25 bg-[#061d3c] shadow-[0_30px_90px_-30px_rgba(0,0,0,.95)]">
        <div className="h-2 bg-[#f0b429]" />
        <button onClick={onClose} className="absolute right-4 top-5 grid h-10 w-10 place-items-center rounded-xl border border-white/20 text-[#b9c8d8] hover:text-white" aria-label="Cerrar formulario"><X className="h-5 w-5" /></button>

        {!submissionSuccess ? (
          <div className="p-6 sm:p-9">
            <div className="pr-12">
              <h2 id="join-title" className="text-4xl font-semibold uppercase leading-none tracking-wide sm:text-5xl">Conecta tu talento con el nodo</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#b9c8d8]">Cuéntanos qué quieres aprender, investigar o construir. Esta solicitud llegará al equipo local de GRUSLIN.{targetMemberName && <strong className="mt-2 block text-[#f0b429]">Contacto preferente: {targetMemberName}</strong>}</p>
            </div>

            {submissionError && <div className="mt-6 flex gap-3 rounded-xl border border-rose-400/40 bg-rose-950/40 p-4 text-sm text-rose-100" role="alert"><AlertCircle className="h-5 w-5 shrink-0" /><span>{submissionError} Intenta nuevamente.</span></div>}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">Nombre completo *<input required value={formData.fullName} onChange={(event) => setFormData({ ...formData, fullName: event.target.value })} placeholder="Tu nombre" className={inputClass} /></label>
                <label className="text-sm font-semibold">Correo institucional *<input required type="email" value={formData.unadEmail} onChange={handleEmailChange} placeholder="usuario@unadvirtual.edu.co" className={`${inputClass} ${emailError ? 'border-rose-400' : ''}`} aria-describedby="email-error" />{emailError && <span id="email-error" className="mt-2 flex items-center gap-2 text-xs text-rose-300"><AlertCircle className="h-3.5 w-3.5" />{emailError}</span>}</label>
                <label className="text-sm font-semibold">Rol de interés<select value={formData.roleInterest} onChange={(event) => setFormData({ ...formData, roleInterest: event.target.value })} className={inputClass}><option>Desarrollador Software Libre</option><option>Arquitecto de IA & Evaluadores Web</option><option>Prototipador IoT & Hardware</option><option>Divulgación Científica & Eventos</option></select></label>
                <label className="text-sm font-semibold">Semestre / zona<input value={formData.semesterArea} onChange={(event) => setFormData({ ...formData, semesterArea: event.target.value })} className={inputClass} /></label>
              </div>
              <label className="block text-sm font-semibold">¿Qué ruta quieres construir?<textarea rows={4} value={formData.motivation} onChange={(event) => setFormData({ ...formData, motivation: event.target.value })} placeholder="Cuéntanos sobre tus intereses y lo que te gustaría aportar..." className={`${inputClass} resize-none`} /></label>
              <label className="flex items-start gap-3 text-sm text-[#b9c8d8]"><input required type="checkbox" checked={formData.acceptTerms} onChange={(event) => setFormData({ ...formData, acceptTerms: event.target.checked })} className="mt-1 h-4 w-4 accent-[#f0b429]" />Acepto el tratamiento de mis datos institucionales para gestionar esta solicitud.</label>
              <div className="flex flex-col-reverse gap-3 border-t border-white/15 pt-6 sm:flex-row sm:justify-end">
                <button type="button" onClick={onClose} className="route-button route-button--quiet">Cancelar</button>
                <button type="submit" disabled={isSubmitting || Boolean(emailError)} className="route-button route-button--gold disabled:cursor-not-allowed disabled:opacity-50">{isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" />Enviando</> : <>Enviar conexión<Send className="h-4 w-4" /></>}</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-10 text-center sm:p-14">
            <CheckCircle2 className="mx-auto h-14 w-14 text-[#25a866]" />
            <h2 id="join-title" className="mt-6 text-5xl font-semibold uppercase leading-none">Conexión recibida</h2>
            <p className="mx-auto mt-4 max-w-md leading-7 text-[#b9c8d8]">El equipo del nodo revisará tu información y te contactará por correo institucional o Microsoft Teams.</p>
          </div>
        )}
      </div>
    </div>
  );
};
