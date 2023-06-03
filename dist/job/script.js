"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const promises_1 = require("fs/promises");
const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=aQFwyyURxZPboOkpSx1uUEC9mvyECY1ClICrCdzJ9lNT9JZC0oGtU%2BKwiY7dSTrZm3wodyTWqkdltlLRwKFafQ%3D%3D&QD=D002&pageNo=1&numOfRows=3`;
axios_1.default
    .get(url)
    .then((response) => {
    const data = response.data.response.body.items.item;
    (0, promises_1.writeFile)('hospital.json', JSON.stringify(data));
})
    .catch((error) => {
    console.error(error);
});
//# sourceMappingURL=script.js.map