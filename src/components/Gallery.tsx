import { motion } from 'motion/react';

const images = [
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/488890090_17920410747005712_4293863351200976881_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzYwNDkwMTM1NzA5MDM5NjU0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODR4MjI4My5zZHIuQzMifQ%3D%3D&_nc_ohc=H1qfGHgrMPsQ7kNvwGtL6Fo&_nc_oc=AdrWqmUYH-sE8o6CNy7sMuqzB97cVro-IHxrMy2HCgjHE7T3HfrMevr0hnWsvBHvZHU&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_Afz8yaadLOFmvEe6LwLqLy-JU3KFiOR24O2YxGAXu5oQrg&oe=69D1E490",
  "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/487303558_17919468306005712_4491991878421148600_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzU5NzcwNjQ3MDU1NzM1NzkwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=pFdThbp97CkQ7kNvwF3j2cr&_nc_oc=Adp2YKG_zidShNk-1nog8GgSvSdx9kmEOh5NZRUDmlF0Xb3bA4cz9SnZcFkxizrY_H4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfzPQMQXlDaUJDH95HyM5FA1GA59_cfpKWZFntZ2dVbV4w&oe=69D1D6A4",
  "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/487374732_17919626487005712_6398279584064883162_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=MzU5ODk4NDQ1MjIyNzk1NDE2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=l7Ep_Jd_--4Q7kNvwE_IlPf&_nc_oc=Adrlglqpi9507HXFjOHiltNay91kgUwOZpzOBaKcymbcLUC1LzdChle1Qv1y0R93vD0&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfzvPGlDErs2-moHMp2o2CAc6ngUafXpzuyvnELRKfJi0w&oe=69D1DD05",
  "https://instagram.fdac3-2.fna.fbcdn.net/v/t51.75761-15/483025570_17917409304005712_536119043669715707_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=MzU4MjQ3MTk5MTUzNDUyNTg4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=c_s18eK_9EEQ7kNvwG1rexh&_nc_oc=Ado24LvgYfdgmGmxITwYCcuU8r6F6WeWZC58bUk1NP9_ScEZIRzi9Kb4HMSV9fFGs58&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-2.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfzMsByxBhRqQ748BpAqerxpCiKrbXW7OPcwi8KBEs0Qkw&oe=69D1D292",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/484081011_17918269170005712_6513737246769833132_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzU4ODMxNjM3Mjg2MzI2NDI1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkyNHgxMTU1LnNkci5DMyJ9&_nc_ohc=zTkkux2ZBEgQ7kNvwFgQd9l&_nc_oc=Adok7CcMFIGYwlZYvKwi7NP624jOvL0G2C2mTJx1n5K_LVG6z5TPMGFK_EV_osZTI5Q&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfwS0W9hREGasX01aicfMM7zd6BAeecOeCOCkZYTsB_zsA&oe=69D1D7F7",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/480998884_17916129453005712_1712164674709935221_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzU3MzcwMjQ1MTI5MTk1ODUyOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg5MDAuc2RyLkMzIn0%3D&_nc_ohc=0q866HGyaKcQ7kNvwGMvQyQ&_nc_oc=AdptQpKUUoPc_VjPzf04fnhhU9ksPBkTpJBH3AKH2GgxVhDQTRXuXnC8adCwJTBAYf4&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_Afx-ddX3tKNZ87J6G-Ag2f2Bv_x1kt7j3uv-G1reN4HJyg&oe=69D1E76D",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/474029701_17912418270005712_2737166978347370218_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=111&ig_cache_key=MzU0NzM0NzMwMjQxMTc4MjYyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=6Ph7g6Pnt_QQ7kNvwFY1bvx&_nc_oc=AdrP9Z-v_mU4dMiOPVaFkoKZWMnT4C7QP2CrFlfYemq8dFXH3XF88f-DjmIT9qhWlO8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=JNgHnoLcsjAIXeKEk08ehw&_nc_ss=7a32e&oh=00_AfxCQ3CdyyY_aBsIS9GskG3FmbkRkfckFIKQQuMjxeMhVA&oe=69D1D392",
  "https://instagram.fdac3-1.fna.fbcdn.net/v/t51.75761-15/469591069_17908263255005712_3574561364125505314_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzUxOTM4MDc5MTg4NTkyMTk0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyMDB4MTUwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=WpZthYvR8mEQ7kNvwHW6kub&_nc_oc=AdoA5TgRKKJd7phAOBZebPyNti6ZmExnK_ZTU0f_435Oq9G4-0DS2FfbnQDY_eNB3Ec&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac3-1.fna&_nc_gid=77UW2MPK4oJkZ9moijL83A&_nc_ss=7a32e&oh=00_Afw_mdyBNVk-KEFHGfLSH4PLwQJOaqSfAEtq34xztlytuw&oe=69D1DFC2"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">A glimpse into the spaces we've transformed and maintained.</p>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-32">
        {images.map((src, index) => {
          const pattern = index % 3;
          const isLeft = pattern === 0;
          const isRight = pattern === 1;
          const isSingle = pattern === 2;

          return (
            <div 
              key={index}
              className={`relative group w-full ${
                isSingle ? "md:w-full" : "md:w-[70%]"
              } ${isLeft ? "md:mr-auto" : ""} ${isRight ? "md:ml-auto" : ""}`}
              style={{ perspective: isSingle ? "1200px" : "none" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={isSingle ? { rotateX: 2, rotateY: -2, scale: 1.02, z: 20 } : { scale: 1.02 }}
                className={`relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 ${
                  isSingle ? "aspect-video md:aspect-[21/9]" : "aspect-[4/3] md:aspect-[16/10]"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-green-400 font-medium tracking-widest uppercase text-sm border border-green-500/30 px-6 py-2 rounded-full bg-black/50">
                    View Project
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
