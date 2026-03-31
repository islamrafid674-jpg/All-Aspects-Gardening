import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Complete Garden Care.<br />
            <span className="text-green-500">Done Properly.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            All Aspects Gardening focuses on consistent, high-quality outdoor work. We believe in doing the job right the first time, with no shortcuts.
          </p>
          
          <div className="space-y-4">
            {[
              "No half-done jobs.",
              "No unreliable scheduling.",
              "Just clean, professional results every time."
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-2xl overflow-hidden glass-card p-2"
        >
          <img 
            src="https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/467333645_17905785807005712_5354634172987441784_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzUwMjYzNzAxMzk4NDc5MDcwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=mpORYp3N8ucQ7kNvwFUFaKa&_nc_oc=Adr4Rz9r_QA0ZdU1Xfh0muxz2pe30_AWLI6ncn-kguQ1R2PXdVkpqr1Cl4AMntYkvbU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=77UW2MPK4oJkZ9moijL83A&_nc_ss=7a32e&oh=00_AfwQdSoAgDE7AnEy1OhMLNBLKPStmkzaZ7Sjyiq1QmiTwg&oe=69D1E298" 
            alt="Professional Gardening" 
            className="w-full h-full object-cover rounded-xl"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass p-6 rounded-xl">
              <p className="text-2xl font-bold text-green-400 mb-1">10+ Years</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Combined Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
