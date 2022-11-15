import { Link } from "react-router-dom"

const Homepage = () => {
    return (
      <header>
        <h1 >Welcome to Helping Hand app!</h1>
        <Link  className='zoom' to="/events">See all events</Link>
      </header>
    )
  }
  
  export default Homepage
  