import React from 'react';

import './contact-page.scss';
import MainLayout from 'components/main-layout/MainLayout';
import Contact from 'components/contact/Contact';

const ContactPage: React.FC = () => (
  <div className="contact-page">
    <MainLayout>
      <Contact />
    </MainLayout>
  </div>
);

export default ContactPage;
