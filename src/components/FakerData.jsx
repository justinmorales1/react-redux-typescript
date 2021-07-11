import faker from 'faker';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActionDispatch } from '../hooks/useActions';


const FakerData = () => {
  const { retrieveDataAction } = useActionDispatch();
  const { firstName, lastName, middleName, jobTitle, jobDescriptor } = useTypedSelector((state) => state.faker)

  const onClick = () => {
    retrieveDataAction(faker.name.firstName(), faker.name.lastName(), faker.name.middleName(), faker.name.jobTitle(), faker.name.jobDescriptor());
  }

  return (
    <div>
      <h1> This is Faker Data. Click button to retrieve data </h1>
      <button onClick={onClick} >Click Me</button>
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
      </p>
    </div>
  )
}

export default FakerData;