import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
//import { NavbarMenuItems } from "./NavbarMenuItems"


const Navbar = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(() => {
            if (localStorage.getItem('email') === null){
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(true);
            }
        },
        [])

    const handleLogout = (e) => {
        e.preventDefault();
        return axios.post("http://localhost:8080/api/auth/signout")
            .then((response) => {
            console.log(response);
            alert("You have been logged out!");
            localStorage.removeItem("user");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
            }
        })
    }


    return (
        <div className='navbar'>

            <div className='navbar__title'>
                <div ><Link to="/">
                    <   img className='logo-icon' src={process.env.PUBLIC_URL + '/logoIcon.png'} alt="logo" />
                </Link></div>
                <h1 className='header'><Link to="/">HelpingHands</Link></h1>
            </div>

            <div>
                <ul className='menu-items'>
                    <>
                            <li key="navbar-1">
                                <a className='nav-links' href="/registration"> Sign Up </a>
                            </li>
                            <li key="navbar-2">
                                <a className='nav-links' href="/login"> Log in </a>
                            </li>
                    </>
                    <li key="navbar-3">
                        <a className='nav-links' href="/" onClick={handleLogout}> Log out </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

  export default Navbar