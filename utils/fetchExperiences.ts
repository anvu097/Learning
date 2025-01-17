import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.SANITY_STUDIO_BASE_URL}/api/getExperience`,
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
