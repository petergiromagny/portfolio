"use server"

import projects from "@/data/project.json"
import { IProject } from "@/types/project"

export async function getProjectById(id: string): Promise<IProject | undefined> {
  const project: IProject | undefined = projects.find((item) => `${item.id}` === id)

  return Promise.resolve(project)
}
