const Navbar = (props) => (
    <header className='navbar'>
        <div className='navbar__title navbar__item' onClick={props.showMainView} >Helping Hands</div>
        <div className='navbar__item' onClick={props.register}>Sign Up</div>
        <div className='navbar__item' onClick={props.login}>Log in</div>
        <div className='navbar__item' onClick={props.contact}>Contact Us</div>        
    </header>
);
  
  export default Navbar
