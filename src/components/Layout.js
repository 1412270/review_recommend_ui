import React, {Component} from "react";
import Preloder from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        return (
            <div className="Layout">
                <Preloder/>
                <Header/>
                {this.props.content}
                <Footer/>
            </div>
        );
    }
}

export default Layout;