import Image from "next/image"
import Link from "next/link"

import { Tag } from "@/components/projects"
import { IProject } from "@/types/project"

export function ProjectDetailCard({ id, name, intro, image, link, tags = [] }: IProject) {
  const linkWebsite = link ?? `/project/${id}`

  return (
    <div className='project__card project__card--horizontal' id={`project-${id}`}>
      <div className='card__body'>
        <div className='col__2 col__text'>
          <h2>{name}</h2>
          <div className='project__info'>
            <p>{intro}</p>
            <div className='project__tags'>
              {tags.map((item, index) => {
                return <Tag text={item} key={index} />
              })}
            </div>
          </div>
          {link ? (
            <Link className='button' href={linkWebsite} rel='noreferrer noopener' target='_blank'>
              Visit website
            </Link>
          ) : (
            <Link href={linkWebsite} className='button'>
              See more
            </Link>
          )}
        </div>
        <div className='col__2'>
          <div className='preview'>
            <Image src={`/svg/previews/${image}`} alt={name} width={400} height={250} priority />
          </div>
        </div>
      </div>
    </div>
  )
}
