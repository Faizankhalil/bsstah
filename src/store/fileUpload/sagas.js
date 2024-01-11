import {put, call, takeEvery} from "redux-saga/effects";
import { UPLOAD_FILE_REQUEST } from "./actionType";
import { uploadFileSuccess,uploadFileFail } from "./action";
import {showToast} from "../toast/action";
import { uploadfile } from "../../helpers/backend_helper";

function* onUploadFile(action){
try{
    console.log(action.payload.get('file') ,"actionpayload")
  
    const response = yield call(uploadfile,action.payload )
    yield put(uploadFileSuccess(response))
    console.log(response,"from file upload")
    const message = response.message || "file successfully uploaded"
    yield put(showToast(message,"success"))
}
catch(error){
    yield put(uploadFileFail(error))
    const errorMessage = error?.message || "Failed to upload"
    yield put(showToast(errorMessage,"error"))
}
}

function* uploadSaga(){
    yield takeEvery(UPLOAD_FILE_REQUEST,onUploadFile)
}
export default uploadSaga