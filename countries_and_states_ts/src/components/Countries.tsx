import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import './components.css';

type Country = {
    name: string;
    id?: number;
    code: string;
}

type CountryProps = {
    setCountry?: Dispatch<SetStateAction<string>>;
    setCountryID?: Dispatch<SetStateAction<string>>;
    needCode: boolean;
}

const Countries = (props: CountryProps) => {

    const [data, setData] = useState<Country[]>();

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
        //fetch('https://xc-countries-api.fly.dev/api/countries/')
        fetch('http://localhost:8000/api/countries/')
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
    }, []);

    if (data) {
        data.sort((a, b) => {
            return sortByName(a.name, b.name);
        })
    }
    
    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.setCountry) {
            props.setCountry(event.target.value);
        }
        
        if (props.setCountryID) {
            props.setCountryID(event.target.value);
        }
    };
    
    return (
        <div className="dropdownWrapper">
            <label>Country
                <select className="dropdown" id="countrySelect" onChange={handleSelection}>
                    <option value="default">Choose Country</option>
                    {data ? data.map(d  => (
                        <option value={props.needCode? d.code: d.id} key={d.id}>{d.name}</option>
                    )): <option>No data found</option>}
                </select>
            </label>
        </div>

    );
};

export default Countries;