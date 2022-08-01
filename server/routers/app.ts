import * as trpc from '@trpc/server';
import { personRouter } from './person';

export const appRouter = trpc.router().merge('person.', personRouter)

export type AppRouter = typeof appRouter;