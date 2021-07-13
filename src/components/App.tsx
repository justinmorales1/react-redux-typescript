import FakerData from "./FakerData"
import { Provider } from 'react-redux';
import { store } from '../redux'
import FakerDataClassComponent from "./FakerDataClassComponent";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For A Package</h1>
        <FakerData />
        <FakerDataClassComponent />
      </div>
    </Provider>
  )
}

export default App;