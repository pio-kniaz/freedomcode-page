import React from 'react';
import './contact.scss';

import ContactMap from 'components/contact/contact-map/ContactMap';
import withBlur from 'hoc/with-blur/withBlur';

const Contact: React.FC = () => (
  <div className="contact">
    <ContactMap />
  </div>
);

export default withBlur(Contact);
