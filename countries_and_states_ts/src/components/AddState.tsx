import React, {useState} from 'react';
import Countries from './Countries';


const AddState = () => {
    const [id, setCountryID] = useState("");
    const [newState, setState] = useState("");
    const [newCode, setCode] = useState("");


    const handleSubmit = (event: React.FormEvent) => {

        if ((id === "" ||  newCode === "") || newState ==="") {
            alert("Both fields must be populated to add a country");
        } else {
            //fetch("https://xc-countries-api.fly.dev/api/states/", {
            fetch("http://localhost:8000/api/states/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: newCode,
                    name: newState,
                    country_id: id,
                }),

            }).catch(error => {
                console.log(error);
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
        </div>
    )
}

export default AddState;