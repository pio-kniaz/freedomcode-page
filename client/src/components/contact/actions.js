import { ACTIONTYPES } from 'actionTypes';
import { request } from 'api/api';

export const sendEmailRequest = async (dispatch, values) => {
  dispatch({ type: ACTIONTYPES.CONTACT.SEND_EMAIL_INIT });
  try {
    const { data } = await request('http://localhost:3001/api/contact/email', 'POST', values);
    dispatch({ type: ACTIONTYPES.CONTACT.SEND_EMAIL_FULFILLED, payload: data });
  } catch (error) {
    dispatch({ type: ACTIONTYPES.CONTACT.SEND_EMAIL_REJECTED, payload: error.response.message });
  }
};
