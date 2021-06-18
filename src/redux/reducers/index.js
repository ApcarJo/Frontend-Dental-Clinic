import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import calendar from './calendar-reducer';
import schedule from "./dentistSchedule-reducer";

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials,
    calendar,
    schedule
    
});

export default rootReducer;