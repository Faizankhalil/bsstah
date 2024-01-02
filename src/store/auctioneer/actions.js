import {
    GET_AUCTIONEERS_REQUESTED,
    GET_AUCTIONEERS_SUCCESS,
    GET_AUCTIONEERS_FAIL,
    GET_AUCTIONEER_DETAILS_REQUESTED,
    GET_AUCTIONEER_DETAILS_SUCCESS,
    GET_AUCTIONEER_DETAILS_FAIL,
    ADD_AUCTIONEER_REQUESTED,
    ADD_AUCTIONEER_SUCCESS,
    ADD_AUCTIONEER_FAIL,
    UPDATE_AUCTIONEER_REQUESTED,
    UPDATE_AUCTIONEER_SUCCESS,
    UPDATE_AUCTIONEER_FAIL,
    DELETE_AUCTIONEER_REQUESTED,
    DELETE_AUCTIONEER_SUCCESS,
    DELETE_AUCTIONEER_FAIL
} from "./actionType";

// fetch auctioneers List
export const getAuctioneers = (limit,offset) => {
    return{
        type:GET_AUCTIONEERS_REQUESTED,
        payload:{
            limit,
            offset,
        }
    }
}
export const getAuctioneersSuccess = (auctioneers) => {
    return{
        type:GET_AUCTIONEERS_SUCCESS,
        payload:auctioneers
    }
}
export const getAuctioneersFail = (error) => {
    return{
        type:GET_AUCTIONEERS_FAIL,
        payload:error
    }
}

// fetch auctioneer details
export const getAuctioneerDetails = (recordId) => {
    return{
        type:GET_AUCTIONEER_DETAILS_REQUESTED,
        payload:recordId
    }
}
export const getAuctioneerDetailsSuccess = (auctioneerDetails) => {
    return{
        type:GET_AUCTIONEER_DETAILS_SUCCESS,
        payload:auctioneerDetails
    }
}
export const getAuctioneerDetailsFail = (error) => {
    return{
        type:GET_AUCTIONEER_DETAILS_FAIL,
        payload:error
    }
}

// create Auctioneer

export const createAuctioneerRequest =(auctioneer)=>{
    
    return{
        type:ADD_AUCTIONEER_REQUESTED,
        payload:auctioneer
    }
}
export const createAuctioneerSuccess =(auctioneer)=>{
    return{
        type:ADD_AUCTIONEER_SUCCESS,
        payload:auctioneer
    }
}
export const createAuctioneerFail =(error)=>{
    return{
        type:ADD_AUCTIONEER_FAIL,
        payload:error
    }
}

// update Auctioneer

export const updateAuctioneerRequest =(auctioneer)=>{
    return{
        type:UPDATE_AUCTIONEER_REQUESTED,
        payload:auctioneer
    }
}
export const updateAuctioneerSuccess =(auctioneer)=>{
    return{
        type:UPDATE_AUCTIONEER_SUCCESS,
        payload:auctioneer
    }
}
export const updateAuctioneerFail =(error)=>{
    return{
        type:UPDATE_AUCTIONEER_FAIL,
        payload:error
    }
}