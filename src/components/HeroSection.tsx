import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onGetNotifiedClick: () => void;
}

export function HeroSection({ onGetNotifiedClick }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center bg-gradient-to-r from-primary to-accent">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
      >
        Coming Soon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg md:text-xl text-white/90"
      >
        The future of email delivery is almost here. Stay tuned for something amazing.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10"
      >
        <Button
          size="lg"
          onClick={onGetNotifiedClick}
          className="bg-white text-primary hover:bg-gray-100"
        >
          Get Notified
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  );
}
