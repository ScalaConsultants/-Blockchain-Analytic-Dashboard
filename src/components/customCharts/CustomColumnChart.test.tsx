import React from "react";
import { shallow } from "enzyme";
import CustomColumnChart from "./CustomColumnChart";
import { Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

describe("CustomColumnChart", () => {
  const props = {
    chartData: {},
    recordSelectCallback: () => {},
    selectedRecordKey: "test",
    width: 1200,
    height: 400,
    barWidth: 30,
    spaceBetweenBars: 1,
    barColor: "rgb(98,156,200)",
    selectedBarColor: "rgb(44,123,200)"
  };

  it("should render", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render only once", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it("should render with one canvas element", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    const canvasElement = wrapper.find("canvas");
    expect(canvasElement).toHaveLength(1);
  });

  it("should render with one Paper element", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    expect(wrapper.find(Paper)).toHaveLength(1);
  });

  it("should render with two IconButton elements", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    expect(wrapper.find(IconButton)).toHaveLength(2);
  });

  it("should render with first IconButton which contains only RemoveIcon", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    const firstButton = wrapper.find(IconButton).at(0);

    expect(firstButton.find(RemoveIcon)).toHaveLength(1);
    expect(firstButton.find(AddIcon)).toHaveLength(0);
  });

  it("should render with first IconButton which contains only AddIcon", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    const firstButton = wrapper.find(IconButton).at(1);

    expect(firstButton.find(AddIcon)).toHaveLength(1);
    expect(firstButton.find(RemoveIcon)).toHaveLength(0);
  });

  it("should render with proper counted zoom", () => {
    const wrapper = shallow(<CustomColumnChart {...props}/>);
    const paperElement = wrapper.find(Paper);
    expect(paperElement.find("span").text()).toEqual("Zoom 1");
  });
});
