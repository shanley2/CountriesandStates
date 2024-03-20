import React, {useState, useContext} from 'react';
import Countries from './Countries';
import {Link} from 'react-router-dom';
import Call from '../api/Calls';
import {Context} from '../context/Context';

const AddState = () => {
    const [id, setCountryID] = useState("");
    const [newState, setState] = useState("");
    const [newCode, setCode] = useState("");

    //TODO take out: replace with boolean??
    const {token} = useContext(Context);


    const handleSubmit = (event: React.FormEvent) => {
        // TODO: error handling if a person isn't logged in
        if ((id === "" ||  newCode === "") || newState ==="") {
            alert("Both fields must be populated to add a country");
        } else {
            const body = JSON.stringify({
                        code: newCode,
                        name: newState,
                        country_id: id,
                    });
            Call.callToken("POST", "api/states/", body, token).catch(error => {
                console.error(error);
            });
        }
        setState("");
        setCode("");
    };

    return (
        <div className="State">
            <h1>Add New State</h1>
            <div className="State-form">
                <div className="inputs">
                    <Countries setCountryID={setCountryID} needCode={false}/>
            
                    <label className="state-label">State Name
                        <input value={newState} type="text" id="stateName" className="input-box" onChange={event => setState(event.target.value)}/>
                    </label>
                    <label className="state-label">State Code
                        <input value={newCode} type="text" id="stateCode" className="input-box" onChange={event => setCode(event.target.value)}/>
                    </label>
                </div>
                <div className="input-submit">
                        <button className="Country-button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
            {(token=== ""|| token === undefined) ? 
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

export default AddState;