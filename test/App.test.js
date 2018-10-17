import React from 'react';
import {shallow} from 'enzyme';
import App from 'src/App';

describe('App', () => {
    it('should render to <div/>', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
    })
})