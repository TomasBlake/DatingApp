import * as actionTypes from './actionTypes';

const initialState = {
    pending: false,
    token: null,
    currentUser: null,
    currentUserDetail: null,
    error: null,
    signedIn: false,
    users: [],
    selectedUser: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_PENDING:
            return {
                ...state, 
                pending: true 
            };
        case actionTypes.SUBMIT_SUCCESS:
            return { 
                ...state,
                pending: false,
                token: action.payload.token,
                currentUser: action.payload.user,
                signedIn: true
            };
        case actionTypes.SUBMIT_FAIL:
            return { 
                ...state,
                pending: false,
                error: action.payload
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                token: null,
                signedIn: false,
                token: null,
                currentUser: null
            };
        case actionTypes.GETUSERS_PENDING:
            return {
                ...state,
                pending: true
            };
        case actionTypes.GETUSERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload
            };
        case actionTypes.GETUSERS_FAIL:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        case actionTypes.LOAD_USER_FROM_TOKEN: 
            return {
                ...state,
                signedIn: true,
                token: action.payload.token,
                currentUser: action.payload.user
            };
        case actionTypes.GET_USER_PENDING:
            return {
                ...state,
                pending: true
            };
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                selectedUser: action.payload
            };
        case actionTypes.GET_USER_FAIL:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        case actionTypes.GET_CURRENT_USER_DETAIL_PENDING:
            return {
                ...state,
                pending: true
            }
        case actionTypes.GET_CURRENT_USER_DETAIL_SUCCESS:
            return {
                ...state,
                pending: false,
                currentUserDetail: action.payload

            }
        case actionTypes.GET_CURRENT_USER_DETAIL_FAIL:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        case actionTypes.EDIT_CURRENT_USER_DETAIL:
            return {
                ...state,
                currentUserDetail: action.payload
            };
        case actionTypes.SUBMIT_UPDATED_USER_DETAIL_PENDING:
            return {
                ...state,
                pending: true
            };
        case actionTypes.SUBMIT_UPDATED_USER_DETAIL_SUCCESS:
            return {
                ...state,
                pending: false
            };
        case actionTypes.SUBMIT_UPDATED_USER_DETAIL_FAIL:
            return {
                ...state,
                pending: false
            };
        default:
            return state;
    }
}

export default reducer;