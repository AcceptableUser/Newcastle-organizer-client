import React from 'react'
import './index.scss'

export default function index(props) {

    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: props.borderColor ? `${props.borderColor} 2px solid` : ""
    }

    return (
        <button className="btn btn-social" type={props.type} style={style}>
            {props.children}
            <span>{props.title}</span>
        </button>
    )
}
