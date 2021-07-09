
import {DATES_DENTIST, SCHEDULE_CAL} from '../types';

const initialState = {
    client: {},
    data: [],
    phoneclient: '',
    clinic: {},
    phoneclinic: '',
    date : ''
};

const dentistScheduleReducer = (state = initialState, action) => {

    switch(action.type){
        case DATES_DENTIST :
            return action.payload;

        case SCHEDULE_CAL :
            return action.payload;

        // case UPDATE_USER:
        //     return {...state, client: action.payload}

        default:
            return state
    }


}

export default dentistScheduleReducer;