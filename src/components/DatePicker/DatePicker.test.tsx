import React from 'react';
import { shallow, mount } from 'enzyme';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  const props = {
    label: 'test',
    date: new Date(),
    handleDateChange: () => {}
  };

  it('should base render', () => {
    const wrapper = shallow(<DatePicker {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });


  it('should render only one', () => {
    const wrapper = shallow(<DatePicker {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render with proper label', () => {
    const wrapper = mount(<DatePicker {...props}/>);

    const content = wrapper.find('label').text();
    expect(content).toEqual('test');
  });
});
