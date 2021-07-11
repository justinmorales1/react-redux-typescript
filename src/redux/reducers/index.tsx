import { combineReducers } from "redux";
import fakerReducer from "./fakerReducer";


const reducers = combineReducers({
  faker: fakerReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;