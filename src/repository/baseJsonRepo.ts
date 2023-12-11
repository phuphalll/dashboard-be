import fs from "fs";

let cache = null;

const dataPath = "src/mock/sales.report.json";

const getInstance = () => {
  if (cache === null) {
    cache = fs.readFileSync(dataPath);
    return cache;
  } else {
    return cache;
  }
};
