import React from 'react';
import { shallow, mount } from 'enzyme';
import LiveChartBubble from './LiveChartBubble';
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

describe('LiveChartBubble', () => {
  const props = {
    transactions: 'test2',
    source: 'test1'
  };

  it('should render', () => {
    const wrapper = shallow(<LiveChartBubble {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render only once', () => {
    const wrapper = shallow(<LiveChartBubble {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render with one Box element', () => {
    const wrapper = shallow(<LiveChartBubble {...props}/>);
    const canvasElement = wrapper.find(Box);
    expect(canvasElement).toHaveLength(1);
  });

  it('should render with one Tooltip element', () => {
    const wrapper = shallow(<LiveChartBubble {...props}/>);
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });

  it('should render with two Typography elements', () => {
    const wrapper = shallow(<LiveChartBubble {...props}/>);
    expect(wrapper.find(Typography)).toHaveLength(2);
  });

  it('should render second Typography element with proper title', () => {
    const wrapper = mount(<LiveChartBubble {...props}/>);
    const typographyElement = wrapper.find(Typography).at(1);

    expect(typographyElement.text()).toEqual('test2');
  });

  it('should render with one Typography element inside Tooltip', () => {
    const wrapper = mount(<LiveChartBubble {...props}/>);
    const tooltipElement = wrapper.find(Tooltip);

    expect(tooltipElement.find(Typography)).toHaveLength(1);
  });

  it('should render Typography element inside Tooltip with proper title', () => {
    const wrapper = mount(<LiveChartBubble {...props}/>);
    const tooltipElement = wrapper.find(Tooltip);

    expect(tooltipElement.find(Typography).text()).toEqual('test1');
  });
});
