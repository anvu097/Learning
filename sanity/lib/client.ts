import { createClient } from "@sanity/client";

export const client = createClient({
  apiVersion: "2024-03-01",
  dataset: "production",
  projectId: "cpi8ld6j",
  useCdn: false,
});
