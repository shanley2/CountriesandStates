import React, {useState, useContext} from 'react';
import './components.css';
import Call from '../api/Calls';
import {Context} from '../context/Context';


const Login = () => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const {setToken} = useContext(Context);

    const handleSubmit = (event: React.FormEvent) => {
        if (username === "" || pwd === "") {
            alert("Both fields must be populated to log in")
        } else  {
            const body = JSON.stringify({
                username: username,
                password: pwd,
            });
        
            Call.callLogin("POST", "user/login/", body).then((json) => {
                setToken(json.token);
                return json;
            }).catch(error => {
                console.error(error);
            });
        }
        setUsername("");
        setPwd("");
    };
 
    return (
        <div className='Login'>
            <h1 className="Login-title">Login</h1>
            <div className="Login-form">
                <label className="Registration-inputLabel">
                    Username
                    <input value={username} className="Registration-input" type='text' onChange={event => setUsername(event.target.value)}/>
                </label>
                <label className="Registration-inputLabel">
                    Password
                    <input value={pwd} className="Registration-input" type='password' onChange={event => setPwd(event.target.value)} />
                </label>
                <div className="input-submit">
                    <button className="Country-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Login;