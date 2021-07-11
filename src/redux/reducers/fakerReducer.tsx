import { Action } from '../actions';
import {FakerActionTypes} from '../action-types';


interface FakerState {
  firstName: string,
  lastName: string,
  middleName: string,
  jobTitle: string,
  jobDescriptor: string

}

const initialState = {
  firstName: "",
  lastName: "",
  middleName: "",
  jobTitle: "",
  jobDescriptor: ""
}

const fakerReducer = (state: FakerState = initialState, action: Action) => {
  switch(action.type) {
    case FakerActionTypes.RETRIEVE_NAME_DETAILS:
      console.log(action.payload)
      return state = action.payload;
    default:
      return state
  }
}

export default fakerReducer;