"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs = require("fs");
const prisma = new client_1.PrismaClient();
const jsonFile = fs.readFileSync('./hospital.json', 'utf-8');
const hospital = JSON.parse(jsonFile);
async function upload() {
    await prisma.hospital.createMany({
        data: hospital,
    });
}
upload();
//# sourceMappingURL=upload.js.map