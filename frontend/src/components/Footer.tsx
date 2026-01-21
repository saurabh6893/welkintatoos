import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-heading font-bold mb-4"
            >
              <span className="text-accent">WELKIN</span>
              <span className="text-light ml-2">TATTOOS</span>
            </motion.div>
            <p className="text-light/70 mb-6 max-w-md">
              Creating timeless art that tells your unique story. Where passion meets precision, and every tattoo is a masterpiece.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, link: '#' },
                { icon: <FaFacebookF />, link: '#' },
                { icon: <FaTwitter />, link: '#' },
                { icon: <FaYoutube />, link: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary border border-accent/20 hover:border-accent hover:bg-accent hover:text-primary text-accent rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-light font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-light/60 hover:text-accent transition-colors"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-light font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['Custom Tattoos', 'Traditional Art', 'Realism', 'Blackwork', 'Cover-ups'].map(
                (service) => (
                  <li key={service}>
                    <span className="text-light/60">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light/60 text-sm text-center md:text-left">
              © {currentYear} Welkin Tattoos. All rights reserved.
            </p>
            <p className="text-light/60 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-accent" /> by Akash Sanap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;