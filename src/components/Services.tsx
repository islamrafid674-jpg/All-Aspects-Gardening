import { motion } from 'motion/react';
import { Leaf, Scissors, Trash2, Trees } from 'lucide-react';

const services = [
  {
    title: "Garden Maintenance",
    icon: <Leaf size={24} />,
    items: ["Lawn mowing & edging", "Weed control", "General upkeep"],
    image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.82787-15/548741609_17936028168005712_1988052092859904089_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzcyMDk0MDIwNjI0MjQxNzUzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxNC5oZHIuQzMifQ%3D%3D&_nc_ohc=_pQurqUpVNoQ7kNvwFQWYbY&_nc_oc=AdpRnJIMHsDEcDpUppyNG0nLiHbnVuiRxrX4EVE_VQR3vx6DV8mcMhgL_d4KVSWP2ZQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfwOddLyrAGa-Ah3mMzl33aBRAU70dsJS-A4ivEdG020dg&oe=69D1DAAD"
  },
  {
    title: "Landscaping",
    icon: <Trees size={24} />,
    items: ["Garden redesign", "Planting & layout improvements", "Outdoor upgrades"],
    image: "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/506021571_17927093622005712_2653944857108174836_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=MzY1NDk3NjgxMDEyMzMzMDIxNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=Us3tozdRt5sQ7kNvwHBS_tu&_nc_oc=AdqtLtMYlgH6j6_3bKm-h2X7T4oJa60teb1Lb7m5mpBHyLxpXoU2V68vo6OY7Vb6lfU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_Afy2WpP3WyC2Q4mVvw2kOkB2LxTftVfbHAtYX1HT2_seZg&oe=69D1B0A4"
  },
  {
    title: "Hedge Trimming",
    icon: <Scissors size={24} />,
    items: ["Clean, sharp hedge lines", "Regular maintenance", "Overgrowth control"],
    image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/502754197_17925693663005712_4147580155661443599_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzY0NDc5MDQ2NTIyODczNTgwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5oZHIuQzMifQ%3D%3D&_nc_ohc=hRxfQra85qwQ7kNvwGa-8Wt&_nc_oc=AdpwjB7w0Pi7DMMY0aeQvRxvbCPAm_IT0SKw5DROvrIztaUPbaC7sY-R-6f5tS_t6sg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfxGgxF3pD3vWiyJFrFt34XGmEgj2wSI0LZwhwmwGB6Lpg&oe=69D1E844"
  },
  {
    title: "Yard Cleanups",
    icon: <Trash2 size={24} />,
    items: ["Full garden clearing", "Seasonal cleanups", "Waste removal"],
    image: "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/488310504_17920129572005712_9122937531815591613_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=102&ig_cache_key=MzYwMjcyNTAwMTg1MDEwNDYwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=xObpKbQL56MQ7kNvwGWzMTi&_nc_oc=AdrLZyh0LD7hSwp8-T57_8gMQVUO5edaOLlA9Xks_pS1Iu_xhUvs0NpQms4ql1IeSrI&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_Afw67HdzhVeDl3nK2oNKkhDdcbTGyd5I2-A01r8me_gypw&oe=69D1B7C4"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-2xl text-lg">Comprehensive solutions for every aspect of your outdoor space.</p>
      </motion.div>

      {/* Desktop Bento Grid / Mobile Horizontal Scroll */}
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-6 pb-8 md:pb-0 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-80" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="bg-green-600/20 text-green-400 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
