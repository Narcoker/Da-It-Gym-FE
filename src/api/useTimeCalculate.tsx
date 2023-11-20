import dayjs, { Dayjs, UnitTypeShort } from "dayjs";

export const useTimeCalculate = () => {
  const calculateTimeDifference = (
    startDate: Dayjs,
    endDate: Dayjs,
    unit: UnitTypeShort,
  ) => endDate.diff(startDate, unit);

  const timeCalculator = (date: string) => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    const currentUtcTime = dayjs(utc);

    const targetUtcTime = dayjs(date);

    const units: UnitTypeShort[] = ["y", "M", "d", "h", "m", "s"];
    const unitNames = ["년", "달", "일", "시간", "분", "초"];

    for (let i = 0; i < units.length; i++) {
      const diff = calculateTimeDifference(targetUtcTime, currentUtcTime, units[i]);
      if (diff > 0) return `${diff}${unitNames[i]} 전`;
    }
    return "방금";
  };

  return timeCalculator;
};
