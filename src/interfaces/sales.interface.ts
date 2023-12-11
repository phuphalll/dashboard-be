interface IDataItem {
  value: string;
  growth: string;
  gap: string;
  margin: string;
  dist: string;
  budget: string[];
}

interface IYearData {
  year: string;
  data: IDataItem[];
}

type TYearlyData = IYearData[];

export type { IDataItem, IYearData, TYearlyData };
