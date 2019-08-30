// import { combineReducers } from 'redux';
// import { trainerRegisterdReducer } from "./trainerRegisterd";
// import { trainerLoginReducers } from "./trainerLoginReducers";
// import { clientRegisterReducer } from './clientRegister';
// import { clientLoginReducer } from './clientLoginReducer';
// import { classReducers } from './classReducers';

// export default combineReducers({
//     trainerRegisterdReducer,
//     trainerLoginReducers,
//     clientRegisterReducer,
//     clientLoginReducer,
//     classReducers
// });

import { 
    SIGNUP_START, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
    } from "../actions/index";

const initialState = {
    user: [],
    creatingUser: false,
    error: ""
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return {
                ...state,
                error: "",
                creatingUser: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                creatingUser: false
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingUser: false
            }
        case LOGIN_START:
            return {
                ...state,
                error: "",
                creatingUser: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                creatingUser: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingUser: false
            }
        default:
            return state;
    }
}