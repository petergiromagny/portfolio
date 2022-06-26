import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
// Import components
import Tag from "../Tag";

interface Props {
  id: number;
  name: string;
  intro: string;
  image: string;
  link?: string;
  tags: string[];
  isHorizontal: boolean;
}

const Index: FC<Props> = ({
  id,
  name,
  intro,
  image,
  link,
  tags = [],
  isHorizontal = false,
}) => {
  let linkWebsite: string;

  if (link === undefined) {
    linkWebsite = `/project/${id}`;
  } else {
    linkWebsite = link;
  }

  // Card for project page
  if (isHorizontal) {
    return (
      <div className='project__card project__card--horizontal' id={`project-${id}`}>
        <div className='card__body'>
          <div className='col__2 col__text'>
            <h2>{name}</h2>
            <div className='project__info'>
              <p>{intro}</p>
              <div className='project__tags'>
                {tags.map((item, index) => {
                  return <Tag text={item} key={index} />;
                })}
              </div>
            </div>
            {link !== undefined ? (
              <a
                className='button'
                href={linkWebsite}
                rel='noreferrer noopener'
                target='_blank'
              >
                Visit website
              </a>
            ) : (
              <Link href={linkWebsite}>
                <a className='button'>See more</a>
              </Link>
            )}
          </div>
          <div className='col__2'>
            <div className='preview'>
              <Image
                src={`/svg/previews/${image}`}
                alt={name}
                width={400}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={{
        pathname: linkWebsite,
        query: { fromHome: true },
      }}
    >
      <a
        className='project__card'
        rel='noreferrer noopener'
        target={`${link !== undefined ? "_blank" : ""}`}
      >
        <div className='card__header'>
          <h3>{name}</h3>
        </div>
        <div className='card__body'>
          <div className='text'>
            <p>{intro}</p>
          </div>
          <div className='preview'>
            <Image
              src={`/svg/previews/${image}`}
              alt={name}
              width={400}
              height={250}
              priority
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Index;
