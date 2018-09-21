import * as React from 'react';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    shallow,
    mount,
    render
} from 'enzyme';
// import * as sinon from 'sinon';

import Link from './index';

describe('Link 组件测试', () => {

    const component = (<Link to={'https://www.baidu.com'}>百度</Link>);

    it('应该正确渲染', () => {
        expect(shallow(component).contains(<a
            href="https://www.baidu.com">百度</a>)).toBe(true);
    });

    it('可以通过 a 标签选择器找到', () => {
        expect(shallow(component).is('a')).toBe(true);
    });

    it('允许设置属性', () => {
        const wrapper = mount(component);
        expect(wrapper.prop('to')).toEqual('https://www.baidu.com');
        wrapper.setProps({to: 'https://www.google.com'});
        expect(wrapper.prop('to')).toEqual('https://www.google.com');
    });

    it('只有一个 a 标签', () => {
        expect(mount(component).find('a').length).toBe(1);
    });

    it('渲染出静态 HTML，显示文本为 『百度』', () => {
        expect(render(component).text()).toEqual('百度');
    });

    it('渲染出静态 HTML，href 属性应为 "https://www.baidu.com"', () => {
        expect(render(component).attr('href')).toEqual('https://www.baidu.com');
    });
});
