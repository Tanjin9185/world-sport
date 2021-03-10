import React from 'react';
import banner from '../../image/banner.png';
import './Header.css';
const Header = (props) => {
    const sport =props.sport;
    const logo = props.logo;
    return (
        <div className='banner'>
            <img src={banner} alt=""/>
            <div className='centered'>
                <h3>
                    {
                        window.location.pathname === '/' ? sport : <img className="headerLogo" src={logo} alt=""/>
                    }
                    
                </h3>
            </div>
        </div>
    );
};

export default Header;