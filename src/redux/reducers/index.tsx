import { combineReducers } from "redux";
import fakerNameReducer from "./fakerNameReducer";
import fakerPhoneReducer from "./fakerPhoneReducer";
import randomDataReducer from "./randomDataReducer";


const reducers = combineReducers({
  fakerName: fakerNameReducer,
  fakerPhone: fakerPhoneReducer,
  randomData: randomDataReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;