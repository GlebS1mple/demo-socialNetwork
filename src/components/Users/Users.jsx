import React from "react";
import s from "../Users/Users.module.css";
import Paginator from "../common/FormControls/Paginator/Paginator";
import User from "./User/User";



let Users = ({ currentPage, onPageChanged, totalCount, pageCount, ...props }) => {
    return <div className={s.main}>
        {
            props.users.map(user => <User key={user.id} user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
        }
        <Paginator portionSize={10} currentPage={currentPage} onPageChanged={onPageChanged} totalCount={totalCount} pageCount={pageCount} />
        {/*<div className={s.block}>
            {
                pages.map((page) => {
                    return <button className={props.currentPage === page ? s.selectedpage : s.page}
                        onClick={() => { props.onPageChanged(page) }}>{page}</button>
                })
            }
        </div>*/}
    </div>
}


export default Users;


