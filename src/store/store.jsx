import { createContext, useContext, useReducer } from "react";
import { employesReducer } from './reducers/employes';

const StoreContext = createContext();
const StoreDispatchContext = createContext();
const employesInitialState = {
    employes:[]
}
export const useStore = () => {
    return useContext(StoreContext);
};
export const useStoreDispatch = () => useContext(StoreDispatchContext);
export const EmployeesProvider = ({ children }) => {
    // const [stateWithUseState, setstateWithUseState] = useState("state");
    const [employes, employesDispatch] = useReducer(employesReducer, employesInitialState)
    const value = {
        state: employes
    };
    const valuesDispatches = {
        employesDispatch
    };

    return (
        
        <StoreContext.Provider value={value}>
            <StoreDispatchContext.Provider value={valuesDispatches}>{children}</StoreDispatchContext.Provider>
        </StoreContext.Provider>
    );
};
