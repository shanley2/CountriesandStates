import {useContext} from 'react';
import {Context} from '../context/Context';
class Call {
    

    /**
     * This function makes the API call for the case that there is a body to send 
     * but no response to expect.
     * @param method the method used to make the call (GET, POST, etc.)
     * @param url the url to make the call to
     * @param body the body of the call
     */
    public static async callToken(method: string, url: string, body: string, token: string){
        
        console.log("TOKEN in calls" + token);
        const response = await fetch(`http://localhost:8000/${url}`, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
            body: body,

        })
        
        return await response.json();

    }

    public static async callLogin(method: string, url: string, body: string){
        const response = await fetch(`http://localhost:8000/${url}`, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body,

        });
        
        return await response.json();

    }

    public static call(url: string){
        const response = fetch(`http://localhost:8000/${url}`);
        return response;
    }

    
    // public static call(method: string, url: string, body: string){
    //     fetch("http://localhost:8000/api/states/", {
    //             method: method,
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Token ${token}`,
    //             },
    //             body: body,

    //         }).catch(error => {
    //             console.error(error);
    //         });

    // }
}

export default Call;