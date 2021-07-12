import { Action } from '../actions';
import { FakerActionTypes } from '../action-types';

interface PhoneState {
  phoneNumber: string,
  phoneNumberFormat: string,
}

const initialState = {
  phoneNumber: "",
  phoneNumberFormat: "",
}

const fakerPhoneReducer = (state: PhoneState = initialState, action: Action) => {
  switch (action.type) {
    case FakerActionTypes.RETRIEVE_PHONE_DETAILS:
      return state = action.payload;
    default:
      return state
  }
}

export default fakerPhoneReducer;