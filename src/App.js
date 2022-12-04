import React from "react"
import './App.css';
import logo from "./img/Stocksy-Logo.png"
import midLogo from "./img/mid-logo.png"
import email from "./img/email.png"
import linkdin from "./img/linkedin.png"
import instagram from "./img/instagram.png"
import twitter from "./img/twitter.png"
import Input from "./input";
import store from './store/reducer';


function App() {
  return (
    <div className="App">

      <img src={logo} alt="logo" className="logo" />
      
      <div className="mid-section">
        <img src={midLogo} alt="" className="left-section" />

        <div className="right-section">
          <h2>Learn and Earn from Stock Market with Fun</h2>
          <h1>Launching <span>STOCKSY</span> App (beta version)</h1>
          <div className="input-sec">
            <p style={{color:"#F3B125",marginLeft:"2.5rem"}}>Get early access</p>
            <Input store={store}/>
          </div>
        </div>

      </div>

      <div className="lower-section">
        <a href="#" style={{marginTop:"1rem"}}>contact</a>
        <img src={email} alt="email" className="email" />
        <a href="#">hello@stocksy.app</a>
      </div>

      <div className="footer">
        <div className = "footer-left">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div>
          <p style={{marginRight:"6rem"}}>© Copyright ©2021 All rights reserved </p>
        </div>

        <div className="social-icons">
          <img src={linkdin} alt="linkedin" className="linkedin" />
          <img src={instagram} alt="instagram" className="instagram" />
          <img src={twitter} alt="twitter" className="twitter" />
        </div>
      </div>

    </div>
  );
}

export default App;
