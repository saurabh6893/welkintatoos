import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiX } from 'react-icons/hi';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery items
  const galleryItems = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Tattoo Design ${i + 1}`,
    category: ['Traditional', 'Realism', 'Watercolor', 'Blackwork'][i % 4],
  }));

  return (
    <section id="gallery" ref={ref} className="py-24 px-4 bg-secondary">
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
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-heading font-bold text-light mt-4"
          >
            Our
            <span className="text-accent"> Masterpieces</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedImage(item.id)}
              className="group relative aspect-square bg-gradient-to-br from-accent/20 to-primary rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-primary">
                <div className="text-center">
                  <p className="text-accent/50 text-sm uppercase tracking-widest mb-2">
                    {item.category}
                  </p>
                  <p className="text-light/30 text-xs">Image {item.id}</p>
                </div>
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent flex items-end p-6"
              >
                <div>
                  <h3 className="text-light font-heading font-bold text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm">{item.category}</p>
                </div>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-square bg-gradient-to-br from-accent/20 to-primary rounded-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-light text-3xl hover:text-accent transition-colors z-10"
              >
                <HiX />
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-accent text-lg uppercase tracking-widest mb-2">
                    Image {selectedImage}
                  </p>
                  <p className="text-light/50 text-sm">Replace with your gallery image</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;