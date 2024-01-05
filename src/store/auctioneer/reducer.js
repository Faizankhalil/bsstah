import {
    GET_AUCTIONEERS_REQUESTED,
    GET_AUCTIONEERS_SUCCESS,
    GET_AUCTIONEERS_FAIL,
    GET_AUCTIONEER_DETAILS_SUCCESS,
    GET_AUCTIONEER_DETAILS_FAIL,
    ADD_AUCTIONEER_SUCCESS,
    ADD_AUCTIONEER_FAIL,
    UPDATE_AUCTIONEER_SUCCESS,
    UPDATE_AUCTIONEER_FAIL,
    DELETE_AUCTIONEER_SUCCESS,
    DELETE_AUCTIONEER_FAIL,
    SEARCH_AUCTIONEER_SUCCESS,
    SEARCH_AUCTIONEER_FAIL,
    SEARCH_AUCTIONEER_REQUESTED,

} from "./actionType"

const INIT_STATE = {
    success:false,
    count:null,
    limit: 10,
    offset: 0,
    auctioneersList:[],
    statusCode:null,
    auctioneerDetails:{},
    auctioneer:{},
    error:null,
    message:"",
    loading:false
}

const AuctioneerReducer = (state = INIT_STATE, action) =>{
    
    switch(action.type){
        case GET_AUCTIONEERS_REQUESTED:
            return{
                ...state,
                limit: action.payload.limit,
                offset: action.payload.offset,
                loading:true

            }
        case GET_AUCTIONEERS_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                count:action.payload.data.count,
                auctioneersList:action.payload.data.rows,
                statusCode:action.payload.statusCode,
                error:null,
                loading:false
            }
        case GET_AUCTIONEERS_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload,
                loading:false
            }
        case GET_AUCTIONEER_DETAILS_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                auctioneerDetails:action.payload.data,
                error:null
            }
        case GET_AUCTIONEER_DETAILS_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload
            }
        case ADD_AUCTIONEER_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                auctioneer:action.payload.data,
                message:action.payload.message
            }
        case ADD_AUCTIONEER_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload,
                message:action.payload.message
            }
        case UPDATE_AUCTIONEER_SUCCESS:
                return{
                    ...state,
                    success:action.payload.success,
                    statusCode:action.payload.statusCode,
                    auctioneer:action.payload.data,
                    message:action.payload.message
                }
        case UPDATE_AUCTIONEER_FAIL:
                return{
                    ...state,
                    success:action.payload.success,
                    statusCode:action.payload.statusCode,
                    error:action.payload,
                    message:action.payload.message
                }
                case SEARCH_AUCTIONEER_REQUESTED:
                    return{
                        ...state,
                        loading:true
                    }
                case SEARCH_AUCTIONEER_SUCCESS:
                    return{
                        ...state,
                        success:action.payload.success,
                        statusCode:action.payload.statusCode,
                        auctioneersList:action.payload.data.rows,
                        message:action.payload.message,
                        loading:false
                    }
            case SEARCH_AUCTIONEER_FAIL:
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

export default AuctioneerReducer