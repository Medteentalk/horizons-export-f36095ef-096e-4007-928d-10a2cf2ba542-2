import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Book, Video, Briefcase, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ResourcesPage = () => {
  const { toast } = useToast();

  const handleResourceClick = () => {
    toast({
      title: "🚧 Resource Access",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Resources - Med Teen Talk</title>
        <meta name="description" content="Access our curated library of educational resources on mental health and medicine for teens and young adults." />
      </Helmet>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Educational <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your one-stop library for reliable information on mental health and medical topics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                alt="A diverse group of students studying together with laptops and books"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
               src="https://images.unsplash.com/photo-1587648452174-752a31dbbc84" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-center mb-3">
                  <Book className="h-8 w-8 text-pink-500 mr-4" />
                  <h3 className="text-2xl font-bold">Mental Health Guides</h3>
                </div>
                <p className="text-gray-600 mb-4">Comprehensive guides on anxiety, depression, stress management, and more.</p>
                <Button onClick={handleResourceClick} variant="outline" className="btn-secondary">Access Guides <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-8 w-8 text-pink-500 mr-4" />
                  <h3 className="text-2xl font-bold">Medical Career Paths</h3>
                </div>
                <p className="text-gray-600 mb-4">Explore different medical specialties and career opportunities.</p>
                <Button onClick={handleResourceClick} variant="outline" className="btn-secondary">Explore Careers <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-center mb-3">
                  <Video className="h-8 w-8 text-pink-500 mr-4" />
                  <h3 className="text-2xl font-bold">Webinar Library</h3>
                </div>
                <p className="text-gray-600 mb-4">Watch recorded sessions from healthcare professionals and experts.</p>
                <Button onClick={handleResourceClick} variant="outline" className="btn-secondary">Watch Videos <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;