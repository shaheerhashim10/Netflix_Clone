import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css';
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
            setMovies(request.data);
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
                        <img
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            key={movie.id++}
                            src='https://image.tmdb.org/t/p/original//xUtOM1QO4r8w8yeE00QvBdq58N5.jpg'
                            alt={movie.name}
                            onClick={() => onButtonClick(movie)}
                        />
                    )
                )
                }
            </div>
        </div>
    );
}

export default Row;
