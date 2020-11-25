import React from 'react'
import './Message.css'

export default function Message(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    );
}