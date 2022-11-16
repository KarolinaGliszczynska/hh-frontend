import { Link } from "react-router-dom";
import React from 'react';
import { NavbarMenuItems } from "./NavbarMenuItems"


const Navbar = (props) => (
    <div className='navbar'>

        <div className='navbar__title'>
        <div >
            <img className='logo-icon' src={process.env.PUBLIC_URL + '/logoIcon.png'} alt="logo" />
        </div>
            <h1 className='header'><Link to="/">HelpingHands</Link></h1>
        </div>

            <ul className='menu-items'>
            {NavbarMenuItems.map((item,index) =>{
                return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                             {item.title}
                            </a>
                        </li>
                        )
            })}
            </ul>

    </div>
);
  
  export default Navbar
