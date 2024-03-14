import React, {useState, Dispatch, SetStateAction} from 'react';
import './components.css';

type LoginProps = {
    setToken: Dispatch<SetStateAction<string>>;
    token: String; // TODO: Take this out later
}
const Login = (props: LoginProps) => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    //const [token, setToken] = useState(""); // TODO: probs move this to a higherlevel

    async function postLogin () {
        const response = await fetch("http://localhost:8000/user/login/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: pwd,
            }),

        });

        const json = await response.json();
        return json;
    }

    const handleSubmit = (event: React.FormEvent) => {
        if (username === "" || pwd === "") {
            alert("Both fields must be populated to log in")
        } else  {
        
            postLogin().then((json) => {
                props.setToken(json.token);
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
                    <input value={pwd} className="Registration-input" type='text' onChange={event => setPwd(event.target.value)} />
                </label>
                <div className="input-submit">
                    <button className="Country-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Login;