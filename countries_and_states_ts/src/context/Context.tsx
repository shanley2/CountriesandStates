import {createContext} from 'react'

type ContextType = {
    token: string,
    setToken: (c: string) => void,
    // loggedIn: boolean,
    // setStatus: (c:boolean) => void,
}

export const Context = createContext<ContextType>({token: "", setToken: ()=>{}});