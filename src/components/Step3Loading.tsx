import { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles, TrendingUp, Target } from 'lucide-react';

interface Step3LoadingProps {
  onComplete: () => void;
}

export default function Step3Loading({ onComplete }: Step3LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { label: 'Analisando seu negócio', icon: Target, percent: 30 },
    { label: 'Identificando oportunidades', icon: Sparkles, percent: 65 },
    { label: 'Preparando estratégias', icon: TrendingUp, percent: 90 },
    { label: 'Finalizando análise', icon: CheckCircle2, percent: 100 }
  ];

  useEffect(() => {
    const duration = 4000;
    const steps = 100;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next >= 30 && currentPhase === 0) setCurrentPhase(1);
        if (next >= 65 && currentPhase === 1) setCurrentPhase(2);
        if (next >= 90 && currentPhase === 2) setCurrentPhase(3);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete, currentPhase]);

  const CurrentIcon = phases[currentPhase].icon;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
        <div className="animate-scale-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <CurrentIcon className="w-16 h-16 text-white animate-bounce-slow" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Estamos analisando suas informações...
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 animate-fade-in animation-delay-200">
            Nosso time está preparando um direcionamento estratégico para o seu negócio.
          </p>
        </div>

        <div className="space-y-6 animate-slide-up animation-delay-400">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">{phases[currentPhase].label}</span>
              <span className="text-white font-bold text-2xl">{progress}%</span>
            </div>

            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {phases.map((phase, index) => {
              const PhaseIcon = phase.icon;
              const isActive = index <= currentPhase;

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-2 transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg'
                      : 'bg-white/20'
                  }`}>
                    <PhaseIcon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <span className={`text-xs text-center transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`}>
                    {phase.label.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
