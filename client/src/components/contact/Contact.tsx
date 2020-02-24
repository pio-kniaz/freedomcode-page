import React from 'react';
import './contact.scss';

import ContactMap from 'components/contact/contact-map/ContactMap';

const Contact: React.FC = () => (
  <div className="contact">
    <div className="contact__wrapper">
      <ContactMap />
    </div>
  </div>
);

export default Contact;
