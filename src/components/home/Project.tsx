import Link from "next/link"

import { getThreeLatestProjects } from "@/services/usecases/get-three-latest-project.usecase"

import { ProjectPreviewCard } from "./ProjectPreviewCard"

export async function Project() {
  const lastProjects = await getThreeLatestProjects()

  return (
    <div id='project'>
      <div className='container'>
        <div className='section__header'>
          <span className='emoji'>🖥</span>

          <h2>Recent Projects</h2>
        </div>

        <div className='project__body'>
          {lastProjects.map((item) => (
            <ProjectPreviewCard key={item.id} {...item} />
          ))}

          <div className='project__card project__card--more'>
            <span>Don&apos;t keep the suspense alive</span>

            <Link href='/project' className='button'>
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
