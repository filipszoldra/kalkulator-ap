import React, {createContext, useReducer, useContext} from 'react';
import InitialStore, {} from './store';
import reducer from './reducer';

export const CalcContext = createContext(InitialStore);

export const CalcStoreProvider = (props: any) => {

    const [items, dispatch] = useReducer(reducer, InitialStore);

    return <CalcContext.Provider value={{...items, dispatch: dispatch}} {...props}/>
}

export const useCalcStoreContext = () => useContext(CalcContext);