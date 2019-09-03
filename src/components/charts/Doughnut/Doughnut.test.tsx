import React from 'react';
import { shallow } from 'enzyme';
import DoughnutChart from './Doughnut';

describe('Doughnut', () => {
  const props = {
    data: 'test'
  };

  it('should base render', () => {
    const wrapper = shallow(<DoughnutChart {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render once', () => {
    const wrapper = shallow(<DoughnutChart {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render component with proper data', () => {
    const wrapper = shallow(<DoughnutChart {...props}/>);
    expect(wrapper.prop('data')).toEqual('test');
  });
});
