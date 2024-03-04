import React, { useState } from 'react';
import './components.css';
import Countries from './Countries';
import States from './States';



const CandS = () => {
    const [country, setCountry] = useState("");

    return (
        <div className="dropdowns">
            <Countries setCountry={setCountry} needCode={true} />
            <States country={country} />
        </div>
    );
}

export default CandS;