class Circle {
    constructor(radius) {
        this.radius = radius
    }
    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    get diameter() {
        return this.radius * 2
    }

    set circumference(newCircumference) {
        this.radius = newCircumference / (Math.PI * 2)
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }

    get area() {
        return (this.radius ** 2) * Math.PI 
    }


}