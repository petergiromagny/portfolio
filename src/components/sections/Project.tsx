import React, { FC, useMemo } from "react";
import ProjectCard from "components/elements/ProjectCard";
// Import data
import projects from "../../data/project.json";
// Import type
import type { IProject } from "types/project";
import Link from "next/link";

const Project: FC = () => {
  // Get last three projects
  const lastProjects = useMemo<IProject[]>(() => projects.slice(-3).reverse(), []);

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
              isHorizontal={false}
            />
          ))}
          <div className='project__card project__card--more'>
            <span>Don&apos;t keep the suspense alive</span>
            <Link href='/project'>
              <a className='button'>See more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
