import React from "react"
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleUsersFollowing, getUsers, getUsersOnChange } from './../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import { getUsersCurrentPage, getUsersFetchingStatus, getUsersFollowingStatus, getUsersPageCount, getUsersSelect, getUsersTotalCount } from "../../redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageCount)
    }

    onPageChanged = (pageNumber) => {
        const { pageCount } = this.props;
        this.props.getUsersOnChange(pageNumber, pageCount)
    }
    /*[
            { id: 1, isFollowed: true, name: "Gleb", status: "ezgame ezlife", location: { city: "Brest", country: "Belarus" }, srcimg: "1.png" },
            { id: 2, isFollowed: true, name: "Ivan", status: "ezgame ezlife", location: { city: "Brest", country: "Belarus" }, srcimg: "2.png" },
            { id: 3, isFollowed: false, name: "Danik", status: "ezgame ezlife", location: { city: "Minsk", country: "Belarus" }, srcimg: "3.png" }
        ]*/

    //let users = props.users.map((user) => { <User /> })


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users totalCount={this.props.totalCount}
                pageCount={this.props.pageCount}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleUsersFollowing={this.props.toggleUsersFollowing}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelect(state),
        totalCount: getUsersTotalCount(state),
        currentPage: getUsersCurrentPage(state),
        pageCount: getUsersPageCount(state),
        isFetching: getUsersFetchingStatus(state),
        followingInProgress: getUsersFollowingStatus(state),
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleUsersFollowing,
    getUsers,
    getUsersOnChange
})(UsersContainer);