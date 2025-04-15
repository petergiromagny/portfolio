import Image from "next/image"
import { notFound } from "next/navigation"

import { GoBackLink, Tag } from "@/components/projects"
import { getProjectById } from "@/services/usecases/get-project-by-id.usecase"

export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params

  const project = await getProjectById(projectId)

  if (!project) notFound()

  const { name, tags, details, image } = project

  return (
    <div id='project__content--one'>
      <div className='section__header project__header'>
        <h1>{name}</h1>

        <div className='project__tag'>
          {tags.map((item: string, index: number) => {
            return <Tag text={item} key={index} />
          })}
        </div>
      </div>

      <div className='container'>
        <GoBackLink />

        <div className='project__body'>
          {details?.map((item: string, index: number) => {
            return <p key={index}>{item}</p>
          })}

          <div className='project__image'>
            <Image src={`/svg/previews/${image}`} alt={project.name ?? "Project screen"} width={800} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}
