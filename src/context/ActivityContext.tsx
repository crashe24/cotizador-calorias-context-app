import { ReactNode, createContext, useReducer } from 'react';
import {ActivityActions, ActivityState, activityReducer, initialState }  from '../reducers/activity-reducer'

type ActivityContextProps = {
    state: ActivityState,
    dispatch: React.Dispatch<ActivityActions>
}
export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

type ActivityProviderProps = {
    children: ReactNode
}
export const ActivityProvider = ({children}:ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer,initialState)

    return  (
        <ActivityContext.Provider value={{
            state, dispatch
        }}>
            {children}
        </ActivityContext.Provider>
    )
}

