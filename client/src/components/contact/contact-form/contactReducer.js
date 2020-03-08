import { ACTIONTYPES } from 'actionTypes';

export const initialState = {
  emailRequest: false,
  emailError: false,
  emailSuccess: false,
};

export function contactFormReducer(state, action) {
  switch (action.type) {
    case ACTIONTYPES.CONTACT.SEND_EMAIL_INIT:
      return {
        ...state,
        emailRequest: true,
        emailError: false,
        emailSuccess: false,
      };
    case ACTIONTYPES.CONTACT.SEND_EMAIL_FULFILLED:
      return {
        ...state,
        emailRequest: false,
        emailError: false,
        emailSuccess: action.payload,
      };
    case ACTIONTYPES.CONTACT.SEND_EMAIL_REJECTED:
      return {
        ...state,
        emailRequest: false,
        emailError: action.payload,
        emailSuccess: false,
      };
    default:
      return state;
  }
};