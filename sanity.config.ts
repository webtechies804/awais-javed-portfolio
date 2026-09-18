import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "portfolio-studio",
  title: "Daniel Sun Portfolio",
  projectId: "02iqh8z6",
  dataset: "portfolios",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
