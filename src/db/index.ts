import { env } from "@/env"
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

import * as schema from "./schema"

const connection = new Database(env.DATABASE_URL)
const db = drizzle(connection, { schema })

export { connection, db }
