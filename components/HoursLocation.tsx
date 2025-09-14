import { motion } from 'framer-motion';

export function HoursLocation() {
  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 4:00 PM" },
    { day: "Saturday", time: "9:00 AM - 3:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <section id='hours-location' className="py-20 px-6 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit Us
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Find us in the heart of downtown, where great coffee meets community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours & Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Hours */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl mb-6 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hours
              </h3>
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-2 border-b border-stone-100 last:border-b-0"
                  >
                    <span className="text-stone-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {schedule.day}
                    </span>
                    <span className="text-amber-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {schedule.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Location
              </h3>
              <div className="space-y-3">
                <p className="text-stone-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <strong>336 W. Pender St.</strong><br/>
                  Vancouver,<br/>
                  British Columbia V6B1T1
                </p>
                <div className="pt-4">
                  <p className="text-sm text-stone-500 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Phone: (778) 668-3863
                  </p>
                  <p className="text-sm text-stone-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email: hello@estrattocoffee.com
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl mb-6 text-amber-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Find Us
            </h3>
            <div className="bg-stone-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              {/* Map placeholder with subtle pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-stone-300"></div>
                  ))}
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.6800277703887!2d-123.11430772356996!3d49.28245997077011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486710037115fab%3A0xda49a9b2f7abbe!2sEstratto%20coffee!5e0!3m2!1sen!2sca!4v1757834527420!5m2!1sen!2sca"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}