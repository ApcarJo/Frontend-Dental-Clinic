import {LOGIN, LOGOUT, UPDATE_USER, UPDATE_DENTIST} from '../types';

const initialState = {
    client : {},
    dentist: {},
    admin: {},
    token : ''
};

const credentialsReducer = (state = initialState, action) => {

    switch(action.type){
        case LOGIN :
            return action.payload;

        case LOGOUT :
            return initialState;

        case UPDATE_USER:
            return {...state, client: action.payload}    

        case UPDATE_DENTIST:
            return {...state, dentist: action.payload}        

        default:
            return state
    }


}

export default credentialsReducer;