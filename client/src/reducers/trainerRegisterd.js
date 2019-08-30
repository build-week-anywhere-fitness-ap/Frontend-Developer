// import { 
//     TRAINER_REGISTER_START, 
//     TRAINER_REGISTER_SUCCESS, 
//     TRAINER_REGISTER_FAILURE
//     } from "../actions/index";

// const initialState = {
//     user: [],
//     creatingUser: false,
//     error: ""
// }

// export const trainerRegisterdReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case TRAINER_REGISTER_START:
//             return {
//                 ...state,
//                 error: "",
//                 creatingUser: true
//             }
//         case TRAINER_REGISTER_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 creatingUser: false
//             }
//         case TRAINER_REGISTER_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload,
//                 creatingUser: false
//             }
//         default:
//             return state;
//     }
// }