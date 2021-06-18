
import {DATES_DENTIST} from '../types';

const initialState = {
    client : {},
    dentist: {},
    token : ''
};

const dentistScheduleReducer = (state = initialState, action) => {

    switch(action.type){
        case DATES_DENTIST :
            return action.payload;

        // case LOGOUT :
        //     return initialState;

        // case UPDATE_USER:
        //     return {...state, client: action.payload}    

        default:
            return state
    }


}

export default dentistScheduleReducer;