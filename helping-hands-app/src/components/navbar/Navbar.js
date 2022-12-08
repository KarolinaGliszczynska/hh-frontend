import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
//import { NavbarMenuItems } from "./NavbarMenuItems"
import EventBus from "./EventBus";


const Navbar = ( {userLoggedIn, handleLogin} ) => {


    const logOut = (e) => {
        e.preventDefault();
        handleLogout();
        //setCurrentUser(undefined);
    };


    const handleLogout = () => {
        return axios.post("http://localhost:8080/api/auth/signout")
            .then((response) => {
            console.log(response);
            alert("You have been logged out!");
            localStorage.removeItem("user");
            handleLogin(false);
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
                    {!userLoggedIn ? (
                    <>
                        <li key="navbar-1">
                            <a className='nav-links' href="/registration"> Sign Up </a>
                        </li>
                        <li key="navbar-2">
                            <a className='nav-links' href="/login"> Log in </a>
                        </li>
                    </>
                        ):(
                    <li key="navbar-3">
                        <a className='nav-links' href="/" onClick={ logOut }> Log out </a>
                    </li> )}
                </ul>
            </div>
        </div>
    );
}

  export default Navbar