import { TYearlyData } from "@/interfaces/sales.interface";
import fs from "fs";

let cachedData: any = null;
const dataPath = "src/mock/sales.report.json";

const getSalesDataList = (): TYearlyData => {
  if (cachedData === null) {
    cachedData = fs.readFileSync(dataPath);
    return cachedData;
  } else {
    return cachedData;
  }
};

const getAllReport = () => {
  return getSalesDataList();
};

const getReportbyYear = ({
  startYear,
  endYear,
}: {
  startYear: number;
  endYear: number;
}) => {
  const filteredData = getSalesDataList().filter((item) => {
    const year = parseInt(item.year, 10);
    return year >= startYear && year <= endYear;
  });
  return filteredData;
};
export { getAllReport, getReportbyYear };
