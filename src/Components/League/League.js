import { Button } from 'react-bootstrap';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './League.css';

const League = (props) => {
    const { idTeam, strTeamBadge, strAlternate, strStadium } = props.league;

    const history = useHistory();
    const showDetails = idTeam => {
        const url = `/league/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 league">
            <Card className="card leagueCard" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="rounded team" src={strTeamBadge} />
                <Card.Body className="text-center">
                    <Card.Title>{strAlternate}</Card.Title>
                    <Card.Text>Venue : {strStadium}</Card.Text>
                    <Button variant="primary" onClick={() => showDetails(idTeam)}> Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
            {/* https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133601 */}
        </div>
    );
};

export default League;