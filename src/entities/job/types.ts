import type { Prisma } from "@prisma/client"

export interface Job extends Prisma.JobSelect {}
export interface JobCreate extends Prisma.JobCreateInput {}
export interface JobCreateMany extends Prisma.JobCreateManyInput {}
