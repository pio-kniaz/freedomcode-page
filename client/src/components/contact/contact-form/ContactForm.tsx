import React from 'react';
import * as Yup from 'yup';

import {
  Formik,
  Form,
} from 'formik';

import TextField from 'components/shared/text-field/TextField';

interface IFormValues {
  name: string,
  subject: string,
  email: string,
  message: string,
}

const initialValues: IFormValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

const contactSchema = Yup.object().shape({
  name: Yup.string().max(23).trim().required(),
  subject: Yup.string().max(23).min(3).required(),
  email: Yup.string().email().required(),
  message: Yup.string().max(150).min(3).required(),
});

const ContactForm: React.FC<{}> = () => (
  <div className="contact__form">
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form translate="yes">
        <TextField name="name" type="text" label="Your Name" placeholder="Enter your name" />
        <TextField name="email" type="email" label="Your Email" placeholder="Enter your email" />
        <TextField name="subject" type="text" label="Subject" placeholder="Enter your subject" />
        <TextField name="message" type="message" label="Message" placeholder="Enter your message" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
export default ContactForm;
