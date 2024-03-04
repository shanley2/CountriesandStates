import React, {useState, useEffect} from 'react';
import './components.css';

type StatesProps = {
    country: string;
}

type State = {
    name: string;
    id?: number;
    code: string;
    countryId: number;
}

const States = (props: StatesProps) => {

    const {country} = props;
    const [data, setData] = useState<State[]>();
    

    const sortByName = (a: string, b: string) => {
        a = a.toLowerCase();
        b = b.toLowerCase();

        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } 
        return 0;
    };

    useEffect(() => {
        if (country === "default" || country === "") {
            setData([]);
        } else {
            //const apiString: string = `https://xc-countries-api.fly.dev/api/countries/${country}/states/`;
            const apiString: string = `http://localhost:8000/api/countries/${country}/states`;
        
            // TODO if statement check if country is default,if it is, don't fetch setData to []
            fetch(apiString)
              .then(response => response.json())
              .then(json => setData(json))
              .catch(error => console.error(error));
        }

    }, [country]);

    if (data) {
        data.sort((a, b) => {
            return sortByName(a.name, b.name);
        })
    }
    
    return (
        <div className="dropdownWrapper">
            <label>State
                <select className="dropdown" id="stateSelect" >
                    <option value="default">Choose state</option>
                    {data ? data.map(d => (
                        <option value={d.code} key={d.code}>{d.name}</option>
                    )): <option>No data found</option>}
                </select>
            </label>
        </div>

    );
};

export default States;