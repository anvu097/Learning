import { Skill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.SANITY_STUDIO_BASE_URL}/api/getSkills`,
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
