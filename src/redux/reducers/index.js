import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import calendar from './calendar-reducer';
import dentistSchedule from "./dentistSchedule-reducer";

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials,
    calendar,
    dentistSchedule
    
});

export default rootReducer;