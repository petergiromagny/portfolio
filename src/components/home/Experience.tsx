import education from "data/education.json"
import work from "data/work.json"

import { ExperienceCard } from "./ExperienceCard"

export function Experience() {
  return (
    <div id='experience'>
      <div className='container row__flex'>
        <div className='col__2 experience__col'>
          <div className='section__header'>
            <span className='emoji'>👨‍💻</span>

            <h2>Work experience</h2>
          </div>

          {work.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>

        <div className='col__2 education__col'>
          <div className='section__header'>
            <span className='emoji'>📚</span>
            <h2>Education</h2>
          </div>

          {education.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
