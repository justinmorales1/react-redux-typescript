import { FakerActionTypes } from "../action-types";
import { RetrieveNameDetails } from "../actions";


interface FakerData {
  firstName: string,
  lastName: string,
  middleName: string,
  jobTitle: string,
  jobDescriptor: string

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