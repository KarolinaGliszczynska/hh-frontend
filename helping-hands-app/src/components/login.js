import { useState } from 'react';
import pic from './register-pic.jpg'
import { Link } from "react-router-dom"
import googleLogo from './google-icon.png'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessageText, setErrorMessageText] = useState('');

    const handleName = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };


    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setError(true);
            setErrorMessageText("Please fill both fields")
        } else {
            const user = {username,password};
            fetch("http://localhost:8080/api/auth/signin",{
                method: 'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
            }).then((res)=> {
                handleResponseFromServer(res);
            });
        }
    };

    const handleResponseFromServer = (res) => {
        console.log(res)
        if (res.status === 200){
            setSubmitted(true);
            setError(false);
        } else if (res.status === 400){
            setError(true);
            res.text().then((s) => setErrorMessageText(s));
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
                <h6>{username} you are now logged in !</h6>
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
                        <Link className="switch-non-active" to="/login">Register</Link>
                        <span className="switch-active" to="/events">Login</span>
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
                                   value={username} type="text" />
                        </div>

                        <div className="registration-input">
                            <label className="label">Password</label>
                            <input onChange={handlePassword} className="input"
                                   value={password} type="password" />
                        </div>

                        <div className='registration-buttons'>

                            <div className='form-button'>
                                <button  onClick={handleSubmit} className="btn" type="submit">
                                    Login
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

export default Login
