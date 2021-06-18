import { combineReducers } from "redux";
import credentials from './credentials-reducer'
import appointment from './appointment-reducer';

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials,
    appointment
});

export default rootReducer;