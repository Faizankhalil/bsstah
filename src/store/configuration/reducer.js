import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAIL,
    UPDATE_CATEGORY_SUCCESS, 
    UPDATE_CATEGORY_FAIL, 
    DELETE_CATEGORY_SUCCESS, 
    DELETE_CATEGORY_FAIL
} from "./actionTypes";

const INIT_STATE = {
    categories:[],
    category:null,
    error:null
}

const CategoriesReducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories:action.payload,
                error:null
            }
        case GET_CATEGORIES_FAIL:
            return{
                ...state,
                error:action.payload,
            }
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                category:action.payload,
                error:null
            }
        case ADD_CATEGORY_FAIL:
            return{
                ...state,
                error:action.payload,
            }
        case UPDATE_CATEGORY_SUCCESS:
                return {
                    ...state,
                    category:action.payload,
                    error:null
                }
            case UPDATE_CATEGORY_FAIL:
                return{
                    ...state,
                    error:action.payload,
                }
                case DELETE_CATEGORY_SUCCESS:
                    return {
                        ...state,
                        categories:state.categories.filter(category => category.id !== action.payload.recordId),
                        error:null
                    }
                case DELETE_CATEGORY_FAIL:
                    return{
                        ...state,
                        error:action.payload,
                    }
        default:
            return state
    }
}

export default CategoriesReducer