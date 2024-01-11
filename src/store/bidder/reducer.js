import {
    GET_BIDDER_REQUESTED,
    GET_BIDDER_SUCCESS,
    GET_BIDDER_FAIL,
    GET_BIDDER_DETAILS_SUCCESS,
    GET_BIDDER_DETAILS_FAIL,
    ADD_BIDDER_SUCCESS,
    ADD_BIDDER_FAIL,
    UPDATE_BIDDER_SUCCESS,
    UPDATE_BIDDER_FAIL,
    SEARCH_BIDDER_SUCCESS,
    SEARCH_BIDDER_FAIL,
    SEARCH_BIDDER_REQUESTED,

} from "./actionType"

const INIT_STATE = {
    success:false,
    count:null,
    limit: 10,
    offset: 0,
    biddersList:[],
    statusCode:null,
    bidderDetails:{},
    bidder:{},
    error:null,
    message:"",
    loading:false
}

const BidderReducer = (state = INIT_STATE, action) =>{
    
    switch(action.type){
        case GET_BIDDER_REQUESTED:
            return{
                ...state,
                limit: action.payload.limit,
                offset: action.payload.offset,
                loading:true

            }
        case GET_BIDDER_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                count:action.payload.data.count,
                biddersList:action.payload.data.rows,
                statusCode:action.payload.statusCode,
                error:null,
                loading:false
            }
        case GET_BIDDER_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload,
                loading:false
            }
        case GET_BIDDER_DETAILS_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                bidderDetails:action.payload.data,
                error:null
            }
        case GET_BIDDER_DETAILS_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload
            }
        case ADD_BIDDER_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                bidder:action.payload.data,
                message:action.payload.message
            }
        case ADD_BIDDER_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload,
                message:action.payload.message
            }
        case UPDATE_BIDDER_SUCCESS:
                return{
                    ...state,
                    success:action.payload.success,
                    statusCode:action.payload.statusCode,
                    bidder:action.payload.data,
                    message:action.payload.message
                }
        case UPDATE_BIDDER_FAIL:
                return{
                    ...state,
                    success:action.payload.success,
                    statusCode:action.payload.statusCode,
                    error:action.payload,
                    message:action.payload.message
                }
                case SEARCH_BIDDER_REQUESTED:
                    return{
                        ...state,
                        loading:true
                    }
                case SEARCH_BIDDER_SUCCESS:
                    return{
                        ...state,
                        success:action.payload.success,
                        statusCode:action.payload.statusCode,
                        biddersList:action.payload.data.rows,
                        message:action.payload.message,
                        loading:false
                    }
            case SEARCH_BIDDER_FAIL:
                    return{
                        ...state,
                        success:action.payload.success,
                        statusCode:action.payload.statusCode,
                        error:action.payload,
                        message:action.payload.message,
                        loading:false
                    }
        default:
            return state
    }

}

export default BidderReducer