import FakerData from "./FakerData"
import { Provider } from 'react-redux';
import { store } from '../redux'

const App = () =>  {
  return (
    <Provider store={store}>
      <div> 
        <h1>Search For A Package</h1>  
        <FakerData />
      </div>     
    </Provider>
  )
}

export default App;