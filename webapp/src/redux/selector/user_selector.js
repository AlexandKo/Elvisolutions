import {useSelector} from "react-redux";

export const GetUsersDataPage = () => {
    return useSelector(state => state.user.users.content)
}

export const GetTotalElementsInDatabase = () => {
    return useSelector(state => state.user.users.totalElements)
}

export const GetTotalPages = () => {
    return useSelector(state => state.user.users.totalPages)
}

export const GetUserById = () => {
    return useSelector(state => state.user.userById)
}

export const GetCurrentPages = () => {
    return useSelector(state => state.user.users.number)
}

export const GetNumberOfElementsOnPage = () => {
    return useSelector(state => state.user.users.numberOfElements)
}
export const GetMessage = () => {
    return useSelector(state => state.user.message)
}
export const GetSearchMode = () => {
    return useSelector(state => state.user.searchMode)
}
export const GetSearchString = () => {
    return useSelector(state => state.user.search)
}