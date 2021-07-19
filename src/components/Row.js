import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import '../styles/Row.css';
import { useDispatch } from 'react-redux';
import { enterMovie } from '../features/appSlice';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    const dispatch = useDispatch();

    const onButtonClick = (movie_data) => {
        if (movie_data) {
            dispatch(enterMovie({
                movieData: movie_data
            }))
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(
                    (movie) => (
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={() => onButtonClick(movie)}
                            />
                        ))
                )}
            </div>
        </div>
    );
}

export default Row;
