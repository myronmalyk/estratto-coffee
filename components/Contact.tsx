import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-stone-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  placeholder="Your name"
                  required
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-stone-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-stone-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
                placeholder="Tell us what's on your mind..."
                required
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Send Message ☕
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'TikTok', icon: '🎵', href: '#' }
  ];

  return (
    <footer className="bg-amber-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Estratto Coffee
            </h3>
            <p className="text-amber-100 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Brewing community, one cup at a time. Visit us for the finest coffee experience in the heart of downtown.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li><a href="#menu" className="text-amber-100 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-amber-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#location" className="text-amber-100 hover:text-white transition-colors">Location</a></li>
              <li><a href="#contact" className="text-amber-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Info
            </h4>
            <div className="space-y-2 text-amber-100" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>123 Coffee Street</p>
              <p>Portland, OR 97205</p>
              <p>(503) 555-COFFEE</p>
              <p>hello@estrattocoffee.com</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-amber-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-100 mb-4 md:mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2024 Estratto Coffee. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}