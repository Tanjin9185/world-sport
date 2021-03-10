import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.teams))
    }, [])
    return (
        <div className="row">
            <Header sport="Sports Mania"></Header>
            
            {
                leagues.map(league => <League league={league} key={league.idTeam}></League>)
            }
        </div>
    );
};

export default Home;