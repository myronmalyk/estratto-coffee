import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Us
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nestled in the heart of our community, Estratto Coffee is more than just a café—it&apos;s a gathering place where neighbors become friends and every cup tells a story. We&apos;re passionate about sourcing the finest beans and crafting each drink with care, creating a warm space where conversation flows as smoothly as our expertly brewed coffee.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-8 mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl mb-2 text-amber-600">☕</div>
              <p className="text-stone-600" style={{ fontFamily: 'Inter, sans-serif' }}>Premium Beans</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-green-600">🌱</div>
              <p className="text-stone-600" style={{ fontFamily: 'Inter, sans-serif' }}>Sustainable</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-amber-700">👥</div>
              <p className="text-stone-600" style={{ fontFamily: 'Inter, sans-serif' }}>Community</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}