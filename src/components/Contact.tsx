import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's Talk.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Ready to get your garden under control? Reach out for a free quote and consultation.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
                <a href="tel:+1234567890" className="text-xl font-medium hover:text-gray-300 transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@allaspects.com" className="text-xl font-medium hover:text-gray-300 transition-colors">
                  hello@allaspects.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Service Area</p>
                <p className="text-xl font-medium">
                  Greater Metropolitan Area<br />
                  & Surrounding Suburbs
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <input 
                  type="text" 
                  id="firstName"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-green-500 transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="firstName" className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-green-500 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                  First Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  id="lastName"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-green-500 transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="lastName" className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-green-500 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-green-500 transition-colors peer"
                placeholder=" "
              />
              <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-green-500 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                Email Address
              </label>
            </div>

            <div className="relative group">
              <select 
                id="service"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
              >
                <option value="" className="bg-black text-gray-500">Select a Service</option>
                <option value="maintenance" className="bg-black">Garden Maintenance</option>
                <option value="landscaping" className="bg-black">Landscaping</option>
                <option value="hedges" className="bg-black">Hedge Trimming</option>
                <option value="cleanup" className="bg-black">Yard Cleanup</option>
              </select>
            </div>

            <div className="relative group pt-4">
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-green-500 transition-colors peer resize-none"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className="absolute left-0 top-7 text-gray-500 transition-all duration-300 peer-focus:-top-0 peer-focus:text-xs peer-focus:text-green-500 peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-xs">
                Tell us about your garden...
              </label>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-full font-bold hover:bg-green-500 transition-colors active:scale-95 mt-4">
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
