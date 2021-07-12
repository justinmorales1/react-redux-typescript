import { useEffect, useState } from 'react';
import faker from 'faker';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActionDispatch } from '../hooks/useActions';

let phoneData = {}

const FakerData = () => {
  useEffect(() => {
    phoneData = {
      phoneNumber: faker.phone.phoneNumber(),
      phoneNumberFormat: faker.phone.phoneNumberFormat(),
    }

    console.log(phoneData)
  })

  const { retrieveDataAction, retrievePhoneDataAction, retrieveRandomData } = useActionDispatch();
  const { firstName, lastName, middleName, jobTitle, jobDescriptor } = useTypedSelector((state) => state.fakerName);
  const { phoneNumber, phoneNumberFormat } = useTypedSelector((state) => state.fakerPhone);


  const onClick = () => {
    retrieveDataAction(faker.name.firstName(), faker.name.lastName(), faker.name.middleName(), faker.name.jobTitle(), faker.name.jobDescriptor());
    retrievePhoneDataAction(phoneData)
    retrieveRandomData();
  }

  return (
    <div>
      <h1> This is Faker Data. Click button to retrieve data </h1>
      <button onClick={onClick} > Click Me </button>
      <p>
        First Name: {firstName}
        <br></br>
        Last Name : {lastName}
        <br></br>
        Middle Name: {middleName}
        <br></br>
        Job Title: {jobTitle}
        <br></br>
        Job Description: {jobDescriptor}
        <br></br>
        Phone Number: {phoneNumber}
        <br></br>
        Phone Number Format: {phoneNumberFormat}
      </p>
    </div>
  )
}

export default FakerData;