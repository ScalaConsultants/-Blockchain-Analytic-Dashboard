import {
  convertDateArray,
  convertTimeStamp,
  convertTimeStampToHour,
  getDayTime,
  getSelectedDate,
  selectWhichDayTime
} from './helpers';

describe("Charts helpers", () => {
  it("convertTimeStampToHour should return proper value", () => {
    expect(convertTimeStampToHour(1566983046000)).toEqual(11)
  });

  it("convertTimeStamp should return proper value", () => {
    expect(convertTimeStamp(1566983046000)).toEqual("2019-08-28")
  });

  it("getDayTime should return proper value", () => {
    expect(getDayTime(11)).toEqual("morning")
  });

  it("selectWhichDayTime should return proper value", () => {
    const config = {
      chartType: "transactions",
      label: "Transactions",
      title: "Amount of transactions per day"
    };

    const donutArray = [0, 0, 0, 0];

    const item = {
      source: 123,
      timestamp: 1567156636000,
      block_leve: 617866,
      amount: 1017726,
      counter: 863689,
      destination: 123,
      fee: 1420
    };

    expect(selectWhichDayTime("morning", donutArray, item ,config)).toEqual([1, 0, 0, 0])
  });

  it("convertDateArray should return proper value", () => {
    const dateFrom = "2019-01-01";
    const dateTo = "2019-01-04";

    const result = [
      "2019-01-01",
      "2019-01-02",
      "2019-01-03",
      "2019-01-04"
    ];

    expect(convertDateArray(dateFrom, dateTo)).toEqual(result);
  });

  it("getSelectedDate should return proper value", () => {
    expect(getSelectedDate(7)).toEqual("2019-08-28");
  });
});
