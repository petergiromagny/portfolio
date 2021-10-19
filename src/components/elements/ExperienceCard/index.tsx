import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  location: string;
  date: string;
  text: string[];
  url?: string;
  urlName?: string;
}

const Index: FC<Props> = ({
  title,
  location,
  date,
  text,
  url = null,
  urlName = "web agency",
}) => {
  return (
    <div className='experience__card'>
      <div className='card__title'>
        {url ? (
          <a href={url} rel='nofollow noreferrer' target='_blank'>
            <h3>{title}</h3>
            {urlName && <span>{urlName}</span>}
            <div className='arrow__image'>
              <Image
                src='/svg/arrow-link.svg'
                alt='See website'
                width={25}
                height={25}
              />
            </div>
          </a>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
      <div className='card__subtitle'>
        <h4>
          {location} <span>|</span> {date}
        </h4>
      </div>
      <div className='card__text'>
        {text.map((item: string, index: number) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Index;
