import { useEffect, useState } from 'react';
import faker from 'faker';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActionDispatch } from '../hooks/useActions';


const FakerData = () => {
  const phoneData = {
    phoneNumber: faker.phone.phoneNumber(),
    phoneNumberFormat: faker.phone.phoneNumberFormat()
  }

  const { retrieveDataAction, retrievePhoneDataAction, retrieveRandomData } = useActionDispatch();
  const { firstName, lastName, middleName, jobTitle, jobDescriptor } = useTypedSelector((state) => state.fakerName);
  const { phoneNumber, phoneNumberFormat } = useTypedSelector((state) => state.fakerPhone);
  const { account_number, bank_name } = useTypedSelector((state) => state.randomData)


  const onClick = () => {
    retrieveDataAction(faker.name.firstName(), faker.name.lastName(), faker.name.middleName(), faker.name.jobTitle(), faker.name.jobDescriptor());
    retrievePhoneDataAction(phoneData)
    retrieveRandomData()
  }

  return (
    <div>
      <h1> This is Faker Data. Click button to retrieve data </h1>
      <button onClick={onClick} > Click Me </button>
      <ul style={{ "list-style-type": "none" }}>
        <li>First Name: {firstName}</li>
        <li>Last Name : {lastName}</li>
        <li>Middle Name: {middleName}</li>
        <li>Job Title: {jobTitle}</li>
        <li>Job Description: {jobDescriptor}</li>
        <li>Phone Number: {phoneNumber}</li>
        <li>Phone Number Format: {phoneNumberFormat}</li>
        <li>Account Number: {account_number}</li>
        <li>Bank Name: {bank_name}</li>
      </ul>
    </div>
  )
}

export default FakerData;