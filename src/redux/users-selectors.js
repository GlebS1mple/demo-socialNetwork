export const getUsersSelect = (state) => {
    return state.usersPage.users;
}
export const getUsersTotalCount = (state) => {
    return state.usersPage.totalCount;
}
export const getUsersCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getUsersPageCount = (state) => {
    return state.usersPage.pageCount;
}
export const getUsersFetchingStatus = (state) => {
    return state.usersPage.isFetching;
}
export const getUsersFollowingStatus = (state) => {
    return state.usersPage.followingInProgress;
}



