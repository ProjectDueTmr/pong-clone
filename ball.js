const INITIAL_VELOCITY = 0.25;

export default class Ball {
    constructor(ballElem){
        this.ballElem = ballElem;
        console.log('hey')
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

    reset(){
        
        this.x = 50;
        this.y = 50;
        this.direction = { x: 0 }
        console.log('before direction')
        while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9 
    ){
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        
        }
        console.log(this.direction)
    }
    
    update(delta){
        this.x = 5
        this.y = 15
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}
