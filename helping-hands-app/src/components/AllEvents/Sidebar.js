import React from "react";
import {useState} from "react";


const Sidebar = ( { handleFilter } ) => {
    const [city, setCity] = useState(undefined);
    const [category, setCategory] = useState(undefined);

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const onFilterClick = (e) => {
        e.preventDefault();
        const choiceCategory = document.querySelector("#categories");

        if (choiceCategory.value === ""){
            setCategory(undefined)
        }
        if (!city){
            setCity(undefined)
        }
        //console.log(city, category);
        handleFilter(city, category)
    }


    return (
        <nav className='sidenav'>
            <ul className='sidenav-items'>
                <li className="sidenav-item ">
                    <h5 className="thin-header">Check who needs help in your area!</h5>
                </li>
                <li className="sidenav-item">
                    <input id="city" type="text" placeholder="City" onChange={ handleCity }></input >
                </li>
                <li >
                    <select id="categories" name="categories" onChange={ handleCategory }>
                        <option value="">Categories</option>
                        <option value="PEOPLE">PEOPLE</option>
                        <option value="ANIMALS">ANIMALS</option>
                        <option value="ENVIRONMENT">ENVIRONMENT</option>
                        <option value="SMALL">SMALL</option>
                    </select>
                </li>
                <li className="sidenav-item">
                    <button type="submit" className="btn-light" onClick={ onFilterClick }>Filter</button>
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
