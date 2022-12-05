import React from "react";
import {useState} from "react";


const Sidebar = ( {changeCity, changeCategory} ) => {
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");

    const handleFilter = () => {
        console.log("Filter")
    }

    return (
        <nav className='sidenav'>
            <ul className='sidenav-items'>
                <li className="sidenav-item ">
                    <h5 className="thin-header">Check who needs help in your area!</h5>
                </li>
                <li className="sidenav-item">
                    <input type="text" placeholder="City"></input>
                </li>
                <li >
                    <select id="categories" name="categories" >
                        <option> Category </option>
                        <option value="people">PEOPLE</option>
                        <option value="animals">ANIMALS</option>
                        <option value="environment">ENVIRONMENT</option>
                        <option value="small">SMALL</option>
                    </select>
                </li>
                <li className="sidenav-item">
                    <button type="submit" className="btn-light" onClick={ handleFilter }>Filter</button>
                </li>

            </ul>
        </nav>
    );
}

export default Sidebar





/*
<nav className="sidenav">
    <div className="menu">
        <ul className="menu-list">
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
            <li className="menu-item"><a href="#" className="menu-link">Menu Item</a></li>
        </ul>
    </div>
</nav>
*/
