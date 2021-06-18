import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import calendar from './calendar-reducer';

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials,
    calendar
    
});

export default rootReducer;