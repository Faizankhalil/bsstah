import {put, call, takeEvery} from "redux-saga/effects";
import {
    GET_AUCTIONHOUSE_REQUESTED,
    GET_AUCTIONHOUSEDETAILS_REQUESTED
} from "./actionType";
import { 
    getAuctionHouseSuccess,
    getAuctionHouseFail,
    getAuctionHouseDetailsSuccess
 } from "./actions";
import { fetchAuctionHouse } from "../../helpers/helperFunction/auctionHouseApi";
import {showToast} from "../toast/action";
import { getAuctionHouseDetail } from "../../helpers/fakebackend_helper";
import { getAuctioneerDetailsFail } from "../auctioneer/actions";


function* onGetAuctioneerHouseList(action){
    try{
        const {limit, offset} = action.payload;
        const response = yield call(fetchAuctionHouse,{
            limit,
            offset
        })
        yield put(getAuctionHouseSuccess(response))
    }
    catch (error){
        yield put(getAuctionHouseFail(error))
    }

}

function* onGetAuctionHouseDetail(action){
    try{
        const response = yield call(getAuctionHouseDetail,action.payload)
        yield put(getAuctionHouseDetailsSuccess(response))
    }
    catch(error){
        yield put(getAuctioneerDetailsFail(error))

    }
}

function* auctionHouseSaga(){
    yield takeEvery(GET_AUCTIONHOUSE_REQUESTED,onGetAuctioneerHouseList)
    yield takeEvery(GET_AUCTIONHOUSEDETAILS_REQUESTED,onGetAuctionHouseDetail)
}

export default auctionHouseSaga

