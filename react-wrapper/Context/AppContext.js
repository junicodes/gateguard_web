import { useReducer, createContext, useContext } from 'react';

const AppContext = createContext();
const AppDispatchContext = createContext()

//Object Shared State Default Store
let sharedState = {
    sideBarToggle: {
        status: true,
        event: false
    },
    ceilingPreloader: false,
    ceilingPreloaderRequest: false,
    findUrlPath: '/',
    openModal: {
        type: 'no-modal', //large-modal
    }
}

//Reducer to change state
const reducer = (state, action) => {
    switch (action.type) {
        case 'SIDEBAR_TOGGLE':
            return sharedState = { ...sharedState, sideBarToggle: action.payload }
        case 'CEILING_PRELODER':
            return sharedState = { ...sharedState, ceilingPreloader: action.payload } 
        case 'CEILING_PRELODER_REQUEST':
            return sharedState = { ...sharedState, ceilingPreloaderRequest: action.payload } 
        case 'FINDURLPATH':
            return sharedState = { ...sharedState, findUrlPath: action.payload }
        case 'OPEN_MODAL':
            return sharedState = { ...sharedState, openModal: action.payload }
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}


//Set context info
export function AppProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, sharedState);

    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppContext.Provider value={state}>
                {children}
            </AppContext.Provider>
        </AppDispatchContext.Provider>
    );

}

//Get the context info 
export const useAppContext = () => useContext(AppContext)
export const useDispatchAppContext = () => useContext(AppDispatchContext)
