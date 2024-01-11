import {
    GET_BIDDER_REQUESTED,
    GET_BIDDER_SUCCESS,
    GET_BIDDER_FAIL,
    GET_BIDDER_DETAILS_REQUESTED,
    GET_BIDDER_DETAILS_SUCCESS,
    GET_BIDDER_DETAILS_FAIL,
    ADD_BIDDER_REQUESTED,
    ADD_BIDDER_SUCCESS,
    ADD_BIDDER_FAIL,
    UPDATE_BIDDER_REQUESTED,
    UPDATE_BIDDER_SUCCESS,
    UPDATE_BIDDER_FAIL,
    DELETE_BIDDER_REQUESTED,
    DELETE_BIDDER_SUCCESS,
    DELETE_BIDDER_FAIL,
    SEARCH_BIDDER_REQUESTED,
    SEARCH_BIDDER_SUCCESS,
    SEARCH_BIDDER_FAIL
} from "./actionType";

// fetch auctioneers List
export const getBidders = (limit,offset) => {
    return{
        type:GET_BIDDER_REQUESTED,
        payload:{
            limit,
            offset,
        }
    }
}
export const getBiddersSuccess = (bidders) => {
    return{
        type:GET_BIDDER_SUCCESS,
        payload:bidders
    }
}
export const getBiddersFail = (error) => {
    return{
        type:GET_BIDDER_FAIL,
        payload:error
    }
}

// fetch auctioneer details
export const getBidderDetails = (recordId) => {
    return{
        type:GET_BIDDER_DETAILS_REQUESTED,
        payload:recordId
    }
}
export const getBidderDetailsSuccess = (biddersDetails) => {
    return{
        type:GET_BIDDER_DETAILS_SUCCESS,
        payload:biddersDetails
    }
}
export const getBidderDetailsFail = (error) => {
    return{
        type:GET_BIDDER_DETAILS_FAIL,
        payload:error
    }
}

// create Auctioneer

export const createBidderRequest =(bidder)=>{
    
    return{
        type:ADD_BIDDER_REQUESTED,
        payload:bidder
    }
}
export const createBidderSuccess =(bidder)=>{
    return{
        type:ADD_BIDDER_SUCCESS,
        payload:bidder
    }
}
export const createBidderFail =(error)=>{
    return{
        type:ADD_BIDDER_FAIL,
        payload:error
    }
}

// update Auctioneer

export const updateBidderRequest =(bidder)=>{
    return{
        type:UPDATE_BIDDER_REQUESTED,
        payload:bidder
    }
}
export const updateBidderSuccess =(bidder)=>{
    return{
        type:UPDATE_BIDDER_SUCCESS,
        payload:bidder
    }
}
export const updateBidderFail =(error)=>{
    return{
        type:UPDATE_BIDDER_FAIL,
        payload:error
    }
}

//Search auctioneers

export const searchBiddersRequest = (limit,offset,fullName) => {
    return{
        type:SEARCH_BIDDER_REQUESTED,
        payload:{
            limit,
            offset,
            fullName,
        }
    }
}
export const serachBiddersSuccess = (bidders) => {
    return{
        type:SEARCH_BIDDER_SUCCESS,
        payload:bidders
    }
}
export const searchBiddersFail = (error) => {
    return{
        type:SEARCH_BIDDER_FAIL,
        payload:error
    }
}
