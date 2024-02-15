import { Prisma, PrismaClient } from '@prisma/client';
import pagination from 'prisma-extension-pagination';

export const extendedPrismaClient = new PrismaClient<
  Prisma.PrismaClientOptions,
  'query' | 'info' | 'warn' | 'error'
>({
  log: [
    { level: 'query', emit: 'event' },
    { level: 'info', emit: 'event' },
    { level: 'warn', emit: 'event' },
    { level: 'error', emit: 'event' },
  ],
}).$extends(pagination());

export type ExtendedPrismaClient = typeof extendedPrismaClient; // esto se hace porque el tipo de extendedPrismaClient no es el mismo que el de PrismaClient por lo que se debe hacer un type para que sea el mismo tipo que el de PrismaClient y se pueda usar en el resto del proyecto sin problemas de tipos diferentes en el cliente de prisma extendido y el cliente de prisma original que se usa en el resto del proyecto con el tipo PrismaClient de prisma/client que es el tipo que se usa en el resto del proyecto
