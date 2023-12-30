import {put, call, takeEvery} from "redux-saga/effects";
import {
    GET_AUCTIONHOUSE_REQUESTED
} from "./actionType";
import { 
    getAuctionHouseSuccess,
    getAuctionHouseFail
 } from "./actions";
import { fetchAuctionHouse } from "../../helpers/helperFunction/auctionHouseApi";
import {showToast} from "../toast/action";

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

function* auctionHouseSaga(){
    yield takeEvery(GET_AUCTIONHOUSE_REQUESTED,onGetAuctioneerHouseList)
}

export default auctionHouseSaga

