import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {NavLinks} from '.././nav-links';

describe('<NavLinks/>', () => {
  it('should have props for \'loggedIn\', \'type\', and \'logout.\'', () => {
    const wrapper = shallow(<NavLinks loggedIn/>);
    expect(wrapper.props().loggedIn).to.be.defined;
    expect(wrapper.props().type).to.be.defined;
    expect(wrapper.props().logout).to.be.defined;
  });
  it('should have logged in links Home, Dashboard, and Logout.', () => {
    const wrapper = shallow(<NavLinks loggedIn />);
    expect(wrapper.find({label: 'Home'})).to.have.length(1);
    expect(wrapper.find({label: 'Dashboard'})).to.have.length(1);
    expect(wrapper.find({label: 'Logout'})).to.have.length(1);
  });
  it('should not have logged in links Dashboard, and Logout.', () => {
    const wrapper = shallow(<NavLinks loggedIn={false} />);
    expect(wrapper.find({label: 'Dashboard'})).to.have.length(0);
    expect(wrapper.find({label: 'Logout'})).to.have.length(0);
  });
  it('should have logged out links Home, Login, and Sign Up.', () => {
    const wrapper = shallow(<NavLinks loggedIn={false} />);
    expect(wrapper.find({label: 'Home'})).to.have.length(1);
    expect(wrapper.find({label: 'Login'})).to.have.length(1);
    expect(wrapper.find({label: 'Sign Up'})).to.have.length(1);
  });
  it('should not have logged out links Dashboard, and Logout.', () => {
    const wrapper = shallow(<NavLinks loggedIn />);
    expect(wrapper.find({label: 'Login'})).to.have.length(0);
    expect(wrapper.find({label: 'Sign Up'})).to.have.length(0);
  });
});
