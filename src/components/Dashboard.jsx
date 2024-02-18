// import { NavLink } from 'react-router-dom';
import Logo from '../assets/phishnet_logo.png';
import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

// const Dashboard = () => {

//     return (
//         <div>   
//             <center>
//                 <img src={Logo} alt="Phishnet Logo" style={{ width: '200px', height: 'auto', borderRadius: '50%' }} />
//             </center>
//                 <br></br>
//                 <h1>Welcome back, Phisher!</h1>
//                 <br></br>                
//                 <div class="row">
//                     <div class="column1">
//                         <h2>Overview</h2>
                        
//                         {/* <p id="rcorners2"> Currently no phish in the sea... </p> */}
//                     </div>
//                     <div class="column2">
//                         <h2>Phishnet Settings</h2>
//                         <p id="rcorners2">
//                         <label className="switch">
//                             <input type="checkbox" />
//                             <span className="slider round"></span>
//                         </label>
//                         </p>
//                     </div>
//                 </div>
//             <br></br>
//         </div> 
//     );
// };

// export default Dashboard;



export default function Dashboard() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button className="btn" onClick={() => setShow(!show)}>
        Open Modal
      </button>
      {show && <Modal />}
    </div>
  );
}