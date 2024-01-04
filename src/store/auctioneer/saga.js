import {put, call, takeEvery} from "redux-saga/effects";
import {
    GET_AUCTIONEERS_REQUESTED,
    GET_AUCTIONEER_DETAILS_REQUESTED,
    ADD_AUCTIONEER_REQUESTED,
    UPDATE_AUCTIONEER_REQUESTED,
    DELETE_AUCTIONEER_REQUESTED,
    SEARCH_AUCTIONEER_REQUESTED
} from "./actionType";
import {
    getAuctioneersSuccess,
    getAuctioneersFail,
    getAuctioneerDetailsSuccess,
    getAuctioneerDetailsFail,
    createAuctioneerSuccess,
    createAuctioneerFail,
    updateAuctioneerSuccess,
    updateAuctioneerFail,
    serachAuctioneersSuccess,
    searchAuctioneersFail
} from "./actions"
import {showToast} from "../toast/action";

import { fetchAuctioneers,fetchAuctioneer,createAuctioneer,updateAuctioneer,serachhAuctioneers } from "../../helpers/helperFunction/auctioneerApi";

function* onGetAuctioneers(action){
    try{
        const {limit, offset} = action.payload;
        const response = yield call(fetchAuctioneers,{
            limit,
            offset
        })
        yield put(getAuctioneersSuccess(response))
    }
    catch (error){
        yield put(getAuctioneersFail(error))
    }

}

function* onGetAuctioneerDetails(action){
    try{
        const response = yield call(fetchAuctioneer, action.payload)
        yield put(getAuctioneerDetailsSuccess(response))
    }
    catch (error){
        yield put(getAuctioneerDetailsFail(error))
    }

}

function* onCreateAuctioneer(action){
    try{
         const response = yield call(createAuctioneer,action.payload )
        yield put(createAuctioneerSuccess(response))
        console.log(response,"from create auctioneer")
        const message = response.message || "Auctioneer successfully created"
        yield put(showToast(message,"success"))
       
    }
    catch(error){
        yield put(createAuctioneerFail(error))
        const errorMessage = error?.message || "Failed to create Auctioneer"
        yield put(showToast(errorMessage,"error"))
      
    }
}

function* onUpdateAuctioneer(action){
    try{
        const response = yield call(updateAuctioneer,action.payload )
        yield put(updateAuctioneerSuccess(response))
        console.log(response,"from create auctioneer")
        const message = response.message || "Auctioneer successfully updated"
        yield put(showToast(message,"success"))
    }
    catch(error){
        yield put(updateAuctioneerFail(error))
        const errorMessage = error?.message || "Failed to update Auctioneer"
        yield put(showToast(errorMessage,"error"))
    }

}

//search 
function* onSearchAuctioneer(action){
    try{
        const response = yield call(serachhAuctioneers,action.payload )
       console.log(action.payload,"payload")
       console.log(response,"response")
       yield put(serachAuctioneersSuccess(response))
    }
    catch(error){
        yield put(searchAuctioneersFail(error))
    }
}

function* auctioneerSaga(){
    yield takeEvery(GET_AUCTIONEERS_REQUESTED,onGetAuctioneers)
    yield takeEvery(GET_AUCTIONEER_DETAILS_REQUESTED,onGetAuctioneerDetails)
    yield takeEvery(ADD_AUCTIONEER_REQUESTED,onCreateAuctioneer),
    yield takeEvery(UPDATE_AUCTIONEER_REQUESTED,onUpdateAuctioneer),
    yield takeEvery(SEARCH_AUCTIONEER_REQUESTED,onSearchAuctioneer)
}

export default auctioneerSaga