import { getClickPosition } from "./helpers";

describe("CustomColumnChart helpers", () => {

  const e = {
    pageX: 10,
    pageY: 20
  };

  const canvas = {
    offsetLeft: 5,
    offsetTop: 4
  };

  const result = {
    x: 5,
    y: 16
  };

  it("should return proper value", () => {
    expect(getClickPosition(e, canvas)).toEqual(result)
  });
});
