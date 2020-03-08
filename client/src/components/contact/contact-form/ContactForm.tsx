import React from 'react';
import * as Yup from 'yup';

import {
  Formik,
  Form,
} from 'formik';
import './contact-form.scss';

import TextField from 'components/shared/text-field/TextField';
import Button from 'components/shared/button/Button';
import {
  contactFormReducer,
  initialState as contactInitialState,
} from 'components/contact/contact-form/contactReducer';

import { sendEmailRequest } from 'components/contact/actions';

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
  message: Yup.string().max(200).min(3).required(),
});

const ContactForm: React.FC<{}> = () => {
  const [{
    emailRequest,
    emailError,
    emailSuccess,
  }, dispatch] = React.useReducer(contactFormReducer, contactInitialState);
  const onSubmitForm = (values: IFormValues) => {
    sendEmailRequest(dispatch, values);
  };
  console.log({
    emailRequest,
    emailError,
    emailSuccess,
  });
  return (
    <div className="contact-form">
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onSubmitForm(values);
          actions.setSubmitting(false);
        }}
      >
        <Form translate="yes">
          <TextField name="name" type="text" label="Your Name" placeholder="Enter your name" />
          <TextField name="email" type="email" label="Your Email" placeholder="Enter your email" />
          <TextField name="subject" type="text" label="Subject" placeholder="Enter your subject" />
          <TextField name="message" type="message" label="Message" placeholder="Enter your message" />
          <Button type="submit">
            {emailRequest ? (
              <span>
                loading ...
              </span>
            ) : <span> Submit </span>}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
