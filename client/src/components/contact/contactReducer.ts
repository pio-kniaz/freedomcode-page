import { ACTIONTYPES } from 'actionTypes';

type State = {
  emailRequest: boolean
  emailError: string | boolean,
  emailSuccess: string | boolean,
}

type Action = {
  type: string,
  payload?: any,
}

export const initialState = {
  emailRequest: false,
  emailError: false,
  emailSuccess: false,
};

export function contactFormReducer(state: State, action: Action) {
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
}
