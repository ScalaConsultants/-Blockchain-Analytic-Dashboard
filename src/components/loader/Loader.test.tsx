import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader-container';

describe('Loader', () => {
  it('should render', () => {
    const wrapper = shallow(<Loader isLoading={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render display loader', () => {
    const wrapper = shallow(<Loader isLoading={true} />);
    const loader = wrapper.find('div');
    expect(loader).toHaveLength(1);
  });

  it('should hide loader', () => {
    const wrapper = shallow(<Loader isLoading={false} />);
    const loader = wrapper.find('div');
    expect(loader).toHaveLength(0);
  });
});
