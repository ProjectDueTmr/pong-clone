export default class Ball {
    constructor(ballElem){
        this.ballElem = ballElem;
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }
    set x(value){
        this.ballElem.style.setProperty("--x", value)
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }
    set y(value){
        this.ballElem.style.setProperty("--y", value)
    }
    reset(delta){
        this.x = 50;
        this.y = 50;
        this.direction = { x: .75, y: .5 }
        while (true) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
    }
    update(delta){
        this.x = 5;
        this.y = 15
    }
}
