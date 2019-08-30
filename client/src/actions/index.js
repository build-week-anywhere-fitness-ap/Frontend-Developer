import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import cookie from "react-cookies";

//What will credentials mean here?
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const signUpUser = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  console.log(credentials)
  axios
    .post('https://bw-anywhere-fitness.herokuapp.com/api/register/', credentials)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.response.data
      });
    });
};

// I'm not familiar with cookie.save, does it mix well with setItem("token")?
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginUser = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("https://bw-anywhere-fitness.herokuapp.com/api/users/", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      cookie.save("instructor", res.data.instructor);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.instructor
      });
      return true;
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data
      });
    });
};


// ------------------------------

// export const TRAINER_REGISTER_START = "TRAINER_REGISTER_START";
// export const TRAINER_REGISTER_SUCCESS = "TRAINER_REGISTER_SUCCESS";
// export const TRAINER_REGISTER_FAILURE = "TRAINER_REGISTER_FAILURE";
// export const register = user => dispatch => {
//   dispatch({ type: TRAINER_REGISTER_START });
//   return axiosWithAuth()
//     .post("https://bw-anywhere-fitness.herokuapp.com/api/register/", user)
//     .then(res => {
//       dispatch({ type: TRAINER_REGISTER_SUCCESS, payload: res.data });
//       return true;
//     })
//     .catch(err => {
//       dispatch({ type: TRAINER_REGISTER_FAILURE, payload: err.response });
//     });
// };


// export const TRAINER_SIGNUP_START = "TRAINER_SIGNUP_START";
// export const TRAINER_SIGNUP_SUCCESS = "TRAINER_SIGNUP_SUCCESS";
// export const TRAINER_SIGNUP_FAILURE = "TRAINER_SIGNUP_FAILURE";
// export const signUpUser = credentials => dispatch => {
//   dispatch({ type: TRAINER_SIGNUP_START });
//   console.log(credentials)
//   axios
//     .post('https://bw-anywhere-fitness.herokuapp.com/api/register/', credentials)
//     .then(res => {
//       console.log(res.data)
//       dispatch({
//         type: TRAINER_SIGNUP_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: TRAINER_SIGNUP_FAILURE,
//         payload: err.response.data
//       });
//     });
// };


// export const TRAINER_LOGIN_START = "TRAINER_LOGIN_START";
// export const TRAINER_LOGIN_SUCCESS = "TRAINER_LOGIN_SUCCESS";
// export const TRAINER_LOGIN_FAILURE = "TRAINER_LOGIN_FAILURE";
// export const login = credentials => dispatch => {
//   dispatch({ type: TRAINER_LOGIN_START });
//   return axiosWithAuth()
//     .post("/login", credentials)
//     .then(res => {
//       localStorage.setItem("token", res.data.token);
//       cookie.save("instructor", res.data.instructor);
//       dispatch({
//         type: TRAINER_LOGIN_SUCCESS,
//         payload: res.data.instructor
//       });
//       return true;
//     })
//     .catch(err => {
//       dispatch({
//         type: TRAINER_LOGIN_FAILURE,
//         payload: err.response.data
//       });
//     });
// };

// export const isLoggedIn = instructor => dispatch => {
//   dispatch({ type: TRAINER_LOGIN_SUCCESS, payload: instructor });
// };

// export const TRAINER_LOGOUT_SUCCESS = "TRAINER_LOGOUT_SUCCESS";
// export const logoutTrainer = () => dispatch => {
//   dispatch({ type: TRAINER_LOGOUT_SUCCESS });
//   localStorage.removeItem("token");
//   cookie.remove("instructorId");
// };

// export const GETALLCLASSES_BYINSTRUCTOR_START =
//   "GETALLCLASSES_BYINSTRUCTOR_START";
// export const GETALLCLASSES_BYINSTRUCTOR_SUCCESS =
//   "GETALLCLASSES_BYINSTRUCTOR_SUCCESS";
// export const GETALLCLASSES_BYINSTRUCTOR_FAILURE =
//   "GETALLCLASSES_BYINSTRUCTOR_FAILURE";
// export const getAllClassesByInstructor = instructorId => dispatch => {
//   dispatch({ type: GETALLCLASSES_BYINSTRUCTOR_START });
//   axiosWithAuth()
//     .get(
      
//     )
//     .then(res => {
//       dispatch({
//         type: GETALLCLASSES_BYINSTRUCTOR_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GETALLCLASSES_BYINSTRUCTOR_FAILURE,
//         payload: err.response.data
//       });
//     });
// };

// export const CREATE_CLASS_START = "CREATE_CLASS_START";
// export const CREATE_CLASS_SUCCESS = "CREATE_CLASS_SUCCESS";
// export const CREATE_CLASS_FAILURE = "CREATE_CLASS_FAILURE";
// export const createClass = singleClass => dispatch => {
//   dispatch({ type: CREATE_CLASS_START });
//   return axiosWithAuth()
//     .post(
      
//       singleClass
//     )
//     .then(res => {
//       dispatch({
//         type: CREATE_CLASS_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: CREATE_CLASS_FAILURE,
//         payload: err.response.data.message
//       });
//     });
// };

// export const GETCLASS_BYID_START = "GETCLASS_BYID_START";
// export const GETCLASS_BYID_SUCCESS = "GETCLASS_BYID_SUCCESS";
// export const GETCLASS_BYID_FAILURE = "GETCLASS_BYID_FAILURE";
// export const getClassByInstructor = classId => dispatch => {
//   dispatch({ type: GETCLASS_BYID_START });
//   axiosWithAuth()
//     .get(
      
//     )
//     .then(res => {
//       dispatch({
//         type: GETCLASS_BYID_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GETCLASS_BYID_FAILURE,
//         payload: err.response.data
//       });
//     });
// };

// export const SIGNUP_START = "SIGNUP_START";
// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
// export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
// export const signUpUser = credentials => dispatch => {
//   dispatch({ type: SIGNUP_START });
//   console.log(credentials)
//   axios
//     .post('https://bw-anywhere-fitness.herokuapp.com/api/register/', credentials)
//     .then(res => {
//       console.log(res.data)
//       dispatch({
//         type: SIGNUP_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: SIGNUP_FAILURE,
//         payload: err.response.data
//       });
//     });
// };

// login = e => {
//   e.preventDefault();
//   axiosWithAuth()
//     .post('https://bw-anywhere-fitness.herokuapp.com/api/register/', this.state.credentials)
//     .then(res => {
//       localStorage.setItem('token', res.data.payload);
//       this.props.history.push('/TrainerApp');
//     })
//     .catch(err => console.log(err.response));
// };

// export const UPDATE_INSTRUCTOR_CLASS_START = "UPDATE_INSTRUCTOR_CLASS_START";
// export const UPDATE_INSTRUCTOR_CLASS_SUCCESS =
//   "UPDATE_INSTRUCTOR_CLASS_SUCCESS";
// export const UPDATE_INSTRUCTOR_CLASS_FAILURE =
//   "UPDATE_INSTRUCTOR_CLASS_FAILURE";
// export const updateClass = (classId, singleClass) => dispatch => {
//   dispatch({ type: UPDATE_INSTRUCTOR_CLASS_START });
//   axiosWithAuth()
//     .put(
      
//       singleClass
//     )
//     .then(res => {
//       dispatch({
//         type: UPDATE_INSTRUCTOR_CLASS_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: UPDATE_INSTRUCTOR_CLASS_FAILURE,
//         payload: err.response.data.message
//       });
//     });
// };

// export const DELETE_INSTRUCTOR_CLASS_START = "DELETE_INSTRUCTOR_CLASS_START";
// export const DELETE_INSTRUCTOR_CLASS_SUCESS = "DELETE_INSTRUCTOR_CLASS_SUCESS";
// export const DELETE_INSTRUCTOR_CLASS_FAILURE =
//   "DELETE_INSTRUCTOR_CLASS_FAILURE";
// export const deleteClass = (classId, singleClass) => dispatch => {
//   dispatch({ type: DELETE_INSTRUCTOR_CLASS_START });
//   axiosWithAuth()
//     .delete(
      
//       singleClass
//     )
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };

// /////////////CLIENT ACTIONS/////////////////////////////CLIENT ACTIONS/////////////////////////////CLIENT ACTIONS///////

// export const CLIENT_REGISTER_START = "CLIENT_REGISTER_START";
// export const CLIENT_REGISTER_SUCCESS = "CLIENT_REGISTER_SUCCESS";
// export const CLIENT_REGISTER_FAILURE = "CLIENT_REGISTER_FAILURE";
// export const registerClient = user => dispatch => {
//   dispatch({ type: CLIENT_REGISTER_START });
//   return axiosWithAuth()
//     .post("/client-register", user)
//     .then(res => {
//       dispatch({
//         type: CLIENT_REGISTER_SUCCESS,
//         payload: res.data
//       });
//       return true;
//     })
//     .catch(err => {
//       dispatch({
//         type: CLIENT_REGISTER_FAILURE,
//         payload: err.response
//       });
//     });
// };

// export const CLIENT_LOGIN_START = "CLIENT_LOGIN_START";
// export const CLIENT_LOGIN_SUCCESS = "CLIENT_LOGIN_SUCCESS";
// export const CLIENT_LOGIN_FAILURE = "CLIENT_LOGIN_FAILURE";
// export const clientLogin = credentials => dispatch => {
//   dispatch({ type: CLIENT_LOGIN_START });
//   return axiosWithAuth()
//     .post("/client-login", credentials)
//     .then(res => {
//       localStorage.setItem("token", res.data.token);
//       cookie.save("client", res.data.client);
//       dispatch({
//         type: CLIENT_LOGIN_SUCCESS,
//         payload: res.data.client
//       });
//       return true;
//     })
//     .catch(err => {
//       dispatch({
//         type: CLIENT_LOGIN_FAILURE,
//         payload: err.response.data
//       });
//     });
// };

// export const clientIsLoggedIn = client => dispatch => {
//   dispatch({ type: CLIENT_LOGIN_SUCCESS, payload: client });
// };

// export const CLIENT_LOGOUT_SUCCESS = "CLIENT_LOGOUT_SUCCESS";
// export const logoutClient = () => dispatch => {
//   dispatch({ type: CLIENT_LOGOUT_SUCCESS });
//   localStorage.removeItem("token");
//   cookie.remove("instructorId");
// };

// export const GETALLCLASSES_CLIENT_START = "GETALLCLASSES_CLIENT_START";
// export const GETALLCLASSES_CLIENT_SUCCESS = "GETALLCLASSES_CLIENT_SUCCCESS";
// export const GETALLCLASSES_CLIENT_FAILURE = "GETALLCLASSES_CLIENT_FAILURE";
// export const getAllClassesClient = () => dispatch => {
//   dispatch({ type: GETALLCLASSES_CLIENT_START });
//   axiosWithAuth()
//     .get()
//     .then(res => {
//       dispatch({
//         type: GETALLCLASSES_CLIENT_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GETALLCLASSES_CLIENT_FAILURE,
//         payload: err.response
//       });
//     });
// };

// export const GETCLASS_CLIENT_BYID_START = "GETCLASS_CLIENT_BYID_START";
// export const GETCLASS_CLIENT_BYID_SUCCESS = "GETCLASS_CLIENT_BYID_SUCCESS";
// export const GETCLASS_CLIENT_BYID_FAILURE = "GETCLASS_CLIENT_BYID_FAILURE";
// export const getClassByClientId = clientId => dispatch => {
//   dispatch({ type: GETCLASS_CLIENT_BYID_START });
//   axiosWithAuth()
//     .get(
      
//     )
//     .then(res => {
//       dispatch({
//         type: GETCLASS_CLIENT_BYID_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GETCLASS_CLIENT_BYID_FAILURE,
//         payload: err.response
//       });
//     });
// };

// export const SIGNUP_CLIENT_CLASS_START = "SIGNUP_CLIENT_CLASS_START";
// export const SIGNUP_CLIENT_CLASS_SUCCESS = "SIGNUP_CLIENT_CLASS_SUCCESS";
// export const SIGNUP_CLIENT_CLASS_FAILURE = "SIGNUP_CLIENT_CLASS_FAILURE";
// export const signUpClientClass = (clientId, classId) => dispatch => {
//   dispatch({ type: SIGNUP_CLIENT_CLASS_START });
//   return axiosWithAuth()
//     .post(
      
//     )
//     .then(res => {
//       dispatch({
//         type: SIGNUP_CLIENT_CLASS_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: SIGNUP_CLIENT_CLASS_FAILURE,
//         payload: err.response
//       });
//     });
// };