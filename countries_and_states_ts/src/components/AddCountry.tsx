import React, {useState, useContext} from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import Call from '../api/Calls';
import {Context} from '../context/Context';

const AddCountry = () => {
    const [newCountry, setCountry] = useState("");
    const [newCode, setCode] = useState("");

    //Take out later?
    const {token} = useContext(Context);

    const handleSubmit = (event: React.FormEvent) => {

        if (newCountry === "" ||  newCode === "") {
            alert("Both fields must be populated to add a country");
        } else {
            const body = JSON.stringify({
                code: newCode,
                name: newCountry,
            });
            Call.call("POST", "api/countries/", body, token).catch(error => {
                console.error(error);
            });
        }
        setCode("");
        setCountry("");
    };

    return (
        <div className="Country Restricted">
            <div className="Country-head">
                <h1>Add New Country</h1>
            </div>
            <div className="Country-body">
                <div className="Country-form">
                    <div className="input-boxes">
                        <label className="text-label">Country Name
                            <input value={newCountry} type="text" id="countryName" className="input-box" onChange={event => setCountry(event.target.value)}/>
                        </label>
                        
                        <label className="text-label">Country Code 
                            <input value={newCode} type="text" id="countryCode" className="input-box" onChange={event => setCode(event.target.value)}/>
                        </label>
                    </div>
                    <div className="input-submit">
                        <button className="Country-button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            {(token === ""|| token === undefined) ? 
                (<div className="Popup-wrapper">
                    <div className="Popup">
                        <div className="Popup-text-wrapper" >
                            <div className="Popup-item">Please log in to access this feature</div>
                            <Link to="/login" className='Popup-item Popup-link'>Login</Link>
                        </div>
                    </div>
                </div>) :
                <div></div>
            }
            
        </div>

    )
}

export default AddCountry;