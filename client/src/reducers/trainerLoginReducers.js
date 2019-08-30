
// import {
//     TRAINER_LOGIN_START,
//     TRAINER_LOGIN_SUCCESS,
//     TRAINER_LOGIN_FAILURE,
//     TRAINER_LOGOUT_SUCCESS
// } from "../actions/index";

// const initialState = {
//     error: "",
//     trainerloggingIn: false,
//     trainerloggedIn: false,
//     instructor: ""
// };

// export const trainerLoginReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case TRAINER_LOGIN_START:
//             return {
//                 ...state,
//                 error: "",
//                 loggingIn: true
//             };
//         case TRAINER_LOGIN_START:
//             return {
//                 ...state,
//                 error: "",
//                 loggingIn: false,
//                 loggedIn: true,
//                 instructor: action.payload
//             }
//         case TRAINER_LOGIN_FAILURE:
//             return {
//                 ...state,
//                 loggingIn: false,
//                 loggedIn: false,
//                 error: action.payload
//             }
//         case TRAINER_LOGIN_SUCCESS:
//             return {
//                 ...state, 
//                 loggIn:false,
//                 loggedIn:true,
//                 error: action.payload
//             }
        
//         case TRAINER_LOGOUT_SUCCESS:
//             return {
//                 ...state,
//                 loggedIn: false,
               
//             }
//         default:
//             return state;
//     }
// };
=======
import {
    TRAINER_LOGIN_START,
    TRAINER_LOGIN_SUCCESS,
    TRAINER_LOGIN_FAILURE,
    TRAINER_LOGOUT_SUCCESS
} from "../actions";

const initialState = {
    error: "",
    trainerloggingIn: false,
    trainerloggedIn: false,
    instructor: ""
};

export const trainerLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRAINER_LOGIN_START:
            return {
                ...state,
                error: "",
                loggingIn: true
            };
        case TRAINER_LOGIN_START:
            return {
                ...state,
                error: "",
                loggingIn: false,
                loggedIn: true,
                instructor: action.payload
            }
        case TRAINER_LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.payload
            }
        case TRAINER_LOGIN_SUCCESS:
            return {
                ...state, 
                loggIn:false,
                loggedIn:true,
                error: action.payload
            }
        
        case TRAINER_LOGOUT_SUCCESS:
            return {
                ...state,
                loggedIn: false,
               
            }
        default:
            return state;
    }
};

