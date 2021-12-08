import { useContext } from 'react'
import { StateContext } from './Context'
import './Counter.scss'

export default function Counter() {

    const {state} = useContext(StateContext)

    const convertTime = (input) => {
        const seconds = Math.floor(input)%60
        const minutes = Math.floor(input/60)
        return `${minutes.toString().length<2?'0'+minutes:minutes}:${seconds.toString().length<2?'0'+seconds:seconds}` 
    }

    return (
        <div className="counter">
            <h2 id="timer-label">{state.phase[0].toUpperCase() + state.phase.slice(1)}</h2>
            <p id="time-left">{convertTime(state.timer)}</p>
        </div>
    )
}
