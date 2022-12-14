import { createContext, useContext, useReducer,useState } from "react";
import EmployeeAdapter from "../domain/Employees/EmployeeAdapter";
import { employesReducer } from './reducers/employes';

const StoreContext = createContext();
const StoreDispatchContext = createContext();
const employesInitialState = {
    employes:[],
}

const employedFormInitialStateObj = {
    Cedula: "",
    Names: "",
    Lastnames: "",
    Email: "",
}
export const employedFormInitialState = new EmployeeAdapter().create(employedFormInitialStateObj);
export const useStore = () => {
    return useContext(StoreContext);
};
export const useStoreDispatch = () => useContext(StoreDispatchContext);
export const EmployeesProvider = ({ children, init }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [night, setNight] = useState(true);
    const [employedForm, setEmployedForm] = useState(employedFormInitialState)
    const [employes, employesDispatch] = useReducer(employesReducer, employesInitialState, init)
    const value = {
        state: employes,
        employedForm: employedForm,
        ui: {
            openModal,
            openEditModal,
            openRegisterModal,
            night
        }
    };
    const valuesDispatches = {
        employesDispatch,
        setOpenModal,
        setOpenRegisterModal,
        setOpenEditModal,
        setEmployedForm,
        setNight
    };
    return (
        <StoreContext.Provider value={value}>
            <StoreDispatchContext.Provider value={valuesDispatches}>{children}</StoreDispatchContext.Provider>
        </StoreContext.Provider>
    );
};
