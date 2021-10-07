import React, { FC } from "react";
// Import components
import ExperienceCard from "components/elements/ExperienceCard";
// Import data
import work from "data/work.json";
import education from "data/education.json";

const Index: FC = () => {
  return (
    <div id='experience'>
      <div className='container row__flex'>
        <div className='col__2 experience__col'>
          <div className='experience__header'>
            <span className='emoji'>👨‍💻</span>
            <h2>Work experience</h2>
          </div>
          {work.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.name}
              location={item.location}
              date={item.date}
              text={item.text}
              url={item.url}
              urlName={item.urlName}
            />
          ))}
        </div>
        <div className='col__2 education__col'>
          <div className='education__header'>
            <span className='emoji'>📚</span>
            <h2>Education</h2>
          </div>
          {education.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.name}
              location={item.location}
              date={item.date}
              text={item.text}
              url={item.url}
              urlName={item.urlName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
