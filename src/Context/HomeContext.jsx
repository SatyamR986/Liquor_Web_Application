import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'

export const HomeContext = createContext(null);

const HomeContextProvider = (props)=> {
    const ContextValue = {all_product};

    return (
        <HomeContext.Provider value={ContextValue}>
            {props.Wine}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;