// 0~999 -> 0~999

// 1,000 ~ 999,999 -> 1K ~ 999.9K
// 1,000,000 ~ 999,999,999 -> 1M ~ 999.9M

export default function useCounts() {
  const getCountsDecimalOne = (counts: number, unit: number): string => {
    const result = (counts / unit).toString().split(".");
    const integer = result[0];
    const decimal = result[1] ? result[1].slice(0, 1) : "";
    return decimal === "" ? `${integer}` : `${integer}.${decimal}`;
  };

  const reduceCount = (counts: number): string => {
    const KILO = "K";
    const MILLION = "M";

    if (counts >= 1_000_000 && counts <= 999_999_999) {
      const result = getCountsDecimalOne(counts, 1_000_000);
      return `${result}${MILLION}`;
    }
    if (counts >= 1_000 && counts <= 999_999) {
      const result = getCountsDecimalOne(counts, 1_000);
      return `${result}${KILO}`;
    }

    return counts.toString();
  };

  return reduceCount;
}
