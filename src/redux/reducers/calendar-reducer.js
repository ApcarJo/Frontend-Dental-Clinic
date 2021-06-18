
import {DRAW_CAL, REMOVE_CAL, DATE_CAL} from '../types';

const initialState = {
    days : '',
    monthDays: '',
    year : '',
    diasMes : '',

};

const calendarReducer = (state = initialState, action) => {

    switch(action.type){
        case DRAW_CAL :
            return action.payload;
        break;

        case DATE_CAL :
            return action.payload;
            break;

        case REMOVE_CAL :
            return initialState;
        break;

        default:
            return state;
    }
}

export default calendarReducer;