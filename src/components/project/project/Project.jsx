import './Project.scss'

export default function Project() {
    return (
        <div className="project">
            <div  className="project__content__wrapper">
                <img className="project__image"
                    src={"https://image.shutterstock.com/image-photo/presentation-project-management-areas-knowledge-260nw-706715482.jpg"}
                    alt={"project"}/>
                <h3 className="project__title">Newcastle Organizer</h3>
                <p className="project__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue nisl orci. Fusce ut turpis a
                    ipsum mollis pharetra in sed tortor. Phasellus cursus leo lacus, non varius massa egestas sit amet.
                </p>
            </div>
        </div>
    )
}
