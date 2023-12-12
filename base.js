let hour = document.querySelector('.hourDiv')
let min = document.querySelector('.minDiv')
let sec = document.querySelector('.secDiv')

let tick = function(){
    let currentDate = new Date();

    let getH = currentDate.getHours();
    let getM = currentDate.getMinutes();
    let getS = currentDate.getSeconds();

    hour.textContent = getH
    min.textContent = getM
    sec.textContent = getS
}

setInterval(tick,1000)