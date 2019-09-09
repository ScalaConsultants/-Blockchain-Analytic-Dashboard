import React from 'react';
import {shallow} from 'enzyme';
import BarChart from './Bar';

describe('Bar', () => {
  const props = {
    data: 'test'
  };

  it('should base render', () => {
    const wrapper = shallow(<BarChart {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render once', () => {
    const wrapper = shallow(<BarChart {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render component with proper data', () => {
    const wrapper = shallow(<BarChart {...props}/>);
    expect(wrapper.prop('data')).toEqual('test');
  });
});
