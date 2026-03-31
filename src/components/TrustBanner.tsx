import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function TrustBanner() {
  const items = [
    "5-Star Rated Service",
    "Fully Insured",
    "Professional Equipment",
    "Reliable Scheduling",
    "Clean Finish Every Time",
    "Expert Landscaping",
  ];

  return (
    <div className="py-6 border-y border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden flex relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <Star size={16} className="text-green-500" fill="currentColor" />
            <span className="text-sm font-medium tracking-widest uppercase text-gray-400">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
