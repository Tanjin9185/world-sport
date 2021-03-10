import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faMapMarkerAlt, faFlag, faFutbol } from '@fortawesome/free-solid-svg-icons'
import male from '../../image/male.png';
import female from '../../image/female.png';
import Header from '../Header/Header';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const LeagueDetails = () => {
    const { idTeam } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [idTeam])
    const { strStadium, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strWebsite } = details;
    return (
        <div className="container">
            <div >
                <Header logo={details.strTeamBadge}></Header>
            </div>
            <div className="singlePlayer">
                <div className="playerDetails">
                    <div className="col-md-7">
                        <p>{details.strLeague}</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {strStadium},{details.intFormedYear}</p>

                        <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</p>

                        <p><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</p>

                    </div>
                    <div className="col-md-5">
                        {
                            details.strGender === 'Male' ? <img className='playerImage' src={male} alt="" /> : <img className='playerImage' src={female} alt="" />
                        }

                    </div>
                </div>
                <div>
                    <p style={{color:'white'}}>{strDescriptionEN}</p>

                </div>
                <div className='icon'>
                    <a className='socialIcon' style={{ backgroundColor: '#00A2F3' }} href={'https://'+strTwitter} target='blank'><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className='socialIcon' style={{ backgroundColor: '#14A0F9' }} href={'https://'+strFacebook} target='blank'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='socialIcon' style={{ backgroundColor: '#FF0000' }} href={'https://'+strWebsite} target='blank'><FontAwesomeIcon icon={faYoutube} /></a>

                </div>
            </div>


        </div>
    );
};

export default LeagueDetails;