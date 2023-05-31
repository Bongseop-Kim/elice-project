import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { writeFile } from 'fs/promises';

const prisma = new PrismaClient();
const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=aQFwyyURxZPboOkpSx1uUEC9mvyECY1ClICrCdzJ9lNT9JZC0oGtU%2BKwiY7dSTrZm3wodyTWqkdltlLRwKFafQ%3D%3D&QD=D002&pageNo=1&numOfRows=3`;

axios
  .get(url)
  .then((response) => {
    const data = response.data.response.body.items.item;
    writeFile('hospital.json', JSON.stringify(data));
  })
  .catch((error) => {
    console.error(error);
  });

// async function upload() {
//   const data = {};
//   const result = await prisma.hospital.create({
//     data,
//   });
// }
// upload();

// const CreateHospital = async () => {
//   const resItem = res.data.response.body.items.item;
//   const result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
//   const data = {
//     ...resItem,
//     dutyTime1c: resItem.dutyTime1c?.toString(),
//     dutyTime2c: resItem.dutyTime2c?.toString(),
//     dutyTime3c: resItem.dutyTime3c?.toString(),
//     dutyTime4c: resItem.dutyTime4c?.toString(),
//     dutyTime5c: resItem.dutyTime5c?.toString(),
//     dutyTime6c: resItem.dutyTime6c?.toString(),
//     dutyTime7c: resItem.dutyTime7c?.toString(),
//     dutyTime8c: resItem.dutyTime8c?.toString(),
//   };
//   console.log(data);
// return this.prisma.hospital.create({ data });
// };
