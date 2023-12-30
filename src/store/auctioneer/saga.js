import {put, call, takeEvery} from "redux-saga/effects";
import {
    GET_AUCTIONEERS_REQUESTED,
    GET_AUCTIONEER_DETAILS_REQUESTED,
    ADD_AUCTIONEER_REQUESTED,
    UPDATE_AUCTIONEER_REQUESTED,
    DELETE_AUCTIONEER_REQUESTED
} from "./actionType";
import {
    getAuctioneersSuccess,
    getAuctioneersFail,
    getAuctioneerDetailsSuccess,
    getAuctioneerDetailsFail,
    createAuctioneerSuccess,
    createAuctioneerFail,
} from "./actions"
import {showToast} from "../toast/action";

import { fetchAuctioneers,fetchAuctioneer,createAuctioneer } from "../../helpers/helperFunction/auctioneerApi";

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

function* auctioneerSaga(){
    yield takeEvery(GET_AUCTIONEERS_REQUESTED,onGetAuctioneers)
    yield takeEvery(GET_AUCTIONEER_DETAILS_REQUESTED,onGetAuctioneerDetails)
    yield takeEvery(ADD_AUCTIONEER_REQUESTED,onCreateAuctioneer)
}

export default auctioneerSaga