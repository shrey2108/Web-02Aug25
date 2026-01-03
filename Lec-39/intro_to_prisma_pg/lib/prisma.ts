import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client.js'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString });

// const prisma = new PrismaClient({ adapter })

// singleton pattern to ensure a single instance of PrismaClient
class PrismaManager {
  private static instance: PrismaClient
  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaManager.instance) {
      PrismaManager.instance = new PrismaClient({ adapter })
    }
    return PrismaManager.instance
  }
}

const prisma = PrismaManager.getInstance()

export { prisma }