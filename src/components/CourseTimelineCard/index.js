// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseItem} = props
  // console.log(courseItem)
  const {courseTitle, description, duration, tagsList} = courseItem

  return (
    <>
      <div className="course-title-container">
        <h1 className="course-title"> {courseTitle} </h1>
        <div className="icon-container">
          <AiFillClockCircle className="icons" />
          <p className="icons-para">{duration}</p>
        </div>
      </div>
      <p> {description} </p>
      <div className="tags-list">
        {tagsList.map(eachItem => (
          <ListItem key={eachItem.id} listItem={eachItem} />
        ))}
      </div>
    </>
  )
}

export default CourseTimeLineCard

const ListItem = prop => {
  const {listItem} = prop
  const {name} = listItem

  return <p className="list-item">{name}</p>
}
