import { FakerActionTypes } from "../action-types";

export interface RetrieveNameDetails {
  type: FakerActionTypes;
  payload: {
    firstName: string;
    lastName: string;
    middleName: string;
    jobTitle: string;
    jobDescriptor: string;
  }
}

export type Action = (
  RetrieveNameDetails
)