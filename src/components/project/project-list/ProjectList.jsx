import React from 'react'
import './ProjectList.scss'
import Project from "../project/Project";

export default function ProjectList() {
    return (
        <ul className="project__list">
            <li><Project /></li>
            <li><Project /></li>
            <li><Project /></li>
            <li><Project /></li>
        </ul>
    )
}
