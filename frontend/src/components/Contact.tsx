import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 bg-primary">
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
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold text-light mt-4"
          >
            Book Your
            <span className="text-accent"> Appointment</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold text-light mb-4">
                Let's Create Something Amazing
              </h3>
              <p className="text-light/70 text-lg leading-relaxed">
                Ready to turn your vision into reality? Book a consultation with us and let's discuss your next masterpiece.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <HiPhone className="text-3xl" />,
                  title: 'Phone',
                  content: '+91 98765 43210',
                },
                {
                  icon: <HiMail className="text-3xl" />,
                  title: 'Email',
                  content: 'hello@welkintattoos.com',
                },
                {
                  icon: <HiLocationMarker className="text-3xl" />,
                  title: 'Location',
                  content: 'Mumbai, Maharashtra, India',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-accent/10 hover:border-accent/30 transition-colors"
                >
                  <div className="text-accent mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-light font-semibold mb-1">{item.title}</h4>
                    <p className="text-light/70">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <h4 className="text-light font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-light/70">
                <p>Monday - Saturday: 11:00 AM - 8:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-accent/20 rounded-lg text-light focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-accent/20 rounded-lg text-light focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-light mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-accent/20 rounded-lg text-light focus:border-accent focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-accent/20 rounded-lg text-light focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your tattoo idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;