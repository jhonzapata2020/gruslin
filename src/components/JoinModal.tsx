import React, { useState, useEffect } from 'react';
import { X, Rocket, ShieldCheck, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { ApplicationForm } from '../types';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetMemberName?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, targetMemberName }) => {
  const [formData, setFormData] = useState<ApplicationForm>({
    fullName: '',
    unadEmail: '',
    roleInterest: 'Desarrollador Software Libre',
    semesterArea: 'CEAD Neiva - Ingeniería de Sistemas',
    motivation: '',
    acceptTerms: true,
  });

  const [emailError, setEmailError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setEmailError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateUnadEmail = (email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const unadPattern = /^[\w.-]+@(unad\.edu\.co|unadvirtual\.edu\.co)$/i;
    return unadPattern.test(cleanEmail);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, unadEmail: val });
    if (val && !validateUnadEmail(val)) {
      setEmailError('Debe ingresar un correo institucional válido (@unad.edu.co o @unadvirtual.edu.co)');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateUnadEmail(formData.unadEmail)) {
      setEmailError('Por favor ingresa tu correo institucional UNAD oficial.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d1e]/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl glass-panel p-6 sm:p-8 rounded-3xl border border-[#F0B429]/60 shadow-2xl shadow-sky-950/80 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-[#003366] transition-colors"
          aria-label="Cerrar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00264D] border border-amber-500/40 text-amber-400 text-xs font-bold uppercase">
                <Rocket className="w-3.5 h-3.5" /> Convocatoria Abierta Semillero GRUSLIN
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                Postular a la Comunidad GRUSLIN
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm">
                Unete al semillero de Software Libre UNAD. Trabaja en prototipos gravitacionales, física aplicada y desarrollo Open Source.
                {targetMemberName && (
                  <span className="block text-amber-400 font-semibold mt-1">
                    Contacto preferente: {targetMemberName}
                  </span>
                )}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-slate-200 font-semibold">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="ej. Carlos Eduardo Ruiz"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* UNAD Institutional Email */}
              <div className="space-y-1">
                <label className="block text-slate-200 font-semibold flex justify-between">
                  <span>Correo Institucional UNAD *</span>
                  <span className="text-amber-400 text-[11px]">@unad.edu.co / @unadvirtual.edu.co</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="usuario@unadvirtual.edu.co"
                  value={formData.unadEmail}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#001935] border text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    emailError ? 'border-rose-500 focus:border-rose-400' : 'border-slate-700 focus:border-amber-400'
                  }`}
                />
                {emailError && (
                  <p className="text-rose-400 text-xs flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {emailError}
                  </p>
                )}
              </div>

              {/* Grid 2 Columns: Role & Semester/Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="block text-slate-200 font-semibold">Rol de Interés</label>
                  <select
                    value={formData.roleInterest}
                    onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Desarrollador Software Libre">Desarrollador Software Libre</option>
                    <option value="Investigador Física de Repulsión">Investigador Física de Repulsión</option>
                    <option value="Prototipador IoT & Hardware">Prototipador IoT & Hardware</option>
                    <option value="Divulgación Científica & Eventos">Divulgación Científica & Eventos</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-200 font-semibold">Semestre / Zona UNAD</label>
                  <input
                    type="text"
                    placeholder="ej. CEAD Neiva - 5to Semestre"
                    value={formData.semesterArea}
                    onChange={(e) => setFormData({ ...formData, semesterArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

              </div>

              {/* Motivation */}
              <div className="space-y-1">
                <label className="block text-slate-200 font-semibold">Carta Corta de Motivación</label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente por qué deseas integrarte a la rama de investigación del Semillero GRUSLIN..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="w-4 h-4 accent-[#F0B429] rounded cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-slate-300 cursor-pointer">
                  Acepto el tratamiento de datos institucionales de la UNAD.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold hover:bg-slate-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !!emailError}
                  className="px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 disabled:opacity-50 transition-all flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-slate-900 border-t-transparent animate-spin"></span>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Rocket className="w-4 h-4" />
                      <span>Enviar Postulación</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        ) : (
          /* Confirmation / Success State */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white font-outfit">¡Postulación Recibida con Éxito!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Hemos registrado correctamente tu postulación con el correo institucional{' '}
                <span className="text-amber-400 font-mono font-bold">{formData.unadEmail}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#001935] border border-slate-800 text-xs text-slate-400 max-w-md mx-auto space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-sky-400 font-semibold">
                <Sparkles className="w-4 h-4" /> Próximo Paso
              </div>
              <p>
                El coordinador de la Rama de Investigación (Semillero GRUSLIN UNAD) te contactará vía Teams/Correo Institucional para la entrevista formativa.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg"
            >
              Entendido / Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
