import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/phishnetlogo.gif';

const Homepage = () => {
    return (
        <div>          
            <center>
                <img src={Logo} alt="Phishnet Logo" style={{ width: '400px', height: 'auto', borderRadius: '50%' }} />
                <br></br>
                <p>Welcome to Phishnet! This is a community-driven platform for sharing and discovering phishing URLs.</p>
                <br></br>
                <NavLink to="/dashboard">
                    <button>Get Phishing!</button> </NavLink> 
            </center>
            <br></br>
        </div> 
    );
};

export default Homepage;

