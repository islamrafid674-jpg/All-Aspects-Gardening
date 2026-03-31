import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxBreak() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="h-[60vh] relative overflow-hidden flex items-center justify-center my-24">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4ceee?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Garden Detail" 
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-glow">
          STOP LETTING YOUR GARDEN<br />GET OUT OF CONTROL
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-500 transition-colors active:scale-95"
        >
          Get it handled today
        </a>
      </div>
    </section>
  );
}
