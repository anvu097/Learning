import { Project } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.SANITY_STUDIO_BASE_URL}/api/getProjects`,
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
