import {useContext} from 'react';
import {Context} from '../context/Context';
class Call {


    /**
     * This function makes the API call for the case that there is a body to send 
     * but no response to expect.
     * @param method the method used to make the call (GET, POST, etc.)
     * @param url the url to make the call to
     * @param body the body of the call
     * @param token the authorization token
     */
    public static async call(method: string, url: string, body?: string, token?: string){

        type headerType = {
            Accept: string,
            'Content-Type' : string,
            Authorization ?: string,
        };

        const headers: headerType = token ? {
            Accept: 'application/json',
            'Content-Type': 'application/json', 
            Authorization: `Token ${token}`,
        } : {
            Accept: 'application/json',
            'Content-Type': 'application/json', 
        }

        const call = body ? {
            method: method,
            headers: headers,
            body: body,
        } :  {
            method: method,
            headers: headers,
        };

        const response = await fetch(`http://localhost:8000/${url}`, call)
        
        if (token || body) {
            return await response.json();
        }
        return response;
    }
}

export default Call;