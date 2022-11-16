import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <div className="bg-image-main">
            <div className='row'>
                <div className='column'>

                    <div className="home-header">
                        <h1>Community
                            volunteering
                        </h1>
                        <p>Community volunteering, refers globally to those who work to improve their local community. This activity commonly occurs through not for profit organizations, local governments and churches; but also encompasses ad-hoc or informal groups such as recreational sports teams.
                        </p>
                    </div>
                </div>
                <div className='column'>
                        <div className="home-search">
                            <h5 className="thin-header">Check who need your help nearby!</h5>
                            <Link className="btn-link" to="/events"><button className='btn-light'>See all events</button></Link>

                        </div>

                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    <div className="home-call-1">
                        <h5 className="thin-header">Create event</h5>
                           <Link className="btn-link" to="/events"><button className='btn-light'>Create</button></Link>

                    </div>
                </div>
                <div className='column'>
                    <div className="home-call-2">
                        <h5 className="thin-header">Join our community</h5>
                           <Link className="btn-link" to="/registration"><button className='btn-light'>Register</button></Link>

                    </div>
                </div>
                <div className='column'>
                    <div className="home-call-1">
                        <h5 className="thin-header">About project</h5>
                            <Link className="btn-link" to="/events"><button className='btn-light'>Read</button></Link>

                    </div>
                </div>

            </div>
        </div>

    )
  }
  
  export default Homepage
  