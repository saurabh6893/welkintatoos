import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm uppercase tracking-widest font-semibold"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold text-light mt-4 mb-6"
          >
            Crafting Stories
            <span className="text-accent"> on Skin</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-accent/50 text-6xl font-heading">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest mb-2">Studio Image</p>
                  <p className="text-xs text-light/30">Replace with your image</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/20 rounded-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <p className="text-light/80 text-lg leading-relaxed">
              Welcome to <span className="text-accent font-semibold">Welkin Tattoos</span>, where creativity meets precision. 
              We believe that every tattoo tells a unique story, and our mission is to bring your vision to life with exceptional artistry.
            </p>
            <p className="text-light/80 text-lg leading-relaxed">
              With years of experience and a passion for the craft, we specialize in creating custom designs that resonate with your personality and style. From intricate details to bold statements, we ensure every piece is a masterpiece.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '8+', label: 'Years Experience' },
                { number: '1000+', label: 'Tattoos Created' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-accent font-heading"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-light/60 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;