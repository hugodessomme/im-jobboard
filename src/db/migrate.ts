import "dotenv/config"

import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

import * as schema from "./schema"

const client = postgres(process.env.DATABASE_URL!, { max: 1 })
const db = drizzle(client, { schema: schema })

async function main() {
  console.log("Running migrations...")
  await migrate(db, { migrationsFolder: "./migrations" })
}

main()
  .catch((e) => {
    console.error(`❌ ${e}`)
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    console.log("✅ Migration completed")
    process.exit(0)
  })
