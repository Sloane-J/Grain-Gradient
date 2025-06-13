import { articlesKs, authorsKs, categoriesKs } from "@/lib/keystatic";
import { config } from "@keystatic/core";

export default config({
  storage: {
    kind: "github", // <-- Changed from "local" to "github"
    repo: {
      owner: 'Sloane-J', // <-- Your GitHub username
      name: 'Grain-Gradient',       // <-- Your repository name
      //branch: 'main',               // <-- The branch Vercel deploys from (usually 'main')
    },
  },
  ui: {
    brand: {
      name: "Grain & Gradient",
    },
    navigation: ["---", "articles", "---", "authors", "categories"],
  },
  collections: {
    articles: articlesKs,
    authors: authorsKs,
    categories: categoriesKs,
  },
});