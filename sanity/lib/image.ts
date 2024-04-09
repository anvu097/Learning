import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const builder = imageUrlBuilder({
  projectId: "cpi8ld6j",
  dataset: "production",
});

export const urlFor = (source: Image) => {
  return builder.image(source);
};
