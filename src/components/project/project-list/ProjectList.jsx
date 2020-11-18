import React from 'react'
import './ProjectList.scss'
import Project from "../project/Project";

export default function ProjectList() {
    return (
        <div className={"project-list"}>
            <Project />
            <Project />
            <Project />
            <Project />

        </div>
    )
}
