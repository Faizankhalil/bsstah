import { UPLOAD_FILE_SUCCESS,UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST } from "./actionType";
export const uploadFileRequested = (file) =>{
    return{
        type:UPLOAD_FILE_REQUEST,
        payload:file
    }
}
export const uploadFileSuccess = (file) =>{
    return{
        type:UPLOAD_FILE_SUCCESS,
        payload:file
    }
}
export const uploadFileFail =(error)=>{
    return{
        type:UPLOAD_FILE_FAIL,
        payload:error
    }
}