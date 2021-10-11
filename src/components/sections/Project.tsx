import React, { FC } from "react";
import ProjectCard from "components/elements/ProjectCard";
// Import data
import project from "data/project.json";

const Index: FC = () => {
  const lastProjects = [
    project[project.length - 1],
    project[project.length - 2],
    project[project.length - 3],
  ];

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
