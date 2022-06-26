export interface IProject {
  id: number;
  name: string;
  intro: string;
  image: string;
  link?: string;
  tags: string[];
  details: string[] | [];
}
