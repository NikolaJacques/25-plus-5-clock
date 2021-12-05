import React from 'react'
import Buttons from './Buttons'
import Counter from './Counter'
import TimerSetup from './TimerSetup'
import Audio from './Audio'
import './Container.scss'

export default function Container() {
    return (
        <div className="container">
            <h1>25 + 5 Clock</h1>
            <TimerSetup />
            <Counter />
            <Buttons />
            <Audio />
        </div>
    )
}
