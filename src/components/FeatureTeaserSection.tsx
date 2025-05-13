import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />, 
    title: 'Blazing Fast',
    description: 'Experience lightning-fast email delivery with unmatched reliability.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />, 
    title: 'Secure & Private',
    description: 'Your data is protected with top-tier security and privacy standards.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />, 
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.',
  },
];

export function FeatureTeaserSection() {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gradient">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground text-base">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
