import { Link } from "react-router-dom";

const Sidebar = (props) => (
    <nav className='sidenav'>
        <ul className='sidenav-items'>
            <li className="sidenav-item">
                <h5>Check who needs help in your area!</h5>
            </li>
            <li className="sidenav-item">
                <input type="text" placeholder="City"></input>
            </li>
            <li className="sidenav-item">
                <input type="text" placeholder="Category"></input>
            </li>
            <li className="sidenav-item">
                <button type="submit" className="sidenav-button">Filter</button>
            </li>

        </ul>
    </nav>
);

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
