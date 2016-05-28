import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow, mount} from 'enzyme';
import {LinkContainer} from 'react-router-bootstrap';
import Link from 'react-toolbox/lib/link/Link';
import NavLink from '.././nav-link';

describe('<NavLink/>', () => {
  it('should simulate click on link', () => {
    const onLinkClick = sinon.spy();
    const wrapper = shallow(<NavLink to={'/'} onClick={onLinkClick}/>);
    wrapper.find('LinkContainer').simulate('click');
    expect(onLinkClick.calledOnce).to.equal(true);
  });
  it('should have props for \'to\', \'label\', and \'icon.\'', () => {
    const wrapper = shallow(<NavLink to={'/'} label={'Home'} icon={'home'}/>);
    expect(wrapper.props().to).to.be.defined;
    expect(wrapper.props().label).to.be.defined;
    expect(wrapper.props().icon).to.be.defined;
  });
  it('should contain a <LinkContainer/> component', () => {
    const wrapper = mount(<NavLink/>);
    expect(wrapper.find(LinkContainer)).to.have.length(1);
  });
  it('should contain a <Link/> component', () => {
    const wrapper = mount(<NavLink/>);
    expect(wrapper.find(Link)).to.have.length(1);
  });
});
