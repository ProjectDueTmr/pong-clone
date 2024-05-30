import Ball from './ball.js'

const ball = new Ball(document.getElementById('ball'))

let lastTime
function update(time){
    if(lastTime != null){
        const delta = time - lastTime;
        ball.update(delta)
    }

    lastTime = time
    
    window.requestAnimationFrame(update)
    //this allows update() to be called every frame
    
}

window.requestAnimationFrame(update)
