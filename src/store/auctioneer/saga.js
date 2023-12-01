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
    getAuctioneerDetailsFail
} from "./actions"

import { fetchAuctioneers,fetchAuctioneer } from "../../helpers/helperFunction/auctioneerApi";

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

function* auctioneerSaga(){
    yield takeEvery(GET_AUCTIONEERS_REQUESTED,onGetAuctioneers)
    yield takeEvery(GET_AUCTIONEER_DETAILS_REQUESTED,onGetAuctioneerDetails)
}

export default auctioneerSaga