import {put, call, takeEvery} from "redux-saga/effects";
import { GET_CATEGORIES_REQUESTED, ADD_CATEGORY_REQUESTED, UPDATE_CATEGORY_REQUESTED, DELETE_CATEGORY_REQUESTED } from "./actionTypes";
import { 
    getCategoriesSuccess,
    getCategoriesFail,
    addCategorySuccess,
    addCategoryFail,
    updateCategorySuccess,
    updateCategoryFail,
    deleteCategorySuccess,
    deleteCategoryFail
 } from "./actions";
import { fetchCategory,addCategory,updateCategory,deleteCategory } from "../../helpers/helperFunction/categoryFunctions";


  function* onGetCategories(action){
    try{
        const { limit, offset } = action.payload;
        const response = yield call(fetchCategory,{ limit, offset })
        yield put (getCategoriesSuccess(response));
        console.log(response,"response from onGetCategories saga")
    }catch (error){
        yield put(getCategoriesFail(error))
    }
 
  }

  function* onAddCategory(action){
    try{
        const response = yield call(addCategory,action.payload);
        yield put(addCategorySuccess(response));
        console.log(response,"response from onAddCategory saga")
    }
    catch (error){
        yield put(addCategoryFail(error))
    }
  }

  function* onUpdateCategory(action){
    try{
        const response = yield call(updateCategory,action.payload);
        yield put(updateCategorySuccess(response));
        console.log(response,"response from onUpdateCategory saga")
    }
    catch (error){
        yield put(updateCategoryFail(error))
    }
  }

  function* onDeleteCategory(action){
    try{
        const response = yield call(deleteCategory,action.payload);
        yield put(deleteCategorySuccess(response));
        console.log(response,"response from onDeleteCategory saga")
    }
    catch (error){
        yield put(deleteCategoryFail(error))
    }
  }



  function* categoriesSaga(){
    yield takeEvery(GET_CATEGORIES_REQUESTED,onGetCategories)
    yield takeEvery(ADD_CATEGORY_REQUESTED,onAddCategory)
    yield takeEvery(UPDATE_CATEGORY_REQUESTED,onUpdateCategory)
    yield takeEvery(DELETE_CATEGORY_REQUESTED,onDeleteCategory)
  }
  export default categoriesSaga;