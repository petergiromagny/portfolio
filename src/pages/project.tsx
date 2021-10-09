import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Import components
import ProjectCard from "components/elements/ProjectCard";
// Import data
import projects from "data/project.json";

const Index = () => {
  const router = useRouter();

  return (
    <div id='project__content'>
      <div className='section__header project__header'>
        <h1>Recent Projects</h1>
      </div>
      <div className='container'>
        <div className='back__home container'>
          <Link href='/'>
            <a className='button__back'>{`< Back to home`}</a>
          </Link>
        </div>
        <div className='project__body'>
          {projects.map((item) => (
            <ProjectCard
              isHorizontal
              key={item.id}
              tags={item.tags}
              name={item.name}
              intro={item.intro}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
