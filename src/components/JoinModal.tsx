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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateUnadEmail(formData.unadEmail)) {
      setEmailError('Por favor ingresa tu correo institucional UNAD oficial.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send background HTTP POST request directly to FormSubmit API for triangelturbo@gmail.com
      await fetch('https://formsubmit.co/ajax/triangelturbo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[POSTULACIÓN GRUSLIN UNAD] - ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
          'Nombre Completo': formData.fullName,
          'Correo Institucional UNAD': formData.unadEmail,
          'Rol de Interés': formData.roleInterest,
          'Semestre / Zona UNAD': formData.semesterArea,
          'Contacto Preferente': targetMemberName || 'General (Sin preferencia)',
          'Carta de Motivación': formData.motivation || 'Sin mensaje adicional'
        })
      });
    } catch (err) {
      console.error('Submission fetch notification:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000d1e]/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl glass-panel p-6 sm:p-8 rounded-3xl border border-[#F0B429]/60 shadow-2xl bg-[#001935] text-slate-100 my-8 transition-colors duration-300">
        
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00264D] border border-amber-400/60 text-amber-400 text-xs font-bold uppercase shadow-sm">
                <Rocket className="w-3.5 h-3.5 text-amber-400" /> Convocatoria Abierta Semillero GRUSLIN
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
                Postular a la Comunidad GRUSLIN
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-medium">
                Unete al semillero de Software Libre UNAD. Trabaja en prototipos gravitacionales, física aplicada y desarrollo Open Source.
                {targetMemberName && (
                  <span className="block text-amber-400 font-extrabold mt-1">
                    Contacto preferente: {targetMemberName}
                  </span>
                )}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="block text-slate-200 font-extrabold">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="ej. Carlos Eduardo Ruiz"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors font-medium"
                />
              </div>

              {/* UNAD Institutional Email */}
              <div className="space-y-1">
                <label className="block text-slate-200 font-extrabold flex justify-between">
                  <span>Correo Institucional UNAD *</span>
                  <span className="text-amber-400 text-[11px] font-mono font-bold">@unad.edu.co / @unadvirtual.edu.co</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="usuario@unadvirtual.edu.co"
                  value={formData.unadEmail}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#001935] border text-white placeholder-slate-500 focus:outline-none transition-colors font-medium ${
                    emailError ? 'border-rose-500 focus:border-rose-400' : 'border-slate-700 focus:border-amber-500'
                  }`}
                />
                {emailError && (
                  <p className="text-rose-400 text-xs flex items-center gap-1 mt-1 font-bold">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {emailError}
                  </p>
                )}
              </div>

              {/* Grid 2 Columns: Role & Semester/Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="block text-slate-200 font-extrabold">Rol de Interés</label>
                  <select
                    value={formData.roleInterest}
                    onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white focus:outline-none focus:border-amber-500 font-medium"
                  >
                    <option value="Desarrollador Software Libre">Desarrollador Software Libre</option>
                    <option value="Investigador Física de Repulsión">Investigador Física de Repulsión</option>
                    <option value="Prototipador IoT & Hardware">Prototipador IoT & Hardware</option>
                    <option value="Divulgación Científica & Eventos">Divulgación Científica & Eventos</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-200 font-extrabold">Semestre / Zona UNAD</label>
                  <input
                    type="text"
                    placeholder="ej. CEAD Neiva - 5to Semestre"
                    value={formData.semesterArea}
                    onChange={(e) => setFormData({ ...formData, semesterArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-medium"
                  />
                </div>

              </div>

              {/* Motivation */}
              <div className="space-y-1">
                <label className="block text-slate-200 font-extrabold">Carta Corta de Motivación</label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente por qué deseas integrarte a la rama de investigación del Semillero GRUSLIN..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#001935] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none font-medium"
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
                <label htmlFor="terms" className="text-xs text-slate-300 cursor-pointer font-semibold">
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
              <h4 className="text-2xl font-extrabold text-white font-outfit">¡Postulación Recibida con Éxito!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto font-medium">
                Hemos registrado correctamente tu postulación con el correo institucional{' '}
                <span className="text-amber-400 font-mono font-extrabold">{formData.unadEmail}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#001935] border border-slate-800 text-xs text-slate-400 max-w-md mx-auto space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-sky-400 font-extrabold">
                <Sparkles className="w-4 h-4" /> Próximo Paso
              </div>
              <p className="font-medium">
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
