import {getData} from './get';

describe('get 模块接口', () => {
    it('应该正确返回3条数据', async () => {
        const response = await getData();
        expect(200).toEqual(response.status);
        const data = response.data;
        expect(0).toEqual(data.code);
        expect(data.result).toHaveLength(3);
    });
});
