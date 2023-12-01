import {
    GET_CATEGORIES_REQUESTED,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL, 
    ADD_CATEGORY_REQUESTED, 
    ADD_CATEGORY_SUCCESS, 
    ADD_CATEGORY_FAIL, 
    UPDATE_CATEGORY_REQUESTED, 
    UPDATE_CATEGORY_SUCCESS, 
    UPDATE_CATEGORY_FAIL, 
    DELETE_CATEGORY_REQUESTED, 
    DELETE_CATEGORY_SUCCESS, 
    DELETE_CATEGORY_FAIL
} from "./actionTypes";
// get 
export const getCategoriess =(limit, offset)=>({
    
    type:GET_CATEGORIES_REQUESTED,
    payload: {
        limit, 
        offset, 
      },
})

export const getCategoriesSuccess =(categories)=>({
    type:GET_CATEGORIES_SUCCESS,
    payload:categories
})

export const getCategoriesFail = (error) =>({
    type:GET_CATEGORIES_FAIL,
    payload:error
})

//add
export const addCategory = (category) =>({
    type:ADD_CATEGORY_REQUESTED,
    payload:category
})

export const addCategorySuccess = (category) =>({
    type:ADD_CATEGORY_SUCCESS,
    payload:category
})

export const addCategoryFail = (error) =>({
    type:ADD_CATEGORY_FAIL,
    payload:error
})

// update
export const updateCategory = (category) =>({
    type:UPDATE_CATEGORY_REQUESTED,
    payload:category
})

export const updateCategorySuccess = (category) =>({
    type:UPDATE_CATEGORY_SUCCESS,
    payload:category
})

export const updateCategoryFail = (error) =>({
    type:UPDATE_CATEGORY_FAIL,
    payload:error
})

//delete
export const deleteCategory = (RecordId) =>({
    type:DELETE_CATEGORY_REQUESTED,
    payload:RecordId
})

export const deleteCategorySuccess = (RecordId) =>({
    type:DELETE_CATEGORY_SUCCESS,
    payload:RecordId
})

export const deleteCategoryFail = (error) =>({
    type:DELETE_CATEGORY_FAIL,
    payload:error
})