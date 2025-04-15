import Image from "next/image"
import Link from "next/link"

import { IProject } from "@/types/project"

export function ProjectPreviewCard({ id, name, intro, image, link }: IProject) {
  const linkWebsite = link ?? `/project/${id}`

  return (
    <Link href={linkWebsite} className='project__card' rel='noreferrer noopener' target={link ? "_blank" : ""}>
      <div className='card__header'>
        <h3>{name}</h3>
      </div>
      <div className='card__body'>
        <div className='text'>
          <p>{intro}</p>
        </div>
        <div className='preview'>
          <Image src={`/svg/previews/${image}`} alt={name} width={400} height={250} priority />
        </div>
      </div>
    </Link>
  )
}
