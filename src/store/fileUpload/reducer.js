
import { UPLOAD_FILE_FAIL, UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS } from "./actionType"

const INIT_STATE = {
    loading:false,
    error:null,
    file:{},
}

const fileReducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case UPLOAD_FILE_REQUEST:
            return{
                ...state,
                loading:true
            }
        case UPLOAD_FILE_SUCCESS:
            return{
                ...state,
                loading:false,
                file:action.payload.data,
                error:null

            }
        case UPLOAD_FILE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
            default:
                return state
    }

}
export default fileReducer