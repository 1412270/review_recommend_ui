import React from 'react';
import './Layout.css';
import Header from "../../components/Header"
import Spotlight from "../../components/Spotlight"
import Footer from "../../components/Footer";

function Layout() {
    return (
        <div className="Layout">
            <Header/>
            <Spotlight/>
            <Footer/>
        </div>
    );
}

export default Layout;