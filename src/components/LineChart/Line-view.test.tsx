import React from 'react';
import { shallow } from 'enzyme';
import LineView from './Line-view';

describe('Line', () => {
  const props = {
    data: 'test'
  };

  it('should base render', () => {
    const wrapper = shallow(<LineView {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render once', () => {
    const wrapper = shallow(<LineView {...props}/>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render component with proper data', () => {
    const wrapper = shallow(<LineView {...props}/>);
    expect(wrapper.prop('data')).toEqual('test');
  });
});
