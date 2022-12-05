import { useState } from 'react';
import pic from './register-pic.jpg'
import { Link } from "react-router-dom"
import googleLogo from './google-icon.png'
import axios from "axios";

const Registration = () => {

    const [userNickname, setUserNickname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessageText, setErrorMessageText] = useState('');

    const handleName = (e) => {
        setUserNickname(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userNickname === '' || userEmail === '' || password === '') {
            setError(true);
            setErrorMessageText("Please fill all the fields")
        } else if (password !== password2) {
            setError(true);
            setErrorMessageText("Both passwords must be the same")
        } else {
            register();
        }
    };

    const register = () => {
        return axios.post("http://localhost:8080/api/auth/users/register", {
            userNickname,
            userEmail,
            password,
        }).then((response) => {
            handleResponseFromServer(response)
        })
    };

    const handleResponseFromServer = (res) => {
        console.log(res)
        if (res.status === 200){
            setSubmitted(true);
            setError(false);
        } else if (res.status === 400){
            setError(true);
            setErrorMessageText(res.data);
            //res.text().then((s) => setErrorMessageText(s));
        } else {
            setError(true);
            setErrorMessageText("Something went wrong...")
        }
    }

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h6>User {userNickname} successfully registered!!</h6>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h6>{errorMessageText}</h6>
            </div>
        );
    };

    return (
    <div className="row">
        <div className="col">
            <div className='register-pic' src={pic} >


                      <div className='register-title'>
                                <h1 >User Registration</h1>
                                <p >Join our community</p>
                      </div>

            </div>
        </div>
        <div className="col">

<div className='login-register-top'>
            <h5 >Welcome to HelpingHands!</h5>
            <div className='login-register-switch'>
                <Link className="switch-non-active" to="/login">Login</Link>
                <span className="switch-active" to="/events">Register</span>
            </div>
</div>

           <div className="form">


                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                    <div className="registration-input">
                        <label className="label">Name</label>
                        <input onChange={handleName} className="input"
                               value={userNickname} type="text" />
                    </div>

                    <div className="registration-input">
                        <label className="label">Email</label>
                        <input onChange={handleEmail} className="input"
                               value={userEmail} type="email" />
                    </div>

                    <div className="registration-input">
                        <label className="label">Password</label>
                        <input onChange={handlePassword} className="input"
                               value={password} type="password" />
                    </div>

                    <div className="registration-input">
                        <label className="label">Repeat Password</label>
                        <input onChange={handlePassword2} className="input"
                               value={password2} type="password" />
                    </div>

            <div className='registration-buttons'>

<div className='form-button'>
                        <button  onClick={handleSubmit} className="btn" type="submit">
                            Submit
                        </button>
                        </div>
<div className='google-register'>
                        <button  onClick={handleSubmit} className="btn" type="submit">
                                                    <   img className='logo-icon' src={googleLogo} alt="logo" />Register with Google
                                                </button>
                                               </div>
</div>
                </form>
            </div>
          </div>
      </div>
    );
  }

  export default Registration
  