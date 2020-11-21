import React from 'react'
import './index.scss'

export default function index({title, type}) {
    return (
        <button className="btn btn-primary log__button button__font" type={type}>{title}</button>
    )
}
