import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faMapMarkerAlt, faFlag, faFutbol } from '@fortawesome/free-solid-svg-icons'
// import {  faTwitter,  faYouTube} from '@fortawesome/free-solid-svg-icons'
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

   
    return (
        <div className="container">
            <div >
                {/* <img className='imageDetails' src={details.strStadiumThumb} alt="" /> */}
                {/* <Image src={details.strStadiumThumb} fluid /> */}
                <Header logo={details.strTeamBadge}></Header>
            </div>
            {/* <p>{details.strStadiumThumb}</p> */}
            <div className="playerDetails">
                <div className="col-md-7">
                    <p>{details.strLeague}</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {details.strStadium},{details.intFormedYear}</p>

                    <p><FontAwesomeIcon icon={faFlag} /> Country : {details.strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sports Type : {details.strSport}</p>

                    <p><FontAwesomeIcon icon={faMars} /> Gender : {details.strGender}</p>

                </div>
                <div className="col-md-5">
                    {
                        details.strGender==='Male' ? <img className='playerImage' src={male} alt="" /> : <img className='playerImage' src={female} alt="" />
                    }
                    
                    {/* <img className='playerImage' src={male} alt="" /> */}
                </div>
            </div>
            <div>
                <p>{details.strDescriptionEN}</p>

            </div>
            <div className='logo'>
                <a className='socialIcon' style={{backgroundColor:'#00A2F3'}} href="https://www.facebook.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className='socialIcon' style={{backgroundColor:'#14A0F9'}} href=""><FontAwesomeIcon icon={faFacebook} /></a>
                <a className='socialIcon' style={{backgroundColor:'#FF0000'}} href=""><FontAwesomeIcon icon={faYoutube} /></a>
                
            </div>

        </div>
    );
};

export default LeagueDetails;