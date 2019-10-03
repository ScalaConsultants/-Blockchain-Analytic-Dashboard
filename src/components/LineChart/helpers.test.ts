import {
  convertDateArray,
  convertTimeStamp,
  convertTimeStampToHour,
  getSelectedDate,
} from "./helpers";

describe("Charts helpers", () => {
  it("convertTimeStampToHour should return proper value", () => {
    expect(convertTimeStampToHour(1566983046000)).toEqual(11)
  });

  it("convertTimeStamp should return proper value", () => {
    expect(convertTimeStamp(1566983046000)).toEqual("2019-08-28")
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
    const daysNumber = 9;
    const date = new Date();
    const last = new Date(date.getTime() - (daysNumber * 24 * 60 * 60 * 1000));
    const data = last.toJSON().slice(0,10).replace(/-/g,'-');
    const result =  data.toString();
    expect(getSelectedDate(daysNumber)).toEqual(result);
  });
});
