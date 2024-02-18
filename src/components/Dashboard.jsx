// import { NavLink } from 'react-router-dom';
import Logo from '../assets/phishnet_logo.png';
import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";


export default function Dashboard() {
  const [show, setShow] = useState(false);
    return (
        <div>   

            <center>
                <img src={Logo} alt="PhishNet Logo" style={{ width: '200px', height: 'auto', borderRadius: '50%' }} />
            </center>
                <br></br>
                <h1>Welcome back, Phisher!</h1>
                <h2>Overview</h2>
                <center>
                  <div className="App">
                    <button className="btn" onClick={() => setShow(!show)}>
                      Phishing Time! 🎣
                    </button>
                    {show && <Modal />}
                  </div>
                </center>  
            <br></br>
        </div> 
    );
};


