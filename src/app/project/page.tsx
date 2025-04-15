import Link from "next/link"

import { ProjectDetailCard } from "@/components/projects"
import { getRecentProjects } from "@/services/usecases/get-recent-projects.usecase"

export default async function ProjectPage() {
  const projectsByLatest = await getRecentProjects()

  return (
    <div id='project__content'>
      <div className='section__header project__header'>
        <h1>Recent Projects</h1>
      </div>

      <div className='container'>
        <div className='back__home container'>
          <Link href='/' className='button__back'>
            {`< Return to previous page`}
          </Link>
        </div>

        <div className='project__body'>
          {projectsByLatest.map((item) => (
            <ProjectDetailCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
