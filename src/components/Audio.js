import { useContext, useEffect, useRef } from 'react'
import { StateContext } from './Context'

export default function Audio() {

    const {state} = useContext(StateContext)

    const audioElement = useRef(null)

    useEffect(() => {
        if(state.timer===0){
            audioElement.current.volume = 0.5
            audioElement.current.play()
        }
    },[state.timer])

    // --> original implementation
    useEffect (() => {
        if (state.ongoing===false){
            audioElement.current.load()
        }
    },[state.ongoing])
    // original implementation <--

    return (
        <audio id="beep" ref={audioElement} >
            <source src="Low-pitched-bell-strike-sound.mp3" type='audio/mpeg'/>     
        </audio>
    )
}
