import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import cookies from 'react-cookies';
import {logoutUser} from "../actions/UserCreators";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const history = useNavigate()

    const sign_out = (event) => {
        event.preventDefault()
        cookies.remove("access_token")
        cookies.remove("user")
        dispatch(logoutUser())
        history("/")
    }

    let userCurrent = <Link to="./login"><span className="icon_profile" /></Link>
    if (user != null)
        userCurrent = (
            <div className="user">
                <Link className="dropbtn" to="./"> {user.username} </Link>
                <ul className="dropdown">
                    <li><Link to="/">Account </Link></li>
                    <li><Link to="/" onClick={sign_out}>Sign out </Link></li>
                </ul>
            </div>
        )

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <Link to="/">
                                <img src="anime_main/img/logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <Link to="./">Homepage</Link>
                                    </li>
                                    <li><Link to="./">News</Link></li>
                                    <li><Link to="/movies">Movies <span className="arrow_carrot-down" /></Link>
                                        <ul className="dropdown">
                                            <li><a href="./categories.html">Cinema</a></li>
                                            <li><a href="./anime-details.html">Anime</a></li>
                                            <li><a href="./anime-watching.html">TV Series</a></li>
                                            <li><a href="./blog-details.html">Document</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/games">Video Games</Link></li>
                                    <li><Link to="/book">Books</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="header__right">
                            <a href="#" className="search-switch"><span className="icon_search" /></a>
                            {/*<Link to="./login"><span className="icon_profile" /></Link>*/}
                            { userCurrent }
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap" />
            </div>
            {/* Search model Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch"><i className="icon_close" /></div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </header>
    );
}