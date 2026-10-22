import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use optional chaining to avoid crash when DATABASE_URL is not set
    // (e.g., during `prisma generate` on Vercel build step)
    url: process.env.DATABASE_URL ?? "",
  },
});
