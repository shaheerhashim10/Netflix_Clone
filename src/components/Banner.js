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

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchMartialArtsAction);
            setMovie(
                request.data[
                Math.floor(Math.random() * request.data.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

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
            backgroundImage: `url("https://image.tmdb.org/t/p/original//iq5L971DFW1SwLJdvl7OpPI1QeZ.jpg")`,
            backgroundSize: "cover",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.name}
                </h1>
                <div className="rating">
                    <span className="green">90% Match</span> <strong>{year}</strong> <span className="border">TVMA</span> <strong>8 Seasons</strong>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.description, 150)}
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
