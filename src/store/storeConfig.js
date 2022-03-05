import { createStore, combineReducers } from "redux";
import numerosReducer from "./reducers/numerosReducer";


const reducers = combineReducers({
    numeros: numerosReducer
})

export default () => createStore(reducers)