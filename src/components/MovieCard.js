import React, {Component} from "react";

class MovieCard extends Component {
    get_image_path(imdb_id) {
        const id_nonzero = parseInt(imdb_id.slice(2))
        const img_name = id_nonzero.toString().slice(2)
        console.log('anime_main/img/movies/' + img_name + ".jpg")
        return 'anime_main/img/movies/' + img_name + ".jpg"
    }
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg"
                         data-setbg={this.get_image_path(this.props.imdb_id)}>
                        <div className="ep">{this.props.release_date}</div>
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
        )
    }
}

export default MovieCard;