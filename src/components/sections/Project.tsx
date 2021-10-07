import React, { FC } from "react";
import ProjectCard from "components/elements/ProjectCard";

const Index: FC = () => {
  return (
    <div id='project'>
      <div className='container'>
        <div className='section__header'>
          <span className='emoji'>🖥</span>
          <h2>Recent Projects</h2>
        </div>
        <div className='project__body'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard openProject />
        </div>
      </div>
    </div>
  );
};

export default Index;
