import { PrismaClient } from "@prisma/client"

 const prisma = new PrismaClient();
 prisma.$connect().then(() => {
  console.log("Connected to the database");
}).catch((error: Error) => {
  console.error("Error connecting to the database:", error);
});

export default prisma;