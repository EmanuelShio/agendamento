import { useState } from 'react';
import Step1Intro from './components/Step1Intro';
import Step2Form from './components/Step2Form';
import Step3Loading from './components/Step3Loading';
import Step4Social from './components/Step4Social';
import Step5VSL from './components/Step5VSL';
import { FormData } from './types/quiz';
import { supabase } from './lib/supabase';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1Next = () => {
    setCurrentStep(2);
  };

  const handleStep2Submit = async (data: FormData) => {
    setFormData(data);
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          name: data.name,
          whatsapp: data.whatsapp,
          website_instagram: data.websiteInstagram || null,
          email: data.email,
          service: data.service,
          user_agent: navigator.userAgent
        });

      if (error) {
        console.error('Error saving lead:', error);
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-lead-email`;

      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).catch(err => console.error('Error sending email:', err));

    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setCurrentStep(3);
    }
  };

  const handleStep3Complete = () => {
    setCurrentStep(4);
  };

  const handleStep4Next = () => {
    setCurrentStep(5);
  };

  return (
    <div className="min-h-screen">
      {currentStep === 1 && <Step1Intro onNext={handleStep1Next} />}
      {currentStep === 2 && <Step2Form onNext={handleStep2Submit} currentStep={currentStep} />}
      {currentStep === 3 && <Step3Loading onComplete={handleStep3Complete} />}
      {currentStep === 4 && <Step4Social onNext={handleStep4Next} />}
      {currentStep === 5 && <Step5VSL />}
    </div>
  );
}

export default App;
