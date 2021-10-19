import React, { FC } from "react";
import ProjectCard from "components/elements/ProjectCard";
// Import data
import project from "data/project.json";
// Import type
import type { IProject } from "types/project";

const Index: FC = () => {
  let lastProjects: IProject[] = [];

  for (let index = project.length; project.length - 3 <= index; index--) {
    if (project[index] !== undefined) {
      lastProjects.push(project[index]);
    }
  }

  return (
    <div id='project'>
      <div className='container'>
        <div className='section__header'>
          <span className='emoji'>🖥</span>
          <h2>Recent Projects</h2>
        </div>
        <div className='project__body'>
          {lastProjects.map((item) => (
            <ProjectCard
              key={item.id}
              id={item.id}
              tags={item.tags}
              name={item.name}
              link={item.link}
              intro={item.intro}
              image={item.image}
            />
          ))}
          <ProjectCard openProject />
        </div>
      </div>
    </div>
  );
};

export default Index;
