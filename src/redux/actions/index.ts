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

interface RandomData {
  id: number;
  account_number: number;
  bank_name: string
}


export interface RetrieveRandomDetails {
  type: FakerActionTypes.RETRIEVE_RANDOM_DETAILS
  payload: {
    id: 0,
    account_number: 0,
    bank_name: ""
  }
}

export type Action = (
  RetrieveNameDetails | RetrievePhoneDetails | RetrieveRandomDetails
)