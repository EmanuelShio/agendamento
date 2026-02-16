import { useState } from 'react';
import { ArrowRight, Mail, Phone, User, Globe, Briefcase } from 'lucide-react';
import { FormData, serviceOptions } from '../types/quiz';

interface Step2FormProps {
  onNext: (data: FormData) => void;
  currentStep: number;
}

export default function Step2Form({ onNext, currentStep }: Step2FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    websiteInstagram: '',
    email: '',
    service: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formStep, setFormStep] = useState(0);

  const formSteps = [
    { field: 'name', label: 'Seu nome?', icon: User, type: 'text', required: true },
    { field: 'whatsapp', label: 'Qual seu WhatsApp?', icon: Phone, type: 'tel', required: true },
    { field: 'websiteInstagram', label: 'Qual site ou Instagram da empresa?', icon: Globe, type: 'text', required: false },
    { field: 'email', label: 'Qual seu e-mail?', icon: Mail, type: 'email', required: true },
    { field: 'service', label: 'Selecione o Serviço.', icon: Briefcase, type: 'select', required: true }
  ];

  const currentField = formSteps[formStep];
  const progress = ((formStep + 1) / formSteps.length) * 100;

  const validateField = (field: string, value: string): string | null => {
    if (currentField.required && !value.trim()) {
      return 'Este campo é obrigatório';
    }

    if (field === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Por favor, insira um e-mail válido';
      }
    }

    if (field === 'whatsapp' && value) {
      const phoneRegex = /^[\d\s\-\(\)\+]+$/;
      if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
        return 'Por favor, insira um telefone válido';
      }
    }

    return null;
  };

  const handleNext = () => {
    const field = currentField.field as keyof FormData;
    const value = formData[field];
    const error = validateField(field, value);

    if (error) {
      setErrors({ [field]: error });
      return;
    }

    setErrors({});

    if (formStep < formSteps.length - 1) {
      setFormStep(formStep + 1);
    } else {
      onNext(formData);
    }
  };

  const handleChange = (value: string) => {
    const field = currentField.field as keyof FormData;
    setFormData({ ...formData, [field]: value });
    setErrors({});
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentField.type !== 'select') {
      handleNext();
    }
  };

  const Icon = currentField.icon;

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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">Progresso</span>
            <span className="text-white text-sm font-medium">{formStep + 1} de {formSteps.length}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl animate-slide-up">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-scale-in">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 animate-fade-in">
            {currentField.label}
          </h2>

          <div className="space-y-6">
            {currentField.type === 'select' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      handleChange(option);
                      setTimeout(handleNext, 300);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                      formData.service === option
                        ? 'border-blue-600 bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <span className="font-medium text-gray-900">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <input
                type={currentField.type}
                value={formData[currentField.field as keyof FormData]}
                onChange={(e) => handleChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentField.required ? 'Digite aqui...' : 'Digite aqui (opcional)...'}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                autoFocus
              />
            )}

            {errors[currentField.field as keyof FormData] && (
              <p className="text-red-600 text-sm animate-shake">{errors[currentField.field as keyof FormData]}</p>
            )}

            {currentField.type !== 'select' && (
              <button
                onClick={handleNext}
                className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Avançar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
