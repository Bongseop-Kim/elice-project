import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

const jsonFile = fs.readFileSync('./hospital.json', 'utf-8');

const hospital = JSON.parse(jsonFile);

async function upload() {
  const batchSize = 1000;
  for (let i = 0; i < hospital.length; i += batchSize) {
    const batch = hospital.slice(i, i + batchSize);
    await prisma.hospital.createMany({
      data: batch,
    });
  }
}
upload();
