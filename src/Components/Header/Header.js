import React from 'react';
import { Card } from 'react-bootstrap';
import banner from '../../image/banner.png';
import './Header.css';
const Header = (props) => {
    const sport = props.sport;
    const logo = props.logo;
    return (
        <div className='header'>
            <div className='headerBanner'>
                {/* <img src={banner} alt="" />
                <Card className="bannerImage">
                    <Card.Img variant="top" src={banner} />
                    
                </Card> */}
            </div>

            <div className='centered'>
                <h3>
                    {
                        window.location.pathname === '/' ? sport : <img className="headerLogo" src={logo} alt="" />
                    }

                </h3>
            </div>
        </div>
    );
};

export default Header;