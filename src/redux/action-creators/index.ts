import { FakerActionTypes } from "../action-types";
import { RetrieveNameDetails } from "../actions";
import { Action } from "../actions";
import { Dispatch } from "redux";
import axios from "axios";


interface FakerData {
  firstName: string,
  lastName: string,
  middleName: string,
  jobTitle: string,
  jobDescriptor: string

}

interface PhoneData {
  phoneNumber: string,
  phoneNumberFormat: string,
}

export const retrieveDataAction = (
  firstName: string,
  lastName: string,
  middleName: string,
  jobTitle: string,
  jobDescriptor: string
): RetrieveNameDetails => {
  console.log(jobTitle)
  return {
    type: FakerActionTypes.RETRIEVE_NAME_DETAILS,
    payload: {
      firstName,
      lastName,
      middleName,
      jobTitle,
      jobDescriptor
    }
  }
}



export const retrievePhoneDataAction = (phoneData: PhoneData) => {
  return {
    type: FakerActionTypes.RETRIEVE_PHONE_DETAILS,
    payload: phoneData
  }
}


export const retrieveRandomData = () => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get('https://random-data-api.com/api/bank/random_bank');
    console.log("The action creator data is ", data);
    dispatch({
      type: FakerActionTypes.RETRIEVE_RANDOM_DETAILS
    })
  }
}