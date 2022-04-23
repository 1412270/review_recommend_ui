import React, {Component} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from "../view/Layout/Layout";
import Movies from "../view/Movies/Movies";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }
    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header__nav">
                                <nav className="header__menu mobile-menu">
                                    <ul>
                                        <li className="active"><a href="./index.html">Homepage</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="./categories.html">Movies <span className="arrow_carrot-down" /></a>
                                            <ul className="dropdown">
                                                <li><a href="./categories.html">Cinema</a></li>
                                                <li><a href="./anime-details.html">Anime</a></li>
                                                <li><a href="./anime-watching.html">TV Series</a></li>
                                                <li><a href="./blog-details.html">Document</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./blog.html">Video Games</a></li>
                                        <li><a href="#">Book</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header__right">
                                <a href="#" className="search-switch"><span className="icon_search" /></a>
                                <a href="./login.html"><span className="icon_profile" /></a>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap" />
                </div>
            </header>
        );
    }
}

export default Header;