
import {DRAW_CAL, REMOVE_CAL, DATE_CAL} from '../types';

const initialState = {
    days : '',
    monthDays: '',
    year : '',
    diasMes : ''
};

const calendarReducer = (state = initialState, action) => {

    switch(action.type){
        case DRAW_CAL :
            return action.payload;

        case DATE_CAL :
            return action.payload;

        case REMOVE_CAL :
            return initialState;

        default:
            return state;
    }
}

export default calendarReducer;