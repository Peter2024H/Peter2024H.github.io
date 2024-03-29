import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {Top} from "./helper/Top";
import Footer from "./helper/Footer";
import email from '../asset/login/email.png';
import password from '../asset/login/password.png';
import person from '../asset/login/person.png';
import letterboxd from '../asset/login/letterboxd.png';
import spotifyIcon from '../asset/login/Spotify.png';
import bookIcon from '../asset/login/books.png';
import Goodreads from '../asset/login/goodreads.png';

export function Setup(props)
{
    const [action,setAction] = useState("Login");
    const [val, setVal] = useState("Name");
    const handleChange = (event) => {
        // 👇 Get input value from "event"
        setVal(event.target.value);
    };
    const clickHandler = ()=>{
        alert("Welcome! User profile updated successfully~");
        window.location = `/`;
    }
    const clickHandlerToHome = ()=>{
        window.location = `/`;
    }

    const CLIENT_ID = "1d2d560c83a3419e8a003dd39460ec75";
    const SPOTIFY_AUTHORIZE_ENDPOINT="https://accounts.spotify.com/authorize";
    // const REDIRECT_URL = "http://localhost:3000";
    const REDIRECT_URL = "https://peter2024h.github.io/";
    const SPACE_DELIMITER = "%20";
    const SCOPES = ["user-read-currently-playing","user-read-playback-state","user-top-read", "user-read-recently-played"];
    const SCOPES_URL = SCOPES.join(SPACE_DELIMITER);
    const handleSpotify = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`;
    }

    return(
        <>
        <Top />
        <center>
            <br/>
            <div className='container'>
                <div className='header'>
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                {/* Option to choose from  */}
                <div className="submit-container">
                    <div className={action==='Sign Up'?"submit gray":"submit"}
                    onClick={()=>{setAction("Login")}}>Login</div> 
                    <div className={action==='Sign Up'?"submit gray":"submit"} onClick={handleSpotify}> 
                        <img src={spotifyIcon} height="30" width="90" ></img>
                    </div>    
                    <div className={action==='Login'?"submit gray":"submit"}
                    onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                </div>
                {/* IO */}
                <div className="forgot-password">Hello {val}! </div>
                <div className="inputs">
                    <div className="input">
                        <img src={letterboxd} alt="letterboxd" height="8" width="21"></img>
                        <input type="Letterboxd" placeholder="Letterboxd"></input>
                    </div>
                    <div className="input">
                        <img src={Goodreads} alt="Goodreads" height="20" width="21" ></img>
                        <input type="Books" placeholder="Goodreads"></input>
                    </div>
                    <div className="input">
                        <img src={person} alt="person"></img>
                        <input type="text" placeholder="Name" onChange={handleChange}></input>
                    </div>
                    <div className="input">
                        <img src={email} alt="email"></img>
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div className="input">
                        <img src={password} alt="password"></img>
                        <input type="password" placeholder="Password"></input>
                    </div>
                </div>
                {/* Submit */}
                <div className="home-container">
                    <div className={"home"} onClick={clickHandler}> 
                        Submit
                    </div>
                    <div className={"home"} onClick={clickHandlerToHome}> 
                        🏠HOME
                    </div>
                </div>
                <div className="forgot-password">Oh! Forget Password? </div>

            </div>
            {/* <AuthProvider authType = {'cookie'}
                          authName = {'_auth'}
            ></AuthProvider> */}
            <h1>Registration Form</h1>
            <h2>Used for Dev Version</h2>

            <br/>
             <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdtmTTq5Zlz6Pu0xzwhp7IFSNdPHWygFbKz1z1LfDbeXIcavQ/viewform?embedded=true" width="640" height="757" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </center>
       
        <Footer />
        </>
    )
}