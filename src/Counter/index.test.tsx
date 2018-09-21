import * as React from 'react';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    mount
} from 'enzyme';

import Counter from './index';

describe('Counter 组件测试', () => {
    it('初始化时，组件 state 为 0；点击 button 按钮后，state 为 1', () => {
        const wrapper = mount(<Counter/>);
        expect(wrapper.state('count')).toEqual(0);
        wrapper.find('button').simulate('click');
        expect(wrapper.state('count')).toEqual(1);
    });

    it('初始化时，组件内 span 文字为 0；点击 button 按钮后，，组件内 span 文字为 1', () => {
        const wrapper = mount(<Counter/>);
        expect(wrapper.find('span').text()).toEqual('0');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('span').text()).toEqual('1');
    });
});
