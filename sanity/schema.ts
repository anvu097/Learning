import { type SchemaTypeDefinition } from "sanity";

import experience from "./schemaTypes/experience";
import pageInfo from "./schemaTypes/pageInfo";
import project from "./schemaTypes/project";
import skills from "./schemaTypes/skills";
import social from "./schemaTypes/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, skills, project, social],
};
