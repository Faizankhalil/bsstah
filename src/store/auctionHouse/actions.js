
import { 
    GET_AUCTIONHOUSE_REQUESTED,
    GET_AUCTIONHOUSE_SUCCESS,
    GET_AUCTIONHOUSE_FAIL,
    GET_AUCTIONHOUSEDETAILS_REQUESTED,
    GET_AUCTIONHOUSEDETAILS_SUCCESS,
    GET_AUCTIONHOUSEDETAILS_FAIL
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

 //Auction House Details

 export const getAuctionHouseDetailsRequested = (recordId) => {
    return{
        type:GET_AUCTIONHOUSEDETAILS_REQUESTED,
        payload:recordId
    }

 }
 export const getAuctionHouseDetailsSuccess = (auctionHouse) =>{
    return{
        type:GET_AUCTIONHOUSEDETAILS_SUCCESS,
        payload:auctionHouse
    }
 }
 export const getAuctionHouseDetailsFail = (error) =>{
    return{
        type:GET_AUCTIONHOUSEDETAILS_FAIL,
        payload:error
    }
 }