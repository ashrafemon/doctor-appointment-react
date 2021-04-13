import {combineReducers} from "redux"
import DoctorReducer from "./doctor";

const rootReducers = combineReducers({
    doctor: DoctorReducer
})

export default rootReducers