import { ArrowRight } from 'lucide-react';

interface Step1IntroProps {
  onNext: () => void;
}

export default function Step1Intro({ onNext }: Step1IntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/BANNER-SITE-DESCKTOP-KINGDOM-2.webp"
          alt="Background"
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src="/SITE-KINGDOM-MOBILE-_2_.webp"
          alt="Background Mobile"
          className="md:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-3xl w-full animate-fade-in">
        <div className="text-center space-y-8">
          <div className="mb-12 flex justify-center">
            <img
              src="/logor9.webp"
              alt="Kingdom Assessoria"
              className="h-16 md:h-20 w-auto animate-slide-down"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-slide-up">
            Você está a um passo de vender mais na internet!
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 animate-slide-up animation-delay-200">
            Mas antes, precisamos entender como seu negócio funciona.
          </p>

          <button
            onClick={onNext}
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up animation-delay-400"
          >
            Clique em começar!
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
