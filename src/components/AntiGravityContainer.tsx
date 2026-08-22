import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, Zap, Sliders, Shield, Orbit } from 'lucide-react';

interface Sphere {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  mass: number;
  pulseOffset: number;
  label?: string;
}

export const AntiGravityContainer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gravityMode, setGravityMode] = useState<'repulsion' | 'zero' | 'vortex'>('repulsion');
  const [fieldIntensity, setFieldIntensity] = useState<number>(85);
  const [activeSpheresCount, setActiveSpheresCount] = useState<number>(12);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean }>({ x: 0, y: 0, isDown: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color palette for anti-gravity spheres matching UNAD + cyan tech glow
    const colors = [
      { main: '#38BDF8', glow: '#00F0FF', label: 'Prototipo α' },
      { main: '#F0B429', glow: '#FCD34D', label: 'Campo Electro' },
      { main: '#60A5FA', glow: '#93C5FD', label: 'Masa Repulsiva' },
      { main: '#818CF8', glow: '#C7D2FE', label: 'Vector G-0' },
      { main: '#34D399', glow: '#6EE7B7', label: 'Orbe Foton' },
    ];

    // Generate floating spheres inside chamber
    const spheres: Sphere[] = [];
    const count = 14;

    for (let i = 0; i < count; i++) {
      const colorScheme = colors[i % colors.length];
      const radius = 14 + Math.random() * 22;
      spheres.push({
        x: radius + Math.random() * (canvas.width - radius * 2),
        y: radius + Math.random() * (canvas.height - radius * 2),
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius,
        color: colorScheme.main,
        glowColor: colorScheme.glow,
        mass: radius * 0.1,
        pulseOffset: Math.random() * Math.PI * 2,
        label: i < 5 ? colorScheme.label : undefined,
      });
    }

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // 1. Draw Lab Containment Glass Chamber Background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, '#09152B');
      bgGradient.addColorStop(0.5, '#0F2347');
      bgGradient.addColorStop(1, '#061021');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Grid Pattern inside chamber
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Energy Field Concentric Waves from Center
      const centerX = width / 2;
      const centerY = height / 2;
      ctx.save();
      ctx.strokeStyle = 'rgba(240, 180, 41, 0.08)';
      ctx.setLineDash([8, 8]);
      const pulseRadius = (Math.sin(time) * 0.5 + 0.5) * 100 + 120;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Mouse influence position
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw Field Energy vectors to mouse if inside canvas
      if (mx > 0 && mx < width && my > 0 && my < height) {
        ctx.save();
        ctx.strokeStyle = gravityMode === 'repulsion' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(240, 180, 41, 0.3)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(mx, my, 80, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Update and Draw Spheres
      spheres.forEach((s, idx) => {
        // Physics update
        // Apply Anti-Gravity buoyancy force upwards / anti-center force
        let fx = 0;
        let fy = 0;

        if (gravityMode === 'repulsion') {
          // Anti-gravity repels spheres upward and away from bottom
          fy -= 0.08 * (fieldIntensity / 50);
          // Sine wave oscillation for smooth floating
          fx += Math.sin(time + s.pulseOffset) * 0.15;
          fy += Math.cos(time * 0.8 + s.pulseOffset) * 0.15;
        } else if (gravityMode === 'zero') {
          // True zero gravity drift
          fx += Math.sin(time * 0.5 + s.pulseOffset) * 0.08;
          fy += Math.cos(time * 0.5 + s.pulseOffset) * 0.08;
        } else if (gravityMode === 'vortex') {
          // Vortex rotation around chamber center
          const dx = s.x - centerX;
          const dy = s.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const angle = Math.atan2(dy, dx);
          fx += -Math.sin(angle) * 0.8;
          fy += Math.cos(angle) * 0.8;
          // Inward pull
          fx += (-dx / dist) * 0.2;
          fy += (-dy / dist) * 0.2;
        }

        // Mouse force interaction
        if (mx > 0 && mx < width && my > 0 && my < height) {
          const mdx = s.x - mx;
          const mdy = s.y - my;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140 && mdist > 0) {
            const force = (140 - mdist) / 140;
            const pushDir = gravityMode === 'repulsion' ? 1 : -1;
            fx += (mdx / mdist) * force * 1.8 * pushDir;
            fy += (mdy / mdist) * force * 1.8 * pushDir;
          }
        }

        s.vx += fx / s.mass;
        s.vy += fy / s.mass;

        // Damping / Friction
        s.vx *= 0.96;
        s.vy *= 0.96;

        s.x += s.vx;
        s.y += s.vy;

        // Containment wall bouncing
        const margin = s.radius + 4;
        if (s.x < margin) {
          s.x = margin;
          s.vx *= -0.8;
        }
        if (s.x > width - margin) {
          s.x = width - margin;
          s.vx *= -0.8;
        }
        if (s.y < margin) {
          s.y = margin;
          s.vy *= -0.8;
        }
        if (s.y > height - margin) {
          s.y = height - margin;
          s.vy *= -0.8;
        }

        // Inter-sphere collisions
        for (let j = idx + 1; j < spheres.length; j++) {
          const other = spheres[j];
          const cdx = other.x - s.x;
          const cdy = other.y - s.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          const minDist = s.radius + other.radius;
          if (cdist < minDist && cdist > 0) {
            const overlap = minDist - cdist;
            const nx = cdx / cdist;
            const ny = cdy / cdist;

            s.x -= nx * overlap * 0.5;
            s.y -= ny * overlap * 0.5;
            other.x += nx * overlap * 0.5;
            other.y += ny * overlap * 0.5;

            // Elastic bounce
            const kx = s.vx - other.vx;
            const ky = s.vy - other.vy;
            const p = 2 * (nx * kx + ny * ky) / (s.mass + other.mass);

            s.vx -= p * other.mass * nx;
            s.vy -= p * other.mass * ny;
            other.vx += p * s.mass * nx;
            other.vy += p * s.mass * ny;
          }
        }

        // Draw Sphere Rendering with 3D Radial Gradient & Glow
        ctx.save();

        // Outer Glow Aura
        const currentRadius = s.radius + Math.sin(time * 2 + s.pulseOffset) * 2;
        const glowGrad = ctx.createRadialGradient(s.x, s.y, currentRadius * 0.4, s.x, s.y, currentRadius * 2);
        glowGrad.addColorStop(0, s.glowColor + 'aa');
        glowGrad.addColorStop(0.5, s.glowColor + '33');
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Metallic Sphere Gradient
        const sphereGrad = ctx.createRadialGradient(
          s.x - s.radius * 0.3,
          s.y - s.radius * 0.3,
          s.radius * 0.1,
          s.x,
          s.y,
          s.radius
        );
        sphereGrad.addColorStop(0, '#FFFFFF');
        sphereGrad.addColorStop(0.3, s.color);
        sphereGrad.addColorStop(0.8, '#0B1E36');
        sphereGrad.addColorStop(1, '#030A14');

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        // Specular Highlight Arc
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(s.x - s.radius * 0.35, s.y - s.radius * 0.35, s.radius * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // Border ring
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label if present
        if (s.label) {
          ctx.fillStyle = '#F0B429';
          ctx.font = '10px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(s.label, s.x, s.y + s.radius + 14);
        }

        ctx.restore();
      });

      // 3. Chamber Frame Overlay (Glass border highlights)
      ctx.strokeStyle = 'rgba(240, 180, 41, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, width - 20, height - 20);

      // Corner Tech Bracket Details
      const bracketSize = 20;
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 3;

      // Top-left
      ctx.beginPath();
      ctx.moveTo(6, 6 + bracketSize);
      ctx.lineTo(6, 6);
      ctx.lineTo(6 + bracketSize, 6);
      ctx.stroke();

      // Top-right
      ctx.beginPath();
      ctx.moveTo(width - 6 - bracketSize, 6);
      ctx.lineTo(width - 6, 6);
      ctx.lineTo(width - 6, 6 + bracketSize);
      ctx.stroke();

      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(6, height - 6 - bracketSize);
      ctx.lineTo(6, height - 6);
      ctx.lineTo(6 + bracketSize, height - 6);
      ctx.stroke();

      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(width - 6 - bracketSize, height - 6);
      ctx.lineTo(width - 6, height - 6);
      ctx.lineTo(width - 6, height - 6 - bracketSize);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gravityMode, fieldIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
    setIsInteracting(false);
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden border border-[#F0B429]/40 shadow-2xl shadow-sky-900/40 group">
      
      {/* Background HTML Canvas */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full cursor-crosshair block"
      />

      {/* Top HUD Telemetry Banner */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-[#001935]/85 bg-slate-100/90 border dark:border-[#38BDF8]/40 border-sky-400/60 backdrop-blur-md text-xs font-mono dark:text-sky-300 text-sky-950 font-bold shadow-md">
          <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span>CAMARA DE LEVITACIÓN AG-01</span>
          <span className="dark:text-slate-400 text-slate-500">|</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">ESTABLE</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg dark:bg-[#001935]/85 bg-slate-100/90 border dark:border-[#F0B429]/40 border-amber-400/60 backdrop-blur-md text-xs font-mono dark:text-amber-300 text-amber-950 font-bold shadow-md">
          <Shield className="w-3.5 h-3.5 text-amber-500" />
          <span>CAMPO: -9.81 m/s²</span>
        </div>
      </div>

      {/* Bottom HUD Interactive Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl dark:bg-[#001935]/90 bg-slate-100/95 border dark:border-slate-700/80 border-slate-300 backdrop-blur-md text-xs shadow-lg">
        
        {/* Gravity Mode Selector */}
        <div className="flex items-center gap-1.5 dark:bg-[#00264D] bg-slate-200/90 p-1 rounded-lg border dark:border-slate-700 border-slate-300">
          <button
            onClick={() => setGravityMode('repulsion')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all flex items-center gap-1 ${
              gravityMode === 'repulsion'
                ? 'bg-amber-400 text-slate-900 shadow-md font-extrabold'
                : 'dark:text-slate-300 text-slate-800 hover:text-amber-600'
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            Repulsión
          </button>
          <button
            onClick={() => setGravityMode('zero')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all flex items-center gap-1 ${
              gravityMode === 'zero'
                ? 'bg-amber-400 text-slate-900 shadow-md font-extrabold'
                : 'dark:text-slate-300 text-slate-800 hover:text-amber-600'
            }`}
          >
            G-Cero
          </button>
          <button
            onClick={() => setGravityMode('vortex')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all flex items-center gap-1 ${
              gravityMode === 'vortex'
                ? 'bg-amber-400 text-slate-900 shadow-md font-extrabold'
                : 'dark:text-slate-300 text-slate-800 hover:text-amber-600'
            }`}
          >
            Vórtice
          </button>
        </div>

        {/* Field Slider */}
        <div className="hidden sm:flex items-center gap-2 dark:text-slate-300 text-slate-800 font-semibold">
          <Sliders className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Intensidad:</span>
          <input
            type="range"
            min="30"
            max="100"
            value={fieldIntensity}
            onChange={(e) => setFieldIntensity(Number(e.target.value))}
            className="w-24 accent-[#F0B429] cursor-pointer"
          />
          <span className="font-mono text-amber-800 dark:text-amber-400 font-bold">{fieldIntensity}%</span>
        </div>

        {/* Interacting notification hint */}
        <div className="text-[11px] dark:text-slate-400 text-slate-700 font-mono font-semibold flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${isInteracting ? 'bg-sky-400 animate-ping' : 'bg-slate-500'}`}></span>
          <span>Pasa el cursor sobre el contenedor para interactuar</span>
        </div>
      </div>
    </div>
  );
};
