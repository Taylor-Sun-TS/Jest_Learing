import Circle from '../Circle';
jest.mock('../Circle');
let defaultRadius;

describe('test Circle class', () => {
    beforeAll(() => {
        defaultRadius = 1;
    });

    it('test Circle constructor', () => {
        new Circle(defaultRadius);

        expect(Circle).toHaveBeenCalled();
        expect(Circle).toHaveBeenCalledWith(defaultRadius);
    });

    it('test set radius', () => {
        const circle = new Circle(defaultRadius);
        // not work, because we use auto-mock
        // const spySetter = jest.spyOn(circle, 'radius', 'set');
        // const spyGetter = jest.spyOn(circle, 'radius', 'get');

        const mockRadius = 10;
        Object.defineProperty(circle, "radius", {
            get: jest.fn(() => mockRadius),
            set: jest.fn()
        });

        expect(circle.radius).toEqual(mockRadius);
    })

    it('test getPerimeter', () => {
        const radius = 2;
        const circle = new Circle(radius);
        circle.getPerimeter();

        expect(circle.getPerimeter).toBeCalled();
    })

    it('test getArea', () => {
        const radius = 3;
        const circle = new Circle(radius);
        circle.getArea();

        expect(circle.getArea).toBeCalled();
    });

    it('test static method getClassDescription', () => {
        Circle.getClassDescription();

        expect(Circle.getClassDescription).toBeCalled();
    });
});
