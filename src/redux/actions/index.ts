import { FakerActionTypes } from "../action-types";

export interface RetrieveNameDetails {
  type: FakerActionTypes.RETRIEVE_NAME_DETAILS;
  payload: {
    firstName: string;
    lastName: string;
    middleName: string;
    jobTitle: string;
    jobDescriptor: string;
  }
}

export interface RetrievePhoneDetails {
  type: FakerActionTypes.RETRIEVE_PHONE_DETAILS
  payload: {
    phoneNumber: string,
    phoneNumberFormat: string,
  }
}

export type Action = (
  RetrieveNameDetails | RetrievePhoneDetails
)