import { TYearlyData } from "@/interfaces/sales.interface";
import fs from "fs";

let cachedData: any = null;
const dataPath = "./src/mock/sales.report.json";

const getSalesDataList = (): TYearlyData => {
  if (cachedData === null) {
    const rawData = fs.readFileSync(dataPath, "utf8");
    cachedData = JSON.parse(rawData);
  }
  return cachedData;
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
  const filteredData = getSalesDataList().filter((yearData) => {
    const year = parseInt(yearData.year, 10);
    return year >= startYear && year <= endYear;
  });
  return filteredData;
};
export { getAllReport, getReportbyYear };
