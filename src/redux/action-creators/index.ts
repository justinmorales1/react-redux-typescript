import { FakerActionTypes } from "../action-types";
import { RetrieveNameDetails } from "../actions";


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
  console.log("The phone data is", phoneData)
  return {
    type: FakerActionTypes.RETRIEVE_PHONE_DETAILS,
    payload: phoneData
  }
}