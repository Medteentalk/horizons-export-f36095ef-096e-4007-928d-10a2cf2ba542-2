
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Gift, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DonatePage = () => {
  const { toast } = useToast();

  const handleDonateClick = () => {
    toast({
      title: "🚧 Donation Processing",
      description: "This feature isn't implemented yet. To enable donations, please provide your Stripe API keys! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Donate - Med Teen Talk</title>
        <meta name="description" content="Support Med Teen Talk's mission to empower youth in mental health and medicine. Your donation makes a difference." />
      </Helmet>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Gift className="h-16 w-16 text-pink-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your generous contribution helps us provide essential mental health resources and medical education to teens worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Your Donation Matters</h2>
                <p className="text-gray-600 mb-6">Every dollar you donate goes directly towards:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Expanding our peer support network to reach more teens in need.</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Creating new, accessible educational content and workshops.</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Maintaining our platform and ensuring it remains a safe, free resource for all.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Make a Secure Donation</h3>
                <p className="text-gray-600 mb-6">Choose an amount or enter a custom one.</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <Button variant="outline" className="py-6 text-lg" onClick={handleDonateClick}>$10</Button>
                    <Button variant="outline" className="py-6 text-lg" onClick={handleDonateClick}>$25</Button>
                    <Button variant="outline" className="py-6 text-lg" onClick={handleDonateClick}>$50</Button>
                </div>

                <Button onClick={handleDonateClick} className="btn-primary w-full text-lg py-6">
                  Donate Now
                </Button>
                <div className="flex items-center justify-center mt-4">
                  <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-500">Secure payment via Stripe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;
