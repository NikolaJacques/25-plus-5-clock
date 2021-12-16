import { useContext } from 'react'
import { StateContext } from './Context'
import Button from './Button'
import './Buttons.scss'

export default function Buttons() {

    const {state, dispatch, ACTIONS, createTimer, destroyTimer} = useContext(StateContext)

    return (
        <>
            <div className="buttons">
                <Button iconName={state.ongoing&&!state.pause?'pause':'play'} id='start_stop' handler={
                    () => {
                        if (!state.pause&&state.ongoing) {
                            destroyTimer()
                        } else {
                            createTimer()
                        }
                        dispatch({type:ACTIONS.START_STOP_TIMER})
                    }
                }/>
                <Button iconName='sync-alt' id="reset" handler={
                    () => {
                        destroyTimer()
                        dispatch({type:ACTIONS.RESET_STATE})
                        // --> code added to pass FCC test 28
                        document.getElementById('beep').pause()
                        document.getElementById('beep').currentTime=0
                        // code added to pass FCC test 28 <--
                    }
                }/>
            </div>
        </>
    )
}
