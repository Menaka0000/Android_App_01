import {createContext} from "react";
import React from 'react'

const userStateContext = createContext();

export function UserStateProvider({children}) {
    const [userState, setUserState] = React.useState('');
    const setState = (id) => {
        console.log(id+"here from userContext")
        setUserState(id)
    }
    return (
        <userStateContext.Provider value={{userState, setState}}>{children}</userStateContext.Provider>
    )
}

export default userStateContext;