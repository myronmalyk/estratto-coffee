import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuItems = [
  {
    name: "Signature Espresso",
    description: "Rich, bold, and perfectly extracted with notes of dark chocolate",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1605187151664-9d89904d62d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMGRhcmslMjBicm93bnxlbnwxfHx8fDE3NTc4MzM1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Artisan Latte",
    description: "Smooth espresso with steamed milk and beautiful latte art",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1680489809506-d8def0e1631f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NTc4MzM1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Fresh Croissant",
    description: "Buttery, flaky pastry baked fresh daily, perfect with coffee",
    price: "$3.25",
    image: "https://images.unsplash.com/photo-1703016402680-d12e7dc746d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBjYWZlfGVufDF8fHx8MTc1NzgzMzU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "House Blend",
    description: "Our carefully curated blend, roasted in-house for optimal flavor",
    price: "$12.50/lb",
    image: "https://images.unsplash.com/photo-1652248920808-2246c8011c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzU3ODA5Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function MenuHighlights() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Menu Highlights
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Discover our most beloved creations, crafted with passion and the finest ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="bg-stone-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.name}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-amber-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.price}
                    </span>
                    {/*<motion.div 
                      className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      +
                    </motion.div>*/}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}