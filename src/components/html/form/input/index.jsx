import React from 'react'

export default function index(props) {
    return (
        <input type={props.type} name={props.name} id={props.id} list={props.list} />
    )
}
