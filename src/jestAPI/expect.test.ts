describe('Expect API', () => {

    it('.toBe() 案例', function () {
        expect(0).toBe(0);
    });

    it('.not() 案例', function () {
        expect(0).not.toBe(1);
    });

    it('.toBeDefined() 案例', function () {
        const i = 0;
        expect(i).toBeDefined();
    });

    it('.toBeFalsy() 案例', function () {
        expect(false).toBeFalsy();
    });

    it('.toBeTruthy() 案例', function () {
        expect(true).toBeTruthy();
    });

    it('.toBeNull() 案例', function () {
        expect(null).toBeNull();
    });

    it('.toEqual() 案例', function () {
        expect({a: 'x', b: 'y', c: 'z'}).toEqual({a: 'x', b: 'y', c: 'z'});
    });

    it('expect.anything() 案例', () => {
        const mock = jest.fn();
        [1].map(x => mock(x));
        expect(mock).toBeCalledWith(expect.anything());
    });

    it('expect.any() 案例', () => {
        const mock = jest.fn();
        [1].map(x => mock(x));
        expect(mock).toBeCalledWith(expect.any(Number));
    });

    it('expect.arrayContaining() 案例', () => {
        expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([1, 2, 3]));
    });

    it('expect.objectContaining() 案例', () => {
        expect({a: 'x', b: 'y', c: 'z'}).toEqual(expect.objectContaining({a: expect.anything()}));
    });

    it('expect.stringContaining() 案例', () => {
        expect('How are you?').toEqual(expect.stringContaining('are'));
    });

    it('expect.stringMatching() 案例', () => {
        expect('How are you?').toEqual(expect.stringMatching(/are/));
    });

    it('expect.toMatch() 案例', () => {
        expect('How are you?').toMatch(/are/);
    });

    it('toHaveLength() 案例', () => {
        expect([1, 2, 3]).toHaveLength(3);
        expect('abc').toHaveLength(3);
    });

    it('toBeGreaterThan() 案例', () => {
        expect(11).toBeGreaterThan(10);
    });

    it('toBeGreaterThanOrEqual() 案例', () => {
        expect(11).toBeGreaterThanOrEqual(10);
    });

    it('toBeLessThan() 案例', () => {
        expect(9).toBeLessThan(10);
    });

    it('toBeLessThan() 案例', () => {
        expect(9).toBeLessThanOrEqual(10);
    });

    // it('toBeLessThan() 案例', () => {
    //     const throwError = () => new Error('c');
    //     expect(throwError).toThrow();
    // });

});
