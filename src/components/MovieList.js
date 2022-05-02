import React, {useEffect, useState} from 'react';
import MoviesApi, {endpoints} from "../configs/Apis";

export default function MovieList(){
    const [movies, setMovies] = useState([])
    function get_img_path(movie_id) {
        return "url(/anime_main/img/movies/" + parseInt(movie_id.slice(2)).toString() + ".jpg)"
    }
    let popular_list = movies.map((movie, index) =>
        <div className="col-lg-4 col-md-6 col-sm-6" key={'popular' + index}>
            <div className="product__item">
                <div className="product__item__pic set-bg"
                     style={{backgroundImage: get_img_path(movie.imdb_id)}}>
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments"/> 11</div>
                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                </div>
                <div className="product__item__text">
                    <ul>
                        <li>Active</li>
                        <li>Movie</li>
                    </ul>
                    <h5><a href="#">{movie.title}</a></h5>
                </div>
            </div>
        </div>
    )
    let trending_list = movies.map((movie, index) =>
        <div className="col-lg-4 col-md-6 col-sm-6" key={'trending' + index}>
            <div className="product__item">
                <div className="product__item__pic set-bg"
                     data-setbg="anime_main/img/trending/trend-1.jpg">
                    <div className="ep">18 / 18</div>
                    <div className="comment"><i className="fa fa-comments"/> 11</div>
                    <div className="view"><i className="fa fa-eye"/> 9141</div>
                </div>
                <div className="product__item__text">
                    <ul>
                        <li>Active</li>
                        <li>Movie</li>
                    </ul>
                    <h5><a href="#">{movie.title}</a></h5>
                </div>
            </div>
        </div>
    )
    useEffect(() => {
        const loadMovies = async () => {
            return await MoviesApi.get(endpoints['movies'])
        }
        loadMovies().then(r => setMovies(r.data))
    }, [])

    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="trending__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Trending Now</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="#" className="primary-btn">View All <span className="arrow_right"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {trending_list}
                            </div>
                        </div>
                        <div className="popular__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Popular Shows</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="#" className="primary-btn">View All <span className="arrow_right"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {popular_list}
                            </div>
                        </div>
                        <div className="recent__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Recently Added Shows</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="#" className="primary-btn">View All <span className="arrow_right"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg"
                                             data-setbg="anime_main/img/recent/recent-1.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Great Teacher Onizuka</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg"
                                             data-setbg="anime_main/img/recent/recent-2.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg"
                                             data-setbg="anime_main/img/recent/recent-3.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg"
                                             data-setbg="anime_main/img/recent/recent-4.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Fate/Zero 2nd Season</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg"
                                             data-setbg="anime_main/img/recent/recent-5.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Kizumonogatari II: Nekket su-hen</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg"
                                             data-setbg="anime_main/img/recent/recent-6.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="live__product">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="section-title">
                                        <h4>Live Action</h4>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="btn__all">
                                        <a href="#" className="primary-btn">View All <span className="arrow_right"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="img/live/live-1.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Shouwa Genroku Rakugo Shinjuu</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="img/live/live-2.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Mushishi Zoku Shou 2nd Season</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="img/live/live-3.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="img/live/live-4.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="anime_main/img/live/live-5.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="img/live/live-6.jpg">
                                            <div className="ep">18 / 18</div>
                                            <div className="comment"><i className="fa fa-comments"/> 11</div>
                                            <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        </div>
                                        <div className="product__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5><a href="#">Kizumonogatari II: Nekketsu-hen</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="product__sidebar">
                            <div className="product__sidebar__view">
                                <div className="section-title">
                                    <h5>Top Views</h5>
                                </div>
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*">Day</li>
                                    <li data-filter=".week">Week</li>
                                    <li data-filter=".month">Month</li>
                                    <li data-filter=".years">Years</li>
                                </ul>
                                <div className="filter__gallery">
                                    <div className="product__sidebar__view__item set-bg mix day years"
                                         data-setbg="anime_main/img/sidebar/tv-1.jpg">
                                        <div className="ep">18 / ?</div>
                                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix month week"
                                         data-setbg="img/sidebar/tv-2.jpg">
                                        <div className="ep">18 / ?</div>
                                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix week years"
                                         data-setbg="img/sidebar/tv-3.jpg">
                                        <div className="ep">18 / ?</div>
                                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix years month"
                                         data-setbg="img/sidebar/tv-4.jpg">
                                        <div className="ep">18 / ?</div>
                                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                    </div>
                                    <div className="product__sidebar__view__item set-bg mix day"
                                         data-setbg="img/sidebar/tv-5.jpg">
                                        <div className="ep">18 / ?</div>
                                        <div className="view"><i className="fa fa-eye"/> 9141</div>
                                        <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}