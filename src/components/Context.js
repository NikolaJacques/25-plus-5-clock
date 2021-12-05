import { createContext, useReducer, useEffect } from 'react'

export const StateContext = createContext()

function reducer(state, action) {
    let phase
    switch (action.type) {
        case ACTIONS.RESET_STATE:
            return DEFAULT_STATE
        case ACTIONS.INCREMENT_TIME:
            phase = action.payload.phase
            return { ...state, 
                    [phase]: state[phase]<3600?state[phase]+60:state[phase]}
        case ACTIONS.DECREMENT_TIME:
            phase = action.payload.phase
            return { ...state, 
                    [phase]: state[phase]>60?state[phase]-60:state[phase]}
        case ACTIONS.UPDATE_TIMER:
            return {...state, timer: action.payload.newTime}
        case ACTIONS.START_STOP_TIMER:
            return {...state, ongoing: true, pause:!state.ongoing?false:!state.pause}
        case ACTIONS.CHANGE_PHASE:
            return {...state, phase: action.payload.newPhase}    
        default:
            return state
    }
}

const ACTIONS = {
    INCREMENT_TIME:'increment-time',
    DECREMENT_TIME: 'decrement-time',
    UPDATE_TIMER: 'update-timer',
    START_STOP_TIMER: 'start-stop-timer',
    CHANGE_PHASE: 'change-phase',
    RESET_STATE:'reset-state' 
}

const DEFAULT_STATE = {
    ongoing: false,
    pause: false,
    session: 1500,
    break: 300,
    timer: 1500,
    phase:'session',
    clock: undefined
}

export default function Context(props) {
    
    const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)

    useEffect(() => {
        dispatch({type: ACTIONS.UPDATE_TIMER, payload:{newTime:state.session}})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state.session])

    const createTimer = function() {
        dispatch({type:ACTIONS.START_RESUME_TIMER})
        let timer = state.timer
        let phase = state.phase
        state.clock = setInterval(() => {
            if (timer > 0){
                timer -= 1
                dispatch({type: ACTIONS.UPDATE_TIMER, payload:{newTime: timer}})
            } else {
                phase = phase==='session'?'break':'session'
                timer = state[phase]
                dispatch({type: ACTIONS.CHANGE_PHASE, payload:{newPhase: phase}})
                dispatch({type: ACTIONS.UPDATE_TIMER, payload:{newTime: timer}})
            }
        },1000)
    }
    const destroyTimer = function() {
        clearInterval(state.clock)
    }

    return (
        <>
            <StateContext.Provider value={{state, dispatch, ACTIONS, createTimer, destroyTimer}}>
                {props.children}
            </StateContext.Provider>
        </>

    )
}
