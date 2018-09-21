import * as React from 'react';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {mount} from 'enzyme';
import * as sinon from 'sinon';

import Input from './index';

describe('Input 组件测试', () => {
    it('Input 初始化时调用 componentDidMount 方法', () => {
        sinon.spy(Input.prototype, 'componentDidMount');
        mount(<Input value={''}/>);
        expect(Input.prototype.componentDidMount).toHaveProperty('callCount', 1);
    });

    it('Input 值改变时，会触发 onChange 回调，并携带正确的值', function () {
        const callback = jest.fn();
        const component = (<Input
            value={'a'}
            onChange={callback}
        />);
        const wrapper = mount(component);
        wrapper.find('input').simulate('change');
        expect(callback).toHaveBeenCalled();
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('a');
    });
});
