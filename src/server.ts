import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000;

// On Vercel, the app is exported directly as a serverless function.
// Locally, we start a regular HTTP server.
if (!process.env.VERCEL) {
  async function main() {
    try {
      await prisma.$connect();
      console.log("connected to the database successfully");
      app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("An error occurred", error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }

  main();
}

export default app;
