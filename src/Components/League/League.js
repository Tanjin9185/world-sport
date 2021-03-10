import { Button } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './League.css';

const League = (props) => {
    const { idTeam, strTeamBadge, strAlternate, strStadium, strSport } = props.league;

    const history = useHistory();
    const showDetails = idTeam => {
        const url = `/league/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="col-md-4 col-lg-3 col-sm-12 league">
            <Card className="card leagueCard" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="rounded logo" src={strTeamBadge} />
                <Card.Body className="text-center">
                    <Card.Title>{strAlternate}</Card.Title>
                    <Card.Text>Sports Type : {strSport}</Card.Text>
                    <Card.Text>Venue : {strStadium}</Card.Text>
                    <Button variant="primary" onClick={() => showDetails(idTeam)}> Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
           
        </div>
    );
};

export default League;