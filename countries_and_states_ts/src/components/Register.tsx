import React, {useState} from 'react';
import './components.css';



const Register = () => {

    // Form variables
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState(""); // Do we need security stuff in here???
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent) => {

        if ((((fName === "" || lName === "") || username === "") || pwd === "") || email === "") {
            // TODO: Figure out a better way to handle empty fields
            alert("All fields must be populated to register");
        } else {
            fetch("http://localhost:8000/user/register/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: pwd,
                    first_name: fName,
                    last_name: lName,
                    email: email,
                }),

            }).catch(error => {
                console.error(error);
            });
        }
        setEmail("");
        setPwd("");
        setfName("");
        setlName("");
        setUsername("");
    };

    return  (
        <div className="Registration">
            <h1 className="Registration-title">
                Register
            </h1>
            <div className="Register-form">
                <label className="Register-inputLabel">
                    First Name
                    <input value={fName} className='Register-input' type='text' onChange={event => setfName(event.target.value)} />
                </label>
                <label className="Register-inputLabel">
                    Last Name
                    <input value={lName} className='Register-input' type='text' onChange={event => setlName(event.target.value)}/>
                </label>
                <label className="Register-inputLabel">
                    Username
                    <input value={username} className='Register-input' type='text' onChange={event => setUsername(event.target.value)}/>
                </label>
                <label className="Register-inputLabel">
                    Password
                    <input value={pwd} className='Register-input' type='text' onChange={event => setPwd(event.target.value)}/>
                </label>
                <label className="Register-inputLabel">
                    Email
                    <input value={email} className='Register-input' type='text' onChange={event => setEmail(event.target.value)}/>
                </label>
                <div className="input-submit">
                        <button className="Country-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );

};
export default Register;