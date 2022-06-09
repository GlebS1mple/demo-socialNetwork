import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const src = "https://glebs1mple.github.io/demo-socialNetwork/img/";
    return (
        <div className={s.main}>

            <div className={s.block}>
                <NavLink to="/Main" className={s.logolink} >
                    <img src={src + "\logo.png"} alt="" className={s.img} />
                </NavLink>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li className={s.li} ><NavLink to="/Main" className={s.link} > <span className={s.linkspan}>Home</span>
                            <img src={src + "home.png"} className={s.mobileimg} alt="" />
                        </NavLink></li>
                        <li className={s.li} ><NavLink to="/Users" className={s.link} ><span className={s.linkspan}>Users</span>
                            <img src={src + "users.png"} className={s.mobileimg} alt="" />
                        </NavLink></li>
                        <li className={s.li} ><NavLink to="/Messenger" className={s.link} ><span className={s.linkspan}>Messenger</span>
                            <img src={src + "messenger.png"} className={s.mobileimg} alt="" />
                        </NavLink></li>
                    </ul>
                </nav>
                <div className="">
                    {props.isAuth ? <div className={s.loginblock}>
                        <div className={s.name}>{props.login}</div>
                        <button className={s.logout} onClick={props.logout}>Log out</button>
                    </div> : <NavLink to={"/login"} className={s.spanlogin}><span >Login</span></NavLink>}
                </div>
            </div>
        </div>

    )
}

export default Header;