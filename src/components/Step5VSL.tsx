import { MessageCircle, CheckCircle2, Shield, Clock, Zap, Trophy } from 'lucide-react';

export default function Step5VSL() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5500000000000?text=Olá! Vim pelo quiz e quero saber mais sobre os serviços da Kingdom Assessoria.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Sua Análise Está Pronta
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Descubra Como Multiplicar Seus Resultados Online
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Estratégias comprovadas que já geraram milhões em vendas para empresas como a sua
          </p>
        </div>

        <div className="mb-16 animate-slide-up animation-delay-200">
          <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <MessageCircle className="w-12 h-12" />
              </div>
              <p className="text-2xl font-bold mb-4">Assista ao Vídeo Exclusivo</p>
              <p className="text-lg text-gray-300 mb-6">Cole o embed do seu VSL aqui</p>
              <div className="max-w-md mx-auto text-left text-sm text-gray-400 bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                <p className="mb-2">Para adicionar seu vídeo:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Faça upload no YouTube, Vimeo ou Wistia</li>
                  <li>Copie o código de incorporação</li>
                  <li>Substitua este placeholder pelo iframe</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-slide-up animation-delay-300">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">O Que Você Vai Conquistar:</h3>
            <ul className="space-y-4">
              {[
                'Aumento de até 350% nas vendas online em 90 dias',
                'Estratégia personalizada para o seu nicho de mercado',
                'Sistema de tráfego pago otimizado e lucrativo',
                'Páginas de alta conversão testadas e validadas',
                'Funil de vendas automatizado que funciona 24/7',
                'Acompanhamento estratégico mensal com especialistas'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Por Que a Kingdom?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">200+ Empresas Transformadas</p>
                    <p className="text-blue-100 text-sm">Experiência comprovada em diversos segmentos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Método KANVA Exclusivo</p>
                    <p className="text-blue-100 text-sm">Sistema proprietário de crescimento acelerado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Garantia de Resultados</p>
                    <p className="text-blue-100 text-sm">Trabalhamos focados em ROI mensurável</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-amber-600" />
                <h4 className="font-bold text-gray-900">Atenção Limitada</h4>
              </div>
              <p className="text-gray-700">
                Atendemos apenas <span className="font-bold">5 novos clientes por mês</span> para garantir resultados excepcionais. Não perca sua vaga!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center animate-scale-in animation-delay-500">
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl md:text-2xl font-bold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mb-4"
          >
            <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            Falar com um especialista agora
          </button>
          <p className="text-red-600 font-semibold text-lg animate-pulse">
            Vagas limitadas para novos atendimentos
          </p>
          <p className="text-gray-600 mt-2">
            Resposta em até 5 minutos durante horário comercial
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-slide-up animation-delay-600">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
            <p className="text-gray-700">Crescimento médio em vendas</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <p className="text-gray-700">Empresas atendidas</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">R$ 50M+</div>
            <p className="text-gray-700">Gerados em vendas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
