import { createContext, useContext, useReducer,useState } from "react";
import { employesReducer } from './reducers/employes';

const StoreContext = createContext();
const StoreDispatchContext = createContext();
const employesInitialState = {
    employes:[],
    actualEmployed: null
}
export const useStore = () => {
    return useContext(StoreContext);
};
export const useStoreDispatch = () => useContext(StoreDispatchContext);
export const EmployeesProvider = ({ children, init }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [employes, employesDispatch] = useReducer(employesReducer, employesInitialState,init)
    const value = {
        state: employes,
        ui: {
            openModal,
            openEditModal
        }
    };
    const valuesDispatches = {
        employesDispatch,
        setOpenModal,
        setOpenEditModal
    };

    return (
        
        <StoreContext.Provider value={value}>
            <StoreDispatchContext.Provider value={valuesDispatches}>{children}</StoreDispatchContext.Provider>
        </StoreContext.Provider>
    );
};
