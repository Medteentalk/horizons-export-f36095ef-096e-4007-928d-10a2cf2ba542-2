import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  { name: "A'kayla Bagley", role: 'Founder', img: '', social: { linkedin: '#' } },
  { name: 'Shrinithi', role: 'Vice President', img: '', social: { linkedin: '#' } },
  { name: 'Riley', role: 'Secretary', img: '', social: { linkedin: '#' } },
  { name: 'Julia Kim', role: 'Outreach Director', img: '', social: { linkedin: '#' } },
  { name: 'Ansh Ramani', role: 'Outreach Director', img: '', social: { linkedin: '#' } },
  { name: 'Isha', role: 'Research Director', img: '', social: { linkedin: '#' } },
  { name: 'Smrithi', role: 'Research Director', img: '', social: { linkedin: '#' } },
  { name: 'Anushka', role: 'Content Director', img: '', social: { linkedin: '#' } },
  { name: 'Katherine Yu', role: 'Content Strategy Director', img: '', social: { linkedin: '#' } },
];

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Med Teen Talk</title>
        <meta name="description" content="Meet the passionate youth leaders behind Med Teen Talk, dedicated to making a difference in mental health and medicine." />
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
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a group of dedicated students and young professionals passionate about empowering our peers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center card-hover"
              >
                <img  alt={member.name} className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-pink-500 font-semibold mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} aria-label={`${member.name}'s LinkedIn`} className="text-gray-500 hover:text-pink-500"><Linkedin /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
