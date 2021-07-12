import { Action } from "../actions";
import { FakerActionTypes } from "../action-types"

interface RandomData {
  id: number;
  account_number: number;
  bank_name: string
}

const intialState = {
  id: 0,
  account_number: 0,
  bank_name: "",
}


// {"id":4386,"uid":"b3d90221-6f5c-4ea7-95bf-f727a058b72a",
// "account_number":"4669546577",
// "iban":"GB13XIGZ42147133418752",
// "bank_name":"ABN AMRO MEZZANINE (UK) LIMITED",
// "routing_number":"271356130",
// "swift_bic":"BARBGB2LSOU"}

const randomDataReducer = (state: RandomData = intialState, action: Action) => {
  switch (action.type) {
    case FakerActionTypes.RETRIEVE_RANDOM_DETAILS:
      console.log("Inside random data reduer", action.payload)
      return { ...action.payload };
    default:
      return state;
  }
}


export default randomDataReducer;