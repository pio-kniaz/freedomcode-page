import { ACTIONTYPES } from 'actionTypes';
import { customRequest } from 'repository';

interface IFormValues {
  name: string,
  subject: string,
  email: string,
  message: string,
}

export const sendEmailRequest = async (dispatch: any, values: IFormValues) => {
  dispatch({ type: ACTIONTYPES.CONTACT.SEND_EMAIL_INIT });
  try {
    const { data } = await customRequest(`${process.env.REACT_APP_API_URL}/contact/email`, 'POST', values);
    dispatch({ type: ACTIONTYPES.CONTACT.SEND_EMAIL_FULFILLED, payload: data.message });
  } catch (error) {
    const errorMessage = (error.response && error.response.data && error.response.data.message) || 'An error occurred';
    dispatch({ type: ACTIONTYPES.CONTACT.SEND_EMAIL_REJECTED, payload: errorMessage });
  }
};
