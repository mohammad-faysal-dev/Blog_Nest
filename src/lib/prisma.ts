import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;

// Singleton: reuse PrismaClient across hot-reloads in dev and across
// invocations in the same serverless container on Vercel.
declare const globalThis: {
    prismaGlobal?: PrismaClient;
} & typeof global;

function createPrismaClient() {
    const adapter = new PrismaPg({ connectionString });
    return new PrismaClient({ adapter });
}

export const prisma: PrismaClient =
    globalThis.prismaGlobal ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prisma;
}