import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import axios from "axios"

const fireBaseBackend = getFirebaseBackend();
const fetchLogin = async (data) =>{
  try{
      const response = await axios.post("https://bsstah-dev.com/v1/auth/login",data,{
          headers:{
              'accept': 'application/json',
              'x-lang': 'en'
          }
      });
      console.log(response,"response from api call")
      return response
      
  } 
  catch (error){
      throw error.message;
  }
  
}
function* loginUser({ payload: { user, history } }){
  try{
    const data = {
      userName:user.email,
      password:user.password
    }
    const response = yield call(fetchLogin,data);
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    console.log(response,"response from loginSuccess saga")
    history.push("/dashboard");
}
catch (error){
  console.log(error,"error")
     yield put(apiError(error))
}

}

// function* loginUser({ payload: { user, history } }) {
//   try {
//     if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
//       const response = yield call(
//         fireBaseBackend.loginUser,
//         user.email,
//         user.password
//       );
//       yield put(loginSuccess(response));
//     } else if (import.meta.env.VITE_APP_DEFAULTAUTH === "jwt") {
//       const response = yield call(postJwtLogin, {
//         email: user.email,
//         password: user.password,
//       });
//       localStorage.setItem("authUser", JSON.stringify(response));
//       yield put(loginSuccess(response));
//     } else if (import.meta.env.VITE_APP_DEFAULTAUTH === "fake") {

//       const response = yield call(postFakeLogin, {
//         email: user.email,
//         password: user.password,
//       });
//       localStorage.setItem("authUser", JSON.stringify(response));
//       yield put(loginSuccess(response));
//     }
//     history.push("/dashboard");
//   } catch (error) {
//     yield put(apiError(error));
//   }
// }

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser");

    if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(response));
    }
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      );
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
