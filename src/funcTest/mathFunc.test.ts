import {add, div, mul, sub} from './mathFunc';

describe('函数调用测试', () => {

    it('add(4, 5) 返回 9', () => {
        expect(add(4, 5)).toBe(9);
    });

    it('sub(9, 3) 返回 6', () => {
        expect(sub(9, 3)).toBe(6);
    });

    it('mul(2, 3) 返回 6', () => {
        expect(mul(2, 3)).toBe(6);
    });

    it('div(9, 3) 返回 3', () => {
        expect(div(9, 3)).toBe(3);
    });

});
