import "dotenv/config"

import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"

function main() {
  try {
    console.log("Migration started")

    const connection = new Database(process.env.DATABASE_URL!)
    const db = drizzle(connection)

    migrate(db, { migrationsFolder: "./migrations" })

    console.log("✅ Migration completed")
    process.exit(0)
  } catch (error) {
    console.error("❌ Migration failed")
    console.log(error)
    process.exit(1)
  }
}

main()
