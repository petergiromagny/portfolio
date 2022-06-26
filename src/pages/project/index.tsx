import { useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
// Import data
import projects from "data/project.json";
// Import type
import type { IProject } from "types/project";

const ProjectCardDynamic = dynamic(
  () => import("components/elements/ProjectCard")
);

const Index = () => {
  const lastProjects = useMemo<IProject[]>(() => {
    let projectsReversed: IProject[] = [];
    for (let index = projects.length; 0 <= index; index--) {
      console.log('Array sorted')
      if (projects[index] !== undefined) {
        projectsReversed.push(projects[index]);
      }
    }
    return projectsReversed;
  }, []);

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
          {lastProjects.map((item) => (
            <ProjectCardDynamic
              isHorizontal
              key={item.id}
              id={item.id}
              tags={item.tags}
              name={item.name}
              intro={item.intro}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
