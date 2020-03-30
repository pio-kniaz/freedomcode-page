import React, { useReducer, useEffect } from 'react';
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
} from 'components/contact/contactReducer';

import { sendEmailRequest } from 'components/contact/actions';
import { successToast, failureToast } from 'utils/toastify';

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
  name: Yup.string().min(2).max(30).required(),
  subject: Yup.string().min(3).max(30).required(),
  email: Yup.string().email().required(),
  message: Yup.string().min(3).max(500).required(),
});

const ContactForm: React.FC<{}> = () => {
  const [{
    emailRequest,
    emailError,
    emailSuccess,
  }, dispatch] = useReducer(contactFormReducer, contactInitialState);
  useEffect(() => {
    if (emailError) {
      if (process.env.NODE_ENV === 'development') {
        console.log(emailError);
      }
      failureToast('Unexpected Error');
    } else if (emailSuccess) {
      successToast(emailSuccess);
    }
  }, [emailRequest]);
  const onSubmitForm = (values: IFormValues) => {
    sendEmailRequest(dispatch, values);
  };

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
          <TextField name="name" type="text" label="Name" placeholder="Enter your name" />
          <TextField name="email" type="email" label="Email" placeholder="Enter your email" />
          <TextField name="subject" type="text" label="Subject" placeholder="Enter your subject" />
          <TextField name="message" type="message" label="Message" placeholder="Enter your message" />
          <Button type="submit" disabled={emailRequest}>
            {emailRequest ? (
              <span>
                Sending...
              </span>
            ) : <span> Submit </span>}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
