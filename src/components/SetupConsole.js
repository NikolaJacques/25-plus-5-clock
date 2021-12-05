import { useContext } from 'react'
import { StateContext } from './Context'
import Button from './Button'
import './SetupConsole.scss'

export default function SetupConsole({title}) {

    const {state, dispatch, ACTIONS} = useContext(StateContext)

    return (
        <div className="console-container">
            <h2 className="title" id={`${title}-label`}>{`${title[0].toUpperCase() + title.slice(1)} Length`}</h2>
            <div className="setup-container">
                <Button iconName='arrow-up' id={`${title}-increment`} handler={
                    () => {
                        if(!state.ongoing){
                            dispatch({type:ACTIONS.INCREMENT_TIME, payload:{phase:title}})
                        }
                    }
                }/>
                <p id={`${title}-length`}>{state[title]/60}</p>  
                <Button iconName='arrow-down' id={`${title}-decrement`} handler={
                   () => {
                        if(!state.ongoing){
                            dispatch({type:ACTIONS.DECREMENT_TIME, payload:{phase:title}})
                        }
                    }
                }/>
            </div>
        </div>
    )
}
