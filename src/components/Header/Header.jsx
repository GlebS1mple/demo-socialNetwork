import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.main}>

            <div className={s.block}>

                <img src="../img/logo.png" alt="" className={s.img} />
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li className={s.li} ><NavLink to="/Main" className={s.link} >Home</NavLink></li>
                        <li className={s.li} ><a className={s.link}>Notification</a></li>
                        <li className={s.li} ><a className={s.link}>Watch</a></li>
                        <li className={s.li} ><a className={s.link}>Marketplace</a></li>
                        <li className={s.li} ><NavLink to="/Users" className={s.link} >Users</NavLink></li>
                        <li className={s.li} ><NavLink to="/Messenger" className={s.link} >Messenger</NavLink></li>
                        <li className={s.li} ><a className={s.link}>Live</a></li>
                    </ul>
                </nav>
                <div className="">
                    {props.isAuth ? <div className={s.j}>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={"/login"}>Login</NavLink>}

                    <img src="../img/loop.png" alt="" className={s.search} />
                    <img src="../img/profile_image.png" alt="" className={s.profile} />
                </div>
            </div>
        </div>

    )
}

export default Header;