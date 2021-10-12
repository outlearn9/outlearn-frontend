import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'


const initialState = {
    pageNo : 1,
    selectedRadio:'ug',
    startYear:1990,
    endYear:1990,
    exp:0,
    username : '',
    mobile:'',
    switchHome :false,
    scrOneOpt:[],
    scrOneOptSelected:{},
    scrTwoOpt:[],
    scrTwoOptSelected:{},
};


const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;