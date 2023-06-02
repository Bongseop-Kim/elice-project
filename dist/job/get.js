"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const promises_1 = require("fs/promises");
const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=aQFwyyURxZPboOkpSx1uUEC9mvyECY1ClICrCdzJ9lNT9JZC0oGtU%2BKwiY7dSTrZm3wodyTWqkdltlLRwKFafQ%3D%3D&QD=D002&pageNo=1&numOfRows=10`;
axios_1.default
    .get(url)
    .then((response) => {
    const hospitals = response.data.response.body.items.item;
    const jsonData = hospitals.map((hospital) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const address = hospital.dutyAddr.split(' ');
        return {
            id: hospital.hpid,
            dutyAddr: hospital.dutyAddr,
            dutyAddr1Depth: address[0],
            dutyAddr2Depth: address[1],
            dutyAddr3Depth: address.slice(2).join(' '),
            dutyEtc: hospital.dutyEtc,
            dutyMapimg: hospital.dutyMapimg,
            dutyName: hospital.dutyName,
            dutyTel1: hospital.dutyTel1,
            dutyTime1c: (_a = hospital.dutyTime1c) === null || _a === void 0 ? void 0 : _a.toString(),
            dutyTime1s: (_b = hospital.dutyTime1s) === null || _b === void 0 ? void 0 : _b.toString(),
            dutyTime2c: (_c = hospital.dutyTime2c) === null || _c === void 0 ? void 0 : _c.toString(),
            dutyTime2s: (_d = hospital.dutyTime2s) === null || _d === void 0 ? void 0 : _d.toString(),
            dutyTime3c: (_e = hospital.dutyTime3c) === null || _e === void 0 ? void 0 : _e.toString(),
            dutyTime3s: (_f = hospital.dutyTime3s) === null || _f === void 0 ? void 0 : _f.toString(),
            dutyTime4c: (_g = hospital.dutyTime4c) === null || _g === void 0 ? void 0 : _g.toString(),
            dutyTime4s: (_h = hospital.dutyTime4s) === null || _h === void 0 ? void 0 : _h.toString(),
            dutyTime5c: (_j = hospital.dutyTime5c) === null || _j === void 0 ? void 0 : _j.toString(),
            dutyTime5s: (_k = hospital.dutyTime5s) === null || _k === void 0 ? void 0 : _k.toString(),
            dutyTime6c: (_l = hospital.dutyTime6c) === null || _l === void 0 ? void 0 : _l.toString(),
            dutyTime6s: (_m = hospital.dutyTime6s) === null || _m === void 0 ? void 0 : _m.toString(),
            dutyTime7c: (_o = hospital.dutyTime7c) === null || _o === void 0 ? void 0 : _o.toString(),
            dutyTime7s: (_p = hospital.dutyTime7s) === null || _p === void 0 ? void 0 : _p.toString(),
            dutyTime8c: (_q = hospital.dutyTime8c) === null || _q === void 0 ? void 0 : _q.toString(),
            dutyTime8s: (_r = hospital.dutyTime8s) === null || _r === void 0 ? void 0 : _r.toString(),
            wgs84Lat: hospital.wgs84Lat * 1,
            wgs84Lon: hospital.wgs84Lon * 1,
        };
    });
    (0, promises_1.writeFile)('hospital.json', JSON.stringify(jsonData));
})
    .catch((error) => {
    console.error(error);
});
//# sourceMappingURL=get.js.map