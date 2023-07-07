// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  console.log(projectItem)
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectItem

  return (
    <>
      <img src={imageUrl} alt="project jpg" className="project-image" />
      <div className="course-title-container">
        <h1 className="course-title"> {projectTitle} </h1>
        <div className="icon-container">
          <AiFillCalendar className="icons" />
          <p className="icons-para">{duration}</p>
        </div>
      </div>
      <p> {description} </p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="visit-btn"
      >
        Visit
      </a>
    </>
  )
}

export default ProjectTimelineCard
