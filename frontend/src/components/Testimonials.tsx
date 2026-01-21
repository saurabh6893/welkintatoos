import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: "Akash is an absolute master! My custom tattoo turned out even better than I imagined. The attention to detail and professionalism is unmatched. Highly recommended!",
      image: 'Client 1',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: "Best tattoo experience ever! The studio is clean, the atmosphere is welcoming, and the artwork is phenomenal. Akash really took the time to understand my vision.",
      image: 'Client 2',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: "I've gotten several tattoos from Welkin Tattoos and each one has been perfect. The artistry and skill level is incredible. This is the only place I trust for my tattoos.",
      image: 'Client 3',
    },
    {
      name: 'David Williams',
      rating: 5,
      text: "Amazing work! Akash transformed my cover-up idea into a stunning piece of art. The whole experience was professional, comfortable, and the results exceeded my expectations.",
      image: 'Client 4',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl text-accent font-heading">"”</div>
        <div className="absolute bottom-20 right-10 text-9xl text-accent font-heading rotate-180">"”</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold text-light mt-4"
          >
            What Our Clients
            <span className="text-accent"> Say</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-primary p-8 md:p-12 rounded-2xl border border-accent/20"
          >
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <FaStar className="text-accent text-2xl" />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <p className="text-light/90 text-xl md:text-2xl text-center leading-relaxed mb-8 font-light italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary rounded-full flex items-center justify-center">
                <span className="text-accent text-xs">{testimonials[currentIndex].image}</span>
              </div>
              <div className="text-left">
                <h4 className="text-light font-heading font-bold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-accent text-sm">Verified Client</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-2xl hover:bg-accent/90 transition-colors"
            >
              <HiChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-2xl hover:bg-accent/90 transition-colors"
            >
              <HiChevronRight />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-accent/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;