import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

const userJsonFile = fs.readFileSync('./user.json', 'utf-8');

const users = JSON.parse(userJsonFile);

async function uploadUser() {
  const batchSize = 1000;
  for (let i = 0; i < users.length; i += batchSize) {
    const batch = users.slice(i, i + batchSize);
    await prisma.user.createMany({
      data: batch,
    });
  }
}

uploadUser();
