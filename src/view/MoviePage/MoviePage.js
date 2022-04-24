import React, {useEffect, useState} from 'react';
import Spotlight from "../../components/Spotlight";
import MovieList from "../../components/MovieList";
import MoviesApi, {endpoints} from "../../api/MoviesApi";

export default function MoviePage(){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const loadMovies = async () => {
            return await MoviesApi.get(endpoints['movies'])
        }
        loadMovies().then(r => setMovies(r.data))
    }, [])
    return (
        <div>
            <Spotlight/>
            <MovieList movies={movies} />
        </div>
    )
}
