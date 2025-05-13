import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onGetNotifiedClick: () => void;
}

export function HeroSection({ onGetNotifiedClick }: HeroSectionProps) {
  return (
    <section className="hero-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="hero-title animate-fade-in">Coming Soon</h1>
        <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
          We're crafting something extraordinary. Be the first to know when we launch.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="animate-bounce-in" 
          style={{ animationDelay: '0.4s' }}
        >
          <Button 
            onClick={onGetNotifiedClick}
            className="cta-button group"
            size="lg"
          >
            Get Notified
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Decorative background elements */}
      <motion.div 
        className="absolute -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl top-1/4 -left-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
      />
      <motion.div 
        className="absolute -z-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-1/4 -right-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4, type: "spring" }}
      />
    </section>
  );
}