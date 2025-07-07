import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, PenTool, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📬 Message Sent!",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Med Teen Talk</title>
        <meta name="description" content="Get in touch with Med Teen Talk. We'd love to hear from you!" />
      </Helmet>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions, feedback, or want to partner with us? We're here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"></textarea>
                </div>
                <div>
                  <Button type="submit" className="btn-primary w-full text-lg">Send Message</Button>
                </div>
              </form>
              <p className="text-center mt-4 text-sm text-gray-500">We’re a teen-led initiative—please allow 2–3 days for replies.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Other Ways to Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-pink-500 mt-1" />
                    <div>
                      <h4 className="font-bold">General Inquiries</h4>
                      <a href="mailto:medteentalksmagazine@gmail.com" className="text-gray-600 hover:text-pink-500">medteentalksmagazine@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <PenTool className="h-6 w-6 text-pink-500 mt-1" />
                    <div>
                      <h4 className="font-bold">Write for Us</h4>
                      <p className="text-gray-600">Interested in contributing? <a href="mailto:medteentalksmagazine@gmail.com?subject=Write for Us Inquiry" className="text-pink-500 hover:underline">Send us a pitch!</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
                <div className="flex space-x-6">
                  <a href="https://www.instagram.com/medteentalk" className="text-gray-600 hover:text-pink-500 flex items-center space-x-2">
                    <Instagram /> <span>Instagram</span>
                  </a>
                  <a href="https://www.tiktok.com/@medteentalk" className="text-gray-600 hover:text-pink-500 flex items-center space-x-2" aria-label="TikTok">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 2h2.25a.75.75 0 0 1 .75.75v2.25a3.75 3.75 0 0 0 3.75 3.75h.75A.75.75 0 0 1 21 9.5v2.25a.75.75 0 0 1-.75.75h-1.5v3.75A6.75 6.75 0 1 1 9 9.75h2.25a4.5 4.5 0 1 0 4.5 4.5V3.5A.75.75 0 0 1 16.5 2.75h-2.25A.75.75 0 0 1 13.5 2V2a.75.75 0 0 1-.75-.75V2z"/></svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;