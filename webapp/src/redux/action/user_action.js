export const getUsersList = 'user/GET_USERS_PAGE';
export const getUserById = 'user/GET_USER_BY_ID';
export const clearUserById = 'user/CLEAR_USER_BY_ID';
export const setMessage = 'user/SET_MESSAGE';
export const clearMessage = 'user/CLEAR_MESSAGE';
export const searchUser = 'user/SEARCH_USER';
export const setSearchMode = 'user/SET_SEARCH_MODE';
export const setSearchString = 'user/SET_SEARCH_STRING';

export const getUsersListAction = (page) => {
    return {type: getUsersList, payload: page};
}
export const getUserByIdAction = (id) => {
    return {type: getUserById, payload: id};
}
export const clearUserByIdAction = () => {
    return {type: clearUserById};
}
export const setMessageAction = (message) => {
    return {type: setMessage, payload: message};
}
export const clearMessageAction = () => {
    return {type: clearMessage};
}
export const searchUserAction = (search) => {
    return {type: searchUser, payload: search};
}
export const setSearchModeAction = (mode) => {
    return {type: setSearchMode, payload: mode};
}
export const setSearchStringAction = (search) => {
    return {type: setSearchString, payload: search};
}