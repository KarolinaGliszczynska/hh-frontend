import { Link } from "react-router-dom";

const Navbar = (props) => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
                <Link to="/">Helping Hands</Link>
        </div>
        <div className='navbar__item'>
                <Link to="/registration">Sign Up</Link>
        </div>
        <div className='navbar__item'>
                <Link to="/login">Log in</Link>
        </div>
        <div className='navbar__item'>
                <Link to="/contact">Contact us</Link>
        </div>    
    </header>
);
  
  export default Navbar
