import Circle from '../Circle';
let defaultRadius;

describe('test Circle class', () => {
    beforeAll(() => {
        defaultRadius = 1;
    });

    it('test Circle constructor', () => {
        const circle = new Circle(defaultRadius);

        expect(circle).toStrictEqual(new Circle(defaultRadius));
        expect(circle.radius).toEqual(defaultRadius);
    });

    it('test set radius', () => {
        const circle = new Circle(defaultRadius);
        const raduis = 2;

        circle.radius = raduis;

        expect(circle.radius).toEqual(raduis);
    })

    it('test getPerimeter', () => {
        const radius = 2;
        const circle = new Circle(radius);

        expect(circle.getPerimeter()).toBeCloseTo(2 * Math.PI * radius);
    })

    it('test getArea', () => {
        const radius = 3;
        const circle = new Circle(radius);

        expect(circle.getArea()).toBeCloseTo(Math.pow(radius ,2) * Math.PI);
    });

    it('test static method getClassDescription', () => {
        const classDescription = "a circle";

        expect(Circle.getClassDescription()).toEqual(classDescription);
    });
});
