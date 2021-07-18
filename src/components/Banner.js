import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../api/axios';
import requests from '../api/Requests';
import { useSelector } from 'react-redux';
import { selectMovieData } from '../features/appSlice';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

function Banner() {
    let [movie, setMovie] = useState([]);
    const movieSelected = useSelector(selectMovieData);

    //only fires when banner component mounts
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);
    movie = movieSelected ?? movie;

    let year = getYear(movie?.first_air_date);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    function getYear(string) {
        if (string) {
            let dateArray = string.split("-");
            let year = (dateArray[0]);
            return year;
        }
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            // backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="rating">
                    <span className="green">90% Match</span> <strong>{year}</strong> <span className="border">TVMA</span> <strong>8 Seasons</strong>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        <PlayArrowIcon />
                        <span className="btn_title">Play</span>
                    </button>

                    <button className="banner_button">
                        <AddIcon />
                        <span className="btn_title">My List</span>
                    </button>

                    <button className="thumbIcon">
                        <ThumbUpAltOutlinedIcon />
                    </button>
                    <button className="thumbIcon">
                        <ThumbDownAltOutlinedIcon />
                    </button>

                </div>
            </div>

            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner;
