import { useState } from 'react';

const Registration = () => {

    const [userNickname, setUserNickname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

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
            setPasswordError(false);
        } else if (password !== password2) {
            setPasswordError(true);
            setError(false);
        } else {
            const user = {userNickname,userEmail,password};
            fetch("http://localhost:8080/users/register",{
                method: 'POST',
                headers:{"Content-Type":"application/json"},
                 body:JSON.stringify(user)
                 }).then((res)=> {
                res.text().then((s) => console.log(s));
            });
            setSubmitted(true);
            setError(false);
            setPasswordError(false);
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {userNickname} successfully registered!!</h1>
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
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    const errorMessage2 = () => {
        return (
            <div
                className="error"
                style={{
                    display: passwordError ? '' : 'none',
                }}>
                <h1>Both passwords must be the same</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {errorMessage2()}
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

                <div className="registration-input">
                    <button onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
  }

  export default Registration
  