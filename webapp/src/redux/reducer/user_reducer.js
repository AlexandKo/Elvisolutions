import {userApi} from "../../api/userApi";
import {getUserByIdAction, getUsersListAction, searchUserAction, setMessageAction} from "../action/user_action";
import {
    ADD_OPERATION_SUCCESS,
    DELETE_OPERATION_SUCCESS,
    MESSAGE_TYPE_SUCCESS,
    MESSAGE_TYPE_WARNING,
    UPDATE_OPERATION_SUCCESS
} from "../../util/constants/constant_list";
import {findError} from "../../util/errors";

const initialState = {
    users: {},
    userById: {},
    message: {},
    search: '',
    searchMode: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'user/GET_USERS_PAGE':
            return {
                ...state,
                users: action.payload
            }
        case 'user/GET_USER_BY_ID':
            return {
                ...state,
                userById: action.payload
            }
        case 'user/CLEAR_USER_BY_ID':
            return {
                ...state,
                userById: {}
            }
        case 'user/SET_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
        case 'user/CLEAR_MESSAGE':
            return {
                ...state,
                message: {}
            }
        case 'user/SEARCH_USER':
            return {
                ...state,
                users: action.payload
            }
        case 'user/SET_SEARCH_MODE':
            return {
                ...state,
                searchMode: action.payload
            }
        case 'user/SET_SEARCH_STRING':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
};

export const getUsersPageList = (page) => async (dispatch) => {
    await userApi.getUsersPage(page).then(response => {
        if (response.status === 200) {
            dispatch(getUsersListAction(response.data));
        }
    }).catch((error) => {
        dispatch(setMessageAction({type: MESSAGE_TYPE_WARNING, text: findError(error.response.status)}));
    });
}

export const getUserById = (id) => async (dispatch) => {
    await userApi.getUserById(id).then(response => {
        if (response.status === 200) {
            dispatch(getUserByIdAction(response.data));
        }
    }).catch((error) => {
        dispatch(setMessageAction({type: MESSAGE_TYPE_WARNING, text: findError(error.response.status)}));
    });
}

export const deleteUserById = (id, page) => async (dispatch) => {
    await userApi.deleteUserById(id).then(response => {
        if (response.status === 200) {
            dispatch(getUsersPageList(page));
            dispatch(setMessageAction({type: MESSAGE_TYPE_SUCCESS, text: DELETE_OPERATION_SUCCESS}));
        }
    }).catch(() => {
        dispatch(setMessageAction({type: MESSAGE_TYPE_WARNING, text: findError(10001)}));
    });
}

export const addUser = (user) => async (dispatch) => {
    await userApi.addUser(user).then(response => {
        if (response.status === 200) {
            dispatch(setMessageAction({type: MESSAGE_TYPE_SUCCESS, text: ADD_OPERATION_SUCCESS}));
        }
    }).catch(() => {
        dispatch(setMessageAction({type: MESSAGE_TYPE_WARNING, text: findError(10002)}));
    });
}

export const updateUser = (user) => async (dispatch) => {
    await userApi.updateUser(user).then(response => {
        if (response.status === 200) {
            dispatch(setMessageAction({type: MESSAGE_TYPE_SUCCESS, text: UPDATE_OPERATION_SUCCESS}));
        }
    }).catch(() => {
        dispatch(setMessageAction({type: MESSAGE_TYPE_WARNING, text: findError(10003)}));
    });
}

export const searchUser = (page, search) => async (dispatch) => {
    await userApi.searchUser(page, search).then(response => {
        if (response.status === 200) {
            dispatch(searchUserAction(response.data));
        }
    }).catch((error) => {
        dispatch(setMessageAction({type: MESSAGE_TYPE_WARNING, text: findError(error.response.status)}));
    });
}

export default userReducer;