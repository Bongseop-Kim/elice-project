import axios from 'axios';
import { writeFile } from 'fs/promises';

const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=aQFwyyURxZPboOkpSx1uUEC9mvyECY1ClICrCdzJ9lNT9JZC0oGtU%2BKwiY7dSTrZm3wodyTWqkdltlLRwKFafQ%3D%3D&QD=D002&pageNo=1&numOfRows=10`;

axios
  .get(url)
  .then((response) => {
    const hospitals = response.data.response.body.items.item;
    const jsonData = hospitals.map((hospital) => {
      const address = hospital.dutyAddr.split(' ');

      return {
        id: hospital.hpid,
        dutyAddr: hospital.dutyAddr,
        dutyAddr1Depth: address[0],
        dutyAddr2Depth: address[1],
        dutyAddr3Depth: address.slice(2).join(' '),
        // dutyDiv: hospital.dutyDiv,
        // dutyDivNam: hospital.dutyDivNam,
        // dutyEmcls: hospital.dutyEmcls,
        // dutyEmclsName: hospital.dutyEmclsName,
        // dutyEryn: hospital.dutyEryn,
        dutyEtc: hospital.dutyEtc,
        dutyMapimg: hospital.dutyMapimg,
        dutyName: hospital.dutyName,
        dutyTel1: hospital.dutyTel1,
        dutyTime1c: hospital.dutyTime1c?.toString(),
        dutyTime1s: hospital.dutyTime1s?.toString(),
        dutyTime2c: hospital.dutyTime2c?.toString(),
        dutyTime2s: hospital.dutyTime2s?.toString(),
        dutyTime3c: hospital.dutyTime3c?.toString(),
        dutyTime3s: hospital.dutyTime3s?.toString(),
        dutyTime4c: hospital.dutyTime4c?.toString(),
        dutyTime4s: hospital.dutyTime4s?.toString(),
        dutyTime5c: hospital.dutyTime5c?.toString(),
        dutyTime5s: hospital.dutyTime5s?.toString(),
        dutyTime6c: hospital.dutyTime6c?.toString(),
        dutyTime6s: hospital.dutyTime6s?.toString(),
        dutyTime7c: hospital.dutyTime7c?.toString(),
        dutyTime7s: hospital.dutyTime7s?.toString(),
        dutyTime8c: hospital.dutyTime8c?.toString(),
        dutyTime8s: hospital.dutyTime8s?.toString(),
        wgs84Lat: hospital.wgs84Lat * 1,
        wgs84Lon: hospital.wgs84Lon * 1,
      };
    });
    // console.log(jsonData);
    writeFile('hospital.json', JSON.stringify(jsonData));
  })
  .catch((error) => {
    console.error(error);
  });
