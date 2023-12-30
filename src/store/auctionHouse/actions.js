
import { 
    GET_AUCTIONHOUSE_REQUESTED,
    GET_AUCTIONHOUSE_SUCCESS,
    GET_AUCTIONHOUSE_FAIL
 } from "./actionType";

//  Auction House List
 export const getAuctionHouseRequested = (limit,offset) => {
    return{
        type:GET_AUCTIONHOUSE_REQUESTED,
        payload:{
            limit,
            offset,
        }
    }

 }
 export const getAuctionHouseSuccess = (auctionHouseList) =>{
    return{
        type:GET_AUCTIONHOUSE_SUCCESS,
        payload:auctionHouseList
    }
 }
 export const getAuctionHouseFail = (error) =>{
    return{
        type:GET_AUCTIONHOUSE_FAIL,
        payload:error
    }
 }