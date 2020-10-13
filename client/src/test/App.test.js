/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App.jsx';
import { GetProducts } from '../API/GetProducts.js';

configure({ adapter: new Adapter() });

describe('<App />', () => {

  beforeAll(() => {
    global.fetch = jest.fn();
  });
  
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });
  
  afterEach(() => {
    wrapper.unmount();
  })

  it('renders the page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a button with className button-large', () => {
    expect(wrapper.find('.button-large')).toBeDefined;
  });

  it('has a main photo carousel component', () => {
    expect(wrapper.find('PhotoCarousel')).toBeDefined;
  });

  it('has a main jumbotron component', () => {
    expect(wrapper.find('Header')).toBeDefined;
  });

  it('has a style selector component', () => {
    expect(wrapper.find('StyleSlector')).toBeDefined;
  });

  jest.mock('../API/GetProducts.js');
  
  const products = ['']
});

