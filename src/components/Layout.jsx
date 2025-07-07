import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Gift, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => (
  <footer className="bg-white border-t border-pink-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold gradient-text">Med Teen Talk</span>
          </Link>
          <p className="text-gray-600 mb-4">
            Empowering youth through mental health awareness and medical education.
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <ShieldCheck className="h-6 w-6 text-green-500" />
            <p className="text-sm text-gray-500">Secure & PCI Compliant</p>
          </div>
        </div>
        
        <div>
          <span className="font-bold text-gray-800 mb-4 block">Quick Links</span>
          <div className="space-y-2">
            <Link to="/team" className="block text-gray-600 hover:text-pink-500">Our Team</Link>
            <Link to="/volunteer" className="block text-gray-600 hover:text-pink-500">Volunteer</Link>
            <Link to="/blog" className="block text-gray-600 hover:text-pink-500">Blog</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-pink-500">Contact</Link>
          </div>
        </div>
        
        <div>
          <span className="font-bold text-gray-800 mb-4 block">Support</span>
          <div className="space-y-2">
            <Link to="/resources" className="block text-gray-600 hover:text-pink-500">Resources</Link>
            <Link to="/privacy" className="block text-gray-600 hover:text-pink-500">Privacy Policy</Link>
            <a href="mailto:medteentalksmagazine@gmail.com" className="block text-gray-600 hover:text-pink-500">Email Us</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-pink-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Med Teen Talk. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://www.instagram.com/medteentalk" className="text-gray-500 hover:text-pink-500"><Instagram /></a>
          <a href="https://www.tiktok.com/@medteentalk" className="text-gray-500 hover:text-pink-500" aria-label="TikTok">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2h2.25a.75.75 0 0 1 .75.75v2.25a3.75 3.75 0 0 0 3.75 3.75h.75A.75.75 0 0 1 21 9.5v2.25a.75.75 0 0 1-.75.75h-1.5v3.75A6.75 6.75 0 1 1 9 9.75h2.25a4.5 4.5 0 1 0 4.5 4.5V3.5A.75.75 0 0 1 16.5 2.75h-2.25A.75.75 0 0 1 13.5 2V2a.75.75 0 0 1-.75-.75V2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <Heart className="h-8 w-8 text-pink-500" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text">Med Teen Talk</span>
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center space-x-6 font-medium"
            >
              <NavLink to="/" className={({isActive}) => isActive ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500 transition-colors"}>Home</NavLink>
              <NavLink to="/team" className={({isActive}) => isActive ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500 transition-colors"}>Our Team</NavLink>
              <NavLink to="/blog" className={({isActive}) => isActive ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500 transition-colors"}>Blog</NavLink>
              <NavLink to="/volunteer" className={({isActive}) => isActive ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500 transition-colors"}>Volunteer</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500 transition-colors"}>Contact</NavLink>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Link to="/donate">
                <Button className="btn-primary rounded-full">
                  <Gift className="mr-2 h-5 w-5" />
                  Donate
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;