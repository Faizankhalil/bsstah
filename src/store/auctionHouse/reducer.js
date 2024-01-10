import {
    GET_AUCTIONHOUSE_SUCCESS,
    GET_AUCTIONHOUSE_FAIL,
    GET_AUCTIONHOUSEDETAILS_SUCCESS,
    GET_AUCTIONHOUSEDETAILS_FAIL
} from "./actionType"

const INIT_STATE = {
    success:false,
    count:null,
    auctionHouseList:[],
    statusCode:null,
    auctionHouseDetails:{},
    auctionHouse:{},
    error:null,
    message:""
}

const auctionHouseReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case GET_AUCTIONHOUSE_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                count:action.payload.data.count,
                auctionHouseList:action.payload.data.rows,
                statusCode:action.payload.statusCode,
                error:null
            }
        case GET_AUCTIONHOUSE_FAIL:
            return{
                ...state,
                success:action.payload.success,
                statusCode:action.payload.statusCode,
                error:action.payload
            }
        case GET_AUCTIONHOUSEDETAILS_SUCCESS:
            return{
                ...state,
                auctionHouse:action.payload.data,
                error:null
            }
        case GET_AUCTIONHOUSEDETAILS_FAIL:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }

}

export default auctionHouseReducer