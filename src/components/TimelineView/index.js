// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  // console.log(timelineItemsList)

  // console.log(courseList)

  const getCard = eachItem => {
    const category = eachItem.categoryId

    if (category === 'COURSE') {
      return <CourseTimeLineCard key={eachItem.id} courseItem={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectItem={eachItem} />
  }

  return (
    <div className="app-container">
      <h1 className="app-head">
        MY JOURNEY OF
        <br />
        <span className="app-head-2"> CCBP 4.0 </span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          titleColor: '#171f46',
        }}
      >
        {timelineItemsList.map(eachItem => (
          <div className="each-chrono"> {getCard(eachItem)} </div>
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
