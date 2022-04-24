import React, {Component} from 'react';
import $ from 'jquery';

class Preloder extends Component {
    componentDidMount() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    }
    render() {
        return (
            /* Page Preloder */
            <div id="preloder">
                <div className="loader" />
            </div>
        );
    }
}

export default Preloder;