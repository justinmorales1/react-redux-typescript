import { combineReducers } from "redux";
import fakerNameReducer from "./fakerNameReducer";
import fakerPhoneReducer from "./fakerPhoneReducer";


const reducers = combineReducers({
  fakerName: fakerNameReducer,
  fakerPhone: fakerPhoneReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;