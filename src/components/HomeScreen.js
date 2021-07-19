import React from 'react';
import Banner from './Banner';
import "./HomeScreen.css";
import Nav from './Nav';
import requests from '../api/Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row
                title="Martial Arts Action"
                fetchUrl={requests.fetchMartialArtsAction}
                isLargeRow
            />
            <Row title="Techno Thriller" fetchUrl={requests.fetchTechnoThriller} />
            <Row title="Horror" fetchUrl={requests.fetchHorror} />
            <Row title="Action Hybrid Genres" fetchUrl={requests.fetchActionHybridGenres} />
            <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
            <Row title="Thriller" fetchUrl={requests.fetchThriller} />
            <Row title="Comedy" fetchUrl={requests.fetchComedy} />
            <Row title="Crime Thriller" fetchUrl={requests.fetchCrimeThriller} />
            <Row title="Psychological Thriller" fetchUrl={requests.fetchPsychologicalThriller} />
            <Row title="Disaster Thriller" fetchUrl={requests.fetchRomance} />
            <Row title="Romance" fetchUrl={requests.fetchDisasterThriller} />
            <Row title="Action" fetchUrl={requests.fetchAction} />
            <Row title="War and Military Action" fetchUrl={requests.fetchWarandMilitaryAction} />
            <Row title="Mystery" fetchUrl={requests.fetchMystery} />
            <Row title="Spy and Espionage Action" fetchUrl={requests.fetchSpyandEspionageAction} />
            <Row title="Drama" fetchUrl={requests.fetchDrama} />
            <Row title="Western Shoot Action" fetchUrl={requests.fetchWesternShootAction} />
        </div>
    )
}

export default HomeScreen;
