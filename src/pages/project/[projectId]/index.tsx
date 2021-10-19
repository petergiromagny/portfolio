import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// Import data
import projects from "data/project.json";
// Import type
import type { IProject } from "types/project";
// Import components
import Tag from "components/elements/Tag";

interface Props {}

const Index: FC = () => {
  const router = useRouter();

  let currentProject: IProject = {};

  const { projectId, fromHome } = router.query;

  projects.map((item) => {
    if (`${item.id}` === projectId) {
      currentProject = item;
    }
  });

  const { id, name, tags, details, image } = currentProject;

  if (tags === undefined) {
    return (
      <div id='project__content--one'>
        <div className='section__header project__header'>
          <h1>The project content is loading</h1>
        </div>
      </div>
    );
  }

  return (
    <div id='project__content--one'>
      <div className='section__header project__header'>
        <h1>{name}</h1>
        {tags !== undefined && (
          <div className='project__tag'>
            {tags.map((item: string, index: number) => {
              return <Tag text={item} key={index} />;
            })}
          </div>
        )}
      </div>
      <div className='container'>
        <div className='back__home container'>
          {fromHome === "true" ? (
            <span
              onClick={() => router.back()}
              className='button__back'
            >{`< Back to home`}</span>
          ) : (
            <span
              onClick={() => router.back()}
              className='button__back'
            >{`< Back to projects`}</span>
          )}
        </div>
        <div className='project__body'>
          {details &&
            details.map((item: string, index: number) => {
              return <p key={index}>{item}</p>;
            })}
          <div className='project__image'>
            <Image
              src={`/svg/previews/${image}`}
              alt={currentProject.name}
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
