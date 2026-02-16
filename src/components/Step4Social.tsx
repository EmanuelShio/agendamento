import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

interface Step4SocialProps {
  onNext: () => void;
}

export default function Step4Social({ onNext }: Step4SocialProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veja o que nossos clientes estão conquistando
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <p className="text-lg font-semibold mb-2">Cole o link do seu vídeo aqui</p>
                <p className="text-sm text-gray-300">Substitua este placeholder pelo seu vídeo de depoimento</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 italic mb-4">
                "A Kingdom transformou completamente nossa presença digital. Em 3 meses aumentamos nossas vendas em 350% com as estratégias de tráfego pago."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900">Cliente Satisfeito</p>
                  <p className="text-sm text-gray-600">E-commerce de Moda</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-center animate-slide-up animation-delay-200">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Resultados Reais e Mensuráveis</h3>
                  <p className="text-gray-600">
                    Nossos clientes experimentam crescimento médio de 250% nas vendas online nos primeiros 90 dias.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Metodologia Exclusiva</h3>
                  <p className="text-gray-600">
                    Aplicamos o Método KANVA, testado e validado em mais de 200 empresas de diversos segmentos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Suporte Estratégico Completo</h3>
                  <p className="text-gray-600">
                    Time dedicado para acompanhar cada etapa da sua jornada de crescimento digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center animate-slide-up animation-delay-400">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Quero aplicar isso no meu negócio
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
