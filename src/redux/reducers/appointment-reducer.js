import { APPOINTMENT, UPDATE_APPOINTMENT } from "../types";

const initialState = {
  appointment : {}
};

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENT:
      return action.payload;

    // case DELETE_APPOINTMENT:
    //   return initialState;

    case UPDATE_APPOINTMENT:
      return { ...state, appointment: action.payload };

    default:
      return state;
  }
};

export default credentialsReducer;
