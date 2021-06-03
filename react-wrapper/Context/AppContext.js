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
    viewTimeLine: false,
    completeSurveyStatus: false,
    currentStage: null,
    openModal: {
        type: 'no-modal', //large-modal
    },
    companyUpdateSwitch: null
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
        case 'VIEWTIMELINE':
            return sharedState = { ...sharedState, viewTimeLine: action.payload }
        case 'CURRENT_STAGE':
            return sharedState = { ...sharedState, currentStage: action.payload }
        case 'STAGE_ANSWERS':
            return sharedState = { ...sharedState, stagesAnswers: action.payload }
        case 'OPEN_MODAL':
            return sharedState = { ...sharedState, openModal: action.payload }
        case 'COMPANY_UPDATE_SWITCH':
            return sharedState = { ...sharedState, companyUpdateSwitch: action.payload }
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
