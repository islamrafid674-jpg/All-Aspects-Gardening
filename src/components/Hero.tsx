import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/497312457_17923574172005712_332544436142632306_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzYyOTU4NjI3ODkyOTEyODA2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkwMHgxMTI1LnNkci5DMyJ9&_nc_ohc=fGbR-Skzy5UQ7kNvwGP3H0i&_nc_oc=Adoe8D3EmEz7ySz9nPfp6IRPynwdCg24p_i91ayub_5bnVxohYskDQr2OwDQKDdx904&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_Afzl4KgY4C91771XPwmoecgN2-GL1t0zUaxRQ5TOwPRe2A&oe=69D1C844"
          alt="Luxury Garden"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-gray-300">Premium Garden Care</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-6 text-glow"
          >
            YOUR GARDEN.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              UNDER CONTROL.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed"
          >
            From regular upkeep to full transformations — we handle every aspect. Clean, maintained, and done properly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-green-500 transition-colors active:scale-95"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-colors active:scale-95"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
