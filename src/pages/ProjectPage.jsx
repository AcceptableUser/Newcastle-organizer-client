import React from 'react'
import '../styles/scss/ProjectPage.scss'
import Bag from "../components/html/SVG/Bag";
import InProgress from "../components/html/SVG/InProgress";
import Ticked from "../components/html/SVG/Ticked";
import ProjectList from "../components/project/project-list/ProjectList";
import Container from "../components/container/Container";

export default function ProjectPage() {
    return (
        <Container>
            <div className={"project-page"}>
                <div className={"project-page-article"}>
                    <div className={"flex align-items-center"}>
                        <Bag size={1.25} />
                        <h2>Working (2)</h2>
                    </div>
                    <ProjectList />
                </div>
                <hr />
                <div className={"project-page-article"}>
                    <div className={"flex align-items-center"}>
                        <InProgress size={1.25} />
                        <h2>In progress (2)</h2>
                    </div>
                    <ProjectList />
                </div>
                <hr />
                <div className={"project-page-article"}>
                    <div className={"flex align-items-center"}>
                        <Ticked size={1.25} />
                        <h2>Finished (1)</h2>
                    </div>
                    <ProjectList />
                </div>
            </div>
        </Container>

    )
}
