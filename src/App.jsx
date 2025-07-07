import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';
import HomePage from '@/pages/HomePage.jsx';
import TeamPage from '@/pages/TeamPage.jsx';
import BlogPage from '@/pages/BlogPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import VolunteerPage from '@/pages/VolunteerPage.jsx';
import ResourcesPage from '@/pages/ResourcesPage.jsx';
import DonatePage from '@/pages/DonatePage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;