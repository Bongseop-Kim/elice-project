import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

const hospitalJsonFile = fs.readFileSync('./hospital.json', 'utf-8');
const userJsonFile = fs.readFileSync('./user.json', 'utf-8');

const hospitals = JSON.parse(hospitalJsonFile);
const users = JSON.parse(userJsonFile);

async function uploadHospital() {
  const batchSize = 1000;
  for (let i = 0; i < hospitals.length; i += batchSize) {
    const batch = hospitals.slice(i, i + batchSize);
    await prisma.hospital.createMany({
      data: batch,
    });
  }
}

uploadHospital();
