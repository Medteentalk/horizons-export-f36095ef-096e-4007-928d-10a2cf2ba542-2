import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, ArrowRight, Star, TrendingUp, Smile, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Med Teen Talk - Youth Mental Health & Medicine</title>
        <meta name="description" content="Med Teen Talk is a youth-led mental health and medicine project for teens and young adults. Join our volunteer opportunities and access educational content." />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Empowering <span className="gradient-text">Youth</span> in Mental Health & Medicine
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join our youth-led community dedicated to mental health awareness, medical education, and creating positive change for teens and young adults.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/volunteer">
                    <Button className="btn-primary text-lg px-8 py-3 w-full sm:w-auto">
                      Join as Volunteer <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/resources">
                    <Button variant="outline" className="btn-secondary text-lg px-8 py-3 w-full sm:w-auto">
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 shadow-2xl">
                  <img 
                    alt="Diverse group of young people collaborating and smiling"
                    className="w-full h-80 object-cover rounded-2xl"
                   src="https://images.unsplash.com/photo-1669288848784-01195e1a25ad" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-800">Youth-Led Initiative</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="stats" className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Impact</span> by the Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are proud of the community we've built and the change we're making together.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg">
                <TrendingUp className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <p className="text-5xl font-bold gradient-text">20,907</p>
                <p className="text-gray-600 mt-2">Teens Reached</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-lg">
                <Smile className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <p className="text-5xl font-bold gradient-text">51</p>
                <p className="text-gray-600 mt-2">Active Volunteers</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white p-8 rounded-2xl shadow-lg">
                <Globe className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <p className="text-5xl font-bold gradient-text">1</p>
                <p className="text-gray-600 mt-2">Country Involved</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Med Teen Talk</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a passionate community of young people dedicated to breaking down barriers in mental health and medical education.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mental Health Focus</h3>
                <p className="text-gray-600">Promoting mental wellness and breaking stigma through peer support and education.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Medical Education</h3>
                <p className="text-gray-600">Making medical knowledge accessible and engaging for young minds.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Youth Leadership</h3>
                <p className="text-gray-600">Empowering young people to lead change in their communities.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;