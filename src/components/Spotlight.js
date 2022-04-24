import React, {Component} from 'react';
import $ from 'jquery';
import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';

/*------------------
       OwlCarousel options
       --------------------*/

class Spotlight extends Component {
    componentDidMount() {
        $('.set-bg').each(function() {
            const bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        })
    }
    render() {
        const owlOptions = {
            loop: true,
            margin: 0,
            items: 1,
            dots: true,
            nav: true,
            navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1200,
            autoWidth: false,
            autoplay: true,
            mouseDrag: false
        };
        return (
            <section className="hero">
                <div className="container">
                    {/*<div className="hero__slider owl-carousel">*/}
                    <OwlCarousel className="hero__slider owl-carousel" {...owlOptions}>
                        <div className="hero__items set-bg" data-setbg="anime_main/img/hero/hero-1.jpg">
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
                        <div className="hero__items set-bg" data-setbg="anime_main/img/hero/hero-1.jpg">
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
                        <div className="hero__items set-bg" data-setbg="anime_main/img/hero/hero-1.jpg">
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
                    </OwlCarousel>
                </div>
            </section>
        );
    }
}

export default Spotlight;