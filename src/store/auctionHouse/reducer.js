import {
    GET_AUCTIONHOUSE_SUCCESS,
    GET_AUCTIONHOUSE_FAIL
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
        default:
            return state
    }

}

export default auctionHouseReducer