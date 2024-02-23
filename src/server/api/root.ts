import { createTRPCRouter } from "@/server/api/trpc";
import { CLUBRouter } from "./routers/CLUB";
import { SABRouter } from "./routers/SAB";
import { SCRouter } from "./routers/SC";
import { SDRouter } from "./routers/SD";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  club: CLUBRouter,
  sab: SABRouter,
  sc: SCRouter,
  sd: SDRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
