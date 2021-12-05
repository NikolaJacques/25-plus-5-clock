import React from 'react'
import './Button.scss'

export default function Button({ iconName, handler, id }) {
    return (
        <div className="button" id={id} onClick={() => handler()}>
          <i className={`fas fa-${iconName}`}></i>  
        </div>
    )
}
