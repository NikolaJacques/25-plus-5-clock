import React from 'react'
import SetupConsole from './SetupConsole'
import './TimerSetup.scss'

export default function TimerSetup() {
    return (
        <div className="timer-container">
            <SetupConsole title='break' id='break-label'/>
            <SetupConsole title='session' id='session-label'/>             
        </div>
    )
}
