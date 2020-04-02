import Circle from '../Circle';

jest.mock('../Circle', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getPerimeter: jest.fn().mockReturnValue(1),
            getArea: jest.fn().mockReturnValue(1)
        };
    });
});
let defaultRadius;

describe('test Circle class -- manually mock', () => {
    beforeAll(() => {
        defaultRadius = 1;
    });

    it('test Circle constructor', () => {
        new Circle(defaultRadius);

        expect(Circle).toHaveBeenCalled();
        expect(Circle).toHaveBeenCalledWith(defaultRadius);
    });

    it('test getPerimeter', () => {
        const radius = 2;
        const circle = new Circle(radius);
        circle.getPerimeter();

        expect(circle.getPerimeter).toBeCalled();
    });

    it('test getPerimeter return', () => {
        const radius = 2;
        const circle = new Circle(radius);

        expect(circle.getPerimeter()).toBeCloseTo(1);
    });

    it('test getArea', () => {
        const radius = 3;
        const circle = new Circle(radius);
        circle.getArea();

        expect(circle.getArea).toBeCalled();
    });

    it('test getArea return', () => {
        const radius = 3;
        const circle = new Circle(radius);

        expect(circle.getArea()).toBeCloseTo(1);
    });
});
