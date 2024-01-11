import {put, call, takeEvery} from "redux-saga/effects";
import {
    GET_BIDDER_REQUESTED,
    GET_BIDDER_DETAILS_REQUESTED,
    ADD_BIDDER_REQUESTED,
    UPDATE_BIDDER_REQUESTED,
    DELETE_BIDDER_REQUESTED,
    SEARCH_BIDDER_REQUESTED
} from "./actionType";
import {
    getBiddersSuccess,
    getBiddersFail,
    getBidderDetailsSuccess,
    getBidderDetailsFail,
    createBidderSuccess,
    createBidderFail,
    updateBidderSuccess,
    updateBidderFail,
    serachBiddersSuccess,
    searchBiddersFail
} from "./actions"
import {showToast} from "../toast/action";

import { fetchAuctioneers,fetchAuctioneer,createAuctioneer,updateAuctioneer,serachhAuctioneers } from "../../helpers/helperFunction/auctioneerApi";
import { getBiddersList } from "../../helpers/backend_helper";

function* onGetBidders(action){
    try{
        const {limit, offset} = action.payload;
        const all = limit * offset
        const response = yield call(getBiddersList,{
            limit,
            offset:all
        })
        yield put(getBiddersSuccess(response))
    }
    catch (error){
        yield put(getBiddersFail(error))
    }

}

function* onGetBidderDetails(action){
    console.log(action.payload,"action")
    try{
        const response = yield call(fetchAuctioneer, action.payload)
        yield put(getBidderDetailsSuccess(response))
    }
    catch (error){
        yield put(getBidderDetailsFail(error))
    }

}

function* onCreateBidder(action){
    try{
         const response = yield call(createAuctioneer,action.payload )
        yield put(createBidderSuccess(response))
        console.log(response,"from create auctioneer")
        const message = response.message || "Auctioneer successfully created"
        yield put(showToast(message,"success"))
       
    }
    catch(error){
        yield put(createBidderFail(error))
        const errorMessage = error?.message || "Failed to create Auctioneer"
        yield put(showToast(errorMessage,"error"))
      
    }
}

function* onUpdateBidder(action){
    try{
        const response = yield call(updateAuctioneer,action.payload )
        yield put(updateBidderSuccess(response))
        console.log(response,"from create auctioneer")
        const message = response.message || "Auctioneer successfully updated"
        yield put(showToast(message,"success"))
    }
    catch(error){
        yield put(updateBidderFail(error))
        const errorMessage = error?.message || "Failed to update Auctioneer"
        yield put(showToast(errorMessage,"error"))
    }

}

//search 
function* onSearchBidder(action){
    try{
        const response = yield call(serachhAuctioneers,action.payload )
       console.log(action.payload,"payload")
       console.log(response,"response")
       yield put(serachBiddersSuccess(response))
    }
    catch(error){
        yield put(searchBiddersFail(error))
    }
}

function* bidderSaga(){
    yield takeEvery(GET_BIDDER_REQUESTED,onGetBidders)
    yield takeEvery(GET_BIDDER_DETAILS_REQUESTED,onGetBidderDetails)
    yield takeEvery(ADD_BIDDER_REQUESTED,onCreateBidder),
    yield takeEvery(UPDATE_BIDDER_REQUESTED,onUpdateBidder),
    yield takeEvery(SEARCH_BIDDER_REQUESTED,onSearchBidder)
}

export default bidderSaga