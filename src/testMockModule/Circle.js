class Circle {
    static P = Math.PI;
    #radius  = 0;

    static getClassDescription() {
        return "a circle";
    }

    constructor(r) {
        this.#radius = r;
    }

    set radius(r) {
        this.#radius = r;
    }

    get radius() {
        return this.#radius;
    }

    getPerimeter() {
        return 2 * Circle.P * this.#radius;
    }

    getArea() {
        return  Math.pow(this.#radius, 2) * Math.PI;
    }
}

export default Circle;
