import { combineReducers } from "redux";
import credentials from './credentials-reducer'

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials
    
});

export default rootReducer;