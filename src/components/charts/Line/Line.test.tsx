import React from "react";
import { shallow } from "enzyme";
import LineChart from "./Line";

describe("Line", () => {
  const props = {
    data: "test"
  };

  it("should base render", () => {
    const wrapper = shallow(<LineChart {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render once", () => {
    const wrapper = shallow(<LineChart {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it("should render component with proper data", () => {
    const wrapper = shallow(<LineChart {...props}/>);
    expect(wrapper.prop("data")).toEqual("test");
  });
});
