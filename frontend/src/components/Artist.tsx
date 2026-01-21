import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Artist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="artist" ref={ref} className="py-24 px-4 bg-primary">
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
            Meet The Artist
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold text-light mt-4"
          >
            The Man Behind
            <span className="text-accent"> The Art</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Artist Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-accent/20 to-secondary rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-accent/50">
                  <div className="text-center">
                    <p className="text-xl font-heading uppercase tracking-widest mb-2">Artist Photo</p>
                    <p className="text-xs text-light/30">Replace with your photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-accent/30 rounded-2xl -z-10" />
              
              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4"
              >
                {[
                  { icon: <FaInstagram />, link: '#' },
                  { icon: <FaFacebookF />, link: '#' },
                  { icon: <FaTwitter />, link: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl hover:bg-accent/90 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Artist Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 order-1 md:order-2"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2"
              >
                Akash Sanap
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-light/60 text-lg"
              >
                Master Tattoo Artist & Founder
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-light/80 text-lg leading-relaxed"
            >
              With over 8 years of experience in the tattoo industry, Akash has mastered the art of transforming ideas into stunning body art. His passion for creativity and attention to detail has earned him recognition as one of the finest artists in the field.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-light/80 text-lg leading-relaxed"
            >
              Specializing in custom designs, realism, and traditional art, Akash believes that every tattoo should be as unique as the person wearing it. His dedication to his craft and his clients has built a loyal following and countless satisfied customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-6"
            >
              <div className="flex flex-wrap gap-3">
                {['Custom Design', 'Realism', 'Traditional', 'Blackwork', 'Watercolor'].map(
                  (skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold"
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Artist;