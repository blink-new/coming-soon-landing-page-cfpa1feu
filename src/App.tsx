import { useRef } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeatureTeaserSection } from '@/components/FeatureTeaserSection';
import { SignupForm } from '@/components/SignupForm';
import { Footer } from '@/components/Footer';

function App() {
  const signupFormRef = useRef<HTMLDivElement>(null);

  const handleGetNotifiedClick = () => {
    const signupElement = document.getElementById('signup');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <HeroSection onGetNotifiedClick={handleGetNotifiedClick} />
      <FeatureTeaserSection />
      <SignupForm />
      <Footer />
    </main>
  );
}

export default App;
