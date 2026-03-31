import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "They completely transformed our overgrown backyard into a clean, modern space. The team was professional, on time, and left no mess behind.",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Property Manager",
    text: "Finding reliable garden maintenance has always been a struggle until we hired All Aspects. Consistent results every single time. Highly recommended.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Homeowner",
    text: "The hedge trimming and seasonal cleanup was flawless. They clearly know what they are doing and take pride in their work.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Client Feedback</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Don't just take our word for it.</p>
      </motion.div>

      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 relative z-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center glass-card p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-green-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">"{testimonial.text}"</p>
            </div>
            <div>
              <p className="font-bold text-green-400">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
