// import { db } from "@/lib/db"

// export async function getBoilerplate(id: string) {
//   const data = await db.boilerplate.findUnique({
//     where: {
//       id,
//     },
//   })

//   return data
// }

// export async function getAllBoilerplates(options = {}) {
//   const data = await db.boilerplate.findMany({
//     ...options,
//   })

//   return data
// }

// export async function getAllBoilerplatesWithCount(options = {}) {
//   const data = await db.$transaction([
//     db.boilerplate.findMany({
//       ...options,
//     }),
//     db.boilerplate.count(),
//   ])

//   return data
// }
