import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiInkSwirl, GiPencilBrush, GiWingedSword } from 'react-icons/gi';
import { FaPaintBrush, FaHeart, FaDragon } from 'react-icons/fa';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <GiInkSwirl className="text-5xl" />,
      title: 'Custom Tattoos',
      description: 'Unique designs tailored to your story and style. From concept to completion, we bring your vision to life.',
      price: 'Starting at $150',
    },
    {
      icon: <GiPencilBrush className="text-5xl" />,
      title: 'Traditional Art',
      description: 'Classic tattoo styles with bold lines and vibrant colors. Timeless pieces that never go out of style.',
      price: 'Starting at $120',
    },
    {
      icon: <FaPaintBrush className="text-5xl" />,
      title: 'Watercolor Style',
      description: 'Artistic, flowing designs that look like painted masterpieces on your skin.',
      price: 'Starting at $180',
    },
    {
      icon: <GiWingedSword className="text-5xl" />,
      title: 'Blackwork',
      description: 'Bold, striking designs using solid black ink. Perfect for geometric and tribal patterns.',
      price: 'Starting at $140',
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: 'Cover-ups',
      description: 'Transform old tattoos into stunning new artwork. Expert cover-up specialists.',
      price: 'Consultation Required',
    },
    {
      icon: <FaDragon className="text-5xl" />,
      title: 'Realism',
      description: 'Lifelike portraits and designs with incredible detail and depth.',
      price: 'Starting at $200',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
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
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold text-light mt-4"
          >
            Masterful
            <span className="text-accent"> Artistry</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-secondary p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-accent mb-6"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-heading font-bold text-light mb-3">
                  {service.title}
                </h3>
                
                <p className="text-light/70 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-accent/20">
                  <span className="text-accent font-semibold">{service.price}</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-light/60 group-hover:text-accent transition-colors duration-300"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;