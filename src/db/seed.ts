import "dotenv/config"

async function seed() {
  console.log("Running seed command...")
  console.time("Finished in")
}

seed()
  .catch((e) => {
    console.error(`❌ ${e}`)
    process.exit(1)
  })
  .finally(() => {
    console.log("🌱 The seed command has been executed.")
    console.timeEnd("Finished in")
  })
