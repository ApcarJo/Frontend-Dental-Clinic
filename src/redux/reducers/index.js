import { combineReducers } from "redux";
import credentials from './credentials-reducer'
import appointment from './appointment-reducer';
import calendar from './calendar-reducer';

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials,
    appointment,
    calendar
});

export default rootReducer;