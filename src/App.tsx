import { useRef } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SignupForm } from '@/components/SignupForm';

function App() {
  const signupFormRef = useRef<HTMLDivElement>(null);

  const handleGetNotifiedClick = () => {
    const signupElement = document.getElementById('signup');
    if (signupElement) {
      signupElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection onGetNotifiedClick={handleGetNotifiedClick} />
      {/* We pass the ref to the SignupForm component itself if it accepts it,
          otherwise, we wrap it or use the ID approach as implemented above. 
          For simplicity, using ID based scrollIntoView is robust. */}
      <SignupForm /> 
    </main>
  );
}

export default App;