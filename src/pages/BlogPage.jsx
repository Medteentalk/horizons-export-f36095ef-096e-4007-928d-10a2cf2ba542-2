
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: '5 Ways to Practice Mindfulness During a Busy School Week',
    author: 'Maria Garcia',
    date: 'July 4, 2025',
    excerpt: 'Finding moments of peace can be tough. Here are five simple, effective mindfulness techniques you can integrate into your daily routine...',
    image: 'A serene image of a young person meditating outdoors with soft morning light.',
  },
  {
    id: 2,
    title: 'Demystifying Medical School: A High Schooler\'s Guide',
    author: 'Jamal Williams',
    date: 'June 28, 2025',
    excerpt: 'Thinking about a career in medicine? It\'s never too early to start preparing. We break down the steps and what you can do now...',
    image: 'A flat lay of a stethoscope, a notebook, and textbooks on a clean desk.',
  },
  {
    id: 3,
    title: 'The Power of Peer Support in Mental Health',
    author: 'Alex Chen',
    date: 'June 15, 2025',
    excerpt: 'Why talking to someone your own age can be one of the most powerful tools for mental wellness. Exploring the benefits and impact...',
    image: 'Two friends sitting on a bench, talking and supporting each other.',
  },
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Med Teen Talk</title>
        <meta name="description" content="Read articles and insights on youth mental health, medical education, and personal growth from the Med Teen Talk team." />
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and advice on mental health and medicine for teens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col card-hover"
              >
                <img  alt={post.title} className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" /> {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="mt-auto">
                    <Button variant="link" className="text-pink-500 p-0 h-auto">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
