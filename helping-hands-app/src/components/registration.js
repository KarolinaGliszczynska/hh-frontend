import { useState } from 'react';

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
            const user = {userNickname,userEmail,password};
            fetch("http://localhost:8080/users/register",{
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
                <h1>{errorMessageText}</h1>
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
  