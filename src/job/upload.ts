import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

const jsonFile = fs.readFileSync('./hospital.json', 'utf-8');

const hospital = JSON.parse(jsonFile);

async function upload() {
  await prisma.hospital.createMany({
    data: hospital,
  });
}
upload();
