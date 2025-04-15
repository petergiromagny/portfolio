import Image from "next/image"
import Link from "next/link"

import { IExperience } from "@/types/experience"

type Props = IExperience

export function ExperienceCard({ name, location, date, text, url, urlName = "web agency" }: Props) {
  return (
    <div className='experience__card'>
      <div className='card__title'>
        {url ? (
          <Link href={url} rel='nofollow noreferrer' target='_blank'>
            <h3>{name}</h3>
            {urlName && <span>{urlName}</span>}
            <div className='arrow__image'>
              <Image src='/svg/arrow-link.svg' alt='See website' width={25} height={25} />
            </div>
          </Link>
        ) : (
          <h3>{name}</h3>
        )}
      </div>
      <div className='card__subtitle'>
        <h4>
          {location} <span>|</span> {date}
        </h4>
      </div>
      <div className='card__text'>
        {text.map((item: string, index: number) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </div>
  )
}
