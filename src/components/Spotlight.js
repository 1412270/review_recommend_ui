import React, {Component} from 'react';

class Spotlight extends Component {
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
            <section className="hero">
                <div className="container">
                    <div className="hero__slider owl-carousel">
                        <div className="hero__items set-bg" data-setbg={process.env.PUBLIC_URL + "/anime_main/img/hero/hero-1.jpg"}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items set-bg" data-setbg={process.env.PUBLIC_URL + "/anime_main/img/hero/hero-1.jpg"}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items set-bg" data-setbg={process.env.PUBLIC_URL + "/anime_main/img/hero/hero-1.jpg"}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Spotlight;