"use server"

import projects from "@/data/project.json"
import { IProject } from "@/types/project"

export async function getThreeLatestProjects(): Promise<IProject[]> {
  const projectsReversed: IProject[] = []

  for (let index = projects.length - 1; index >= projects.length - 3; index--) {
    projectsReversed.push(projects[index])
  }

  return Promise.resolve(projectsReversed)
}
