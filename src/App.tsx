/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Paintbrush, 
  Droplets, 
  Trash2, 
  Home, 
  CheckCircle2,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  primary: '#FACC15', // Yellow from logo
  secondary: '#171717', // Black/Dark Gray
  accent: '#F5F5F5', // Light Gray background
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      title: "Professional Painting",
      description: "High-quality interior and exterior painting services tailored to your style and needs.",
      icon: <Paintbrush className="w-8 h-8" />,
    },
    {
      title: "Power Washing",
      description: "Restore the beauty of your home's exterior with our professional power washing services.",
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      title: "Gutter Cleaning",
      description: "Keep your home safe from water damage with our thorough gutter cleaning and maintenance.",
      icon: <Trash2 className="w-8 h-8" />,
    },
    {
      title: "Interior / Exterior Renovation",
      description: "Complete renovation services to transform your living spaces inside and out.",
      icon: <Home className="w-8 h-8" />,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="bg-neutral-900 p-2 rounded-lg">
                <Paintbrush className="text-yellow-400 w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Mr <span className="text-yellow-500">PAINT</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-semibold uppercase tracking-widest hover:text-yellow-600 transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:2036906741"
                className="bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {['Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-lg font-bold uppercase tracking-widest"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="tel:2036906741"
                  className="block w-full text-center bg-yellow-400 text-black py-4 rounded-xl font-black uppercase tracking-widest"
                >
                  Call John: (203) 690-6741
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Licensed & Insured in Connecticut
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                OUR WORK IS <br />
                <span className="text-yellow-500">ALWAYS TOP</span> <br />
                QUALITY.
              </h1>
              <p className="text-xl text-neutral-600 max-w-lg mb-10 leading-relaxed">
                Transforming homes in Waterbury and surrounding areas with professional painting, power washing, and renovation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-neutral-900 text-white px-10 py-5 rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group"
                >
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-col justify-center px-4">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Call John</span>
                  <a href="tel:2036906741" className="text-xl font-black hover:text-yellow-600 transition-colors">(203) 690-6741</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square bg-neutral-100 rounded-[3rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Painting"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-neutral-100 max-w-[240px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-400 p-3 rounded-2xl">
                    <Home className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-black text-2xl">100%</span>
                </div>
                <p className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Satisfaction Guaranteed on every project</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-neutral-50 skew-x-12 transform translate-x-1/2" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">What We Do</h2>
              <h3 className="text-5xl lg:text-6xl font-black tracking-tighter">OUR SERVICES</h3>
            </div>
            <p className="text-neutral-400 max-w-md text-lg">
              From fresh coats of paint to complete renovations, we provide comprehensive solutions for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-neutral-800/50 border border-neutral-700 hover:border-yellow-500 transition-all hover:-translate-y-2"
              >
                <div className="mb-6 text-yellow-400 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h4>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1589939705384-5185138a047a?q=80&w=2070&auto=format&fit=crop" 
                    alt="Work" 
                    className="rounded-3xl w-full aspect-[3/4] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-yellow-400 rounded-3xl aspect-square flex items-center justify-center p-8">
                    <span className="text-black font-black text-4xl text-center leading-none uppercase tracking-tighter">
                      Top <br /> Quality
                    </span>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-neutral-900 rounded-3xl aspect-square flex items-center justify-center p-8">
                    <Paintbrush className="w-16 h-16 text-yellow-400" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=2070&auto=format&fit=crop" 
                    alt="Work" 
                    className="rounded-3xl w-full aspect-[3/4] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-[0.3em] mb-4">About Mr PAINT LLC</h2>
              <h3 className="text-5xl font-black tracking-tighter mb-8 leading-none">
                COMMITTED TO <br /> EXCELLENCE IN <br /> EVERY STROKE.
              </h3>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  At Mr PAINT LLC, we believe that a fresh coat of paint can do more than just change a color—it can transform a home and elevate your living experience.
                </p>
                <p>
                  With years of experience serving the Waterbury, CT community, our team of skilled professionals is dedicated to providing top-tier craftsmanship and exceptional customer service.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Attention to detail in every project",
                    "Premium quality paints and materials",
                    "Clean and professional work environment",
                    "Timely completion and reliable service"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-neutral-900">
                      <CheckCircle2 className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-neutral-100">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-neutral-900 text-white p-12 lg:p-16">
                <h3 className="text-4xl font-black tracking-tighter mb-8">GET IN TOUCH</h3>
                <p className="text-neutral-400 mb-12 text-lg">
                  Ready to start your next project? Contact us today for a free, no-obligation estimate.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-neutral-800 p-4 rounded-2xl text-yellow-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Call Us</p>
                      <a href="tel:2036906741" className="text-xl font-bold block hover:text-yellow-400 transition-colors">John: (203) 690-6741</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-neutral-800 p-4 rounded-2xl text-yellow-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Email Us</p>
                      <a href="mailto:paintingmr513@gmail.com" className="text-xl font-bold hover:text-yellow-400 transition-colors">paintingmr513@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-neutral-800 p-4 rounded-2xl text-yellow-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">Our Location</p>
                      <p className="text-xl font-bold">1767 Baldwin St <br /> Waterbury, CT 06706</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-12 lg:p-16">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="(203) 000-0000"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Service Needed</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium appearance-none">
                      <option>Select a service</option>
                      <option>Painting</option>
                      <option>Power Washing</option>
                      <option>Gutter Cleaning</option>
                      <option>Renovation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-neutral-900 p-1.5 rounded-lg">
                <Paintbrush className="text-yellow-400 w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Mr <span className="text-yellow-500">PAINT</span> LLC
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm font-medium">
              © {new Date().getFullYear()} Mr PAINT LLC. All rights reserved.
            </p>

            <div className="flex gap-6">
              {['Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
