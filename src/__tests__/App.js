import React from 'react';
import { render, shallow } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
});

describe('Tests for <App /> component', () => {

  it('should render app with current page home', () => {
    const activePage = "home";
    const wrapper = shallow(<App />);
    expect(wrapper.state().currentPage).toBe(activePage);
  });

})